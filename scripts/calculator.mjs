const PI = Math.PI;

// Funciones de cálculo para las figuras
const calculators = {
  // Triángulo
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
  
  // Cuadrado
  squareArea: (inputs) => {
    const side = parseFloat(inputs.side.value);
    return side * side;
  },
  squarePerimeter: (inputs) => {
    const side = parseFloat(inputs.side.value);
    return 4 * side;
  },
  
  // Círculo
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
    if (event.target.tagName === 'BUTTON' && calculators[event.target.id]) {
      calculateResult(event.target.id);
    }
  });
}

// Función que recopila los inputs y calcula el resultado
function calculateResult(calculationType) {
  // Obtener el formulario y sus inputs
  const form = document.getElementById('calculateForm');
  const inputs = {};
  
  // Recopilar todos los inputs del formulario
  Array.from(form.querySelectorAll('input')).forEach(input => {
    inputs[input.name] = input;
  });
  
  // Validar que todos los campos requeridos estén presentes
  const requiredInputs = Array.from(form.querySelectorAll('input[required]'));
  const allValid = requiredInputs.every(input => input.validity.valid);
  
  if (!allValid) {
    alert('Por favor, complete todos los campos requeridos con valores válidos.');
    return;
  }
  
  try {
    // Calcular el resultado
    const result = calculators[calculationType](inputs);
    
    // Mostrar el resultado
    displayResult(result, calculationType);
  } catch (error) {
    console.error('Error al calcular:', error);
    alert('Ocurrió un error al realizar el cálculo.');
  }
}

// Función para mostrar el resultado en la interfaz
function displayResult(result, calculationType) {
  // Crear o actualizar el elemento de resultado
  let resultElement = document.getElementById('result');
  
  if (!resultElement) {
    resultElement = document.createElement('div');
    resultElement.id = 'result';
    document.body.appendChild(resultElement);
  }
  
  // Formatear el resultado según el tipo de cálculo
  const formattedResult = result.toFixed(2);
  const calculationTypeText = calculationType.includes('Area') ? 'Área' : 'Perímetro';
  const shapeText = getShapeText(calculationType);
  
  // Actualizar el contenido
  resultElement.innerHTML = `
    <h3>Resultado:</h3>
    <p>El ${calculationTypeText} del ${shapeText} es: <strong>${formattedResult}</strong> ${getUnits(calculationType)}</p>
  `;
  
  // Hacer visible el resultado
  resultElement.style.display = 'block';
}

// Función auxiliar para obtener el nombre de la figura
function getShapeText(calculationType) {
  if (calculationType.includes('triangle')) return 'triángulo';
  if (calculationType.includes('square')) return 'cuadrado';
  if (calculationType.includes('circle')) return 'círculo';
  return 'elemento';
}

// Función auxiliar para obtener las unidades según el tipo de cálculo
function getUnits(calculationType) {
  return calculationType.includes('Area') ? 'unidades²' : 'unidades';
}