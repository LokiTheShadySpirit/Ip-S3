using System;
using System.Collections.Generic;
using System.Text;

namespace Plansysteem_BackEnd_Logic.ClassFactories
{
    public class TaskFactory
    {

        public Task MakeNewTask(int taskid, string taskname)
        {
            return new Task(taskid, taskname);
        }
    }
}
