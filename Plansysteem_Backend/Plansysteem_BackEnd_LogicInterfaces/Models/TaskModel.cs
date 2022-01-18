using System;
using System.Collections.Generic;
using System.Text;

namespace Plansysteem_BackEnd_LogicInterfaces.Models
{
    public class TaskModel
    {
        public int? TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? DueDate { get; set; }
    }
}
