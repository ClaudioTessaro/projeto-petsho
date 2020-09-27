import mongoose from "mongoose";

const ProdutosSchema = new mongoose.Schema(
    {
        nome: {
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

export default mongoose.model("Produtos", ProdutosSchema);
