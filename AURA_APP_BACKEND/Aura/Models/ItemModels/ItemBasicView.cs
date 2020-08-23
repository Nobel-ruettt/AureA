using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aura.Models.ItemModels
{
    public class ItemBasicView
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string type { get; set; }
        public string photoUrl { get; set; }
        public string Name { get; set; }
        public int price { get; set; }
    }
}
