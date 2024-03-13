
let firstCurrencyInput = document.getElementById('firstCurrency');
let secondCurrencyInput = document.getElementById('secondCurrency');

//Pegar currencies de https://openexchangerates.org/api/currencies.json e criar uma opção(option) para cada moeda no input select

window.onload = () => {
  fetch('https://openexchangerates.org/api/currencies.json')
  .then((res) => res.json())
  .then((data) => {
    let currencies = Object.keys(data);

    for (let i = 0; i < currencies.length; i++) {
      
      let option = document.createElement('option');
      option.textContent = currencies[i];
      option.value = currencies[i];
      firstCurrencyInput.appendChild(option)
    }

    for (let i = 0; i < currencies.length; i++) {
      
      let option = document.createElement('option');
      option.textContent = currencies[i];
      option.value = currencies[i];
      secondCurrencyInput.appendChild(option)
    }
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
}
