import {observable, action, computed} from 'mobx';
import axios from 'axios';

class ConverterStore {
  @observable currencies = [{name: 'EUR', rate: 1}];
  @observable amount = 1;
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
  @action setAmount = newVal => {
    this.amount = newVal;
  }
  @action setSrc = index =>{
    this.srcCurrency = index;
  }
  @action setDest = index => {
    this.destCurrency = index;
  }
  @computed get destCurr() {
    let result= this.currencies[this.destCurrency].name;
    return result
  }
  @computed get convertedValue() {
    let result;
    try {
      result = this.amount*this.currencies[this.destCurrency].rate / this.currencies[this.srcCurrency].rate;
    } catch (e) {
      console.log(e);
      result = 0;
    }
    return result;
  }

}

const store = new ConverterStore();
export default store;
