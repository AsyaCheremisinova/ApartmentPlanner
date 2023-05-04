namespace Domain.Entities
{
    public class RequestStatusLine
    {
        public int Id { get; set; }
        public string Commentary { get; set; }
        public DateTime Date { get; set; }
        public Status Status { get; set; }
        public Request Request { get; set; }
    }
}
