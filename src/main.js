import './style.css'

const rates = {
    USD: 2100,
    EUR: 3100,
    SGD: 1500,
};

const exchangeToMMK = (amount, currency) => {
   const currencyRate = rates[currency];
   const result =  amount * currencyRate;
   return `${result} mmk`;
};
console.log(exchangeToMMK(20, "USD"));
console.log(exchangeToMMK(20, "EUR"));
console.log(exchangeToMMK(20, "SGD"));


const exchangeToCurrency = (amount, currency) => {
    const currencyRate = rates[currency];
    const result = amount / currencyRate;
    return `${result} ${currency}`;
}

console.log(exchangeToCurrency(142300, 'USD'));
console.log(exchangeToCurrency(142300, 'SGD'));
console.log(exchangeToCurrency(142300, 'EUR'));