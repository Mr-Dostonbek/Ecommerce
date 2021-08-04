// navbar start

window.addEventListener("scroll", function(){
  let header = document.querySelector('.wrapper');
  if(window.scrollY > 1) {
    header.classList.add("sticky");
  } else{
    header.classList.remove("sticky");
  }
});
