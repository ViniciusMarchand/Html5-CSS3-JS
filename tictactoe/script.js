var parimpar = 0
var contador = 0
var opcao
var a11 = "1"
var a12 = "2"
var a13 = "3"
var a21 = "4"
var a22 = "5"
var a23 = "6"
var a31 = "7"
var a32 = "8"
var a33 = "9"
var modo = "ANALISE"
function turn(id) {
    if (modo != "end") {
        if (parimpar % 2 == 0) {
            opcao = "X"
        }
        if (parimpar % 2 == 1) {
            opcao = "O"
        }
        
        if (id == "quadrado11" && a11 != "X" && a11 != "O") {
            a11 = opcao
            contador++
            document.getElementById(id).innerHTML = opcao
            parimpar++
        } else if (id == "quadrado12" && a12 != "X" && a12 != "O") {
            a12 = opcao
            contador++
            parimpar++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado13" && a13 != "X" && a13 != "O") {
            a13 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado21" && a21 != "X" && a21 != "O") {
            a21 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado22" && a22 != "X" && a22 != "O") {
            a22 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado23" && a23 != "X" && a23 != "O") {
            a23 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado31" && a31 != "X" && a31 != "O") {
            a31 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado32" && a32 != "X" && a32 != "O") {
            a32 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        } else if (id == "quadrado33" && a33 != "X" && a33 != "O") {
            a33 = opcao
            parimpar++
            contador++
            document.getElementById(id).innerHTML = opcao
        }
        if (a11 == a12 && a12 == a13 || a21 == a22 && a22 == a23 || a31 == a32 && a32 == a33 || a11 == a21 && a21 == a31 || a12 == a22 && a22 == a32 || a13 == a23 && a23 == a33 || a11 == a22 && a22 == a33 || a13 == a22 & a22 == a31) {
            document.getElementById("resultado").innerHTML = `PLAYER ${opcao} WON!`
            modo = "end"
        }
        
        if (contador == 9) {
            document.getElementById("resultado").innerHTML = `TIE`
            modo = "end"
        }
    }
}
function restart(){
    window.location.reload();
}

