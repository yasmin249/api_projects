let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

function addChar(char) {
  display.value += char;
}

function addFunc(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = '';
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    if (result !== undefined) {
      history.unshift(`${display.value} = ${result}`);
      if (history.length > 5) history.pop();
      display.value = result;
    }
  } catch (e) {
    alert("Invalid Expression");
  }
}

function toggleHistory() {
  document.getElementById('history').classList.toggle('hidden');
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
}

function toggleUnitConverter() {
  document.getElementById('unitConverter').classList.toggle('hidden');
}

const units = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    inch: 0.0254,
    foot: 0.3048
  },
  area: {
    sqm: 1,
    sqkm: 1000000,
    sqft: 0.092903,
    acre: 4046.86,
    hectare: 10000
  },
  temperature: {
    Celsius: "C",
    Fahrenheit: "F",
    Kelvin: "K"
  }
};

function populateUnits() {
  const type = document.getElementById('unitType').value;
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  fromUnit.innerHTML = '';
  toUnit.innerHTML = '';

  if (type === "temperature") {
    for (let u in units.temperature) {
      fromUnit.innerHTML += `<option value="${u}">${u}</option>`;
      toUnit.innerHTML += `<option value="${u}">${u}</option>`;
    }
  } else {
    for (let u in units[type]) {
      fromUnit.innerHTML += `<option value="${u}">${u}</option>`;
      toUnit.innerHTML += `<option value="${u}">${u}</option>`;
    }
  }
}

function convertUnit() {
  const type = document.getElementById('unitType').value;
  const value = parseFloat(document.getElementById('unitInput').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const result = document.getElementById('unitResult');

  if (type === "temperature") {
    let converted;
    if (from === to) converted = value;
    else if (from === "Celsius" && to === "Fahrenheit") converted = (value * 9/5) + 32;
    else if (from === "Fahrenheit" && to === "Celsius") converted = (value - 32) * 5/9;
    else if (from === "Celsius" && to === "Kelvin") converted = value + 273.15;
    else if (from === "Kelvin" && to === "Celsius") converted = value - 273.15;
    else if (from === "Fahrenheit" && to === "Kelvin") converted = ((value - 32) * 5/9) + 273.15;
    else if (from === "Kelvin" && to === "Fahrenheit") converted = ((value - 273.15) * 9/5) + 32;
    result.textContent = `Result: ${converted.toFixed(2)} ${to}`;
  } else {
    let base = value * units[type][from];
    let converted = base / units[type][to];
    result.textContent = `Result: ${converted.toFixed(2)} ${to}`;
  }
}
