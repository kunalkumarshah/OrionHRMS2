using System;
using System.Collections.Generic;

namespace OrionHRMS2.Models
{
    public partial class StateOrProvince
    {
        public int StateOrProvinceId { get; set; }
        public string StateOrProvinceName { get; set; }
        public int CountryId { get; set; }

        public virtual Country Country { get; set; }
    }
}
