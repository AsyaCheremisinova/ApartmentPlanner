using Application.Models.Response;

namespace Application.Models.Requests
{
    public class FurnitureResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductLink { get; set; }
        public float Height { get; set; }
        public float Width { get; set; }
        public float Depth { get; set; }
        public int ImageId { get; set; }
        public int SourceFileId { get; set; }
        public CategoryResponseDto Category { get; set; }
        public FileResponseDto Image { get; set; }
        public FileResponseDto SourceFile { get; set; }
    }
}
