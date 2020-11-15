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
    for (var i = 0; i < allPersons.length; i++) {
        console.log(allPersons[i]);
    }
}

function changeBodyTypes() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var bodyTypeOption = document.getElementById("bodyTypes").getElementsByTagName("option");
    var allowedTypes = [];

    if (gender == "male") {
        allowedTypes = ["oval", "triangle", "rectangle", "rhomboid", "inverted triangle"];
    } else {
        allowedTypes = ["apple", "pear", "pencil", "hourglass", "round"]
    }

    for (var i = 0; i < bodyTypeOption.length; i++) {
        if (allowedTypes.includes(bodyTypeOption[i].value)) {
            bodyTypeOption[i].disabled = false;
        } else {
            bodyTypeOption[i].disabled = true;
        }
    }

    document.getElementById("bodyTypes").value = null;
}

function calculateAge() {
    var dob = document.getElementById("dob").value;
    console.log(dob);
    var birthday = dob.split("-");

    console.log(birthday);
    birthDate = new Date(year = birthday[2], month = birthday[1], day = birthday[0]);
    console.log(birthDate);

    var currentDate = new Date();
    console.log(currentDate.getDay());
    console.log(currentDate.getMonth());
    console.log(currentDate.getFullYear());

    var result = 1;

    var totalDays = result.toFixed(0);

    var totalYears = totalDays / 365;

    var age = totalYears.toFixed(0);

    console.log(age);
}

function showfreq() {
    var totalPersons = allPersons.length;

    var maleCount = 0,
        femaleCount = 0,
        lessThanCount = 0,
        twentyCount = 0,
        fortyCount = 0,
        greaterThanCount = 0,
        appleCount = 0,
        pearCount = 0,
        pencilCount = 0,
        hourglassCount = 0,
        roundCount = 0,
        ovalCount = 0,
        triangleCount = 0,
        rectangleCount = 0,
        rhomboidCount = 0,
        iTriangleCount = 0;

    for (var i = 0; i < totalPersons; i++) {
        if (allPersons[i].gender == "male") {
            maleCount = maleCount + 1;
        } else if (allPersons[i].gender == "female") {
            femaleCount = femaleCount + 1;
        }

        if (allPersons[i].age < 20) {
            lessThanCount = lessThanCount + 1;
        } else if (allPersons[i].age >= 20 && allPersons[i].age <= 39) {
            twentyCount = twentyCount + 1;
        } else if (allPersons[i].age >= 40 && allPersons[i].age <= 69) {
            fortyCount = fortyCount + 1;
        } else if (allPersons[i].age > 69) {
            greaterThanCount = greaterThanCount + 1;
        }

        if (allPersons[i].bodyType == "apple") {
            appleCount = appleCount + 1;
        } else if (allPersons[i].bodyType == "pear") {
            pearCount = pearCount + 1;
        } else if (allPersons[i].bodyType == "pencil") {
            pencilCount = pencilCount + 1;
        } else if (allPersons[i].bodyType == "hourglass") {
            hourglassCount = hourglassCount + 1;
        } else if (allPersons[i].bodyType == "round") {
            roundCount = roundCount + 1;
        } else if (allPersons[i].bodyType == "oval") {
            ovalCount = ovalCount + 1;
        } else if (allPersons[i].bodyType == "triangle") {
            triangleCount = triangleCount + 1;
        } else if (allPersons[i].bodyType == "rectangle") {
            rectangleCount = rectangleCount + 1;
        } else if (allPersons[i].bodyType == "rhomboid") {
            rhomboidCount = rhomboidCount + 1;
        } else if (allPersons[i].bodyType == "inverted triangle") {
            iTriangleCount = iTriangleCount + 1;
        }

        maleCount = maleCount / totalPersons * 100;
        femaleCount = femaleCount / totalPersons * 100;
        lessThanCount = lessThanCount / totalPersons * 100;
        twentyCount = twentyCount / totalPersons * 100;
        fortyCount = fortyCount / totalPersons * 100;
        greaterThanCount = greaterThanCount / totalPersons * 100;
        appleCount = appleCount / totalPersons * 100;
        pearCount = pearCount / totalPersons * 100;
        pencilCount = pencilCount / totalPersons * 100;
        hourglassCount = hourglassCount / totalPersons * 100;
        roundCount = roundCount / totalPersons * 100;
        ovalCount = ovalCount / totalPersons * 100;
        triangleCount = triangleCount / totalPersons * 100;
        rectangleCount = rectangleCount / totalPersons * 100;
        rhomboidCount = rhomboidCount / totalPersons * 100;
        iTriangleCount = iTriangleCount / totalPersons * 100;

        document.getElementById('maleBar').style.height = maleCount.floor + 'px';
        document.getElementById('femaleBar').style.height = femaleCount.floor + 'px';

        document.getElementById('lessThanBar').style.height = lessThanCount.floor + 'px';
        document.getElementById('twentyBar').style.height = twentyCount.floor + 'px';
        document.getElementById('fortyBar').style.height = fortyCount.floor + 'px';
        document.getElementById('greaterThanBar').style.height = greaterThanCount.floor + 'px';

        document.getElementById('appleBar').style.height = appleCount.floor + 'px';
        document.getElementById('pearBar').style.height = pearCount.floor + 'px';
        document.getElementById('pencilBar').style.height = pencilCount.floor + 'px';
        document.getElementById('hourglassBar').style.height = hourglassCount.floor + 'px';
        document.getElementById('roundBar').style.height = roundCount.floor + 'px';
        document.getElementById('ovalBar').style.height = ovalCount.floor + 'px';
        document.getElementById('triangleBar').style.height = triangleCount.floor + 'px';
        document.getElementById('rectangleBar').style.height = rectangleCount.floor + 'px';
        document.getElementById('rhomboidBar').style.height = rhomboidCount.floor + 'px';
        document.getElementById('iTriangleBar').style.height = iTriangleCount.floor + 'px';
    }
}