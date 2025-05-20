function getCanvasContext() {
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Canvas no encontrado');
        return null;
    }
    return canvas.getContext('2d');
}

function clearCanvas() {
    const ctx = getCanvasContext();
    if (!ctx) return;
    
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawTriangle() {
    const ctx = getCanvasContext();
    if (!ctx) return;
    
    const canvas = ctx.canvas;
    clearCanvas();
    
    // Dibujar un triángulo equilátero centrado
    ctx.beginPath();
    
    // Dimensiones y posición
    const height = canvas.height * 0.6;
    const side = height * 2 / Math.sqrt(3);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Calcular los vértices
    const topX = centerX;
    const topY = centerY - height / 2;
    const leftX = centerX - side / 2;
    const leftY = centerY + height / 2;
    const rightX = centerX + side / 2;
    const rightY = centerY + height / 2;
    
    // Dibujar
    ctx.moveTo(topX, topY);
    ctx.lineTo(leftX, leftY);
    ctx.lineTo(rightX, rightY);
    ctx.closePath();
    
    // Estilo
    ctx.fillStyle = 'rgba(255, 200, 100, 0.6)';
    ctx.strokeStyle = 'rgba(200, 150, 50, 1)';
    ctx.lineWidth = 2;
    
    // Rellenar y trazar
    ctx.fill();
    ctx.stroke();
}

export function drawSquare() {
    const ctx = getCanvasContext();
    if (!ctx) return;
    
    const canvas = ctx.canvas;
    clearCanvas();
    
    // Dimensiones y posición
    const size = canvas.height * 0.6;
    const x = (canvas.width - size) / 2;
    const y = (canvas.height - size) / 2;
    
    // Dibujar
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    
    // Estilo
    ctx.fillStyle = 'rgba(100, 150, 255, 0.6)';
    ctx.strokeStyle = 'rgba(50, 100, 200, 1)';
    ctx.lineWidth = 2;
    
    // Rellenar y trazar
    ctx.fill();
    ctx.stroke();
}

export function drawCircle() {
    const ctx = getCanvasContext();
    if (!ctx) return;
    
    const canvas = ctx.canvas;
    clearCanvas();
    
    // Dimensiones y posición
    const radius = canvas.height * 0.3;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Dibujar
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    
    // Estilo
    ctx.fillStyle = 'rgba(255, 100, 100, 0.6)';
    ctx.strokeStyle = 'rgba(200, 50, 50, 1)';
    ctx.lineWidth = 2;
    
    // Rellenar y trazar
    ctx.fill();
    ctx.stroke();
}