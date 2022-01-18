$(document).ready(function () {
  $(".faq_line").click(function () {
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".show_more").click(function () {
    $(this).closest(".text_shortner").toggleClass("active");
  });

  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 20,
    loop: true,
    nav: true,
    dots: true,
    slideBy: 1,
    navText: ["<", ">"],

    responsive: {
      0: {
        items: 1,
      },
      1050: {
        items: 2,
      },
    },
  });
});
