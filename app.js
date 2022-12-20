const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 30, 200 - 20, 15, 100);
ctx.fillRect(350 - 45, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 150);
ctx.fillRect(260 - 40, 350, 15, 150);
ctx.fillRect(265, 350, 15, 150);

ctx.arc(250, 110, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(260 + 10, 95, 6, 0, 2 * Math.PI);
ctx.arc(220 + 10, 95, 6, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 120, 30, 0, Math.PI);
ctx.fillStyle = "white";
ctx.fill();
