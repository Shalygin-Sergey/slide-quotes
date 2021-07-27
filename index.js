function sliderFunction() {
  const data = [
    '«Если вы не готовы рискнуть обычным, вам придется довольствоваться заурядным», — Джим Рон.',
    '«Не спрашивайте, в чем нуждается мир, — спросите себя, что наполняет вас жизнью. Миру нужны люди, наполненные жизнью», — Говард Трумэн.', 
    '«Не ноша тянет вас вниз, а то, как вы ее несете», — Лу Хольц.' ,
    '«Возможности не приходят сами — вы создаете их», — Крис Гроссер. ',
    '«Лучший способ взяться за что-то — перестать говорить и начать делать». — Уолт Дисней ',
    '«Нет ничего невозможного. Само слово говорит: „Я возможно!“ (Impossible — Im possible)», — Одри Хепбёрн.',
    '«Доверяя свои мечты и цели бумаге, вы начинаете превращаться в человека, которым больше всего хотели бы быть.',
    '«Пусть ваше будущее будет в надежных руках — ваших собственных», — Марк Виктор Хансен.',
    '«Успех — это способность терпеть поражение за поражением без потери энтузиазма», — Уинстон Черчилль. ',
    '«Хотите знать, кто вы? Не спрашивайте. Действуйте! Действие будет описывать и определять вас», — Томас Джефферсон.',
    '«Я не боюсь умереть, но я боюсь не попытаться», — Jay Z.',
    '«Люди забудут, что вы говорили, люди забудут, что вы делали, но люди никогда не забудут, какие чувства вы у них вызвали», — Майя Анжелу.' 
    
  ];

  const colorData = [
    '#0066a1', 
    '#231f20', 
    '#bfbfbf',
    '##00b2a9', 
    '#a626aa', 
    '#6639b7',
    '#aea400', 
    '#ff6319'
  ];

  const body = document.querySelector('body');
  body.addEventListener('click', nextSlide);

  let count = 0;
  let slideCollection;

  function createDivSlide() {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement('div');
      div.classList.add('slide');
      div.style.background = colorData[0];
      if (i !== 0) div.classList.add('hide');
      let text = document.createElement('div');
      text.textContent = data[i];
      div.append(text);
      body.append(div);
    }
    slideCollection = document.querySelectorAll('.slide');
  }

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function nextSlide() {
    slideCollection[count].classList.add('hide');
    if ( count + 1 < data.length) {
      count++;

    } else {
      count = 0;
    }
    slideCollection[count].classList.remove('hide');
    let bg = colorData[randomInteger(0, colorData.length - 1)];
    slideCollection[count].style.background = bg;
  }

  createDivSlide();

}
document.addEventListener('DOMContentLoaded', sliderFunction)