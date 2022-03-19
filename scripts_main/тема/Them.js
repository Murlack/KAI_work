let elem2 = document.querySelector("#main_block");
let elemImgLogo = document.querySelector("#imgLogo");
let elemArrow = document.querySelector("#arrow");
let elemButtomExit = document.querySelector("#buttomExit");
let elemTextLogin = document.querySelector("#TextLogin");
let elemTextButtomLogin = document.querySelector("#TextButtomLogin");
let elemInputFieldName = document.querySelector("#InputFieldName");
let elemInputFieldPassword = document.querySelector("#InputFieldPassword");
let elemLangs = document.querySelector("#Langs");
let elemHiddenBlock = document.querySelector("#hidden_block");

let elemHiddenBlockLengRU = document.querySelector("#HiddenBlockLengRU");
let elemHiddenBlockLengENG = document.querySelector("#HiddenBlockLengENG");
let elemHiddenBlockLengChinese = document.querySelector("#HiddenBlockLengChinese");
let elemHiddenBlockLengSpanish = document.querySelector("#HiddenBlockLengSpanish");

let footer_box_text1 = document.querySelector("#footer_box_text1");
let footer_box_text2 = document.querySelector("#footer_box_text2");
let elemRegesterText = document.querySelector("#regesterText");
let elemclorHR_B81 = document.querySelector("#clorHR_B81");
let elemclorHR_B80 = document.querySelector("#clorHR_B80");
let elemclorHR_B82 = document.querySelector("#clorHR_B82");
let elemHend = document.querySelector("#hend");
let elemForgotPassword = document.querySelector("#ForgotPassword");

let elemhidden_block_id1 = document.querySelector("#hidden_block_id1");
let elemhidden_block_id2 = document.querySelector("#hidden_block_id2");
let elemhidden_block_id3 = document.querySelector("#hidden_block_id3");
let elemhidden_block_id4 = document.querySelector("#hidden_block_id4");
(elem2 != null) ? elem2.style.backgroundColor="rgb(0, 2, 18)": false;
// let Them_ButtomRegister1 = document.querySelector(".Them_ButtomRegister1");
// let Them_ButtomRegister2 = document.querySelector(".Them_ButtomRegister2");
// let Them_ButtomRegister3 = document.querySelector(".Them_ButtomRegister3");
// 
let elemsThemButtomRegister = document.querySelectorAll(".main_block_form_flex_Regester_boxMainBoxes_ButtomRegister");
let elemsThemboxMainBoxes_text = document.querySelectorAll(".main_block_form_flex_Regester_boxMainBoxes_text");
let elemsThem_ButtomRegister1Shadow = document.querySelectorAll(".Them_ButtomRegister1");
let Them_ButtomRegister_img1 = document.querySelector(".Them_ButtomRegister_img1");
let Them_ButtomRegister_img2 = document.querySelector(".Them_ButtomRegister_img2");
let Them_ButtomRegister_img3 = document.querySelector(".Them_ButtomRegister_img3");


