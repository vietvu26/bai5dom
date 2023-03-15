const form = document.querySelector('.form');
const btnCalc = document.getElementById('.btnCalc');
const resultView = document.querySelector('.result');
const heightUser = document.forms["BMIForm"]["heightUser"];
const weightUser = document.forms["BMIForm"]["weightUser"];
const genderUser = document.querySelectorAll('input[name="gender"]');
let gender = '';

genderUser.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    gender = e.target.value;
  })
})

const calcBMIOfMale = (value) => {
  if (value <= 0) return false;
  if (value < 20.7) return 'Gầy';
  if (value >= 20.7 && value < 26.4) return `${value} | Bình thường`;
  if (value >= 26.4 && value < 27.8) return `${value} | Thừa cân nhẹ`; 
  if (value >= 27.8 && value < 31.1) return `${value} | Trên lý tưởng`; 
  else return `${value} | Béo phì`; 
}

const calcBMIOFemale = (value) => {
  if (value <= 0) return false;
  if (value < 19.1) return 'Gầy';
  if (value >= 19.1 && value < 25.8) return `${value} | Bình thường`;
  if (value >= 25.8 && value < 27.3) return `${value} | Thừa cân nhẹ`; 
  if (value >= 27.3 && value < 32.3) return `${value} | Trên lý tưởng`; 
  else return `${value} | Béo phì`; 
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bmiValue = Number.parseFloat(eval(weightUser.value/(heightUser.value**2))).toFixed(2);
  if (gender === 'male') {
    resultView.textContent = calcBMIOfMale(bmiValue);
  } else {
    resultView.textContent = calcBMIOFemale(bmiValue);
  }
});

function render() {
}

function initialApp() {
  render();
}

initialApp();