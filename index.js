let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
    showHeaders(headerIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
    showHeaders(headerIndex -= 1);
  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    } 
    if (n < 1) {
      slideIndex = slides.length
  }

  for (let slide of slides) {
      slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
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
