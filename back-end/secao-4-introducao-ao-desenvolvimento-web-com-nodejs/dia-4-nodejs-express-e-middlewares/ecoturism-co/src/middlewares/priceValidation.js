const priceValidation = (req, resp, next) => {
  const { price } = req.body;

  if (!price) {
    return resp.status(400).json({ "message": "O campo price é obrigatório" });
  } else if (isNaN(price)) {
    return resp.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" })
  };

  next();
  
};

module.exports ={
  priceValidation
}