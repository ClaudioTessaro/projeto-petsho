import ProdutoService from "../Services/ProdutoService";

class ProdutoController {
    salvar(req, res) {
        return ProdutoService.save(req, res);
    }

    findById(req, res) {
        return ProdutoService.findById(req, res);
    }

    delete(req, res) {
        return ProdutoService.deleteById(req, res);
    }

    findAll(req, res) {
        return ProdutoService.findAll(req, res);
    }
}

export default new ProdutoController();
