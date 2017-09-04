using Microsoft.AspNetCore.Mvc;
using Appreciation.Server.DTOs;
using System.Diagnostics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Appreciation.Server.Controllers
{
    [Route("api/[controller]")]
    public class AppreciateController : Controller
    {
        //// GET: api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/values
        [HttpPost]
        public ActionResult Post(AppreciateDto appreciation)
        {
            Debug.WriteLine("{0} was sent the message\n{1}", appreciation.TargetUser, appreciation.Message);
            return Ok(appreciation);
        }

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
