using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Aura.Models.ItemModels.ItemsDetailViews
{
    public class ShirtDetailView : ItemBasicView
    {
        public string Fabric { get; set; }
        public string Collar { get; set; }
        public string Sleeve { get; set; }
        public string Length { get; set; }
        public string Occasion { get; set; }
        public string Care { get; set; }
    }
}
