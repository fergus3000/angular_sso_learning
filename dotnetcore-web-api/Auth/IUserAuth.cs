using SampleApp.WebAPI.AuthModels;

namespace SampleApp.WebAPI.Auth
{
    public interface IUserAuth
    {
        Task<(bool IsAuthorized, TokenResponseModel Token)> AuthorizeGoogleUser(string userEmail);
    }
}
