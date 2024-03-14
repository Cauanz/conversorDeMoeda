
let firstCurrencyInput = document.getElementById('firstCurrency');
let secondCurrencyInput = document.getElementById('secondCurrency');

//Pegar currencies de https://openexchangerates.org/api/currencies.json e criar uma opção(option) para cada moeda no input select

window.onload = () => {
  fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_iJgIky3MdXbi03xXecRObIUECHYr579od9z7aJz4')
  .then((res) => res.json())
  .then((data) => {
/*     let currencies = Object.keys(data);
    let currenciesOrigin = Object.values(data); */
      console.log(data.data.EUR)

      //* Estamos estudando frontend, um pouco requisições, aqui não estamos estudando autenticação, talvez estudar a tarde, aqui é HTML, DOM manipulation, e uso de APIs
      //TODO - Dar um jeito de fazer uma lista/array com todos os nomes das moedas ou usar de alguma forma direta para colocar nos options

/*     for (let i = 0; i < currencies.length; i++) {
      
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
    } */
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
}


firstCurrencyInput.addEventListener('change', () => {
  
  fetch("")

})