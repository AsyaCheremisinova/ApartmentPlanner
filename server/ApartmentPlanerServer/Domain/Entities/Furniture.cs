namespace Domain.Entities
{
    public class Furniture
    {
        public bool IsReady { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductLink { get; set; }
        public float Height { get; set; }
        public float Width { get; set; }
        public float Depth { get; set; }
        public int ImageId { get; set; }
        public int SourceFileId { get; set; }
        public Category Category { get; set; }
        public File Image { get; set; }
        public File SourceFile { get; set; }
    }
}
