export function setShape(event){
     const selectElement = event.target;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const text = selectedOption.text;
    console.log(text);
}