import ClienteService from "../Services/ClienteService";

class ClienteController {
    salvar(req, res) {
        return ClienteService.save(req, res);
    }

    findById(req, res) {
        return ClienteService.findById(req, res);
    }

    delete(req, res) {
        return ClienteService.deleteById(req, res);
    }

    findAll(req, res) {
        return ClienteService.findAll(req, res);
    }
}

export default new ClienteController();
