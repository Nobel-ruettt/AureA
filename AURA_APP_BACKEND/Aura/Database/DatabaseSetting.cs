using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aura.Database
{
    public class AuraDatabaseSettings : IAuraDatabaseSettings
    {
        public string UserCollectionName { get; set; }
        public string ItemBasicViewCollectionName { get; set; }
        public string PunjabiCollectionName { get; set; }
        public string SareeCollectionName { get; set; }
        public string ShirtCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IAuraDatabaseSettings
    {
        string UserCollectionName { get; set; }
        string ItemBasicViewCollectionName { get; set; }
        string PunjabiCollectionName { get; set; }
        string SareeCollectionName { get; set; }
        string ShirtCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
