let forma = null;
let lados = [];
let angulos = [];

function adicionarLado() {
    let lado = document.getElementById('lado').value;
    lados.push(parseFloat(lado));
    document.getElementById('lado').value = '';
}

function calcularResultados() {
    forma = document.getElementById('forma').value;
    if (forma === "quadrado") {
        angulos = [90, 90, 90, 90];
        if (lados.length > 0) {
            lados = [lados[0], lados[0], lados[0], lados[0]];
        }
    } else if (forma === "retangulo") {
        angulos = [90, 90, 90, 90];
        if (lados.length > 1) {
            lados = [lados[0], lados[1], lados[0], lados[1]];
        }
    } else if (forma === "triangulo") {
        angulos = [60, 60, 60];
        if (lados.length > 3) {
            lados = lados.slice(0, 3);
        }
    }

    let perimetro = lados.reduce((a, b) => a + b, 0);
    let area = calcularArea();
    let resultados = "Perímetro: " + perimetro + "m<br>Área: " + area + "m²<br>Ângulos: " + angulos.join(', ');
    document.getElementById('resultados').innerHTML = resultados;
}

function calcularArea() {
    if (forma === "quadrado") {
        return lados[0] * lados[0];
    } else if (forma === "retangulo") {
        return lados[0] * lados[1];
    } else if (forma === "triangulo") {
        let s = lados.reduce((a, b) => a + b, 0) / 2;
        return Math.sqrt(s * (s - lados[0]) * (s - lados[1]) * (s - lados[2]));
    }
    return 0;
}