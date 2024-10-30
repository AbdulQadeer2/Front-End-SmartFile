(function (window, document, $, undefined) {
  "use strict";

  var aiwaveJs = {
    i: function (e) {
      aiwaveJs.d();
      aiwaveJs.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      aiwaveJs.smothScroll();
      aiwaveJs.counterUpActivation();
      aiwaveJs.wowActivation();
      aiwaveJs.headerTopActivation();
      aiwaveJs.headerSticky();
      aiwaveJs.salActive();
      aiwaveJs.popupMobileMenu();
      aiwaveJs.popupDislikeSection();
      aiwaveJs.popupleftdashboard();
      aiwaveJs.popuprightdashboard();
      aiwaveJs.preloaderInit();
      aiwaveJs.showMoreBtn();
      aiwaveJs.slickSliderActivation();
      aiwaveJs.radialProgress();
      aiwaveJs.contactForm();
      aiwaveJs.menuCurrentLink();
      aiwaveJs.onePageNav();
      aiwaveJs.selectPicker();
    },

    selectPicker: function () {
      $("select").selectpicker();
    },

    menuCurrentLink: function () {
      var currentPage = location.pathname.split("/"),
        current = currentPage[currentPage.length - 1];
      $(".dashboard-mainmenu li a").each(function () {
        var $this = $(this);
        if ($this.attr("href") === current) {
          $this.addClass("active");
          $this.parents(".has-menu-child-item").addClass("menu-item-open");
        }
      });
      $(".mainmenu li a").each(function () {
        var $this = $(this);
        if ($this.attr("href") === current) {
          $this.addClass("active");
          $this.parents(".has-menu-child-item").addClass("menu-item-open");
        }
      });
      $(".user-nav li a").each(function () {
        var $this = $(this);
        if ($this.attr("href") === current) {
          $this.addClass("active");
          $this.parents(".has-menu-child-item").addClass("menu-item-open");
        }
      });
    },

    smothScroll: function () {
      $(document).on("click", ".smoth-animation", function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top - 50,
          },
          300
        );
      });
    },

    popupMobileMenu: function (e) {
      $(".hamberger-button").on("click", function (e) {
        $(".popup-mobile-menu").addClass("active");
      });

      $(".close-menu").on("click", function (e) {
        $(".popup-mobile-menu").removeClass("active");
        $(
          ".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
        )
          .siblings(".submenu, .rainbow-megamenu")
          .removeClass("active")
          .slideUp("400");
        $(
          ".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
        ).removeClass("open");
      });

      $(
        ".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
      ).on("click", function (e) {
        e.preventDefault();
        $(this)
          .siblings(".submenu, .rainbow-megamenu")
          .toggleClass("active")
          .slideToggle("400");
        $(this).toggleClass("open");
      });

      $(".popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a").on(
        "click",
        function (e) {
          e.target === this &&
            $(".popup-mobile-menu").removeClass("active") &&
            $(
              ".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
            )
              .siblings(".submenu, .rainbow-megamenu")
              .removeClass("active")
              .slideUp("400") &&
            $(
              ".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
            ).removeClass("open");
        }
      );
    },

    popupDislikeSection: function (e) {
      $(".dislike-section-btn").on("click", function (e) {
        $(".popup-dislike-section").addClass("active");
      });

      $(".close-button").on("click", function (e) {
        $(".popup-dislike-section").removeClass("active");
      });
    },

    popupleftdashboard: function (e) {
      function updateSidebar() {
        if ($(window).width() >= 1600) {
          $(".popup-dashboardleft-btn").removeClass("collapsed");
          $(".popup-dashboardleft-section").removeClass("collapsed");
        } else {
          $(".popup-dashboardleft-btn").addClass("collapsed");
          $(".popup-dashboardleft-section").addClass("collapsed");
        }
      }

      // Hide sidebars by default
      $(
        ".popup-dashboardleft-btn, .popup-dashboardleft-section, .rbt-main-content, .rbt-static-bar"
      ).hide();

      // Initial setup on page load
      updateSidebar();

      // Show sidebars after determining the appropriate state
      $(
        ".popup-dashboardleft-btn, .popup-dashboardleft-section, .rbt-main-content, .rbt-static-bar"
      ).show();

      // Update on window resize
      $(window).on("resize", function () {
        updateSidebar();
      });

      // Toggle classes on button click
      $(".popup-dashboardleft-btn").on("click", function (e) {
        $(".popup-dashboardleft-btn").toggleClass("collapsed");
        $(".popup-dashboardleft-section").toggleClass("collapsed");
      });
    },

    popuprightdashboard: function (e) {
      function updateSidebar() {
        if ($(window).width() >= 1600) {
          $(".popup-dashboardright-btn").removeClass("collapsed");
          $(".popup-dashboardright-section").removeClass("collapsed");
        } else {
          $(".popup-dashboardright-btn").addClass("collapsed");
          $(".popup-dashboardright-section").addClass("collapsed");
        }
      }
      // Hide sidebars by default
      $(
        ".popup-right-btn, .popup-right-section, .rbt-main-content, .rbt-static-bar"
      ).hide();

      // Initial setup on page load
      updateSidebar();

      // Show sidebars after determining the appropriate state
      $(
        ".popup-right-btn, .popup-right-section, .rbt-main-content, .rbt-static-bar"
      ).show();

      // Update on window resize
      $(window).on("resize", function () {
        updateSidebar();
      });

      // Toggle classes on button click
      $(".popup-dashboardright-btn").on("click", function (e) {
        $(".popup-dashboardright-btn").toggleClass("collapsed");
        $(".popup-dashboardright-section").toggleClass("collapsed");
      });
    },

    preloaderInit: function () {
      aiwaveJs._window.on("load", function () {
        $(".preloader").fadeOut("slow", function () {
          $(this).remove();
        });
      });
    },

    showMoreBtn: function () {
      $.fn.hasShowMore = function () {
        return this.each(function () {
          $(this).toggleClass('active');
          $(this).text('Show Less');
          $(this).parent('.has-show-more').toggleClass('active');

          if ($(this).parent('.has-show-more').hasClass('active')) {
            $(this).html('Show Less'); // Changed to .html()
          } else {
            $(this).text('Show More');
          }
        });
      };
      $(document).on('click', '.rbt-show-more-btn', function () {
        $(this).hasShowMore();
      });
    },

    slickSliderActivation: function () {
      $(".testimonial-activation").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
      });

      $(".sm-slider-carosel-activation").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        cssEase: "linear",
      });

      $(".slider-activation").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
      });

      $(".blog-carousel-activation")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          adaptiveHeight: true,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".rainbow-service-slider-actvation")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          arrows: true,
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".slider-brand-activation")
        .not(".slick-initialized")
        .slick({
          centerMode: true,
          draggable: false,
          centerPadding: "150px",
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 8000,
          pauseOnHover: true,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
              },
            },
          ],
        });

      $(".brand-carousel-activation")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          adaptiveHeight: true,
          cssEase: "linear",
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });

      $(".banner-imgview-carousel-activation")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          arrows: false,
          adaptiveHeight: true,
          centerMode: true,
          centerPadding: "100px",
          cssEase: "linear",
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });

      $(".video-popup-carousel-activation")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: false,
          arrows: false,
          adaptiveHeight: true,
          centerMode: true,
          centerPadding: "200px",
          cssEase: "linear",
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });

      $(".brand-carousel-init")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          adaptiveHeight: true,
          cssEase: "linear",
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });

      $(".about-app-activation").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
      });

      $(".template-galary-activation")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          adaptiveHeight: true,
          cssEase: "linear",
          centerMode: false,
          prevArrow:
            '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
          nextArrow:
            '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
    },

    salActive: function () {
      sal({
        threshold: 0.01,
        once: true,
      });
    },

    backToTopInit: function () {
      var scrollTop = $(".rainbow-back-top");
      $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 150) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      });
      $(scrollTop).on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          10
        );
        return false;
      });
    },

    headerSticky: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".header-sticky").addClass("sticky");
        } else {
          $(".header-sticky").removeClass("sticky");
        }
      });
    },

    counterUpActivation: function () {
      $(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
    },

    wowActivation: function () {
      new WOW().init();
    },

    headerTopActivation: function () {
      $(".bgsection-activation").on("click", function () {
        $(".header-top-news").addClass("deactive");
      });
    },

    radialProgress: function () {
      $(".radial-progress").waypoint(
        function () {
          $(".radial-progress").easyPieChart({
            lineWidth: 10,
            scaleLength: 0,
            rotate: 0,
            trackColor: false,
            lineCap: "round",
            size: 220,
          });
        },
        {
          triggerOnce: true,
          offset: "bottom-in-view",
        }
      );
    },

    contactForm: function () {
      $(".rainbow-dynamic-form").on("submit", function (e) {
        e.preventDefault();
        var _self = $(this);
        var __selector = _self.closest("input,textarea");
        _self.closest("div").find("input,textarea").removeAttr("style");
        _self.find(".error-msg").remove();
        _self
          .closest("div")
          .find('button[type="submit"]')
          .attr("disabled", "disabled");
        var data = $(this).serialize();
        $.ajax({
          url: "mail.php",
          type: "post",
          dataType: "json",
          data: data,
          success: function (data) {
            _self
              .closest("div")
              .find('button[type="submit"]')
              .removeAttr("disabled");
            if (data.code == false) {
              _self.closest("div").find('[name="' + data.field + '"]');
              _self
                .find(".rainbow-btn")
                .after('<div class="error-msg"><p>*' + data.err + "</p></div>");
            } else {
              $(".error-msg").hide();
              $(".form-group").removeClass("focused");
              _self
                .find(".rainbow-btn")
                .after(
                  '<div class="success-msg"><p>' + data.success + "</p></div>"
                );
              _self.closest("div").find("input,textarea").val("");

              setTimeout(function () {
                $(".success-msg").fadeOut("slow");
              }, 5000);
            }
          },
        });
      });
    },

    onePageNav: function () {
      $(".onepagenav").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.2,
        filter: "",
        easing: "swing",
      });
    },
  };
  aiwaveJs.i();
})(window, document, jQuery);

