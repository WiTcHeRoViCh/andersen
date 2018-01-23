var urls = ["http://www.json-generator.com/api/json/get/cevhxOsZnS", "http://www.json-generator.com/api/json/get/cguaPsRxAi", "http://www.json-generator.com/api/json/get/cfDZdmxnDm", "http://www.json-generator.com/api/json/get/cfkrfOjrfS", "http://www.json-generator.com/api/json/get/ceQMMKpidK"];

function getDateFromConsistently(urls){
  var date = [];

  for (var i = 0; i < urls.length; i++){
    date.push(requestTo(urls[i])
      .then((result) => {
        return result;
      })
    )
  }
  return console.log(date);
}

function getDateFromParallel(){
    Promise.all([requestTo("http://www.json-generator.com/api/json/get/cevhxOsZnS"), requestTo("http://www.json-generator.com/api/json/get/cguaPsRxAi"), requestTo("http://www.json-generator.com/api/json/get/cfDZdmxnDm"), requestTo("http://www.json-generator.com/api/json/get/cfkrfOjrfS"), requestTo("http://www.json-generator.com/api/json/get/cfkrfOjrfS"), requestTo("http://www.json-generator.com/api/json/get/ceQMMKpidK")])
    .then((result) => {
      console.log(result);
    })
}

function requestTo(url){
  "use strict";
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      return new Error(error);
    });
}
