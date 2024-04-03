var splide = new Splide('.splide', {
    type   : 'loop',
    width: "50vw",
    pagination: false,
    fixedWidth: "500px",
    focus: 'center',
    arrows: true,
    rewind: true,
    perPage: 3,
    perMove: 1,
    classes: {
      arrows: 'splide__arrows',
      arrow : 'splide__arrow',
      prev  : 'prev',
      next  : 'next',
    }
  });
  
  splide.mount();

  document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });