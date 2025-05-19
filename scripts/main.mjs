import { drawTriangle } from "./drawer.mjs";

const init = () => {
    document.getElementById("optionTriangle").addEventListener("click", drawTriangle());
}

document.addEventListener("DOMContentLoaded", init);

 