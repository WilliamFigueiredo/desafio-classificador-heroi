

let xpDoPersonagem  = 8000
let nomeHeroi = "William "
let fraseCompleta = "O herói de nome " + nomeHeroi + "está no nível de "





if (xpDoPersonagem <= 1000 ) {
    console.log(fraseCompleta + "Ferro")
    }
           


else if (xpDoPersonagem > 1000 && xpDoPersonagem <= 2000) {     
    console.log (fraseCompleta + "Bronze")
    }



else if (xpDoPersonagem > 2000 && xpDoPersonagem <= 5000) {
    console.log (fraseCompleta + "Prata Ouro")
    }



else if (xpDoPersonagem > 5000 && xpDoPersonagem <= 8000) {
    console.log (fraseCompleta + "Platina Diamante")
    }



else if (xpDoPersonagem > 8000 && xpDoPersonagem <= 9000) {
    console.log (fraseCompleta + "Ascendente")
    }



else if (xpDoPersonagem > 9000 && xpDoPersonagem <= 10000) {
    console.log (fraseCompleta + "Imortal") 
    }


    else  {
        console.log (fraseCompleta + "Radiante") 
    }
