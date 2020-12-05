var translateButton = document.querySelector("#translate");
var inputBox = document.querySelector("#inputTxt");
var outputBox = document.querySelector("#outputTxt");

function errorHandler(error){
    console.log("Error: "+error);
    alert("OOPS! Something went wrong. For more information on error check console");
}

function getRequest(input){
    var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var req = url+"?text="+input;
    console.log(req);
    return req;
}

translateButton.addEventListener("click",function getJsonResponseFromApi(){
    var input = inputBox.value;
    var request = getRequest(input);
    fetch(request).then(response => response.json()).then(jsonData => outputBox.innerText = jsonData.contents.translated).catch(errorHandler);
});