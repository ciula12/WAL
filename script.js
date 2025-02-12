
const messages = [
    "Na pewno?",
    "Ale tak na pewno, na pewno??",
    "Czyli na 100%?",
    "No jeśli nie chcesz...",
    "No ale pomyśl jeszcze raz!",
    "Jak powiesz, że nie to będzie mi bardzo smutno...",
    "Bardzo bardzo smutno...",
    "No dobra, już nie będę pytał...",
    "Żartowałem! Proszę powiedz tak 💗"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}