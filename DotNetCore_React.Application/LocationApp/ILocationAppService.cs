using System;
using System.Collections.Generic;
using DotNetCore_React.Application.LocationApp.Dtos;
using Microsoft.AspNetCore.Http;

namespace DotNetCore_React.Application.LocationApp
{
    public interface ILocationAppService
    {
        //�ھڱb������v��
        List<LocationDto> GetAll();

        LocationDto GetSingle(string id);


        //��s�ϥΪ̸��
        Dictionary<string, object> Update(LocationDto News);


        Dictionary<string, object> Create(LocationDto News);

        Dictionary<string, object> Delete(string id);
    }
}