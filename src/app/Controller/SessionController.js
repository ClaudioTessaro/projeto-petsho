import SessionService from "../Services/SessionService";

class SessionController {
    registrar(req, res) {
        return SessionService.save(req, res);
    }
}

export default new SessionController();
