# Calculadora Geométrica

## Introducción

Este proyecto es una calculadora geométrica web que permite calcular áreas y perímetros de diferentes figuras geométricas (triángulo, cuadrado y círculo) mientras visualiza la figura seleccionada en un canvas HTML5.

### Estructura del Proyecto

El proyecto está organizado en varios módulos JavaScript que manejan diferentes aspectos de la aplicación:

- `main.mjs`: Punto de entrada de la aplicación que inicializa los event listeners y la configuración inicial.
- `formHandler.mjs`: Maneja la lógica de los formularios y la creación dinámica de campos de entrada según la figura y cálculo seleccionado.
- `calculator.mjs`: Contiene la lógica de cálculo para las diferentes figuras geométricas y maneja la visualización de resultados.
- `drawer.mjs`: Gestiona el dibujo de las figuras geométricas en el canvas HTML5.

### Funcionamiento

La aplicación funciona de la siguiente manera:

1. El usuario selecciona una figura geométrica y el tipo de cálculo (área o perímetro) en el formulario de configuración.
2. Al enviar el formulario, se genera dinámicamente un nuevo formulario con los campos necesarios para el cálculo seleccionado.
3. Simultáneamente, se dibuja la figura seleccionada en el canvas.
4. El usuario ingresa las medidas requeridas y al hacer clic en el botón de cálculo, se muestra el resultado.

## Desarrollo

### Características Implementadas

1. **Interfaz de Usuario Intuitiva**
   - Menú lateral con formularios de configuración
   - Visualización de figuras en tiempo real
   - Formularios dinámicos según la selección

2. **Cálculos Geométricos**
   - Área y perímetro de triángulo
   - Área y perímetro de cuadrado
   - Área y perímetro de círculo

3. **Visualización de Figuras**
   - Dibujo de triángulo
   - Dibujo de cuadrado
   - Dibujo de círculo

4. **Validación de Datos**
   - Campos requeridos
   - Mensajes de error apropiados

### Observaciones Técnicas
Procure utilizar la especificación de ES6 ya que procuré tener un código modular. Al tratar de realizar esto me encontré que para poder utilizar cualquier `import`, me levantaba un problema de CORS  : 

```bash
    ' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.
```
Investigando en Stackoverflow encontré que para utilizar ECMAScript 6, debía de ejecutar la aplicación en un servidor web ya que de lo contrario al no estar soportado

> You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a file:// URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.

Esto me probocó la siguiente pregunta: Si se despliega en un servidor `nginx`, se debe de desarrollar en local en un servidor del mismo proveedor? En este proyecto traté al igual implementar `node`, pero me di cuenta de una forma más sencilla al utilizar `http-server`. 


## Conclusiones


### Aprendizajes Adquiridos

1. **Desarrollo Frontend**
   - Manejo avanzado de DOM y eventos
   - Implementación de canvas HTML5
   - Creación de interfaces dinámicas

2. **Programación Modular**
   - Organización del código en módulos reutilizables
   - Separación de responsabilidades
   - Mejores prácticas de desarrollo



Notas a futuro: 
No debo de dejar esto a la última hora. 
