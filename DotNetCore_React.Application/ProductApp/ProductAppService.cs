using System;
using System.Collections.Generic;
using DotNetCore_React.Application.ProductApp.Dtos;
using DotNetCore_React.Domain.IRepositories;
using AutoMapper;
using DotNetCore_React.Domain.Entities;
using DotNetCore_React.Application.ProductApp;
using System.Linq;


namespace DotNetCore_React.Application.ProductApp
{
    public class ProductAppService : IProductAppService
    {
        private readonly IProductRepository _repository;
        private readonly IProduct_LanRepository _repository_lan;
        private readonly IProduct_ImageRepository _repository_image;

        public ProductAppService(IProductRepository repository, IProduct_LanRepository repository_lan, IProduct_ImageRepository repository_image)
        {
            _repository = repository;
            _repository_lan = repository_lan;
            _repository_image = repository_image;
        }

        public Dictionary<string, object> Create(ProductDto News)
        {
            var myJson_Return = new Dictionary<string, object>()
            {
                {"success",false },
                {"message",null  }
            };


            //�D��
            var date = DateTime.Now;
            var roleDB = Mapper.Map<Product>(News);
            roleDB.CreateUser = News.CreateUser;
            roleDB.CreateDate = date;
            roleDB.UpdateDate = date;
            _repository.Insert(roleDB);
            var aSuccess = _repository.Save() > 0;
            //�ƪ�
            if (aSuccess)
            {
                //�y����
                var a_DB_List = new List<Product_Lan>();
                foreach (var item in News.LanList)
                {
                    var aa = Mapper.Map<Product_Lan>(item);
                    aa.ProductId = roleDB.Id;
                    a_DB_List.Add(aa);
                    var aaa = _repository_lan.Insert(aa);
                }
                var bSuccess = _repository_lan.Save() == News.LanList.Count;

                //�Ϫ�
                var b_DB_List = new List<Product_Image>();
                foreach (var item in News.listImage)
                {
                    var aa = Mapper.Map<Product_Image>(item);
                    aa.ProductId = roleDB.Id;
                    b_DB_List.Add(aa);
                    var aaa = _repository_image.Insert(aa);
                }

                var cSuccess = _repository_image.Save() == News.listImage.Count;

                if (bSuccess && cSuccess)
                {
                    myJson_Return["success"] = true;
                    myJson_Return["message"] = "";
                }
                else
                {
                    //�����ѴN�����R��
                    //�R���D��
                    _repository.Delete(roleDB);
                    _repository.Save();

                    //�R���ƪ�
                    //�R���y����
                    _repository_lan.DeleteRange(a_DB_List);
                    _repository_lan.Save();


                    //�R���Ϫ�
                    _repository_image.DeleteRange(b_DB_List);
                    _repository_image.Save();

                    myJson_Return["success"] = false;
                    myJson_Return["message"] = "����";
                }

            }

            return myJson_Return;
        }

        public Dictionary<string, object> Delete(string id)
        {
            var myJson = new Dictionary<string, object>()
            {
                {"success",false },
                {"message",null  }
            };


            //�ഫGuid
            Guid guid;
            Guid.TryParse(id, out guid);

            //�R���y����
            //var news_LanList = _repository_lan.GetAllList(c => c.LocationId == guid);
            //_repository_lan.DeleteRange(news_LanList);
            //var news_lan_effect = _repository_lan.Save() == news_LanList.Count;


            //�R���Ϫ�
            //var news_ImageList = _repository_image.GetAllList(c => c.LocationId == guid);
            //_repository_image.DeleteRange(news_ImageList);
            //var news_image_effect = _repository_image.Save() == news_LanList.Count;

            //�R���D��
            _repository.Delete(guid);
            var news_effect = _repository.Save() > 0;

            var success_effect = news_effect;
            myJson["success"] = success_effect;
            myJson["message"] = success_effect ? "�R�����\" : "�R������";

            return myJson;
        }

        public List<ProductDto> GetAll()
        {
            var a = _repository.GetAllList();
            var newsDtoList = Mapper.Map<List<ProductDto>>(a);

            //���l��
            //�Ϫ�
            foreach (var item in newsDtoList)
            {
                //�������
                var new_img_List = _repository_image.GetAllList(c => c.ProductId == item.Id);
                item.listImage = Mapper.Map<List<Product_ImageDto>>(new_img_List);

                //�������
                var new_lans_List = _repository_lan.GetAllList(c => c.ProductId == item.Id);
                //��title
                if (new_lans_List != null && new_lans_List.Count > 0)
                {
                    item.Title = new_lans_List.Select(o => o.Title).FirstOrDefault();
                }

            }

            //�y����

            return newsDtoList;
        }

        public ProductDto GetSingle(string id)
        {
            //�ഫGuid
            Guid guid;
            Guid.TryParse(id, out guid);
            //����D��
            var a = _repository.Get(guid);
            var newsDto = Mapper.Map<ProductDto>(a);
            //�������
            //�y��
            var new_lans_List = _repository_lan.GetAllList(c => c.ProductId == a.Id);
            newsDto.LanList = Mapper.Map<List<Product_LanDto>>(new_lans_List);
            //�Ϫ�
            var new_image_List = _repository_image.GetAllList(c => c.ProductId == a.Id);
            newsDto.listImage = Mapper.Map<List<Product_ImageDto>>(new_image_List);
            return newsDto;
        }

        public Dictionary<string, object> Update(ProductDto News)
        {
            var myJson = new Dictionary<string, object>()
            {
                {"success",false },
                {"message",null  }
            };

            //��s�D��
            var newsDB = _repository.Get(News.Id);
            newsDB = Mapper.Map<ProductDto, Product>(News, newsDB);

            newsDB.UpdateDate = DateTime.Now;
            _repository.Update(newsDB);
            var news_effect = _repository.Save() > 0;

            //��s�ƪ�

            //��s�y�t��
            foreach (var item in News.LanList)
            {
                var getLandata = _repository_lan.FirstOrDefault(o => o.ProductId == newsDB.Id && o.LanguageId == item.LanguageId && o.Id == item.Id);
                getLandata = Mapper.Map<Product_LanDto, Product_Lan>(item, getLandata, opt => opt.AfterMap((dto, dest) => { dest.ProductId = newsDB.Id; }));
                getLandata.ProductId = newsDB.Id;
                _repository_lan.InsertOrUpdate(getLandata);
            }
            var news_lan_effect = _repository_lan.Save() == News.LanList.Count;

            //��s�Ϫ�
            //�����������g
            var new_image_List = _repository_image.GetAllList(c => c.ProductId == newsDB.Id);
            _repository_image.DeleteRange(new_image_List);
            _repository_image.Save();

            foreach (var item in News.listImage)
            {
                var aa = Mapper.Map<Product_Image>(item);
                aa.ProductId = newsDB.Id;
                _repository_image.InsertOrUpdate(aa);
            }

            var news_image_effect = _repository_image.Save() == News.listImage.Count;


            var success_effect = news_lan_effect && news_effect && news_image_effect;
            myJson["success"] = success_effect;
            myJson["message"] = success_effect ? "��s���\" : "��s����";

            return myJson;
        }
    }
};