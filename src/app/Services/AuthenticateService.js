import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Usuarios from "../schemas/Usuario";
import authConfig from "../../config/auth";

class AuthenticateService {
    async autenticar(req, res) {
        try {
            const { email, password } = req.body;

            const user = await Usuarios.findOne({ email }).select("+password");

            if (!user) {
                return res.status(400).send({ error: "Usuario não existe" });
            }

            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(400).send({ error: "Senha invalida" });
            }
            user.password = undefined;

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400,
            });
            return res.status(200).json({ user, token });
        } catch (err) {
            return res.status(400).json({ message: "Usuario não cadastrado" });
        }
    }
}

export default new AuthenticateService();
