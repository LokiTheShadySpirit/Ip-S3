using System;
using MySql.Data.MySqlClient;

namespace Plansysteem_BackEnd_DAL
{
    public static class DbAcces
    {
        public static MySqlConnection Conn = new MySqlConnection()
        {
            ConnectionString = "Server=localhost;Uid=root;Pwd=root;Database=plansystem; SSL Mode=None"
        };
    }
}