function clickThemeFunction(){
    let elem2 = document.querySelector("#main_block");
    console.log(elem2.style.backgroundColor);
    if(elem2.style.backgroundColor == "rgb(0, 2, 18)")
    {
        elem2.style.backgroundColor = "#fff";
        
        (elemImgLogo != null) ? elemImgLogo.setAttribute("src","img/mainICON_2.svg"): false;
        (elemArrow != null) ? elemArrow.style.backgroundImage = 'url("img/arrow_2.svg")': false;
        
        (elemButtomExit != null) ? elemButtomExit.style.color = "#6D6F72": false;
        
        (elemTextLogin != null) ? elemTextLogin.style.color = "#000": false;
        
        (elemTextButtomLogin != null) ? elemTextButtomLogin.style.color = "#545454": false;
    

        (elemInputFieldName != null) ? elemInputFieldName.setAttribute("class","main_block_form_input_2"): false;
        
        (elemInputFieldPassword != null) ? elemInputFieldPassword.setAttribute("class","main_block_form_input_2"): false;
        
        (elemLangs != null) ? elemLangs.setAttribute("class","main_block_blok_TopMenu_Addition_langs_2 Lang-name"): false;
        
        (elemHiddenBlock!= null) ? elemHiddenBlock.setAttribute("class","hidden_block_2"): false;
        
        (elemHiddenBlockLengRU!= null) ? elemHiddenBlockLengRU.setAttribute("class","hidden_block_leng_2_RU"): false;
        
        (elemHiddenBlockLengENG!= null) ? elemHiddenBlockLengENG.setAttribute("class","hidden_block_leng_2_ENG"): false;
        
        (elemHiddenBlockLengChinese!= null) ? elemHiddenBlockLengChinese.setAttribute("class","hidden_block_leng_2_Chinese _Chinese"): false;
        
        (elemHiddenBlockLengSpanish!= null) ? elemHiddenBlockLengSpanish.setAttribute("class","hidden_block_leng_2_Spanish"): false;
        


        
        (footer_box_text2 != null) ? footer_box_text2.setAttribute("class","main_block_footer_box_text2 LengText-TermsOfUse"): false;
        
        (footer_box_text1 != null) ? footer_box_text1.setAttribute("class","main_block_footer_box_text2 LengText-PrivacyPolicy"): false;
        (elemRegesterText != null) ? elemRegesterText.style.color = "#000": false;
        
        (elemclorHR_B81 != null) ? elemclorHR_B81.style.backgroundColor = "#B8B8B8": false;
        
        (elemclorHR_B80 != null) ? elemclorHR_B80.style.color = "#B8B8B8": false;
        
        (elemclorHR_B82 != null) ? elemclorHR_B82.style.backgroundColor = "#B8B8B8": false;
        
        
        (elemForgotPassword != null) ? elemForgotPassword.setAttribute("class","main_block_form_ForgotPassword_2"): false;
        // elemHend.style.setProperty("--hand-cursor-w","url(../img/cursor_b.svg) 2 2 ,auto");
        (elemhidden_block_id1 != null) ? elemhidden_block_id1.style.backgroundColor="#F5F5F5": false;
       
        (elemhidden_block_id2 != null) ? elemhidden_block_id2.style.backgroundColor="#F5F5F5": false;
       
        (elemhidden_block_id3 != null) ? elemhidden_block_id3.style.backgroundColor="#F5F5F5": false;
        
        (elemhidden_block_id4 != null) ? elemhidden_block_id4.style.backgroundColor="#F5F5F5": false;
        
        console.log("if,"+elemImgLogo.getAttribute('src')+elemArrow.style.backgroundImage+elemLangs.style.Color);
        if(elemsThemButtomRegister != null){
            for(let i = 0; i < elemsThemButtomRegister.length; i++){
                elemsThemButtomRegister[i].style.backgroundColor="#fff";
                elemsThemButtomRegister[i].style.borderColor="#EDEDED";
            }
        }
        if(elemsThemboxMainBoxes_text != null){
            for(let i = 0; i < elemsThemboxMainBoxes_text.length; i++){
                elemsThemboxMainBoxes_text[i].style.color = "#000";
            }
        }
        if(elemsThem_ButtomRegister1Shadow != null){
            for(let i = 0; i < elemsThem_ButtomRegister1Shadow.length; i++){
                elemsThem_ButtomRegister1Shadow[i].setAttribute("class","main_block_form_flex_Regester_boxMainBoxes_ButtomRegister Them_ButtomRegister2");
            }
        }
        
         (Them_ButtomRegister_img1 != null) ? Them_ButtomRegister_img1.style.backgroundImage="url('img/IAmpreds2.svg')": false;

        
         (Them_ButtomRegister_img2 != null) ? Them_ButtomRegister_img2.style.backgroundImage="url('img/IAmAStudent2.svg')": false;

        
         (Them_ButtomRegister_img3 != null) ? Them_ButtomRegister_img3.style.backgroundImage="url('img/RecrutAgens2.svg')": false;
    }
    
    else{
        
        elem2.style.backgroundColor = "rgb(0, 2, 18)";

        
        (elemImgLogo != null) ? elemImgLogo.setAttribute("src","img/mainICON_1.svg"): false;
        (elemArrow != null) ? elemArrow.style.backgroundImage = "url('img/arrow_1.svg')": false;
        
        (elemButtomExit != null) ? elemButtomExit.style.color = "#CECECE": false;
        
        (elemTextLogin != null) ? elemTextLogin.style.color = "#fff": false;
        
        (elemTextButtomLogin != null) ? elemTextButtomLogin.style.color = "#7E7E84": false;
        

        
        (elemInputFieldName != null) ? elemInputFieldName.setAttribute("class","main_block_form_input_1"): false;
        
        (elemInputFieldPassword != null) ? elemInputFieldPassword.setAttribute("class","main_block_form_input_1"): false;

        
        (elemLangs != null) ? elemLangs.setAttribute("class","main_block_blok_TopMenu_Addition_langs_1 Lang-name"): false;

        
        (elemHiddenBlock != null) ? elemHiddenBlock.setAttribute("class","hidden_block_1"): false;
        
        (elemHiddenBlockLengRU != null) ? elemHiddenBlockLengRU.setAttribute("class","hidden_block_leng_1_RU"): false;
        
        (elemHiddenBlockLengENG != null) ? elemHiddenBlockLengENG.setAttribute("class","hidden_block_leng_1_ENG"): false;
        
        (elemHiddenBlockLengChinese != null) ? elemHiddenBlockLengChinese.setAttribute("class","hidden_block_leng_1_Chinese _Chinese"): false;
        
        (elemHiddenBlockLengSpanish != null) ? elemHiddenBlockLengSpanish.setAttribute("class","hidden_block_leng_1_Spanish"): false;

        
        (footer_box_text2 != null) ? footer_box_text2.setAttribute("class","main_block_footer_box_text1 LengText-TermsOfUse"): false;
        
        (footer_box_text1 != null) ? footer_box_text1.setAttribute("class","main_block_footer_box_text1 LengText-PrivacyPolicy"): false;
        (elemRegesterText != null) ? elemRegesterText.style.color = "#44495B": false;
        ;
        (elemclorHR_B81 != null) ? elemclorHR_B81.style.backgroundColor = "#44495B": false;
        ;
        (elemclorHR_B80 != null) ? elemclorHR_B80.style.color = "#44495B": false;
        ;
        (elemclorHR_B82 != null) ? elemclorHR_B82.style.backgroundColor = "#44495B": false;
        ;
        
        (elemForgotPassword != null) ? elemForgotPassword.setAttribute("class","main_block_form_ForgotPassword_1"): false;
        // elemHend.style.setProperty("--hand-cursor-w","url(../img/cursor_w.svg) 2 2 ,auto");
        (elemhidden_block_id1 != null) ? elemhidden_block_id1.style.backgroundColor="#27262C": false;
        ;
        (elemhidden_block_id2 != null) ? elemhidden_block_id2.style.backgroundColor="#27262C": false;
        ;
        (elemhidden_block_id3 != null) ? elemhidden_block_id3.style.backgroundColor="#27262C": false;
        ;
        (elemhidden_block_id4 != null) ? elemhidden_block_id4.style.backgroundColor="#27262C": false;
        ;

        console.log("else"+elemImgLogo.getAttribute('src')+elemLangs.style.Color);
        if(elemsThemButtomRegister != null){
            for(let i =0; i<elemsThemButtomRegister.length;i++){
                elemsThemButtomRegister[i].style.backgroundColor="#191C23";
                elemsThemButtomRegister[i].style.borderColor="#26282F";
            }
        }
        if(elemsThemboxMainBoxes_text != null){
            for(let i = 0; i < elemsThemboxMainBoxes_text.length; i++){
                elemsThemboxMainBoxes_text[i].style.color = "#fff";
            }
        }
        if(elemsThem_ButtomRegister1Shadow != null){
            for(let i = 0; i < elemsThem_ButtomRegister1Shadow.length; i++){
                elemsThem_ButtomRegister1Shadow[i].setAttribute("class","main_block_form_flex_Regester_boxMainBoxes_ButtomRegister Them_ButtomRegister1");
            }
        }
        
         (Them_ButtomRegister_img1 != null) ? Them_ButtomRegister_img1.style.backgroundImage="url('img/IAmpreds1.svg')": false;
         (Them_ButtomRegister_img2 != null) ? Them_ButtomRegister_img2.style.backgroundImage="url('img/IAmAStudent1.svg')": false;
         (Them_ButtomRegister_img3 != null) ? Them_ButtomRegister_img3.style.backgroundImage="url('img/RecrutAgens1.svg')": false;
    }
    console.log("hello");
    console.log(elem2.style.backgroundColor);
}