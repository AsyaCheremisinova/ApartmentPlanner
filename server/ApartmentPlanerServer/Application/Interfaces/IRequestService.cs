using Application.Models.Requests;
using Application.Models.Response;

namespace Application.Interfaces
{
    public interface IRequestService
    {
        public void SetRequest(CreateRequestRequestDto genreDto);
        public ICollection<RequestResponseDto> GetAllRequests();
        public void UpdateRequestStatus(int id, RequestStatusLineRequestDto requestDto);
    }
}
