using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrionHRMS2.Models
{
    public class Entity
    {
        public virtual int Id { get; set; }
        public virtual int? ParentId { get; set; }
    }
}
