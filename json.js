const student1 = {
    firstName: "Somchai",
    lastName: "Sukjai",
    age: 20,
    gpa: 3.11
};

const student2 = {
    firstName: "Anan",
    lastName: "Boonmee",
    age: 22,
    gpa: 1.8
};

const checkStudent = (std)=>{
    if(std.gpa > 2){
        return JSON.stringify(std);
    }else{
        return `คุณ ${std.firstName} พ้นสภาพ`;
    }
};

console.log(checkStudent(student1));
console.log(checkStudent(student2));


