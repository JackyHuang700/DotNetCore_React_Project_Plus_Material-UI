using System;
using System.Collections.Generic;
using DotNetCore_React.Application.AboutUsApp.Dtos;

namespace DotNetCore_React.Application.AboutUsApp
{
    public interface IAboutUsAppService
    {
        //�ھڱb������v��
        List<AboutUsDto> GetAll();

        List<AboutUs_CategoryDto> GetAll_Category();


        AboutUsDto GetSingle(string id);


        //��s�ϥΪ̸��
        Dictionary<string, object> Update(AboutUsDto News);


        Dictionary<string, object> Create(AboutUsDto News);

        Dictionary<string, object> Delete(string id);
    }
}