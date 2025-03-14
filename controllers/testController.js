
exports.teste = async (req, res) => {
    try {
        const result = "Teste com Sucesso.";
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};