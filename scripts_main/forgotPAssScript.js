var arrForgotPassArr = false;
function functionForgotPass(obj){
    let input = document.querySelector('.forgotPassIndexBut');
    if(input.value != ''){
        input.style.borderColor= 'green';
        arrForgotPassArr = true;
    }
    else{
        input.style.borderColor = 'red';
        arrForgotPassArr = false;
    }
}

function loc(obj) {
    window.localStorage={};
    window.localStorage.EmailNamePersOBJ = obj.value;
    (arrForgotPassArr)? window.location.href='forgotPAss1.html': false;
    
}
function loc1(obj) {
    (arrForgotPassArr)? window.location.href='forgotPAss2.html': false;
}
function loc2() {
    (arrForgotPassArr)? window.location.href='forgotPAssEndWindow.html': false;
}

let forgotPAss1LET = document.querySelector('.forgotPAss1');
if(forgotPAss1LET != undefined){document.addEventListener("DOMContentLoaded",forgotPass_time);}

let forgotPAssEndWindow = document.querySelector(".forgotPAssEndWindow");
if(forgotPAssEndWindow != undefined){document.addEventListener("DOMContentLoaded",funcTime5sec3);}

function funcTime5sec3(){
    let numberTime = document.querySelector("#numberTime3");
    let time1 = setTimeout(() => {
        clearTimeout(time1);
        //document.location.href = "https://vk.com/murlak";
        numberTime.innerText = "1";
        console.log("1");
        
    },5000);
    let time2 = setTimeout(() => {
        clearTimeout(time2);
        numberTime.innerText = "2";
        console.log("2");
        
    },4000);
    let time3 = setTimeout(() => {
        clearTimeout(time3);
        numberTime.innerText = "3";
        console.log("3");
        
    },3000);
    let time4 = setTimeout(() => {
        clearTimeout(time4);
        numberTime.innerText = "4";
        console.log("4");
        
    },2000);
    let time5 = setTimeout(() => {
        clearTimeout(time5);
        numberTime.innerText = "5";
        console.log("5");
    },1000);
}


function forgotPass_time(){
    let textTime = document.querySelector('.regesterText_DOP_time_num');
    let emailNamePersLet = document.querySelector('.regesterText_DOP_name_Email');

    let EmailNamePers = window.localStorage.EmailNamePersOBJ;
    if(EmailNamePers != '' && EmailNamePers != undefined){ emailNamePersLet.innerText = EmailNamePers+'';} else{window.location.href='forgotPAss.html';}
    let time = ' 00:';
    let second = 30;
    let time1 = setInterval(()=>{
        
        if(second == 0){
            console.log("clearTimeout");
            clearInterval(time1);
        }
        console.log(second);
        
        textTime.innerText = time+second;
        second--;
        
    time1;
    }, 1000);
    
}