using System;
using System.Collections.Generic;
using System.Text;
using Plansysteem_BackEnd_LogicInterfaces.Models;

namespace Plansysteem_BackEnd_LogicInterfaces
{
    public interface ITaskContainer
    {
        public List<TaskModel> ReadAllTasks();
        public void CreateNewTask(TaskModel newtask);
    }
}
