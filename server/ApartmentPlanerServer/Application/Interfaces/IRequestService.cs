using Application.Models.Requests;
using Application.Models.Response;

namespace Application.Interfaces
{
    public interface IRequestService
    {
        public void SetRequest(RequestRequestDto genreDto);
        public ICollection<RequestResponseDto> GetAllRequests();
        public RequestResponseDto GetRequestById(Guid id);
        public void UpdateRequest(Guid id, RequestRequestDto requestDto);
    }
}
