const heart = document.getElementById("heart");

const amount = 500;

for (let i = 0; i < amount; i++) {

    const t = Math.PI * 2 * (i / amount);

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
        -(13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t));

    const scale = 17;

    const love = document.createElement("span");

    love.className = "love";
    love.textContent = "I love you";

    love.style.left = `${300 + x * scale}px`;
    love.style.top = `${275 + y * scale}px`;

    love.style.animationDelay = `${2.5 + i * 0.012}s`;

    love.style.transform =
        `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`;

    heart.appendChild(love);
}