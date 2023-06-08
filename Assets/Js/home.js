const nav_btn=document.querySelector(".hamburger")
nav_btn.addEventListener("click",function () {
    nav_btn.classList.toggle("is-active");
}) 

$('.nav_bg').slick({
    dots: true ,
    infinite: true,
    speed: 500,
    cssEase: 'linear'
  });
  const nav_btns_bar=document.querySelector(".nav_btns_bar")
  const nav_bar=document.querySelector(".nav_bar")
  console.log(nav_btns_bar);
  nav_btns_bar.addEventListener("click",function () {
      nav_bar.classList.toggle("nav_bar_active")
    })