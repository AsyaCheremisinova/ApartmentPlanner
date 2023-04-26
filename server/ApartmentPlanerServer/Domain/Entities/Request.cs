namespace Domain.Entities
{
    public class Request
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public float Height { get; set; }
        public float Width { get; set; }
        public float Depth { get; set; }
        public string? Material { get; set; }
        public string? Manufacturer { get; set; }
        public string? Link { get; set; }
        public string? Image { get; set; }
        public Status Status { get; set; }

    }
}
