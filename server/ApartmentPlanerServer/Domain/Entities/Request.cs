namespace Domain.Entities
{
    public class Request
    {
        public Request()
        {
            Statuses = new HashSet<Status>();
            RequestStatusLines = new HashSet<RequestStatusLine>();
        }

        public int Id { get; set; }
        public int FurnitureId { get; set; }
        public Furniture Furniture { get; set; }
        public ICollection<Status> Statuses { get; set; }
        public ICollection<RequestStatusLine> RequestStatusLines { get; set; }
    }
}
