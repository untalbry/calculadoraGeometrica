import { setShape } from "./formHandler.mjs";

const init = () => {
    const configugationForm = document.getElementById('configugationForm');
    configugationForm.addEventListener('submit', setShape);
}
document.addEventListener("DOMContentLoaded", init);

