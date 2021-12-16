const startPage = document.querySelector('.start-page') as HTMLElement,
      mainPage = document.querySelector('.main-page') as HTMLElement,
      headerMainPage = document.querySelector('.header-main-page') as HTMLElement,
      headerStartPage = document.querySelector('.header-start-page') as HTMLElement,
      switchStartPage = document.querySelector('.switch-start-page') as HTMLElement;

function startPageFunction(): void {
  switchStartPage.addEventListener('click', () => {
    startPage.classList.toggle('hide');
    mainPage.classList.toggle('hide')
  })

  headerStartPage.addEventListener('click', () => {
    startPage.classList.remove('hide');
    mainPage.classList.add('hide')
  })

  headerMainPage.addEventListener('click', () => {
    startPage.classList.add('hide');
    mainPage.classList.remove('hide')
  })
}

export default startPageFunction;