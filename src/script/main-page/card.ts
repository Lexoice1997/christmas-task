const cardContainer = document.querySelector('.card-containers') as HTMLElement;

function card(data) {
  data.forEach(item => {
    let flag;
    if (item.favorite) {
      flag = 'да';
    } else {
      flag = 'нет';
    }
    let cardItem = `<div class="card">
          <h2 class="card-title">${item.name}</h2>
          <div class="card-img" style="background-image: url('./assets/toys/${item.num}.png')"></div>
          <div class="card-description">
            <p class="count">Количество: <span>${item.count}</span></p>
            <p class="year">Год покупки: <span>${item.year}</span></p>
            <p class="shape">Форма: <span>${item.shape}</span></p>
            <p class="color">Цвет: <span>${item.color}</span></p>
            <p class="size">Размер: <span>${item.size}</span></p>
            <p class="favorite">Любимая: <span>${flag}</span></p>
          </div>
          <div class="ribbon"></div>
        </div>`

    cardContainer.innerHTML += cardItem;
  })
}

export default card;