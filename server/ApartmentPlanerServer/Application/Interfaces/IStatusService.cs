using Application.Models.Requests;
using Application.Models.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IStatusService
    {
        public void SetRequest(RequestRequestDto genreDto);
        public List<RequestResponseDto> GetAllRequests();
        public RequestResponseDto GetRequestById(Guid id);
        public void UpdateRequest(Guid id, RequestRequestDto requestDto);
    }
}
