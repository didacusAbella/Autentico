class ResponseFactory {
  /**
   * Create a json response with a specific http code
   * @param {Response} res Express Response Object
   * @param {Number} code HTTP Status Code
   * @param {Object} messageType A message to send
   */
  static createResponse(res, code, messageType){
    res.status(code).json(messageType);
  }

  static createSuccessResponse(res, messageType){
    return this.createResponse(res, 200, messageType);
  }

  static createInternalServerResponse(res, messageType){
    console.error(messageType);
    return this.createResponse(res, 500, { errors: 'Errore Interno riprova più tardi'});
  }
}

module.exports = ResponseFactory;