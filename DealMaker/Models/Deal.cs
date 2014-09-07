//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DealMaker.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Deal
    {
        public int DealId { get; set; }
        public string Merchantid { get; set; }
        public int DealType { get; set; }
        public string DealValidityFrom { get; set; }
        public string DealValidateTo { get; set; }
        public Nullable<int> Days { get; set; }
        public Nullable<bool> IsPercentage { get; set; }
        public Nullable<double> Value { get; set; }
        public Nullable<bool> IsActive { get; set; }
    
        public virtual Cred Cred { get; set; }
    }
}