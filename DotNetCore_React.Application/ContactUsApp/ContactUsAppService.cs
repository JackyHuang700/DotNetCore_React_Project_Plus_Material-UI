using System;
using System.Collections.Generic;
using DotNetCore_React.Application.LocationApp.Dtos;
using DotNetCore_React.Domain.IRepositories;
using AutoMapper;
using DotNetCore_React.Domain.Entities;
using DotNetCore_React.Application.ProductApp;
using System.Linq;
using DotNetCore_React.Application.ContactUsApp.Dtos;

namespace DotNetCore_React.Application.ContactUsApp
{
    public class ContactUsAppService : IContactUsAppService
    {
        private readonly IContactUsRepository _repository;
        private readonly IContactUs_CategoryRepository _repository_category;


        public ContactUsAppService(IContactUsRepository repository, IContactUs_CategoryRepository repository_category)
        {
            _repository = repository;
            _repository_category = repository_category;
        }

        //���ݭn��@
        public Dictionary<string, object> Create(ContactUsDto News)
        {
            var myJson_Return = new Dictionary<string, object>()
            {
                {"success",false },
                {"message",null  }
            };


            //�D��
            //var date = DateTime.Now;
            //var roleDB = Mapper.Map<ContactUs>(News);
            //roleDB.CreateDate = date;
            //roleDB.UpdateDate = date;
            //_repository.Insert(roleDB);
            //var aSuccess = _repository.Save() > 0;

            //myJson_Return["success"] = aSuccess;
            //myJson_Return["message"] = aSuccess ? "���\" : "����";

            return myJson_Return;
        }

        //���ݭn��@
        public Dictionary<string, object> Delete(string id)
        {
            var myJson = new Dictionary<string, object>()
            {
                {"success",false },
                {"message",null  }
            };


            ////�ഫGuid
            //Guid guid;
            //Guid.TryParse(id, out guid);

            //�R���y����
            //var news_LanList = _repository_lan.GetAllList(c => c.LocationId == guid);
            //_repository_lan.DeleteRange(news_LanList);
            //var news_lan_effect = _repository_lan.Save() == news_LanList.Count;


            //�R���Ϫ�
            //var news_ImageList = _repository_image.GetAllList(c => c.LocationId == guid);
            //_repository_image.DeleteRange(news_ImageList);
            //var news_image_effect = _repository_image.Save() == news_LanList.Count;

            //�R���D��
            //_repository.Delete(guid);
            //var news_effect = _repository.Save() > 0;

            //var success_effect = news_effect;
            //myJson["success"] = success_effect;
            //myJson["message"] = success_effect ? "�R�����\" : "�R������";

            return myJson;
        }

        public List<ContactUsDto> GetAll()
        {
            var a = _repository.GetAllList();
            var newsDtoList = Mapper.Map<List<ContactUsDto>>(a);

            return newsDtoList;
        }

        public ContactUsDto GetSingle(string id)
        {
            //�ഫGuid
            Guid guid;
            Guid.TryParse(id, out guid);
            //����D��
            var a = _repository.Get(guid);
            var newsDto = Mapper.Map<ContactUsDto>(a);

            return newsDto;
        }

        public Dictionary<string, object> Update(ContactUsDto News)
        {
            //11.6.1	���A�u��קאּ�L���^��(2)�A�w�^�и򥼦^�г��O�t�ΧP�_
            var myJson = new Dictionary<string, object>()
            {
                {"success",false },
                {"message",null  }
            };

            //��s�D��
            var newsDB = _repository.Get(News.Id);
            newsDB = Mapper.Map<ContactUsDto, ContactUs>(News, newsDB);

            newsDB.UpdateDate = DateTime.Now;
            _repository.Update(newsDB);
            var news_effect = _repository.Save() > 0;

            var success_effect = news_effect;
            myJson["success"] = success_effect;
            myJson["message"] = success_effect ? "��s���\" : "��s����";

            return myJson;
        }
    }
}