let fs = require("fs");
let path = require("path");

class Upload {
  static saveImage(data) {
    let imageName = `${data.id}.png`;
    let decodedImage = data.img.replace(/^data:image\/png;base64,/, "");
    fs.writeFile(path.resolve(__dirname, "..", "ext", "images", imageName), decodedImage, 'base64', function (error) {
      console.log(error);
    });
    data.img = imageName;
  }
}


module.exports = Upload;