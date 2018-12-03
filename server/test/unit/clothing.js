/**Require all the necessary to test the app */
const chai = require('chai');
const chai_http = require('chai-http');
const app = require("../../server");
let Clothing = require('../../api/clothing/controller');

/*Setup some objects */
const expect = chai.expect;
chai.use(chai_http);

/*Create test suite */
describe('Describe Clothing API', function(){
  this.timeout(5000);
  it('It should return all clothings', function(){
    return chai.request(app)
    .get('/clothings')
    .then(function(res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('array');
    });
  });
}); 


/*Create test suite */
describe('id Clothing ', function(){
  this.timeout(5000);
  it('return id of the clothing', function(){
    return chai.request(app)
    .get('/clothings')
    .then(function(res){
     Clothing.findClothingById("A005");
       
    });
  });
}); 

