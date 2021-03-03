const firstSq = document.querySelector('.first__square'),
      secondSq = document.querySelector('.second__square'),
      thirdSq = document.querySelector('.third__square'),
      firstBtn = document.querySelector('.first-btn');


function rotate() {
    let time = new Date(),
    first = time.getSeconds() * 10,
    second = time.getSeconds() * 10,
    third = time.getSeconds() * 10;

    firstSq.style = `transform: rotate(${first}deg)`;
    secondSq.style = `transform: rotate(${second}deg)`;
    thirdSq.style = `transform:rotate(${third}deg)`;

    setTimeout(() => rotate(), 1000);
}

firstBtn.addEventListener('click', function(){
  rotate();
});

const secondd = document.querySelector('.second_square'),
      firstt = document.querySelector('.first_square'),
      secondBtn = document.querySelector('.second-btn');

function focus() {
    let time = new Date(),
    sec = time.getSeconds() * 10;
    fir = time.getSeconds() * 10;

    firstt.style = `transform: translateX(${fir}px)`;
    secondd.style = `transform: translateX(${-sec}px)`;

    setTimeout(() => focus(), 1000);
}

secondBtn.addEventListener('click', function(){
    focus();
  });