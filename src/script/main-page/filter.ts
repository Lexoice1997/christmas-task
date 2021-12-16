import card from "./card";
import data from '../../data';

const filterBtn = document.querySelectorAll('.filter-btn');
const filterBtnShape = document.querySelectorAll('.filter-btn-shape');
const filterBtnColor = document.querySelectorAll('.filter-btn-color');
const filterBtnSize = document.querySelectorAll('.filter-btn-size');
const cardContainer = document.querySelector('.card-containers') as HTMLElement;
const favoriteBtn = document.querySelector('.favorite-input-label') as HTMLInputElement;

export let arr: any = data;

function filter() {
  filterBtn.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
      checkActiveClass()
      cardContainer.innerHTML = '';
      card(arr)
    })
  })

  favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('favorite-btn-active')
    checkActiveClass()
    cardContainer.innerHTML = '';
    card(arr)
  })

  card(arr);
}

function checkActiveClass() {
  let filterActive: Array<string | undefined> = [];
  let arrShapeActive: Array<string | undefined> = [];
  let arrColorActive: Array<string | undefined> = [];
  let arrSizeActive: Array<string | undefined> = [];
  let favoriteActive: boolean = false;

  let activeArray = [filterActive, arrShapeActive, arrColorActive, arrSizeActive];
  let btnArray = [filterBtn, filterBtnShape, filterBtnColor, filterBtnSize];

  if (favoriteBtn.classList.contains('favorite-btn-active')) {
    favoriteActive = true;
  }

  btnArray.forEach((item, index) => {
    item.forEach(task => {
      if (task.classList.contains('active')) {
        let filterName: string | undefined = (task as HTMLElement).dataset.filter;
        activeArray[index].push(filterName)
      }
    })
  })

  if (filterActive.length > 0) {

    if (arrShapeActive.length > 0) {
      arr = data.filter(cont => {
        for (let prop in cont) {
          if (inArray(cont[prop], arrShapeActive)) {
            return cont;
          }
        }
      });

      if (arrColorActive.length > 0) {
        arr = arr.filter(cont => {
          for (let prop in cont) {
            if (inArray(cont[prop], arrColorActive)) {
              return cont;
            }
          }
        })

        if (arrSizeActive.length > 0) {
          arr = arr.filter(cont => {
            for (let prop in cont) {
              if (inArray(cont[prop], arrSizeActive)) {
                return cont
              }
            }
          })
        }
      }

      if (arrSizeActive.length > 0) {
        arr = arr.filter(cont => {
          for (let prop in cont) {
            if (inArray(cont[prop], arrSizeActive)) {
              return cont
            }
          }
        })
      }
    }

    if (arrColorActive.length > 0 && arrShapeActive.length <= 0) {
      arr = data.filter(cont => {
        for (let prop in cont) {
          if (inArray(cont[prop], arrColorActive)) {
            return cont;
          }
        }
      })

      if (arrSizeActive.length > 0) {
        arr = arr.filter(cont => {
          for (let prop in cont) {
            if (inArray(cont[prop], arrSizeActive)) {
              return cont
            }
          }
        })
      }
    }

    if (arrSizeActive.length > 0 && arrShapeActive.length <= 0 && arrColorActive.length <= 0) {
      arr = data.filter(cont => {
        for (let prop in cont) {
          if (inArray(cont[prop], arrSizeActive)) {
            return cont
          }
        }
      })
    }

    if (favoriteActive) {
      arr = arr.filter(cont => cont.favorite);
    }
  } else {
    if (favoriteActive) {
      arr = data.filter(cont => cont.favorite);
    } else {
      arr = data;
    }
  }
}

function inArray(elem, arr){
  return arr.indexOf(elem) !== -1;
}

export default filter;