using System;
using System.Collections.Generic;
using System.Text;
using Plansysteem_BackEnd_DalInterfaces.Dtos;

namespace Plansysteem_BackEnd_DalInterfaces.Interfaces
{
    public interface ITaskDal
    {
        public List<TaskDto> ReadAllTasks();
        public void CreateTask(TaskDto newtask);
    }
}
