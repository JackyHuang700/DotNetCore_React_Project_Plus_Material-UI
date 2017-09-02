﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;


/// 
using DotNetCore_React.Application;
using DotNetCore_React.Domain.IRepositories;
using Microsoft.EntityFrameworkCore;
using DotNetCore_React.EntityFrameworkCore;
using DotNetCore_React.EntityFrameworkCore.Repositories;
using DotNetCore_React.EntityFrameworkCore.Seeds;
using DotNetCore_React.Application.RoleApp;
using DotNetCore_React.Application.UserApp;
using DotNetCore_React.Application.ComSystemApp;
using DotNetCore_React.Application.NewsApp;
using DotNetCore_React.Application.News_LanApp;
using DotNetCore_React.Application.Sys_LanguageApp;
using DotNetCore_React.Utility.Services;
using DotNetCore_React.Utility;
using DotNetCore_React.Application.Product_CategoryApp;
using DotNetCore_React.Application.ProductApp;
using DotNetCore_React.Application.LocationApp;
using DotNetCore_React.Application.ContactUsApp;
using DotNetCore_React.Application.AboutUsApp;

namespace DotNetCore_React
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            //初始化映射關系
            DotNetCore_ReactMapper.Initialize();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //獲取數據庫連接字符串
            var sqlConnectionString = Configuration.GetConnectionString("DefaultConnection");

            //添加數據上下文
            services.AddDbContext<DotNetCore_ReactDBContext>(options => options.UseSqlServer(sqlConnectionString));

            services.AddScoped<IRoleRepository, RoleRepository>();
            services.AddScoped<IRoleAppService, RoleAppService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserAppService, UserAppService>();
            services.AddScoped<IComSystemRepository, ComSystemRepository>();
            services.AddScoped<IComSystemAppAppService, ComSystemAppAppService>();

            services.AddScoped<INewsRepository, NewsRepository>();
            services.AddScoped<INewsAppService, NewsAppService>();
            services.AddScoped<INews_LanRepository, News_LanRepository>();
            services.AddScoped<INews_LanAppService, News_LanAppService>();

            services.AddScoped<IProduct_CategoryRepository, Product_CategoryRepository>();
            services.AddScoped<IProduct_Category_LanRepository, Product_Category_LanRepository>();
            services.AddScoped<IProduct_CategoryService, Product_CategoryService>();

            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IProduct_LanRepository, Product_LanRepository>();
            services.AddScoped<IProduct_ImageRepository, Product_ImageRepository>();
            services.AddScoped<IProductAppService, ProductAppService>();


            services.AddScoped<ILocationRepository, LocationRepository>();
            services.AddScoped<ILocation_LanRepository, Location_LanRepository>();
            services.AddScoped<ILocation_ImageRepository, Location_ImageRepository>();
            services.AddScoped<ILocationAppService, LocationAppService>();

            services.AddScoped<IContactUsRepository, ContactUsRepository>();
            services.AddScoped<IContactUs_CategoryRepository, ContactUs_CategoryRepository>();
            services.AddScoped<IContactUsAppService, ContactUsAppService>();


            services.AddScoped<IAboutUsRepository, AboutUsRepository>();
            services.AddScoped<IAboutUs_LanRepository, AboutUs_LanRepository>();
            services.AddScoped<IAboutUs_CategoryRepository, AboutUs_CategoryRepository>();
            services.AddScoped<IAboutUsAppService, AboutUsAppService>();

            services.AddScoped<ISys_LanguageRepository, Sys_LanguageRepository>();
            services.AddScoped<ISys_LanguageAppService, Sys_LanguageAppService>();

            services.AddTransient<IMailServices, LocalMailServices>();

            // Add framework services.
            services.AddMvc();

            //Session服務
            services.AddSession();

            // Adds services required for using options.
            services.AddOptions();

            // Add our Config object so it can be injected
            services.Configure<GlobalConfig>(Configuration.GetSection("AppConfiguration"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, DotNetCore_ReactDBContext dbContext)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
                //Seed Data
                new SeedConfiguration(dbContext).Seed();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //使用靜態文件
            app.UseStaticFiles();

            //Session
            app.UseSession();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
