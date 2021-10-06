using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using Plansysteem_BackEnd_DalInterfaces.Interfaces;
using Plansysteem_BackEnd_DalInterfaces.Dtos;

namespace Plansysteem_BackEnd_DAL.DatabaseClasses
{
    public class TaskDatabaseClass : ITaskDal
    {
        private readonly MySqlConnection _conn = DbAcces.Conn;

        public List<TaskDto> ReadAllTasks()
        {
            List<TaskDto> allTasks = new List<TaskDto>();

            using (_conn)
            {
                _conn.Open();
                using(MySqlCommand command = new MySqlCommand("SELECT * FROM `task`", _conn))
                {
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            allTasks.Add(new TaskDto
                            {
                                TaskId = Convert.ToInt32(reader["TaskId"]),
                                TaskName = Convert.ToString(reader["TaskName"])
                            });
                        }
                    }
                }
                _conn.Close();
            }
            return allTasks;
        }
    }
}
