{
  // Menu bar
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");// toggle class active nav bar
  });
  window.addEventListener("scroll", function(){
    menu.classList.remove("active"); // when click on any link in nav menu remove class active nav menu
  })
}

{
  // scroll btn and header nav fixed
  const scrollTop = document.querySelector(".scrollTop");
  const all__header = document.querySelector(".all__header");
  const header__nav = document.querySelector(".header__nav");
  window.onscroll = function () {
    if (window.scrollY >= 400) {
      scrollTop.classList.add("activeScroll"); // add class active to top
      all__header.classList.add("activeHeader"); // add class active to header
      header__nav.classList.add("activeNav"); // add class active to header 70px to 60px
    } else {
      scrollTop.classList.remove("activeScroll"); // remove class active to top
      all__header.classList.remove("activeHeader"); // remove class active to header
      header__nav.classList.remove("activeNav"); // remove class active to header 60px to 70px
    }
  };
  scrollTop.onclick = function () { //scroll to top when click on btn scroll
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
