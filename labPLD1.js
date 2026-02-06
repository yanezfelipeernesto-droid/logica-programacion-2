// Solicitamos el input de 3 números separados por comas ( _ , _ , _ )
const userInput = prompt("Dame tres números cualesquiera. Separados por coma (ej: 5,10,15)");

// 1. Validar si el usuario canceló o ingresó una cadena vacía
if (userInput === null) {
    console.error("El usuario canceló la operación.");
    alert("Operación cancelada.");
} else if (userInput.trim() === "") {
    console.error("No se ingresó ningún valor.");
    alert("Debes ingresar al menos un número.");
} else {
    // 2. Separamos la entrada por las comas y limpiamos espacios
    const numerosString = userInput.split(",").map(item => item.trim());
    
    // 3. Validar que sean exactamente 3 números
    if (numerosString.length !== 3) {
        console.error(`Se ingresaron ${numerosString.length} valores, pero se requieren exactamente 3.`);
        alert(`Ingresaste ${numerosString.length} valor(es). Deben ser exactamente 3 números separados por comas.`);
    } else {
        // 4. Validar que todos los elementos sean números válidos
        const numerosNumber = [];
        let hayError = false;
        
        for (let i = 0; i < numerosString.length; i++) {
            const num = numerosString[i];
            const numConvertido = Number(num);
            
            // Validar si es un número
            if (num === "") {
                console.error(`Posición ${i + 1}: Está vacía`);
                alert(`Error: La posición ${i + 1} está vacía.`);
                hayError = true;
                break;
            } else if (isNaN(numConvertido)) {
                console.error(`Posición ${i + 1}: "${num}" no es un número válido`);
                alert(`Error: "${num}" no es un número válido.`);
                hayError = true;
                break;
            }
            
            numerosNumber.push(numConvertido);
        }
        
        // 5. Si no hay errores, mostrar resultados
        if (!hayError) {

            function numerosSlice() {
                const a = numerosString[0];
                const b = numerosString[1];
                const c = numerosString[2];
                return [a, b, c];
            }
            
            console.log("Array de strings (función numerosSlice):", numerosSlice());
            console.log("Array convertido a números:", numerosNumber);
            
            // Mostrar también en alert para mejor visibilidad
            alert(`Números ingresados correctamente:\nEn formato texto: ${numerosString.join(", ")}\nEn formato número: ${numerosNumber.join(", ")}`);
            
            
                        // Ordenar de mayor a menor
            const numerosOrdenados = [...numerosNumber].sort((a, b) => b - a);
            
            console.log("Array ordenado de mayor a menor:", numerosOrdenados);
            
            // Mostrar también en alert para mejor visibilidad
            alert(`Números ingresados:\nOriginal: ${numerosNumber.join(", ")}\nOrdenados (mayor a menor): ${numerosOrdenados.join(", ")}`);
            

        }
    }
}