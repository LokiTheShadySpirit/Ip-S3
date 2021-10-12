using System;
using System.Collections.Generic;
using Xunit;
using Plansysteem_BackEnd_Tests.TestDal;
using Plansysteem_BackEnd_Logic.ClassFactories;
using Plansysteem_BackEnd_Logic;
using Plansysteem_BackEnd_DalInterfaces.Dtos;

namespace Plansysteem_BackEnd_Tests
{
    public class TaskTests
    {
        private TestTaskDal _taskDal;

        private TaskFactory _taskFactory;

        private TaskContainer _taskContainer;


        [Fact]
        public void TestReadAllTests()
        {
            //Arange
            InstanceNewDalsAndFactories();
            List<TaskDto> testdtos = new List<TaskDto>
            {
                new TaskDto
                {
                    TaskId = 1,
                    TaskName = "Go to the doctor"
                },

                new TaskDto
                {
                    TaskId = 2,
                    TaskName = "Get new Medicine"
                }
            };
            _taskDal = new TestTaskDal(testdtos);
            _taskContainer = new TaskContainer(_taskFactory, _taskDal);

            //Act
            _taskContainer.ReadAllTasks();

            //Assert
            Assert.Equal(2, _taskContainer.AllTasks.Count);

        }

        private void InstanceNewDalsAndFactories()
        {
            _taskDal = new TestTaskDal();

            _taskFactory = new TaskFactory();
        }
    }
}
