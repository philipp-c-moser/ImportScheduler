using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ImportScheduler.Core;
using ImportScheduler.Core.Repository;
using ImportScheduler.Core.Domain.CsvImport;
using ImportScheduler.Core.Dto.CsvImport;




namespace ImportScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;


        public UsersController(IUnitOfWork unitOfWork, IUserRepository userRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _userRepository = userRepository;
            _mapper = mapper;
        }



        public async Task<IActionResult> GetUsers()
        {
            var allUsers = await _userRepository.GetAllAsync();
            var result = _mapper.Map<List<User>, List<UserDto>>(allUsers);

            return Ok(result);
        }


    }
}