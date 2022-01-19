//Menu Hamburgesa.
const $bt = document.querySelector("#bt");
$bt.addEventListener("click", ()=>{
    document.querySelector("ul").classList.toggle("menu");
    document.querySelector("button").classList.toggle("is-active");
});

const $a =document.querySelector("ul");

$a.addEventListener("click", () =>{
    document.querySelector("ul").classList.remove("menu");
});
//Iniciar el reloj.
const $iniciarReloj = document.querySelector("#activar-reloj");
$iniciarReloj.addEventListener("click",()=>{
    
    let inter = setInterval(() => {
        let hora = new Date().toLocaleTimeString();
        document.querySelector("#reloj").innerHTML=hora;
        $iniciarReloj.disabled =true;

        //Detener el reloj.
        const $detenerReloj = document.querySelector("#desactivar-reloj");
        $detenerReloj.addEventListener("click",()=>{
        clearInterval(inter);
        $iniciarReloj.disabled =false;
        });
    }, 1000);
});

//Iniciar el Alarma.
const $iniciaralarma = document.querySelector("#activar-alarma");
$iniciaralarma.addEventListener("click",()=>{
    let alarm = setTimeout(() => {
        const $audio = document.createElement("audio");
        $audio.setAttribute("src", "alarma.mp3");
        document.body.appendChild($audio);
        $audio.play();
        $iniciaralarma.disabled =true;
        //Detener el Alarma.
        const $deteneralarma = document.querySelector("#desactivar-alarma");
        $deteneralarma.addEventListener("click",()=>{
            clearInterval(alarm);
            $audio.pause();
            $audio.currentTime = 0;
            $iniciaralarma.disabled =false;
        });

    }, 1000);
});

//Controlar el balòn.
let x=0,y=0;

const $balon = document.getElementById("balon");
const $campo = document.getElementById("campo")



document.addEventListener("keydown", (e) =>{
    
    const $limitbalon = $balon.getBoundingClientRect();
    const $limitcampo = $campo.getBoundingClientRect();

    console.log(e.keyCode);
    $balon.style.transform = `translate(${x*10}px,${y*10}px)`;

    if(e.keyCode === 37){
        if($limitbalon.left > $limitcampo.left)
            x--;
    }
    if(e.keyCode === 38){
        
        if($limitbalon.top > $limitcampo.top){
            y--;
            e.preventDefault();
        }
        
    }
    if(e.keyCode === 39){
        if($limitbalon.right < $limitcampo.right)
        x++;
    }
    if(e.keyCode === 40){
        if($limitbalon.bottom < $limitcampo.bottom){
            e.preventDefault();
            y++;
        } 

    }
});

//Cuenta atras.

function cuantaAtras(fecha1, fecha2){
    let fecha = fecha1 -fecha2;
    let dias = parseInt(fecha / (1000 * 60 * 60 * 24));
    let horas = parseInt((fecha % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = parseInt((fecha % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = parseInt((fecha % (1000 * 60)) / 1000);
    
    const $cuenta = document.querySelector(".cuenta");
    if(dias == 0 && horas==0 && minutos ==0 && segundos==0){
        $cuenta.textContent ="Feliz compleaños";
        clearInterval(interval);
    }else
    $cuenta.textContent = dias +" dìas "+horas+" horas "+minutos+" minutos "+segundos+" segundos";
}

let interval = setInterval(() => {
    let fecha1 = new Date(2021,11,31,16,41);
    let fecha2 = new Date();
    cuantaAtras(fecha1, fecha2);
}, 1000);

//Scroll Top.
document.querySelector(".scroll").style.display = "none";
document.addEventListener("scroll", ()=>{
    console.log(scrollY)
    if(scrollY < 2000){
        document.querySelector(".scroll").style.display = "none";
    }else document.querySelector(".scroll").style.removeProperty("display");
});

document.querySelector(".scroll").addEventListener("click",()=>{
    window.scrollTo(top);
});



