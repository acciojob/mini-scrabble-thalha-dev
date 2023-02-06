let input = document.querySelector("#evaluatedText");
let output = document.querySelector("#ltterCount");

function handleInputChange() {
    let value = input.value;
    let count = value.length;
    output.innerHTML = count;
}
