import { drawTriangle, drawSquare, drawCircle } from "./drawer.mjs";


export function setShape(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const shape = formData.get("shapes");
  const calculations = formData.get("calculations");

  const parent = document.getElementById("calculateForm");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  function createInput(name, placeholder) {
    const input = document.createElement("input");
    input.type = "number";
    input.name = name;
    input.placeholder = placeholder;
    input.required = true;
    return input;
  }
  function createButton(name, text, id) {
    const button = document.createElement("button");
    button.type = "button";
    button.name = name;
    button.textContent = text;
    button.id = id;
    return button;
  }

  const shapeActions = {
    triangle: {
      draw: drawTriangle,
      inputs: {
        area: [
          createInput("base", "base"),
          createInput("height", "height"),
          createButton("calculateArea", "Calcular Area", "triangleArea"),
        ],
        perimeter: [
          createInput("side1", "lado 1"),
          createInput("side2", "lado 2"),
          createInput("side3", "lado 3"),
          createButton("calculatePerimeter", "Calcular Perimetro", "trianglePerimeter"),
        ],
      },
    },
    square: {
      draw: drawSquare,
      inputs: {
        area: [
          createInput("side", "lado"),
          createButton("calculateArea", "Calcular Area", "squareArea"),
        ],
        perimeter: [
          createInput("side", "lado"),
          createButton("calculatePerimeter", "Calcular Perimetro", "squarePerimeter"),
        ],
      },
    },
    circle: {
      draw: drawCircle,
      inputs: {
        area: [
          createInput("radius", "radio"),
          createButton("calculateArea", "Calcular Area" , "circleArea"),
        ],
        perimeter: [
          createInput("radius", "radio"),
          createButton("calculatePerimeter", "Calcular Perimetro", "circlePerimeter"),
        ],
      },
    },
  };

  if (shapeActions[shape]) {
    shapeActions[shape].draw();

    const inputs = shapeActions[shape].inputs[calculations];
    if (inputs) {
      inputs.slice().reverse().forEach((input) => {
          parent.insertBefore(input, parent.firstChild);
        });
    }
  } else {
    console.error("Figura desconocida seleccionada");
  }
}
