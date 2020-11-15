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

            if (allPersons[randomMatch].height >= allPersons[i].height - 10 && allPersons[randomMatch].height <= allPersons[i].height + 10 &&
                allPersons[randomMatch].age >= allPersons[i].age - 10 && allPersons[randomMatch].age <= allPersons[i].age + 10 && allPersons[randomMatch].gender != allPersons[i].gender) {
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
    document.getElementById("age").value = age;
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

    console.log('loop');
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

        document.getElementById('maleBar').style.height = Math.floor(maleCount) + 'px';
        document.getElementById('femaleBar').style.height = Math.floor(femaleCount) + 'px';

        document.getElementById('lessThanBar').style.height = Math.floor(lessThanCount) + 'px';
        document.getElementById('twentyBar').style.height = Math.floor(twentyCount) + 'px';
        document.getElementById('fortyBar').style.height = Math.floor(fortyCount) + 'px';
        document.getElementById('greaterThanBar').style.height = Math.floor(greaterThanCount) + 'px';

        document.getElementById('appleBar').style.height = Math.floor(appleCount) + 'px';
        document.getElementById('pearBar').style.height = Math.floor(pearCount) + 'px';
        document.getElementById('pencilBar').style.height = Math.floor(pencilCount) + 'px';
        document.getElementById('hourglassBar').style.height = Math.floor(hourglassCount) + 'px';
        document.getElementById('roundBar').style.height = Math.floor(roundCount) + 'px';
        document.getElementById('ovalBar').style.height = Math.floor(ovalCount) + 'px';
        document.getElementById('triangleBar').style.height = Math.floor(triangleCount) + 'px';
        document.getElementById('rectangleBar').style.height = Math.floor(rectangleCount) + 'px';
        document.getElementById('rhomboidBar').style.height = Math.floor(rhomboidCount) + 'px';
        document.getElementById('iTriangleBar').style.height = Math.floor(iTriangleCount) + 'px';
    }

}