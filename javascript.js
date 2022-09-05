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
function calcularPerimetro(){
    var lado1=parseFloat(document.getElementById('lado1').value);
    var lado2=parseFloat(document.getElementById('lado2').value);
    var lado3=parseFloat(document.getElementById('lado3').value);
    var perimetro=lado1+lado2+lado3;
    var texto=perimetro;
    document.getElementById('perimetro').value=texto; 
}
function paresImpares(numero){
    var texto;
    if(numero%2==0)
    {
        texto="el numero es par";
    }
    else 
    {
        texto="el numero es impar";
    }
    return texto;
}