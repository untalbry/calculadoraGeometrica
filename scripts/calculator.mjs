const PI = Math.PI;

const calculators = {
  triangleArea: (inputs) => {
    const base = parseFloat(inputs.base.value);
    const height = parseFloat(inputs.height.value);
    return (base * height) / 2;
  },
  trianglePerimeter: (inputs) => {
    const side1 = parseFloat(inputs.side1.value);
    const side2 = parseFloat(inputs.side2.value);
    const side3 = parseFloat(inputs.side3.value);
    return side1 + side2 + side3;
  },
  
  squareArea: (inputs) => {
    const side = parseFloat(inputs.side.value);
    return side * side;
  },
  squarePerimeter: (inputs) => {
    const side = parseFloat(inputs.side.value);
    return 4 * side;
  },
  
  circleArea: (inputs) => {
    const radius = parseFloat(inputs.radius.value);
    return PI * radius * radius;
  },
  circlePerimeter: (inputs) => {
    const radius = parseFloat(inputs.radius.value);
    return 2 * PI * radius;
  }
};

export function initCalculator() {
  document.addEventListener('click', function(event) {
    // Verificar si el elemento clickeado es un botón de cálculo
    if (event.target.tagName === 'BUTTON' && calculators[event.target.id]) {
      calculateResult(event.target.id);
    }
  });
}

function calculateResult(calculationType) {
  const form = document.getElementById('calculateForm');
  const inputs = {};

  Array.from(form.querySelectorAll('input')).forEach(input => {
    inputs[input.name] = input;
  });
  
  const requiredInputs = Array.from(form.querySelectorAll('input[required]'));
  const allValid = requiredInputs.every(input => input.validity.valid);
  
  if (!allValid) {
    alert('Por favor, complete todos los campos requeridos con valores válidos.');
    return;
  }
  
  try {
    const result = calculators[calculationType](inputs);
    displayResult(result, calculationType);
  } catch (error) {
    console.error('Error al calcular:', error);
    alert('Ocurrió un error al realizar el cálculo.');
  }
}

function displayResult(result, calculationType) {
  let resultElement = document.getElementById('result');
  
  if (!resultElement) {
    resultElement = document.createElement('div');
    resultElement.id = 'result';
    const calculateForm = document.getElementById('calculateForm');
    
    // Si el formulario tiene un elemento siguiente, insertarlo antes
    // de lo contrario, añadirlo como hijo del padre del formulario
    if (calculateForm.parentNode) {
      calculateForm.parentNode.insertBefore(resultElement, calculateForm.nextSibling);
    }
  }
  
  // Formatear el resultado según el tipo de cálculo
  const formattedResult = result.toFixed(2);
  const calculationTypeText = calculationType.includes('Area') ? 'area' : 'perímetro';
  const shapeText = getShapeText(calculationType);
  
  resultElement.innerHTML = `
    <div class="result-container">
      <h3>Resultado:</h3>
      <p>El ${calculationTypeText} del ${shapeText} es: <strong>${formattedResult}</strong></p>
    </div>
  `;
}

function getShapeText(calculationType) {
  if (calculationType.includes('triangle')) return 'triángulo';
  if (calculationType.includes('square')) return 'cuadrado';
  if (calculationType.includes('circle')) return 'círculo';
  return 'elemento';
}
