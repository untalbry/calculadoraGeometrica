export function drawTriangle ()  {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Coordenadas de los 3 vértices del triángulo
  const x1 = 150, y1 = 50;
  const x2 = 50,  y2 = 250;
  const x3 = 250, y3 = 250;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath(); 
  ctx.strokeStyle = "#0288d1";
  ctx.stroke();
}
export function drawSquare ()  {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const x1 = 50, y1 = 50;
  const x2 = 150, y2 = 50;
  const x3 = 150, y3 = 150;
  const x4 = 50, y4 = 150;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.closePath(); 
  ctx.strokeStyle = "#0288d1";
  ctx.stroke();
}

export function drawCircle ()  {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const centerX = 150;
  const centerY = 150;
  const radius = 50;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.closePath(); 
  ctx.strokeStyle = "#0288d1";
  ctx.stroke();
}
