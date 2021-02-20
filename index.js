const track = document.querySelector('.slider-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const item = document.querySelector('.item');
let itemIndex = 1;
let value = 0;

next.addEventListener('click', () => {
    value -= 400;

    if (value < -800) {
        value = 0;
    }

    track.style.transform = `translateX(${value}px)`;
    showItems(itemIndex += 1);
    showHeaders(headerIndex += 1);
});

prev.addEventListener('click', () => {
    value += 400;

    if (value > 0) {
        value = -800;
    }

    track.style.transform = `translateX(${value}px)`;
    showItems(itemIndex -= 1);
    showHeaders(headerIndex -= 1);
});

showItems(itemIndex);

function currentItem(n) {
    showItems(itemIndex = n);
}

function showItems(n) {
    let items = document.getElementsByClassName("item");
    
    if (n > items.length) {
        itemIndex = 1
    } 
    if (n < 1) {
        itemIndex = items.length
  }

  for (let item of items) {
    item.style.display = "none";
  }

  items[itemIndex - 1].style.display = "block";
}









let headerIndex = 1;

showHeaders(headerIndex);

function showHeaders(n) {
    let headers = document.getElementsByClassName("header");
    
    if (n > headers.length) {
        headerIndex = 1
    } 
    if (n < 1) {
        headerIndex = headers.length
  }

  for (let header of headers) {
    header.style.display = "none";
  }

  headers[headerIndex - 1].style.display = "block";
}
