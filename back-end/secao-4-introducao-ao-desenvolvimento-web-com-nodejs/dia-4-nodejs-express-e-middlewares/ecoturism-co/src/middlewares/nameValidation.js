const validateName = (req, resp, next) => {
  const { name } = req.body;

  if (!name) {
    return resp.status(400).json({ "message": "O campo name é obrigatório" });
  } else if (name.length < 4) {
    return resp.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }

  next();

};

module.exports = {
  validateName
};