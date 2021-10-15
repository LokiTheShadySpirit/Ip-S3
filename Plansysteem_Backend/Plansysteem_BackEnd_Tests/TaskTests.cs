using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using Plansysteem_BackEnd_Tests.TestDal;
using Plansysteem_BackEnd_Logic.ClassFactories;
using Plansysteem_BackEnd_Logic;
using Plansysteem_BackEnd_DalInterfaces.Dtos;
using Plansysteem_BackEnd_LogicInterfaces.Models;

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

        [Theory]
        [MemberData(nameof(createTaskData))]
        public void CreateTaskHappyFlow(string taskname)
        {
            //Arrange
            InstanceNewDalsAndFactories();
            _taskContainer = new TaskContainer(_taskFactory, _taskDal);
            TaskModel testModel = new TaskModel
            {
                TaskName = taskname
            };

            //Act
            _taskContainer.CreateNewTask(testModel);

            //Assert
            Assert.Equal(1, _taskDal.TaskDtos.Count);
            Assert.Equal(taskname, _taskDal.TaskDtos.ElementAt(0).TaskName);
        }

        private void InstanceNewDalsAndFactories()
        {
            _taskDal = new TestTaskDal();

            _taskFactory = new TaskFactory();
        }

        public static IEnumerable<object[]> createTaskData
        {
            get
            {
                return new List<object[]>
                {
                    new object[]
                    {
                        "Say hello to Mum"
                    }
                };
            }
        }
    }
}
