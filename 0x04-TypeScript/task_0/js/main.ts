interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'el',
    lastName: 'salvador',
    age: 38,
    location: 'burkin top',
}

const student2: Student = {
    firstName: 'john',
    lastName: 'bucknor',
    age: 78,
    location: 'the invisible boat mobile',
}

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let myVar = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let row = myVar.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();
    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}

document.body.appendChild(myVar);