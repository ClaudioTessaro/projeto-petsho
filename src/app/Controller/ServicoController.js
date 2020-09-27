import ServicoService from "../Services/ServicoService";

class ServicoController {
    salvar(req, res) {
        return ServicoService.save(req, res);
    }

    findById(req, res) {
        return ServicoService.findById(req, res);
    }

    delete(req, res) {
        return ServicoService.deleteById(req, res);
    }

    findAll(req, res) {
        return ServicoService.findAll(req, res);
    }
}

export default new ServicoController();
