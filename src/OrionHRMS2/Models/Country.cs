using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace OrionHRMS2.Models
{
    public partial class Country : Entity
    {
        public Country()
        {
            DicCity = new HashSet<City>();
            DicLocation = new HashSet<Location>();
            DicStateOrProvince = new HashSet<StateOrProvince>();
        }

        public string CountryName { get; set; }
        public int RegionId { get; set; }

        [JsonIgnore]
        public virtual ICollection<City> DicCity { get; set; }
        [JsonIgnore]
        public virtual ICollection<Location> DicLocation { get; set; }
        [JsonIgnore]
        public virtual ICollection<StateOrProvince> DicStateOrProvince { get; set; }
        public virtual Region Region { get; set; }
    }
}
