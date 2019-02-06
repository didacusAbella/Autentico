let fs = require("fs");
let path = require("path");

class Upload {
  static saveImage(data) {
    let imageName = `${data.id}.png`;
    fs.writeFile(path.resolve(__dirname, "..", "ext", "images", imageName), data.img, 'base64', function (error) {
      console.log(error);
    });
    data.img = imageName;
  }
}


module.exports = Upload;