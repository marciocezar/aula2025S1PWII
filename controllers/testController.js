
exports.testeGet = async (req, res) => {
    try {
        const result = "Teste Get Ok.";
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};
exports.validarGet = async (req, res) => {
    try {
        const result = "Valor GET OK.";
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};

exports.testePost = async (req, res) => {
    try {
        const result = "Teste Post OK.";
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};
exports.validarPost = async (req, res) => {
    try {
        const result = "Validar Post OK...";
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};