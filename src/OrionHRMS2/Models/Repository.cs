using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace OrionHRMS2.Models
{
    public class Repository
    {
        private static readonly Repository _instance = new Repository();

        OrionHRMS2Context _dbContext;
        private Repository()
        {
            _dbContext = new OrionHRMS2Context();
        }

        public static Repository Instance
        {
            get
            {
                return _instance;
            }
        }

        public IList<Country> GetAllCountries()
        {
            try
            {
                var countries = _dbContext.DicCountry.Include(x => x.Region).ToList();                
                return countries;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
