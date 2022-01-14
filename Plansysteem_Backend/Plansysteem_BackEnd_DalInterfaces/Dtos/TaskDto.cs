using System;
using System.Collections.Generic;
using System.Text;

namespace Plansysteem_BackEnd_DalInterfaces.Dtos
{
    public class TaskDto
    {
        public int? TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime DueDate { get; set; } 
    }
}
