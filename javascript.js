function convertirQuintales(){
    var quintales=parseFloat(document.getElementById('quintales').value);
    var kilogramos=100*quintales;
    var texto=kilogramos;
    document.getElementById('kilogramos').value=texto;
}
function convertirFarenheit(){
    var farenheit=parseFloat(document.getElementById('farenheit').value);
    var celsius=(farenheit-32)/1.8;
    var texto=celsius;
    document.getElementById('celsius').value=texto;
}
function calcularArea(){
    var base=parseFloat(document.getElementById('base').value);
    var altura=parseFloat(document.getElementById('altura').value);
    var area=base*altura/2;
    var texto=area;
    document.getElementById('area').value=texto;
}