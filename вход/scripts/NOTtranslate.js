function defineLang(obj,Lang){
    var body = document.querySelector("body").getAttribute("class");
    switch(obj.id){
        case "RU":
            Lang.value = 'Ru';
            TranslateLang(obj.id, body);
        break;
        case "ENG":
            Lang.value = 'Eng';
            TranslateLang(obj.id, body);
        break;
        case "中國人":
            Lang.value =  '中國人';
            TranslateLang(obj.id, body);
        break;
        case "Spanish":
            Lang.value = 'Spanish';
            TranslateLang(obj.id, body);
        break;
        default:
            Lang.value = 'language not defined';
    }
    
}
function TranslateLang(defineLang,BodyClass){
    let arrOBJ = [];
    
    switch(BodyClass){
        case "indexEnterWindow":
            //arrOBJ[] = document.querySelector(".LengText-");
            arrOBJ[0] = document.querySelector(".LengText-back");
            arrOBJ[1] = document.querySelector(".LengText-authorization");
            arrOBJ[2] = document.querySelector(".LengText-DataEntryPrompt");
            arrOBJ[3] = document.querySelector("#InputFieldName");
            arrOBJ[4] = document.querySelector("#InputFieldPassword");
            arrOBJ[5] = document.querySelector("#InputEnterButtom");
            arrOBJ[6] = document.querySelector("#ForgotPassword");
            arrOBJ[7] = document.querySelector(".LengText-TwoDashes");
            arrOBJ[8] = document.querySelector(".LengText-Question-vperTut");
            arrOBJ[9] = document.querySelector(".LengText-RegisterSentence-Auto");
            arrOBJ[10] = document.querySelector(".LengText-PrivacyPolicy");
            arrOBJ[11] = document.querySelector(".LengText-TermsOfUse");
            arrOBJ[12] = document.querySelector(".LengText-WhiRigh");
            
            arrOBJ[13] = document.querySelector(".LengText-registration");
            arrOBJ[14] = document.querySelector(".LengText-TypeOfRegistration");
            arrOBJ[15] = document.querySelector(".LengText-ThereIsProfel");
            arrOBJ[16] = document.querySelector(".LengText-login");

            switch(defineLang){
                case "RU":
                    (arrOBJ[0] != null) ? arrOBJ[0].innerText = 'Назад': false;
                    
                    
                    console.log(arrOBJ[0]);
                    (arrOBJ[1] != null) ? arrOBJ[1].innerText ='Авторизация': false;
                    
                    console.log(arrOBJ[1]);
                    (arrOBJ[2] != null) ? arrOBJ[2].innerText = 'Введите данные своей учетной записи': false;
                    
                    (arrOBJ[3] != null) ? arrOBJ[3].placeholder ='Имя пользователя': false;
                    
                    (arrOBJ[4] != null) ? arrOBJ[4].placeholder ='Пароль': false;
                    
                    (arrOBJ[5] != null) ? arrOBJ[5].value ='Авторизоваться': false;
                    
                    (arrOBJ[6] != null) ? arrOBJ[6].innerText ='Я не помню пароль': false;
                    
                    (arrOBJ[7] != null) ? arrOBJ[7].innerText ='Или': false;
                    
                    (arrOBJ[8] != null) ? arrOBJ[8].innerText ='Впервые тут?': false;
                    
                    (arrOBJ[9] != null) ? arrOBJ[9].innerText ='Зарегистрируйтесь': false;
                   
                    (arrOBJ[10] != null) ? arrOBJ[10].innerText ='Политика конфидециальности': false;
                    
                    (arrOBJ[11] != null) ? arrOBJ[11].innerText ='Условия пользования': false;
                    
                    (arrOBJ[12] != null) ?  arrOBJ[12].innerText ='©2021 КНИТУ КАИ. Все права защищены': false;

                    (arrOBJ[13] != null) ? arrOBJ[13].innerText ="Регистрация" : false;
                    
                    (arrOBJ[14] != null) ? arrOBJ[14].innerText ="Выберите вид регистрации" : false;
                    
                    (arrOBJ[15] != null) ? arrOBJ[15].innerText ="Уже есть профиль?" : false;
                    
                    (arrOBJ[16] != null) ? arrOBJ[16].innerText ="Авторизуйтесь" : false;
                   
                break;

                case "ENG":
                    
                    (arrOBJ[0] != null) ? arrOBJ[0].innerText = 'back': false;
                    console.log(arrOBJ[0]);
                    
                    (arrOBJ[1] != null) ? arrOBJ[1].innerText ='Login': false;
                    console.log(arrOBJ[1]);
                    
                    (arrOBJ[2] != null) ? arrOBJ[2].innerText = 'Enter your account details': false;
                    
                    (arrOBJ[3] != null) ? arrOBJ[3].placeholder ='Username': false;
                    
                    (arrOBJ[4] != null) ? arrOBJ[4].placeholder ='Password': false;
                    
                    (arrOBJ[5] != null) ? arrOBJ[5].value ='Login': false;
                    
                    (arrOBJ[6] != null) ? arrOBJ[6].innerText ='I do not remember the password': false;
                    
                    (arrOBJ[7] != null) ? arrOBJ[7].innerText ='or': false;
                    
                    (arrOBJ[8] != null) ? arrOBJ[8].innerText ='First time here?': false;
                    
                    (arrOBJ[9] != null) ? arrOBJ[9].innerText ='Register': false;
                    
                    (arrOBJ[10] != null) ? arrOBJ[10].innerText ='Privacy Policy': false;
                    
                    (arrOBJ[11] != null) ? arrOBJ[11].innerText ='Terms of use': false;
                    
                    (arrOBJ[12] != null) ? arrOBJ[12].innerText ='©2021 KNITU KAI. All rights reserved': false;

                    (arrOBJ[13] != null) ? arrOBJ[13].innerText ="Registration" : false;
                    
                    (arrOBJ[14] != null) ? arrOBJ[14].innerText ="Select the type of registration" : false;
                    
                    (arrOBJ[15] != null) ? arrOBJ[15].innerText ="Already have a profile?" : false;
                    
                    (arrOBJ[16] != null) ? arrOBJ[16].innerText ="Log in" : false;
                    
                break;
                
                case "中國人":
                    alert("Функкция перевода не доступна/ Translation function is not availabl");
                break;

                case "Spanish":
                    alert("Функкция перевода не доступна/ Translation function is not availabl");
                break;
                default:
                    return 0;
            }
        break;

        default:
            return 0;
    }
    
}