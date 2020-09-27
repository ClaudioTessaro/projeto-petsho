import Produtos from "../schemas/ProdutosSchema";

class ProdutoService {
    async save(req, res) {
        const produto = await Produtos.create(req.body);
        return res.status(200).json(`${produto.nome} inserido com sucesso!`);
    }

    async findById(req, res) {
        const produto = await Produtos.findById(req.params.id);
        return res.status(200).json(produto);
    }

    async deleteById(req, res) {
        const produto = await Produtos.findByIdAndDelete(req.params.id);
        return res.status(200).json(`${produto.nome} deletado com sucesso!`);
    }

    async findAll(req, res) {
        const produto = await Produtos.find({});
        return res.status(200).json(produto);
    }
}

export default new ProdutoService();
