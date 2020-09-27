import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        cpf: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Clientes", ClienteSchema);
