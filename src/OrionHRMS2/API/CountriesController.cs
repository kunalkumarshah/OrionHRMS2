using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrionHRMS2.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OrionHRMS2.API
{
    [Route("api/[controller]")]
    public class CountriesController : Controller
    {
        Repository _repository = Repository.Instance;

        // GET: api/values
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            return _repository.GetAllCountries();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var country = _repository.GetEntity<Country>(id);
            if (country != null)
                return new ObjectResult(country);
            else
                return new NotFoundResult();
            
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Country country)
        {
            if (country.Id.Equals(string.Empty))
            {
                return new ObjectResult(_repository.AddEntity<Country>(country));
            }
            else
            {
                var existingOne = _repository.GetEntity<Country>(country.Id);
                existingOne.CountryName = country.CountryName;
                _repository.UpdateEntity<Country>(existingOne);
                return new ObjectResult(existingOne);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody]Country country)
        {
            var existingOne = _repository.GetEntity<Country>(country.Id);
            existingOne.CountryName = country.CountryName;
            _repository.UpdateEntity<Country>(existingOne);
            return new ObjectResult(existingOne);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repository.DeleteEntity<Country>(id);
            return new StatusCodeResult(200);
        }
    }
}
