using System;
using System.Collections.Generic;

namespace OrionHRMS2.Models
{
    public partial class Location
    {
        public int LocationId { get; set; }
        public string Address { get; set; }
        public int PostalCode { get; set; }
        public int CityId { get; set; }
        public int StateOrProvinceId { get; set; }
        public int CountryId { get; set; }

        public virtual Country Country { get; set; }
    }
}
