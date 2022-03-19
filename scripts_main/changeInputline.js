function mouseUpInLogin(obj){
    changeInputTextINLogin(obj);
}
function ConstructValidationInput(obj){
    this.obj = obj;
    this.Validation = () => {
        if(this.obj.value != '') {this.obj.style.borderColor = "green"; console.log(this.obj.style.borderColor); return true;} else{ this.obj.style.borderColor = "red"; console.log(this.obj.style.borderColor); return false;}
    }
}
var arrLoginInputChange = [2];
function changeInputTextINLogin (obj) {
    let validObj = new ConstructValidationInput(obj);
    switch(obj.id){
        case "InputFieldName":
                arrLoginInputChange[0] = validObj.Validation();
                console.log(arrLoginInputChange[0]);
            break;
        case "InputFieldPassword":
                arrLoginInputChange[1] = validObj.Validation();
                console.log(arrLoginInputChange[1]);
            break;
        default:
            alert("error in changeinputline.js/10-/-16");
    }
}