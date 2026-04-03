// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

// Bug 1 fix: the selector was "#themeButton" but the actual HTML id is "themeBtn" so it was grabbing nothing
let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");
let themeBtn = document.querySelector("#themeBtn");
let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");
let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function () {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
// Bug 2 fix: was toggling "darkmode" but the css class is "dark-mode" with a hyphen so it never matched
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input
// Bug 3 fix: changed "change" to "input" so it updates while typing not just after clicking away
// Bug 4 fix: messageinput was lowercase i, js is case sensitive so it couldnt find the variable
messageInput.addEventListener("input", function () {
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form
// Bug 5 fix: event wasnt passed as a parameter so event.preventDefault() would crash with a ReferenceError
welcomeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});