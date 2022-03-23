let menuHiddenButtom = document.querySelector(".menu_links_box_displayWhere700px");
let Elem = document.querySelector(".menu_links_boxs_links");
let hideMenuInProffil = document.querySelector(".buttonsInHeader_box_usButton");
var none = 'none';
var flex = 'flex';

menuHiddenButtom.addEventListener('click',()=>FuncClickDisplayStyleCheck(Elem));
window.addEventListener('resize',()=>CheckWindowSize(Elem))
hideMenuInProffil.addEventListener('click',OpenMenu);

function OpenMenu(){
    let elem = document.querySelector(".hideMenu_in_Proffil");
    let styleDisplay = window.getComputedStyle(elem,null).getPropertyValue("display");
    if (styleDisplay == none){
        elem.style.display = flex;
    }
    else if (styleDisplay == flex){
        elem.style.display = none;
    }
}
function CheckWindowSize(elem){
    if(window.innerWidth == 1062 || window.innerWidth < 1062){
        elem.style.display=none;
    }
    if(window.innerWidth == 1063 || window.innerWidth > 1062){
        elem.style.display=flex;
    }
}
function FuncClickDisplayStyleCheck(elem){
    // getComputedStyle позволяет получить объект стилей элемента
    
    styleDisplay = window.getComputedStyle(elem,null).getPropertyValue('display');
    if (styleDisplay == none){
        elem.style.display = flex;
    }
    else if (styleDisplay == flex){
        elem.style.display = none;
    }
}
