
let firstCurrencyInput = document.getElementById('firstCurrency');
let secondCurrencyInput = document.getElementById('secondCurrency');
let inputCurrency = document.getElementById("firstValue");
let outputCurrency = document.getElementById("secondValue");


//Pegar currencies de https://openexchangerates.org/api/currencies.json e criar uma opção(option) para cada moeda no input select

window.onload = () => {
  fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_iJgIky3MdXbi03xXecRObIUECHYr579od9z7aJz4')
  .then((res) => res.json())
  .then((data) => {

    let currencies = Object.keys(data.data);

    let currenciesOrigin = [];
    for (const coin in data.data) {
      console.log(data.data[coin].name);
      currenciesOrigin.push(data.data[coin].name);
    }
      /* console.log(data.data) */

      //* Estamos estudando frontend, um pouco requisições, aqui não estamos estudando autenticação, talvez estudar a tarde, aqui é HTML, DOM manipulation, e uso de APIs

    for (let i = 0; i < currencies.length; i++) {
      
      let option = document.createElement('option');
      option.textContent = `${currenciesOrigin[i]} : ${currencies[i]}`;
      option.value = currencies[i];
      firstCurrencyInput.appendChild(option)
      firstCurrencyInput.value = currencies[0]
    }

    for (let i = 0; i < currencies.length; i++) {
      
      let option = document.createElement('option');
      option.textContent = `${currenciesOrigin[i]} : ${currencies[i]}`;
      option.value = currencies[i];
      secondCurrencyInput.appendChild(option)
      secondCurrencyInput.value = currencies[0]
    }
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
}

//Quando a primeira moeda mudar
firstCurrencyInput.addEventListener('change', () => {
  const baseCurrency = firstCurrencyInput.value;
  const secondCurrency = secondCurrencyInput.value;
  console.log(baseCurrency)
  
  const currencyTax = CalcCurrency(baseCurrency, secondCurrency);



})

//Quando a segunda moeda mudar
secondCurrencyInput.addEventListener('change', () => {
  const baseCurrency = firstCurrencyInput.value;
  const secondCurrency = secondCurrencyInput.value;
  
  CalcCurrency(baseCurrency, secondCurrency)
  .then((data) => console.log(data))

  //TODO - Concertar isso, tratar a promisse acima para devolver a taxa de cambio da função que faz fetch abaixo

  let userInput = inputCurrency.value;
  let output = outputCurrency;

  console.log(userInput, currencyTax)

  output.textContent = userInput * currencyTax;

})


const CalcCurrency = (actualCurrency, destinyCurrency) => {
  return fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_iJgIky3MdXbi03xXecRObIUECHYr579od9z7aJz4&currencies=${destinyCurrency}&base_currency=${actualCurrency}`)
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
}