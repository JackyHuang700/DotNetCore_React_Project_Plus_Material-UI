using System;
using System.Collections.Generic;
using DotNetCore_React.Application.News_LanApp.Dtos;
using DotNetCore_React.Domain.IRepositories;
using AutoMapper;
using DotNetCore_React.Domain.Entities;

namespace DotNetCore_React.Application.News_LanApp
{
    public class News_LanAppService : INews_LanAppService
    {
        private readonly INews_LanAppService _repository;


        public News_LanAppService(INews_LanAppService repository)
        {
            _repository = repository;
        }

        public List<News_LanDto> GetAll()
        {
            var a = _repository.GetAll();
            return Mapper.Map<List<News_LanDto>>(a);
        }
        public News_LanDto GetSingle(string id)
        {
           
            var a = _repository.GetSingle(id);
            return Mapper.Map<News_LanDto>(a);
        }

        public Dictionary<string, object> Create(News_LanDto role)
        {
            var myJson = new Dictionary<string, object>();

            var dateTime = DateTime.Now;
            var roleDB = new Role() {
                Id= Guid.NewGuid(),
                CreateDate = dateTime,
                UpdateDate = dateTime,
            };

            //�x�s���

            myJson.Add("success", true);
            myJson.Add("message", "");
            return myJson;
        }

        public Dictionary<string, object> Update(News_LanDto role)
        {
            var myJson = new Dictionary<string, object>();
            //�x�s���

            myJson.Add("success", true);
            myJson.Add("message", "");
            return myJson;
        }

        public Dictionary<string, object> Delete(string id)
        {
            var myJson = new Dictionary<string, object>();

            //�ഫGuid

            //�R�����
            //var a = _repository
            //�B�znull���p
            Guid guid;
            Guid.TryParse(id, out guid);
            myJson.Add("success", true);
            myJson.Add("message", "");
            return myJson;
        }
    }
}