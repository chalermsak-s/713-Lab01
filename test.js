let score = 40;
let result;
if(score >= 80 && score < 100){
    result = 'เกรด A';
}
if(score >= 60 && score < 80){
    result = 'เกรด B';
}if(score >= 50 && score < 60){
    result = 'เกรด C';
}
if(score < 50){
    result = 'เกรด F';
}
console.log(result)