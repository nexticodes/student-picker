const container = document.querySelector("#student-container");
const studentEl = document.querySelector('#student');
const pick = document.querySelector('button');

let students = [
    'Emon',
    'Alana',
    'Amber',
    'Benjamin',
    'Charlie',
    'Corey',
    'Danielle',
    'David',
    'Griselle',
    'Hong',
    'Inessa',
    'Jacob',
    'Jazmine',
    'JonQuil',
    'Jordi',
    'Larissa',
    'Martin',
    'Myles',
    'Yujia',
];

const pickedStudents = [];
let currentStudent = '';
pick.addEventListener('click', (e) => {
    e.preventDefault();
    if (students.length > 0){
        pickedStudents.push(currentStudent);
        render(); 
        const randomNumber = Math.floor(Math.random() * students.length);
        currentStudent = students[randomNumber];
        students = students.filter(s => s !== currentStudent);
        studentEl.innerHTML = currentStudent;
    } else {
        studentEl.innerHTML = 'All Students Have Gone!'
    }
});

function render() {
    container.innerHTML = '';
    pickedStudents.reverse().forEach((s) => {
        let tempEl = document.createElement('h1');
        tempEl.innerText = s;
        container.appendChild(tempEl);
    });
}