var translateButton = document.querySelector("#translate");
translateButton.addEventListener("click",function getInput(){
    var input = document.querySelector("#inputTxt").value;

});
function getJsonResponseFromApi(input){
    var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var argument = "?text="+"test";
    var request = url+argument;
    fetch(request);
}