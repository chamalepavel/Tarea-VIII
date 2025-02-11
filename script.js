document.getElementById("calculateAge").addEventListener("click", function() {
    let age = parseInt(document.getElementById("age").value);
    let speciesLifeExpectancy = parseInt(document.getElementById("species").value);

    if (isNaN(age) || age < 0) {
        document.getElementById("result").textContent = "Por favor, ingresa una edad válida.";
        return;
    }

    let equivalentAge = (age * speciesLifeExpectancy) / 80;

    document.getElementById("result").textContent = `Tu edad equivalente en esa especie sería aproximadamente ${equivalentAge.toFixed(1)} años.`;
});
