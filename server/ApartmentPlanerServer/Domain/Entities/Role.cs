﻿namespace Domain.Entities
{
    public class Role
    {
        public Role()
        {
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
