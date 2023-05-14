using Application.Models.Requests;
using Application.Models.Response;

namespace Application.Interfaces
{
    public interface IRequestService
    {
        public int SetRequestAndGetItsId(CreateRequestRequestDto genreDto);
        public ICollection<RequestResponseDto> GetAllRequests();
        public void UpdateRequestStatus(int id, RequestStatusLineRequestDto requestDto);
        public void UpdateRequest(int id, string message, CreateRequestRequestDto requestDto);
        public void DeleteRequest(int id);
    }
}
