window.onload = function() {
  banner();
  countTime();
  demo1();
  swiper();
  tab();
}

function banner() {
  let items = document.getElementsByClassName('item');
  let goPreBtn = document.getElementById('goPre');
  let goNextBtn = document.getElementById('goNext');
  let pointers = document.getElementsByClassName('pointer');
  let pointersLength = pointers.length;
  let itemsLength = items.length;
  let time = 0;

  let index = 0;

  let clearActive = function() {
    for(let i=0;i < itemsLength;i++) {
      items[i].className = 'item';
      pointers[i].className = 'pointer'
    }
  }

  let goIndex = function() {
    clearActive();
    items[index].className = 'item active';
    pointers[index].className = 'pointer active'
  }

  let goNext = function() {
    if(index < 3){
      index++;
    } else{
      index = 0;
    }
    goIndex();
  }

  let goPre = function() {
    if(index == 0){
      index = 3;
    } else{
      index--;
    }
    goIndex();
  }

  goNextBtn.addEventListener('click', function() {
      goNext();
      time = 0;
  })

  goPreBtn.addEventListener('click', function() {
    goPre();
    time = 0;
  })

  for(let i = 0;i < pointersLength; i++){
    pointers[i].addEventListener('click', function() {
      let pointerIndex = this.getAttribute('data-index')
      index = pointerIndex;
      goIndex();
      time = 0;
    })
  }

  setInterval(function() {
    time++;
    if(time == 50){
      goNext();
      time = 0;
    }
  }, 100)
}

function countTime(){
  let round = document.getElementsByClassName('round');
  let count = function () {
    let nowDate = new Date();
    let now = nowDate.getHours();
    let hour = Math.floor(now/2)*2
    round[0].innerHTML= hour + ":00 场";
  }
  count();
  setTimeout(count, 7200000);
}
function demo1() {
  let countDown = document.getElementsByClassName('count-down');
  let countDownSpan = countDown[0].getElementsByTagName('span');
  let nowDate = new Date();
  let nowHour = nowDate.getHours();
  let nowMinute = nowDate.getMinutes();
  let nowSecond = nowDate.getSeconds();
  const twoHours = 7200;
  let hourToSecond = nowHour*60*60;
  let minuteToSecond = nowMinute*60;
  let totalMilliseconds = hourToSecond + minuteToSecond + nowSecond;
  let leftSeconds = twoHours - (totalMilliseconds%7200);
  second = leftSeconds%60;
  minute = parseInt(leftSeconds/60)%60;
  hour = parseInt(leftSeconds/60/60);
  if (leftSeconds < 1) {return 0;}
    if(minute < 10 ) {
      minute = '0' + minute
    }
    if(second < 10) {
      second = '0' + second
    }
    countDownSpan[0].innerHTML = '0' + hour;
    countDownSpan[1].innerHTML = minute;
    countDownSpan[2].innerHTML = second;
  setTimeout(demo1, 1000);
}

function swiper() {
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let swiperList = document.getElementsByClassName("swiper-list")[0];
  let time = 0;

  let goRight = function() {
    if(right.className = 'abled') {
      right.className = 'disabled';
      left.className = ''
      swiperList.style.right = '992px';
    }
  }

  let goLeft = function() {
    if(left.className = 'abled') {
      left.className = 'disabled';
      right.className = ''
      swiperList.style.right = '0px'
    }
  }

  right.addEventListener('click', function(){
    goRight();
  })

  left.addEventListener('click', function(){
    goLeft();
  })

  setInterval(function() {
    if(time == 70){
      goRight();
    }
    if(time == 140){
      goLeft();
      time = 0;
    }
    time++;

  }, 100)
}

function tab() {
  let tabItems= document.querySelectorAll('.tab-list li')  
  for(i = 0; i < 2; i++) {
    tabItems[i].onmouseover = function() {
      for(i = 0; i < 2; i++) {
        tabItems[i].className = '';
      }
      this.className = 'active';
    }
  }
}