using System;
using System.Collections.Generic;
using System.Text;
using Plansysteem_BackEnd_DalInterfaces.Interfaces;
using Plansysteem_BackEnd_Logic.ClassConverters;
using Plansysteem_BackEnd_Logic.ClassFactories;
using Plansysteem_BackEnd_LogicInterfaces;
using Plansysteem_BackEnd_LogicInterfaces.Models;

namespace Plansysteem_BackEnd_Logic
{
    public class TaskContainer : ITaskContainer
    {
        private List<Task> _allTasks;
        
        private Task _activeTask;

        public IReadOnlyCollection<Task> AllTasks => _allTasks;

        private readonly TaskFactory _taskFactory;
        private readonly ITaskDal _taskDal;

        public TaskContainer(TaskFactory taskfactory, ITaskDal taskdal)
        {
            _taskFactory = taskfactory;
            _taskDal = taskdal;
            _allTasks = new List<Task>();
        }
        public List<TaskModel> ReadAllTasks()
        { 
            _allTasks = TaskConverter.ConvertTaskDtoList(_taskDal.ReadAllTasks(), _taskFactory);

            return TaskConverter.MakeTaskModelList(_allTasks);
        }

        public void CreateNewTask(TaskModel newtask)
        {
            _taskDal.CreateTask(TaskConverter.MakeDtoFromModel(newtask));
        }
    }
}
