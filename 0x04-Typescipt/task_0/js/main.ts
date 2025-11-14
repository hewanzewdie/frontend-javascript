interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mihret',
  lastName: 'Daniel',
  age: 21,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Ribka',
  lastName: 'Muluye',
  age: 23,
  location: 'Mekele',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
