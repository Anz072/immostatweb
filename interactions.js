$("#btn3ef").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500
  );
  return false;
});
var languageSwitch = document.querySelector(".language-switch");
var mainDiv = document.querySelector("#language-display");
var otherLangDiv = document.querySelector("#otherLanguage");
var lang1 = document.querySelector("#lang1");
var lang2 = document.querySelector("#lang2");
let lameValue = 0;

languageSwitch.addEventListener("mouseenter", function () {
  otherLangDiv.style.display = "flex";
  $(".language-switch").css("margin-top", "31px");
});
languageSwitch.addEventListener("click", function () {
  if (lameValue !== 1) {
    lameValue = 1;
    otherLangDiv.style.display = "flex";
    $(".language-switch").css("margin-top", "31px");
  }
  if (otherLangDiv.style.display == "none") {
    lameValue = 0;
  }
});

languageSwitch.addEventListener("mouseleave", function () {
  otherLangDiv.style.display = "none";
  $(".language-switch").css("margin-top", "0px");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("header-bg");
      $("header").css("animation", "ease3f 0.2s ease-in");
      $("header.header-bg").css("animation-fill-mode", "forwards");
      $(".language-switch").css("background-color", "rgba(82, 82, 82, 0.905)");
      $("#hero1").css("color", "#fff");
      $("#lang2").css("color", "#fff");
    } else {
      $("header").removeClass("header-bg");
      $("#lang2").css("color", "#33383b");
      $("#hero1").css("color", "#33383b");
    }
    if ($(this).scrollTop() == 0) {
      $("header").css("animation", "none");
      $(".language-switch").css("background-color", "#f7f7f7");
    }
  });
  // }
});

window.onload = function () {
  var div1Height = $("#text1e").height();
  var div2Height = $("#text2e").height();
  if (div1Height > div2Height) {
    $("#text2e").height(div1Height);
  } else {
    $("#text1e").height(div2Height);
  }
  var vl = $("#section2").height();
  var vh = $(window).height();
  if (vh > vl) {
    $("#section2").height(vh);
  }
};
$(window).resize(function () {
  var div1Height = $("#text1e").height();
  var div2Height = $("#text2e").height();
  if (div1Height > div2Height) {
    $("#text2e").height(div1Height);
  } else {
    $("#text1e").height(div2Height);
  }
  var vl = $("#section2").height();
  var vh = $(window).height();
  if (vh > vl) {
    $("#section2").height(vh);
  }
});
