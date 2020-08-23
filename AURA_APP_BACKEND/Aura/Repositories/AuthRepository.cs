using Aura.Database;
using Aura.Helpers;
using Aura.Models.UserModels;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aura.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly IMongoCollection<User> _users;
        public AuthRepository(IAuraDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<User>(settings.UserCollectionName);
        }
        public async Task<User> Login(string username, string password)
        {
            var user = await _users.Find<User>(x => x.UserName == username).FirstOrDefaultAsync();

            if (user == null)
            {
                return null;
            }

            if (!JsonWebTokenHelper.VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }
            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            JsonWebTokenHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _users.InsertOneAsync(user);

            return user;
        }

        

        public async Task<bool> UserExists(string username)
        {
            var user =await _users.Find<User>(x => x.UserName == username).FirstOrDefaultAsync();
            return user != null;
        }
    }
}
