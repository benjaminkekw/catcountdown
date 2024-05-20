window.onload = function() {
    startCountdown();
    document.getElementById('surprise-button').addEventListener('click', showSurpriseMessage);
};

function startCountdown() {
    const countDownDate = new Date("2024-05-24T14:25:00").getTime();

    // Calculate milestones
    const now = new Date().getTime();
    const totalTime = countDownDate - now;
    const halfTime = countDownDate - totalTime / 2;
    const quarterTime = countDownDate - totalTime / 4;
    const threeQuarterTime = countDownDate - (totalTime / 4) * 3;

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

        // Display messages based on time remaining
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").innerHTML = "Itt az idő a találkozásra!";
            document.getElementById("special-message").style.display = "none";
            showFireworks();
        } else if (now >= halfTime && now < threeQuarterTime) {
            document.getElementById("special-message").innerHTML = "<h2>Már csak a fele van hátra!</h2><p>Készülj fel a találkozásra!</p>";
            document.getElementById("special-message").style.display = "block";
        } else if (now >= quarterTime && now < halfTime) {
            document.getElementById("special-message").innerHTML = "<h2>Már csak a negyede van hátra!</h2><p>A találkozás közeledik!</p>";
            document.getElementById("special-message").style.display = "block";
        } else if (now >= threeQuarterTime && now < countDownDate) {
            document.getElementById("special-message").innerHTML = "<h2>Már majdnem itt az idő!</h2><p>Készülj fel!</p>";
            document.getElementById("special-message").style.display = "block";
        } else if (days === 0) {
            document.getElementById("special-message").innerHTML = "<h2>Ma találkozunk!</h2><p>Készülj Azira(is) :3</p>";
            document.getElementById("special-message").style.display = "block";
        } else if (days === 1) {
            document.getElementById("special-message").innerHTML = "<h2>Csak egy nap van hátra!</h2><p>Készülj fel egy csodálatos napra!</p>";
            document.getElementById("special-message").style.display = "block";
        } else {
            document.getElementById("special-message").style.display = "none";
        }
    }, 1000);
}

function showSurpriseMessage(event) {
    event.stopPropagation(); // Prevent event from bubbling up and hiding the message

    const messages = [
        "Hello nigga",
        "RÜDIGER"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    const specialMessageElement = document.getElementById("special-message");
    specialMessageElement.innerHTML = `<h2>${message}</h2>`;
    specialMessageElement.style.display = "block";
}

function showFireworks() {
    // Placeholder for the fireworks function
}
