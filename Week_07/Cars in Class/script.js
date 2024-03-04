const addCarForm = document.querySelector("#addCar");
const searchCarForm = document.querySelector("#searchForm");

const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (event) => {
  event.preventDefault();

  let license = document.querySelector("#license").value;
  let carMaker = document.querySelector("#carMaker").value;
  let carModel = document.querySelector("#carModel").value;
  let carOwner = document.querySelector("#carOwner").value;
  let carPrice = document.querySelector("#carPrice").value;
  let color = document.querySelector("#color").value;

  const newCar = new Car(
    license,
    carMaker,
    carModel,
    carOwner,
    carPrice,
    color
  );

  cars.push(newCar);
  console.table(cars);

  displayTable();

  // addCarForm.reset();
};

const displayTable = () => {
  const table = document.querySelector("#carsTable");
  table.innerHTML = table.rows[0].innerHTML;
  cars.forEach((car) => {
    const row = table.insertRow(-1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

const searchCar = (event) => {
  const licenseQuery = document
    .querySelector("#search_license")
    .value.trim()
    .toLowerCase();
  const display = document.querySelector("#searchResult");

  if (!licenseQuery) {
    display.textContent = "Please enter a license plate to search";
    event.preventDefault();
    return;
  }

  try {
    cars.find(({ license }) => license.toLowerCase().includes(lienceQuery));
  } catch (error) {
    display.textContent = result
      ? `Found ${result.carMaker}, ${result.carModel},${result.carOwner} `
      : "No car with that license plate";
  }

  event.preventDefault();

};

addCarForm.addEventListener("submit", addCar);
searchCarForm.addEventListener("submit", searchCar);
