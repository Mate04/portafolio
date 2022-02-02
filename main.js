
/*
const btn_menu = document.querySelector('.menu_ul_li_btn');

btn_menu.addEventListener(`click`, ()=> {
    
    const menu_items_li = document.querySelector('.menu_ul_li')
    menu_items.classList.toggle('show')
    
});
const menu_items = document.querySelector('.menu_ul')
menu_items_li.addEventListener(`click`, ()=>{
    menu_items_li.classList.toggle('show')
});
*/
//edad
const fechaNacimiento = "2004-03-30";
document.getElementById("edad");

const calcularEdad = () => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    // 2016-07-11
    const anoNacimiento = 2004;
    const mesNacimiento = 3;
    const diaNacimiento = 30;

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
    
};


window.addEventListener("load", () => {
    document.getElementById("edad").innerHTML = calcularEdad();
});

