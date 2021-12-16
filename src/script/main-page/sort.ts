import { arr } from './filter'
import card from "./card";

const cardContainer = document.querySelector('.card-containers') as HTMLElement;
const sortSelect = document.querySelector('.sort-select') as HTMLInputElement;

function sort() {
  sortSelect.addEventListener('change', function () {

    if (this.value === 'sort-name-max') {
      const sortedArr = arr.sort((a, b) => a.name.localeCompare(b.name))
      cardContainer.innerHTML = '';
      card(sortedArr)
      console.log('sort-name-max')
      console.log(arr)
    } else if (this.value === 'sort-name-min') {
      const sortedArr = arr.sort((a, b) => b.name.localeCompare(a.name))
      cardContainer.innerHTML = '';
      card(sortedArr)
      console.log('sort-name-min')
      console.log(arr)
    } else if (this.value === 'sort-count-max') {
      console.log('sort-count-max')
      console.log(arr)
    } else {
      console.log('sort-count-min')
      console.log(arr)
    }
  })
}

export default sort;