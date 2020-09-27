import Servicos from "../schemas/ServicoSchema";

class ServicoService {
    async save(req, res) {
        const servico = await Servicos.create(req.body);
        return res
            .status(200)
            .json(`Tipo ${servico.tipo} de serviço inserido com sucesso!`);
    }

    async findById(req, res) {
        const servico = await Servicos.findById(req.params.id);
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
