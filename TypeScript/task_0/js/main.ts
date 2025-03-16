interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  location: 'New York',
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'Chicago',
}

const studentsList: Array<Student> = [student1, student2]

function renderTable(students: Array<Student>): void {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  headerRow.insertCell().textContent = 'First Name';
  headerRow.insertCell().textContent = 'Location';

  students.forEach(student => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