// Bg flashlight
let cards = document.querySelectorAll(".bg-flashlight");
cards.forEach((bgflashlight) => {
  bgflashlight.onmousemove = function (e) {
    let x = e.pageX - bgflashlight.offsetLeft;
    let y = e.pageY - bgflashlight.offsetTop;

    bgflashlight.style.setProperty("--x", x + "px");
    bgflashlight.style.setProperty("--y", y + "px");
  };
});

// Bg flashlight
let shapes = document.querySelectorAll(".blur-flashlight");
shapes.forEach((bgflashlight) => {
  bgflashlight.onmousemove = function (e) {
    let x = e.pageX - bgflashlight.offsetLeft;
    let y = e.pageY - bgflashlight.offsetTop;

    bgflashlight.style.setProperty("--x", x + 70 + "px");
    bgflashlight.style.setProperty("--y", y + 200 + "px");
  };
});

// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Check All JS Activation
$(function () {
  var propFn = typeof $.fn.prop === "function" ? "prop" : "attr";

  $("#checkall").click(function () {
    $(this)
      .parents("fieldset:eq(0)")
      .find(":checkbox")
    [propFn]("checked", this.checked);
  });
  $("input[type=checkbox]:not(#checkall)").click(function () {
    if (!this.checked) {
      $("#checkall")[propFn]("checked", this.checked);
    } else {
      $("#checkall")[propFn](
        "checked",
        !$("input[type=checkbox]:not(#checkall)").filter(":not(:checked)")
          .length
      );
    }
  });
});

