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

        public T GetEntity<T>(int id) where T : Entity
        {
            try
            {
                return _dbContext.Find<T>(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T AddEntity<T>(T entity) where T : Entity
        {
            _dbContext.Add<T>(entity);
            _dbContext.SaveChanges();
            var result = GetEntity<T>(entity.Id);
            return result;
        }

        public void UpdateEntity<T>(T entity) where T : Entity
        {
            _dbContext.Update<T>(entity);
            _dbContext.SaveChanges();
        }

        public void DeleteEntity<T>(int id) where T : Entity
        {
            var entity = GetEntity<T>(id);
            _dbContext.Remove<T>(entity);
            _dbContext.SaveChanges();
        }
    }
}
