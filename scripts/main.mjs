import { setShape } from "./formHandler.mjs";

const init = () => {
    const combobox = document.getElementById('shapesCombobox');
    combobox.addEventListener('change', setShape);
}
document.addEventListener("DOMContentLoaded", init);

