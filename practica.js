let tempUser;
let temp;
    
// Do para pedirlo siempre que no sea un número válido
do {
    tempUser = prompt("Ingresa la temperatura en grados Celsius que deseas convertir: ");
    
    // Convertimos a número
    temp = parseFloat(tempUser);

    // Si no es numero, mostramos error
    if (isNaN(temp)) {
        alert("Error! Debes introducir un número válido.");
    }

} while (isNaN(temp)); // Si el input es válido, entonces convertimos 

// Si llegamos aquí, temp ya es un número válido
console.log(`La temperatura que me diste fue: ${temp} °C`);

// Conversión a Fahrenheit
let fahrenheit = temp * 9/5 + 32;
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit} °F`);

// Conversión a Kelvin
let kelvin = temp + 273.15;
console.log(`La temperatura en Kelvin es: ${kelvin} K`);

// DOM
document.body.innerHTML = `
    <p>Temperatura en Celsius: ${temp} °C</p>
    <p>Temperatura en Fahrenheit: ${fahrenheit} °F</p>
    <p>Temperatura en Kelvin: ${kelvin} K</p>
`;
