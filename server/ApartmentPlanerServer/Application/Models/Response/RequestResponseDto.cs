using Application.Models.Requests;

namespace Application.Models.Response
{
    public class RequestResponseDto
    {
        public int Id { get; set; }
        public DesignerResponseDto User { get; set; }
        public FurnitureResponseDto Furniture { get; set; }
        public ICollection<StatusLineResponseDto> StatusLines { get; set; }
    }
}
