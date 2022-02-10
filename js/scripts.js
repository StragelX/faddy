$(document).ready(function () {
  $(".faq_line").click(function () {
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".show_more").click(function () {
    $(this).closest(".text_shortner").toggleClass("active");
  });

  if ($(".main_top_slider").length) {
    $(".main_top_slider").owlCarousel({
      items: 2,
      margin: 20,
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
  }

  if ($(".products_carousel").length) {
    $(".products_carousel").owlCarousel({
      items: 2,
      margin: 10,
      dots: false,
    });
  }

  $(".quantity_wrap .minus").click(function () {
    var quantity = parseInt($(this).siblings("p").html());
    quantity == 1 ? (quantity = 1) : quantity--;
    $(this).siblings("p").html(quantity);
    quantity == 1 ? $(this).addClass("disabled") : "";
  });

  $(".quantity_wrap .plus").click(function () {
    var quantity = parseInt($(this).siblings("p").html());
    quantity++;
    $(this).siblings("p").html(quantity);
    $(this).siblings(".minus").removeClass("disabled");
  });

  $(".price_remove_wrap .remove").click(function () {
    $(this).closest(".one_cart_item").remove();
  });

  $(".call_cart").click(function () {
    $(".cart_wrap").addClass("active");
    $("body").addClass("no_scroll");
  });

  $(".cart_wrap .close_btn").click(function () {
    $(".cart_wrap").removeClass("active");
    $("body").removeClass("no_scroll");
  });

  $(".call_menu_btn").click(function () {
    $(this).toggleClass("active");
    $(".second_nav").toggleClass("active");
  });
});
