using System;
using System.Collections.Generic;
using DotNetCore_React.Application.ContactUsApp.Dtos;

namespace DotNetCore_React.Application.ContactUsApp
{
    public interface IContactUsAppService
    {
        //�ھڱb������v��
        List<ContactUsDto> GetAll();

        ContactUsDto GetSingle(string id);


        //��s�ϥΪ̸��
        Dictionary<string, object> Update(ContactUsDto News);


        Dictionary<string, object> Create(ContactUsDto News);

        Dictionary<string, object> Delete(string id);
    }
}