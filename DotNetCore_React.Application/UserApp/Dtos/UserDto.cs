﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetCore_React.Application.UserApp.Dtos
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }

        public string RoleId { get; set; }

        public string RoleId_Chinese { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }



        public int Status { get; set; }

        public DateTime CreateDate { get; set; }
        public string CreateUser { get; set; }

        public DateTime UpdateDate { get; set; }

        public string UpdateUser { get; set; }


        public int FailedCount { get; set; }


        public bool ChangedPassword { get; set; }


        public string PasswordHash { get; set; }
    }
}
