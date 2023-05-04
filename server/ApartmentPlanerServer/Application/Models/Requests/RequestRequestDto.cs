namespace Application.Models.Requests
{
    public class CreateRequestRequestDto
    {
        public FurnitureRequestDto Furniture { get; set; }
        public RequestStatusLineRequestDto RequestStatusLine { get; set; }
    }
}
