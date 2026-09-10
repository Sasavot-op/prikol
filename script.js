```javascript
const heart = document.getElementById("heart");

const amount = 500;

const flagColors = [
    "#D52D00",
    "#EF7627",
    "#FF9A56",
    "#FFFFFF",
    "#D162A4",
    "#B55690",
    "#A30262"
];

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

    const normalizedY = (y + 17) / 34;

    const colorIndex = Math.min(
        flagColors.length - 1,
        Math.floor(normalizedY * flagColors.length)
    );

    love.style.color = flagColors[colorIndex];

    love.style.textShadow = `
        0 0 5px ${flagColors[colorIndex]},
        0 0 10px ${flagColors[colorIndex]},
        0 0 20px ${flagColors[colorIndex]}
    `;

    love.style.animationDelay = `${2.5 + i * 0.012}s`;

    love.style.transform =
        `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`;

    heart.appendChild(love);
}
```
