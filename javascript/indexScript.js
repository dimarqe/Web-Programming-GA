var allPersons = [];

function addNew() {
    if (!document.getElementById("firstName").value) {
        alert("Please provide your first name!");
        return false;
    }
    if (!document.getElementById("middleInitial").value) {
        alert("Please provide your middle initial!");
        return false;
    }
    if (!document.getElementById("lastName").value) {
        alert("Please provide your last name!");
        return false;
    }
    if (!document.getElementById("dob").value) {
        alert("Please provide your Date of Birth!");
        return false;
    }
    if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
        alert("Please select a gender!");
        return false;
    }
    if (!document.getElementById("bodyTypes").value) {
        alert("Please select a body type!");
        return false;
    }
    if (!document.getElementById("job").value) {
        alert("Please provide your occupation!");
        return false;
    }
    if (!document.getElementById("height").value) {
        alert("Please provide your height!");
        return false;
    }

    let newPerson = {
        firstName: document.getElementById("firstName"),
        middleInitial: document.getElementById("middleInitial"),
        lastName: document.getElementById("lastName"),
        dob: document.getElementById("dob"),
        gender: document.querySelector('input[name="gender"]:checked').value,
        bodyType: document.getElementById("bodyTypes").value,
        occupation: document.getElementById("job"),
        height: document.getElementById("height")
    }

    allPersons.push(newPerson);
    showAll();

    return false;
}

function showAll() {
    for(var i=0; i < allPersons.length; i++){
        console.log(allPersons[i]);
    }
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
        if (allowedTypes.includes(bodyTypeOption[i].value)) {
            bodyTypeOption[i].disabled = false;
        }
        else {
            bodyTypeOption[i].disabled = true;
        }
    }

    document.getElementById("bodyTypes").value = null;
}

function calculateAge() {
    var dob = document.getElementById("dob").value;
    var currentDate = Date.getTime();

}