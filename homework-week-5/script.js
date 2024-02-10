"use strict";

class Registrant {
  constructor(name, age, allowance) {
    this.name = name;
    this.age = age;
    this.allowance = allowance;
  }

  getResume() {
    return `${this.name} memiliki uang saku sebesar ${this.allowance} dengan umur ${this.age}`;
  }
}

const form = document.getElementById("registration-form");

const nameInput = document.getElementById("validationCustom01");
const ageInput = document.getElementById("validationCustom02");
const allowanceInput = document.getElementById("validationCustom03");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const nameValue = nameInput.value.trim();
  const ageValue = ageInput.value.trim();
  const allowanceValue = allowanceInput.value.trim();
  let isValid = true;

  if (!nameValue) {
    setError(nameInput, "Please enter your name.");
    isValid = false;
  } else if (nameValue.length < 10) {
    setError(nameInput, "Name must be at least 10 characters.");
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  if (!ageValue) {
    setError(ageInput, "Please enter your age.");
    isValid = false;
  } else if (parseInt(ageValue) < 25) {
    setError(ageInput, "Age must be at least 25.");
    isValid = false;
  } else {
    setSuccess(ageInput);
  }

  if (!allowanceValue) {
    setError(allowanceInput, "Please enter your allowance.");
    isValid = false;
  } else {
    const allowanceIntValue = parseInt(allowanceValue);
    if (allowanceIntValue < 100000 || allowanceIntValue > 1000000) {
      setError(allowanceInput, "Allowance must be between 10000 and 1000000.");
      isValid = false;
    } else {
      setSuccess(allowanceInput);
    }
  }

  if (isValid) {
    saveRegistrant();
  }
};

const registrantsList = [];

function saveRegistrant() {
  const name = nameInput.value;
  const age = ageInput.value;
  const allowance = allowanceInput.value;

  const registrant = new Registrant(name, age, allowance);
  registrantsList.push(registrant);
  updateList();
  document.getElementById("registration-form").reset();
}

function updateList() {
  const tableBody = document.getElementById("list-registrant");
  const resumeInfo = document.getElementById("resume-info");
  tableBody.innerHTML = "";

  registrantsList.forEach((registrant) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${registrant.name}</td>
      <td>${registrant.age}</td>
      <td>${registrant.allowance}</td>
      <td>${registrant.getResume()}</td>
    `;
  });

  const ageTotal = registrantsList.reduce(
    (acc, registrant) => acc + parseInt(registrant.age),
    0
  );
  const allowanceTotal = registrantsList.reduce(
    (acc, registrant) => acc + parseInt(registrant.allowance),
    0
  );
  const ageAverage =
    registrantsList.length > 0 ? ageTotal / registrantsList.length : 0;
  const allowanceAverage =
    registrantsList.length > 0 ? allowanceTotal / registrantsList.length : 0;
  resumeInfo.textContent = `Rata-rata pendaftar memiliki uang saku sebesar ${allowanceAverage} dengan rata-rata umur ${ageAverage}`;
}
