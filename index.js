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
    if (students.length > 1){
        pickedStudents.push(currentStudent);
        render(); 
        students = students.filter(s => s !== currentStudent);
        const randomNumber = Math.floor(Math.random() * students.length);
        currentStudent = students[randomNumber];
        studentEl.innerHTML = currentStudent;
    } else {
        pickedStudents.push(currentStudent);
        render();
        studentEl.innerHTML = 'All Students Have Gone!'
        pick.innerHTML = 'RESET'
        pick.setAttribute('onClick', 'window.location.reload()')
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