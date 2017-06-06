using System;
using System.Collections.Generic;

namespace OrionHRMS2.Models
{
    public partial class City
    {
        public int CityId { get; set; }
        public string CityName { get; set; }
        public int CountryId { get; set; }

        public virtual Country Country { get; set; }
    }
}
