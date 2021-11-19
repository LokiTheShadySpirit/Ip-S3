using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Plansysteem_BackEnd_DalInterfaces.Dtos;

namespace Plansysteem_BackEnd_DalInterfaces.Interfaces
{
    public interface ITaskDal
    {
        public List<TaskDto> ReadAllTasks();
        public TaskDto ReadTask(int taskid);
        public void CreateTask(TaskDto newtask);
    }
}
