﻿namespace Application.Models.Response
{
    public class UserResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public int RoleId { get; set; }
        public string Token { get; set; }
    }
}
