using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImportScheduler.Core.Dto.CsvImport
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public char Gender { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
    }
}
