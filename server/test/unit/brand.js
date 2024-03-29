/**Require all the necessary to test the app */
const chai = require('chai');
const chai_http = require('chai-http');
const app = require("../../server");
/*Setup some objects */
const expect = chai.expect;
chai.use(chai_http);

/*Create test suite */
describe('Describe Brand API', function(){
  this.timeout(5000);
  it('It should return all brands', function(){
    return chai.request(app)
    .get('/brands')
    .then(function(res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('array');
    });
  });
});