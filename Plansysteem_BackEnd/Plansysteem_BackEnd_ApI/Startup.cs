using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Plansysteem_BackEnd_DAL.DatabaseClasses;
using Plansysteem_BackEnd_DalInterfaces.Interfaces;
using Plansysteem_BackEnd_Logic;
using Plansysteem_BackEnd_Logic.ClassFactories;
using Plansysteem_BackEnd_LogicInterfaces;
using TaskFactory = Plansysteem_BackEnd_Logic.ClassFactories.TaskFactory;

namespace Plansysteem_BackEnd_Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();

            //interface to Data
            services.AddSingleton<ITaskDal, TaskDatabaseClass>();

            //interface to Factory
            services.AddSingleton<TaskFactory, TaskFactory>();

            //interface to Logic
            services.AddSingleton<ITaskContainer, TaskContainer>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });
        }
    }
}
