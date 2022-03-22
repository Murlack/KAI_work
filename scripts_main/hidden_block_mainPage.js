
function hiddenMainPage_butTopMenu(HiddenMainPage_butTopMenuVar){
    HiddenMainPage_butTopMenuVar.style.display = DisplayStyleCheck(HiddenMainPage_butTopMenuVar);
}
function DisplayStyleCheck(HiddenMainPage_butTopMenuVar){
    let p1 = HiddenMainPage_butTopMenuVar.style.display;
    if(p1 == 'none'){
        console.log(p1+'- flex');
        return 'flex';
    }
    else{
        console.log(p1+'- none');
        return 'none';
    }
}