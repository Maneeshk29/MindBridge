function saveMeditationEntry() {
    let date = document.getElementById('meditation-date').value;
    let duration = document.getElementById('meditation-duration').value;
    if (date && duration) {
        let entryList = document.getElementById('meditation-entries');
        let newEntry = document.createElement('p');
        newEntry.textContent = `Date: ${date}, Duration: ${duration} minutes`;
        entryList.appendChild(newEntry);
        document.getElementById('meditation-date').value = '';
        document.getElementById('meditation-duration').value = '';
    } else {
        alert('Please enter both date and duration.');
    }
}

function saveGratitudeEntry() {
    let date = document.getElementById('gratitude-date').value;
    let entry = document.getElementById('gratitude-journal-entry').value;
    if (date && entry) {
        let entryList = document.getElementById('gratitude-entries');
        let newEntry = document.createElement('p');
        newEntry.textContent = `Date: ${date}, Entry: ${entry}`;
        entryList.appendChild(newEntry);
        document.getElementById('gratitude-date').value = '';
        document.getElementById('gratitude-journal-entry').value = '';
    } else {
        alert('Please enter both date and journal entry.');
    }
}

function saveWalkEntry() {
    let date = document.getElementById('walk-date').value;
    let duration = document.getElementById('walk-duration').value;
    if (date && duration) {
        let entryList = document.getElementById('walk-entries');
        let newEntry = document.createElement('p');
        newEntry.textContent = `Date: ${date}, Duration: ${duration} minutes`;
        entryList.appendChild(newEntry);
        document.getElementById('walk-date').value = '';
        document.getElementById('walk-duration').value = '';
    } else {
        alert('Please enter both date and duration.');
    }
}



function loginMethod(event) {
    event.preventDefault();

    const username = document.getElementById("username1").value;
    const password = document.getElementById("password").value;

    // Replace with actual authentication logic
    if (username === "test" && password === "test") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

function createAccount() {
    // Add logic for account creation or redirect to account creation page
    alert("Redirect to account creation page or handle account creation");
}

function navigateTo(page) {
    window.location.href = page;
}
