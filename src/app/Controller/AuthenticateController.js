import AuthenticateService from "../Services/AuthenticateService";

class AuthenticateController {
    autenticar(req, res) {
        return AuthenticateService.autenticar(req, res);
    }
}

export default new AuthenticateController();
