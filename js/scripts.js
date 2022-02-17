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

  if ($(".modal_carousel").length) {
    $(".modal_carousel").owlCarousel({
      items: 1,
      margin: 10,
      dots: true,
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

  $(".show_pass").click(function () {
    if ($(this).siblings("input").attr("type") == "password") {
      $(this).siblings("input").prop("type", "text");
    } else {
      $(this).siblings("input").prop("type", "password");
    }
  });

  $(".modal_overlay .close").click(function () {
    $(this).closest(".modal_overlay").removeClass("active");
    $(this).closest(".modal").removeClass("active");
    $("body").removeClass("no_scroll");
  });

  $(".call_modal").click(function () {
    var id = $(this).attr("data-id");
    $(".modal_overlay").addClass("active");
    $("body").addClass("no_scroll");
    $(".modal").each(function () {
      if ($(this).attr("id") == id) {
        $(this).addClass("active");
      }
    });
  });

  if ($(".scrollable_part").length) {
    const scrollElement = document.querySelector(".scrollable_part");

    document.addEventListener(
      "scroll",
      (event) => {
        var top = window.pageYOffset || document.documentElement.scrollTop;

        console.log(top);

        if (top > 208) {
          $(".static_part").addClass("fixed");
        } else {
          $(".static_part").removeClass("fixed");
        }
      },
      { passive: true }
    );
  }

  if ($("#input_tel").length) {
    setTelMask("input_tel");
  }
  if ($("#call_beck_tel").length) {
    setTelMask("call_beck_tel");
  }
  if ($("#reg_tel").length) {
    setTelMask("reg_tel");
  }

  if ($("#date").length) {
    setDateMask("date");
  }
  if ($("#reg_date").length) {
    setDateMask("reg_date");
  }

  if ($("#tel_mail").length) {
    var dynamicMask = IMask(document.getElementById("tel_mail"), {
      mask: [
        {
          mask: "+3(80)00-000-00-00",
        },
        {
          mask: /^\S*@?\S*$/,
        },
      ],
    });
  }

  $(".my_rating").starRating({
    totalStars: 5,
    starShape: "rounded",
    starSize: 40,
    emptyColor: "lightgray",
    hoverColor: "#f26522",
    activeColor: "#f26522",
    callback: function (currentRating, $el) {
      // make a server call here
    },
  });
});

function setTelMask(id) {
  var tel = document.getElementById(id);
  var telMaskOptions = {
    mask: "+3(80)00-000-00-00",
  };
  var mask = IMask(tel, telMaskOptions);
}

function setDateMask(id) {
  var date = document.getElementById(id);
  var dateMaskOptions = {
    mask: Date,
  };
  var mask = IMask(date, dateMaskOptions);
}
