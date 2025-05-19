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
