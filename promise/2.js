function requestTo(url){
  "use strict";
  return new Promise( (resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response)
      }
      else {
        reject(new Error("Error"))
      };
    }

    xhr.onerror = function (){
      reject("Error");
    }

    xhr.send();
  })
}

"use strict";
requestTo("http://www.json-generator.com/api/json/get/cfQCylRjuG")
  .then( (result) => {
    if (JSON.parse(result).getUsersData === true){
      return requestTo("http://www.json-generator.com/api/json/get/cfVGucaXPC");
    }
  }).then((result) => {
    console.log(JSON.parse(result));
  });
