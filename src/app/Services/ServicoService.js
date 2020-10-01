import Servicos from "../schemas/ServicoSchema";
import Clientes from "../schemas/Clientes";

class ServicoService {
    async save(req, res) {
        const { pet, descricao, preco, tipo } = req.body;
        const { id } = await Clientes.findOne({ pet });
        const cliente = id;
        const servico = await Servicos.create({
            descricao,
            preco,
            tipo,
            cliente,
        });
        return res
            .status(200)
            .json(`Tipo ${servico.tipo} de serviço inserido com sucesso!`);
    }

    async findById(req, res) {
        const { id } = req.params;
        const servico = await Servicos.find({ cliente: id });
        return res.status(200).json(servico);
    }

    async deleteById(req, res) {
        const servico = await Servicos.findByIdAndDelete(req.params.id);
        return res
            .status(200)
            .json(`Tipo ${servico.tipo} de serviço deletado com sucesso!`);
    }

    async findAll(req, res) {
        const servico = await Servicos.find({});
        return res.status(200).json(servico);
    }
}

export default new ServicoService();
