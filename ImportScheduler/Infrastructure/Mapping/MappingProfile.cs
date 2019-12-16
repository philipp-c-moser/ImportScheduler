using AutoMapper;
using ImportScheduler.Core.Domain.CsvImport;
using ImportScheduler.Core.Dto.CsvImport;

namespace ImportScheduler.Infrastructure.Mapping
{
    public class MappingProfile : Profile
    {

        public MappingProfile()
        {
            CreateMap<User, UserDto>();
        }       


    }
}
