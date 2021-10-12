using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Plansysteem_BackEnd_LogicInterfaces;
using Plansysteem_BackEnd_LogicInterfaces.Models;

namespace Plansysteem_BackEnd_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ITaskContainer _taskContainer;

        public TaskController(IConfiguration configuration, ITaskContainer taskContainer)
        {
            _configuration = configuration;
            _taskContainer = taskContainer;
        }

        [Route("/")]
        [HttpGet]
        public JsonResult GetAll()
        {
            return new JsonResult(_taskContainer.ReadAllTasks());
        }
    }
}
