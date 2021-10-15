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
    [Route("[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskContainer _taskContainer;

        public TaskController(ITaskContainer taskContainer)
        {
            _taskContainer = taskContainer;
        }

        [Route("TaskOverview")]
        [HttpGet]
        public JsonResult GetAll()
        {
            return new JsonResult(_taskContainer.ReadAllTasks());
        }
    }
}
