let quadrado = [9]
let rule = "q"
let opcao = "X"
let parimpar = 0
let end = false;
for (let i = 0; i < 9; i++) {
    let ruleNumer = rule + (i + 1).toString()
    quadrado[i] = ruleNumer
}
function turn(id) {
    if (!end) {
        if (parimpar % 2 == 0) {
            opcao = "X"
        }
        if (parimpar % 2 == 1) {
            opcao = "O"
        }
        for (let i = 0; i < 9; i++) {
            let aux = "q"
            let idString = aux + (i + 1).toString()
            if (id == idString && quadrado[i] != "X" && quadrado[i] != "O") {
                quadrado[i] = opcao
                document.getElementById(id).innerHTML = opcao
                parimpar++
            }
        }
        for (let i = 0; i < 9; i += 3) {
            if (quadrado[i] == quadrado[i + 1] && quadrado[i + 1] == quadrado[i + 2]) {
                end = true
            }
        }
        for (let i = 0; i < 3; i++) {
            if (quadrado[i] == quadrado[i + 3] && quadrado[i + 3] == quadrado[i + 6]) {
                end = true
            }
        }
        for (let i = 0; i < 2; i++) {
            if (quadrado[i] == quadrado[i + 4] && quadrado[i + 4] == quadrado[i + 8]) {
                end = true
            }
            if (quadrado[i+2] == quadrado[i + 4] && quadrado[i + 4] == quadrado[i + 6]) {
                end = true
            }
        }
    }
    if(end == true){
        document.getElementById("resultado").innerHTML = `PLAYER ${opcao} WON!`
    }
    if(parimpar == 9 && end == false){
        document.getElementById("resultado").innerHTML = `TIE`
    }
}
function restart() {
    window.location.reload();
}