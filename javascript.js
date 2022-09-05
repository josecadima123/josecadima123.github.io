function convertirQuintales(){
    var quintales=parseFloat(document.getElementById('quintales').value);
    var kilogramos=100*quintales;
    var texto=kilogramos;
    document.getElementById('kilogramos').value=texto;
    
}