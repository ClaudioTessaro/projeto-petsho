import mongoose from "mongoose";

const ServicoSchema = new mongoose.Schema(
    {
        tipo: {
            type: String,
            required: true,
        },
        preco: {
            type: Number,
            required: true,
        },
        descricao: {
            type: String,
            required: false,
        },
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Clientes",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Servico", ServicoSchema);
