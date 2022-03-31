const container = document.querySelector("#student-container");
const studentEl = document.querySelector('#student');
const pick = document.querySelector('button');

const students = [
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
const randomNumber = () => Math.floor(Math.random() * students.length);
pick.addEventListener('click', (e) => {
    e.preventDefault();
    pickedStudents.push(currentStudent);
    let random = randomNumber();
    currentStudent = students[random];
    studentEl.innerHTML = currentStudent;
    render();
});

function render() {
    container.innerHTML = '';
    pickedStudents.reverse().forEach((s) => {
        let tempEl = document.createElement('h1');
        tempEl.innerText = s;
        container.appendChild(tempEl);
    });
}