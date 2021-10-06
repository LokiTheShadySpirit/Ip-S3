using System.Collections.Generic;
using System.Linq;
using Plansysteem_BackEnd_DalInterfaces.Dtos;
using Plansysteem_BackEnd_Logic.ClassFactories;
using Plansysteem_BackEnd_LogicInterfaces.Models;

namespace Plansysteem_BackEnd_Logic.ClassConverters
{
    public static class TaskConverter
    {
        public static List<Task> ConvertTaskDtoList(List<TaskDto> taskdtos, TaskFactory taskfactory)
        {
            return taskdtos.Select(dto => ConvertTaskDto(dto, taskfactory)).ToList();
        }
        public static Task ConvertTaskDto(TaskDto taskdto, TaskFactory taskfactory)
        {
            return taskfactory.MakeNewTask(taskdto.TaskId, taskdto.TaskName);
        }

        public static List<TaskModel> MakeTaskModelList(List<Task> tasks)
        {
            return tasks.Select(MakeTaskModel).ToList();
        }

        public static TaskModel MakeTaskModel(Task task)
        {
            return new TaskModel
            {
                TaskId = task.TaskId,
                TaskName = task.TaskName
            };
        }
    }
}
