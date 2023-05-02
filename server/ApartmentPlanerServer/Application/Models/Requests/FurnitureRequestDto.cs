namespace Application.Models.Requests
{
    public class FurnitureRequestDto
    {
        public string Name { get; set; }
        public string ProductLink { get; set; }
        public int CategoryId { get; set; }
        public float Height { get; set; }
        public float Width { get; set; }
        public float Depth { get; set; }
        public FileRequestDto Image { get; set; }
        public FileRequestDto SourceFile { get; set; }
    }
}
