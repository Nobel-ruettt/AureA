using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Aura.Models.ItemModels.ItemsDetailViews
{
    public class SareeDetailView : ItemBasicView
    {
        public string Fabric { get; set; }
        public string Aanchal { get; set; }
        public string Border { get; set; }
        public string Blouse_Piece{ get; set; }
        public string Occasion { get; set; }
        public string Care { get; set; }
}
}
