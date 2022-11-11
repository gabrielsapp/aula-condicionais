const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if(totalDeRendimentos < 300000){
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} 
else if(aposentada == true || portadoraDeDoenca == true){
    console.log('ISENTA');

}else{
    console.log('PEGA LEAO');
}