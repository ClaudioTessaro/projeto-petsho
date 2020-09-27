import Clientes from "../schemas/Clientes";

class ClienteService {
    async save(req, res) {
        const cliente = await Clientes.create(req.body);
        return res.status(200).json(`${cliente.nome} inserido com sucesso!`);
    }

    async findById(req, res) {
        const cliente = await Clientes.findById(req.params.id);
        return res.status(200).json(cliente);
    }

    async deleteById(req, res) {
        const cliente = await Clientes.findByIdAndDelete(req.params.id);
        return res.status(200).json(`${cliente.nome} deletado com sucesso!`);
    }

    async findAll(req, res) {
        const cliente = await Clientes.find({});
        return res.status(200).json(cliente);
    }
}

export default new ClienteService();
