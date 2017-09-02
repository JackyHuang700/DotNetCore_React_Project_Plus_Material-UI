using System;
using System.Collections.Generic;
using DotNetCore_React.Application.ProductApp.Dtos;

namespace DotNetCore_React.Application.ProductApp
{
    public interface IProductAppService
    {
        //�ھڱb������v��
        List<ProductDto> GetAll();

        ProductDto GetSingle(string id);


        //��s�ϥΪ̸��
        Dictionary<string, object> Update(ProductDto News);


        Dictionary<string, object> Create(ProductDto News);

        Dictionary<string, object> Delete(string id);
    }
}