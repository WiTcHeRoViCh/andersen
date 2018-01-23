function getDateFromConsistently(){
  var date = [];
  requestTo("http://www.json-generator.com/api/json/get/cevhxOsZnS").then((result) => {
    date.push(JSON.parse(result));
    return requestTo("http://www.json-generator.com/api/json/get/cguaPsRxAi");
  })
  .then((result) => {
    date.push(JSON.parse(result));
    return requestTo("http://www.json-generator.com/api/json/get/cfDZdmxnDm");
  })
  .then((result) => {
    date.push(JSON.parse(result));
    return requestTo("http://www.json-generator.com/api/json/get/cfkrfOjrfS");
  })
  .then((result) => {
    date.push(JSON.parse(result));
    return requestTo("http://www.json-generator.com/api/json/get/ceQMMKpidK");
  })
  .then((result) => {
    date.push(JSON.parse(result));
    console.log(date);
  })
}

function getDateFromParallel(){
    Promise.all([requestTo("http://www.json-generator.com/api/json/get/cevhxOsZnS"), requestTo("http://www.json-generator.com/api/json/get/cguaPsRxAi"), requestTo("http://www.json-generator.com/api/json/get/cfDZdmxnDm"), requestTo("http://www.json-generator.com/api/json/get/cfkrfOjrfS"), requestTo("http://www.json-generator.com/api/json/get/cfkrfOjrfS"), requestTo("http://www.json-generator.com/api/json/get/ceQMMKpidK")])
    .then((result) => {
      console.log(result);
    })
}

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
