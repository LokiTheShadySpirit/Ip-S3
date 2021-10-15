using System;

namespace Plansysteem_BackEnd_Logic
{
    public class Task
    {
        public int? TaskId { get; private set; }
        public string TaskName { get; private set; }

        public Task(int? taskid, string taskname)
        {
            TaskId = taskid;
            TaskName = taskname;
        }
    }
}
