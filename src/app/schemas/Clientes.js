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
        nascimento: {
            type: Date,
            required: false,
        },
        sexo: {
            type: String,
            required: true,
        },
        pet: { type: String, required: true },
        status: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
        telefone: {
            type: String,
            required: false,
        },
        outro: {
            type: String,
            required: false,
        },
        rua: {
            type: String,
            required: true,
        },
        numero: {
            type: Number,
            required: true,
        },
        bairro: {
            type: String,
            required: true,
        },
        cidade: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Clientes", ClienteSchema);
