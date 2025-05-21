// userManager.js

const users = [];

function addUser(id, name, email) {
    if (!id || !name || !email) {
        console.log("Invalid user data");
        return;
    }

    const userExists = users.some(user => user.id === id);
    if (userExists) {
        console.log("User already exists");
        return;
    }

    users.push({ id, name, email, createdAt: new Date() });
    console.log(`User ${name} added`);
}

function removeUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index >= 0) {
        users.splice(index, 1);
        console.log(`User ${id} removed`);
    } else {
        console.log("User not found");
    }
}

function findUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return null;
}

function listUsers() {
    console.log("All users:");
    for (const user of users) {
        console.log(`- ${user.id}: ${user.name} (${user.email})`);
    }
}

function sendEmail(userId, message) {
    const user = findUser(userId);
    if (user) {
        console.log(`Sending email to ${user.email}: ${message}`);
    }
}

// Unused function (intentional for DeepScan)
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Redundant condition (intentional for DeepScan)
function isValidEmail(email) {
    if (email && email.includes("@")) {
        if (email.includes("@")) {
            return true;
        }
    }
    return false;
}

// Duplicate user names checker
function hasDuplicateNames() {
    const nameSet = new Set();
    for (let i = 0; i < users.length; i++) {
        if (nameSet.has(users[i].name)) {
            return true;
        }
        nameSet.add(users[i].name);
    }
    return false;
}

// Inefficient loop (intentional)
function countGmailUsers() {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.endsWith("@gmail.com")) {
            count++;
        }
    }
    return count;
}

// Dummy call stack (just for code length)
function main() {
    addUser(1, "Alice", "alice@gmail.com");
    addUser(2, "Bob", "bob@yahoo.com");
    addUser(3, "Charlie", "charlie@gmail.com");

    listUsers();

    sendEmail(1, "Welcome!");
    sendEmail(5, "You shouldn't see this.");

    console.log("Has duplicates:", hasDuplicateNames());
    console.log("Gmail users:", countGmailUsers());

    removeUser(2);
    removeUser(5);
}

main();
