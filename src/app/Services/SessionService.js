import Usuarios from "../schemas/Usuario";

class SessionService {
    async save(req, res) {
        try {
            await Usuarios.create(req.body);
            return res.status(200).json(`Login criado com sucesso!`);
        } catch (err) {
            return res.status(400).json({ message: "Usuario não cadastrado" });
        }
    }
}

export default new SessionService();
