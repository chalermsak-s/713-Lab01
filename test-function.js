function greet(name){
    return 'Hello ' + name
}
function sumScore(student){
    let element = 0;
    for (let index = 0; index < student.length; index++) {
        element += student[index];
    }
    return element
}
const stdData = [10,20,30];
console.log(greet('John')+"Score "+sumScore(stdData))

