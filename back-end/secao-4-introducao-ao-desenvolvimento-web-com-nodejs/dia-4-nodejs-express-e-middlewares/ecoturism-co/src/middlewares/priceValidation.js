const priceValidation = (req, resp, next) => {
  const { price } = req.body;

  if (price === undefined) {
    return resp.status(400).json({ "message": "O campo price é obrigatório" });
  }
  if (isNaN(price)) {
    return resp.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" })
  };

  next();
  
};
//teste
module.exports ={
  priceValidation
}