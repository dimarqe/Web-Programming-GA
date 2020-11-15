function addNew() {

}

function changeBodyTypes() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var bodyTypeOption = document.getElementById("bodyTypes").getElementsByTagName("option");
    var allowedTypes = [];

    if (gender == "male") {
        allowedTypes = ["oval", "triangle", "rectangle", "rhomboid", "inverted triangle"];
    }
    else {
        allowedTypes = ["apple", "pear", "pencil", "hourglass", "round"]
    }
    
    for (var i = 0; i < bodyTypeOption.length; i++) {
        if(allowedTypes.includes(bodyTypeOption[i].value)){
            bodyTypeOption[i].disabled = false;
        }
        else{
            bodyTypeOption[i].disabled = true;
        }
    }

    document.getElementById("bodyTypes").value = null;
}