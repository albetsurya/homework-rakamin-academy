class Registrant {
  constructor(name, age, allowance) {
    this.name = name;
    this.age = age;
    this.allowance = allowance;
  }

  getResume() {
    return `Rata-rata pendaftar memiliki uang saku sebesar ${this.allowance} dengan rata-rata umur ${this.age}`;
  }
}

const registrantsList = [];

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);
  const allowance = parseInt(document.getElementById('allowance').value);

  if (name.length < 10 || age < 25 || allowance < 100000 || allowance > 1000000) {
    alert('Mohon untuk mengisi formulir dengan benar!');
    return;
  }

  const registrant = new Registrant(name, age, allowance);
  registrantsList.push(registrant);
  updateList();
  document.getElementById('registration-form').reset();
});

function updateList() {
  const tableBody = document.getElementById('list-registrant');
  const resumeInfo = document.getElementById('resume-info');
  tableBody.innerHTML = '';
  
  registrantsList.forEach(registrant => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${registrant.name}</td>
      <td>${registrant.age}</td>
      <td>${registrant.allowance}</td>
      <td>${registrant.getResume()}</td>
    `;
  });

  const ageTotal = registrantsList.reduce((acc, registrant) => acc + registrant.age, 0);
  const allowanceTotal = registrantsList.reduce((acc, registrant) => acc + registrant.allowance, 0);
  const ageAverage = registrantsList.length > 0 ? ageTotal / registrantsList.length : 0;
  const allowanceAverage = registrantsList.length > 0 ? allowanceTotal / registrantsList.length : 0;
  resumeInfo.textContent = `Rata-rata pendaftar memiliki uang saku sebesar ${allowanceAverage} dengan rata-rata umur ${ageAverage}`;
}

updateList();
