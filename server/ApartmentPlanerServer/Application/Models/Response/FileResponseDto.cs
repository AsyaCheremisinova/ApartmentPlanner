﻿namespace Application.Models.Requests
{
    public class FileResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public byte[] Data { get; set; }
    }
}
