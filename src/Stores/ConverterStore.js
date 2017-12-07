import {observable, action, computed} from 'mobx';
import axios from 'axios';

class ConverterStore {
  @observable currencies = [];
  @observable amount = 0;
  @observable srcCurrency = 0;
  @observable destCurrency = 0;

  @action addCurrency = currency => {
    this.currencies.push(currency);
  }
  @action fetchCurrencies = () => {
    axios.get('https://api.fixer.io/latest')
      .then(response => {
        let currencies
        const rates = response.data.rates;
        const names = Object.keys(rates)
        currencies = names.map(currencyName => {return {name: currencyName, rate: null} });
        names.forEach((currencyName, i) => currencies[i].rate = rates[currencyName]);
        currencies.push({name: response.data.base , rate:1})
        currencies.sort((a, b) => {
          return a.name > b.name ? 1 :
            a.name < b.name ? -1 : 0
        });
        this.currencies = currencies;
      }).catch(err => {console.log(err)});
  }
  @action changeSrc = index =>{
    this.srcCurrency = index;
  }
  @action changeDest = index => {
    this.destCurrency = index;
  }
  @computed get convertedValue() {
    return this.amount*this.currencies[this.destCurrency].rate/this.currencies[this.srcCurrency].rate;
  }

}

const store = new ConverterStore();
export default store;
