'use strict';

let texts = [
  'hello world',
  'how are you?',
  'what are you doing?',
  'see you later',
  'i love javascript',
  'Im good! have a good day!'
],
          p = document.getElementById('texts'),
          checkTexts = [],
          typeMissConter = document.getElementById('typeMissCounter'),
          typeMissIndex   = 0;

// createText function
function createTexts () {
  // 初期化
  p.textContent = '';

  // ランダムで配列の範囲内からテキストを挿入
  let rndinit = Math.floor(Math.random() * texts.length);
  checkTexts = texts[rndinit].split('').map(function(value){
    let span =  document.createElement('span');
    // import text for p
    span.textContent = value;
    p.appendChild(span);
    return span;
  });
}

// keyDown function
// EventListenr registry
document.addEventListener('keydown',keyDown);

function keyDown (e) {
  if( e.key === checkTexts[0].textContent ){
    checkTexts[0].classList.add('activeText');
    checkTexts.shift();
    if(!checkTexts.length) {
      setTimeout(createTexts,1000);
    }
  } else {
    checkTexts[0].classList.add('difficult');
    typeMissIndex++;
    typeMissConter.textContent = typeMissIndex;
  }
}
typeMissConter.textContent = typeMissIndex;
createTexts();