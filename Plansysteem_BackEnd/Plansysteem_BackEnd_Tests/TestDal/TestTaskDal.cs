using System;
using System.Collections.Generic;
using System.Text;
using Plansysteem_BackEnd_DalInterfaces.Interfaces;
using Plansysteem_BackEnd_DalInterfaces.Dtos;

namespace Plansysteem_BackEnd_Tests.TestDal
{
    public class TestTaskDal : ITaskDal
    {
        private readonly List<TaskDto> _taskDtos;
        private int _nextid;

        public IReadOnlyCollection<TaskDto> TaskDtos => _taskDtos;

        public TestTaskDal()
        {
            _taskDtos = new List<TaskDto>();
            _nextid = 1;
        }

        public TestTaskDal(List<TaskDto>dtos)
        {
            _taskDtos = dtos;
            _nextid = dtos.Count + 1;
        }


        public List<TaskDto> ReadAllTasks()
        {
            return _taskDtos;
        }
    }
}
