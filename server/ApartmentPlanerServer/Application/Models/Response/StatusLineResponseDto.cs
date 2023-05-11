namespace Application.Models.Response
{
    public class StatusLineResponseDto
    {
        public int Id { get; set; }
        public string Commentary { get; set; }
        public DateTime Date { get; set; }
        public StatusResponseDto Status { get; set; }
    }
}
