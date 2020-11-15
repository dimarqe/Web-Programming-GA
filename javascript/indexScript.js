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
    if (!document.getElementById("height").value || document.getElementById("height").value > 200 || document.getElementById("height").value < 170) {
        alert("Please provide your height!");
        return false;
    }

    let newPerson = {
        firstName: document.getElementById("firstName").value,
        middleInitial: document.getElementById("middleInitial").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        bodyType: document.getElementById("bodyTypes").value,
        occupation: document.getElementById("job").value,
        height: document.getElementById("height").value
    }

    allPersons.push(newPerson);
    showAll();

    return false;
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

function showAll() {
    document.getElementById("showallpersons").value = "";

    var peopleArr = "";
    for (var i = 0; i < allPersons.length; i++) {
        peopleArr += allPersons[i].firstName + ", ";
        peopleArr += allPersons[i].middleInitial + ", ";
        peopleArr += allPersons[i].lastName + ", ";
        peopleArr += allPersons[i].age + ", ";
        peopleArr += allPersons[i].gender + ", ";
        peopleArr += allPersons[i].bodyType + ", ";
        peopleArr += allPersons[i].occupation + ", ";
        peopleArr += allPersons[i].height + "\n";
    }

    document.getElementById("showallpersons").value = peopleArr;
}

function findMatches() {
    document.getElementById("showmatches").value = "";

    var matches = "";
    var numAttempts = 10;

    for (var i = 0; i < allPersons.length; i++) {
        var counter = 0;
        var flag = 0;

        while (counter < numAttempts) {
            randomMatch = Math.floor(Math.random() * allPersons.length);

            while (randomMatch == i) {
                randomMatch = Math.floor(Math.random() * allPersons.length);
            }

            console.log(randomMatch);

            if (allPersons[randomMatch].height >= allPersons[i].height - 10 && allPersons[randomMatch].height <= allPersons[i].height + 10
                && allPersons[randomMatch].age >= allPersons[i].age - 10 && allPersons[randomMatch].age <= allPersons[i].age + 10  && allPersons[randomMatch].gender != allPersons[i].gender) {
                matches += allPersons[i].firstName + " matched to " + allPersons[randomMatch].firstName;
                flag = 1;
                break;
            }

            counter++;
        }

        if (flag == 0) {
            matches += allPersons[i].firstName + " failed to match\n";
        }
    }

    document.getElementById("showmatches").value = matches;
}

function calculateAge() {
    var dob = document.getElementById('dob').value;
    var bDay = +new Date(dob);
    var age = Math.floor(((Date.now() - bDay) / (31557600000)));

    if (age < 18 || age > 75) {
        alert("Age must be between 18 and 75!");
        document.getElementById('dob').value = null;

        return;
    }

    console.log(age);
    document.getElementById("age").innerHTML = age;
}