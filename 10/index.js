const lado = "A";

if(lado === "A" || lado === "E" || lado === "I" || lado === "O" || lado === "U"){
    console.log('Vogal maiúscula');
}else if(lado === "a" || lado === "e" || lado === "i" || lado === "o" || lado === "u"){
    console.log('Vogal minúscula');
}else if(lado ===  1 || lado === 2 || lado === 3 || lado === 4 || lado === 5 || lado === 6 || lado === 7 || lado === 9 || lado === 0){
    console.log('Número');
}else{
    console.log('Consoante');
}
