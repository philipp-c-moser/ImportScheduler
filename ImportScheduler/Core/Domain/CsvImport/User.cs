using System;
namespace ImportScheduler.Core.Domain.CsvImport
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public char Gender { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
    }
}
