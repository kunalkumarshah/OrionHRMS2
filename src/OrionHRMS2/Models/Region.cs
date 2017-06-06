using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace OrionHRMS2.Models
{
    public partial class Region
    {
        public Region()
        {
            DicCountry = new HashSet<Country>();
        }
        
        public int RegionId { get; set; }
        public string RegionName { get; set; }

        [JsonIgnore]
        public virtual ICollection<Country> DicCountry { get; set; }
    }
}
