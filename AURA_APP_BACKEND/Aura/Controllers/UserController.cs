using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aura.Models.UserModels;
using Aura.Repositories.UserRepositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Aura.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserRepository _userRepository;

        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("GetUsers")]
        public ActionResult<List<User>> Get() =>
            _userRepository.Get();

        //[HttpGet("{id}", Name = "GetUser")]
        //public ActionResult<User> Get(string id)
        //{
        //    var user = _userRepository.Get(id);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return user;
        //}


        [HttpPost("CreateUser")]
        public ActionResult<User> Create(User user)
        {
            _userRepository.Create(user);
            return NotFound();
        }

    }
}
