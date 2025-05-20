import { setShape } from "./formHandler.mjs";
import { initCalculator } from "./calculator.mjs";

const init = () => {
    const configugationForm = document.getElementById('configugationForm');
    configugationForm.addEventListener('submit', setShape);

    initCalculator();
    console.log("Es horrible");
}
document.addEventListener("DOMContentLoaded", init);

