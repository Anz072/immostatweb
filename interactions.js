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
// var imgLang = document.querySelector("#imgLang");
// var imgLang2 = document.querySelector("#imgLang2");
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
// otherLangDiv.addEventListener("click", function () {
//   if (lang1.textContent == "Français") {
//     lang1.textContent = "English";
//     lang2.textContent = "Français";
//     document.getElementById("title1e").innerText = "RENT VS BUY";
//     document.getElementById("title2e").innerText = "RENTAL PROPERTY";
//     document.getElementById("open1e").innerText = "Open";
//     document.getElementById("open2e").innerText = "Open";
//     document.getElementById("sec1centerTitle").innerHTML =
//       "Make an informed choice.";
//     document.getElementById("btn1ef").innerText = "Rent VS Buy";
//     document.getElementById("btn2ef").innerText = "Rental Property";
//     document.getElementById("btn3ef").innerText = "More information";
//     document.getElementById("sec2title").innerText = "Calculators";

//     document.getElementById(
//       "text1e"
//     ).innerText = `This free tool allows you to make different personalized simulations to help you make a decision between renting and buying a property. You will be able to see each year, which option is the most advantageous in your situation, with a graph to illustrate the potential asset held.
// This tool has been carefully developed taking into account multiple variables such as inflation, CMHC premium, property value increase, rent increase and much more, in order to make the most accurate analysis possible.
// Monthly mortgage data is also provided for each month throughout the life of the loan such as cumulative interest and principal paid.`;
//     document.getElementById(
//       "text2e"
//     ).innerText = `Enter your data, and get all the information you need to make an informed choice before buying your next rental property: cash flow, internal rate of return (IRR), net present value (NPV), building to value ratio, price to gross income ratio, capitalization rate, taxes payable, depreciation recovery and operating expense ratio.`;

//     // $("#imgLang").css("background-image", "url('united-states.png')");
//     // $("#imgLang2").css("background-image", "url('france.png')");
//   } else {
//     lang1.textContent = "Français";
//     lang2.textContent = "English";

//     document.getElementById("title1e").innerText = "LOUER VS ACHETER";
//     document.getElementById("title2e").innerText = "PROPRIÉTÉ LOCATIVE";
//     document.getElementById("open1e").innerText = "Ouvrir";
//     document.getElementById("open2e").innerText = "Ouvrir";

//     document.getElementById("sec1centerTitle").innerHTML =
//       "Faites un choix éclairé.";
//     document.getElementById("btn1ef").innerText = "Louer VS Acheter";
//     document.getElementById("btn2ef").innerText = "Propriété Locative";
//     document.getElementById("btn3ef").innerText = "Pour plus d’information";
//     document.getElementById("sec2title").innerText = "Calculatrices";

//     // $("#imgLang2").css("background-image", "url('united-states.png')");
//     // $("#imgLang").css("background-image", "url('france.png')");

//     document.getElementById("text1e").innerText =
//       "Cet outil gratuit vous permet de faire différentes simulations personnalisées afin de vous aider à prendre une décision entre louer et acheter une propriété. Il vous sera possible de voir à chaque année, quelle est l’option la plus avantageuse dans votre situation, avec un graphique pour vous illustrer l’actif potentiellement détenu. Cet outil a été développé avec soin en prenant en compte de multiples variables tels que l’inflation, la prime SCHL, l’augmentation de la valeur de la propriété, l’augmentation du loyer et bien plus encore, afin de faire l’analyse la plus précise possible. Les données hypothécaires mensuelles sont aussi fournies pour chaque mois durant toute la durée du prêt tels que les intérêts et le capital payés cumulatifs.";
//     document.getElementById(
//       "text2e"
//     ).innerText = `Insérez vos données, et obtenez toutes les informations utiles afin de faire un choix éclairé avant l’achat de votre prochaine propriété locative : les flux de trésorerie, le taux de rentabilité interne (TRI), la valeur actuelle nette (VAN), le ratio bâtisse / valeur , le ratio prix / revenu brut, le taux de capitalisation, l’impôt à payer, la récupération d’amortissement et le ratio de charges d’exploitation.`;
//   }
//   otherLangDiv.style.display = "none";

//   $(".language-switch").css("margin-top", "0px");
// });

$(document).ready(function () {
  // if ($(window).width() < 761) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("header-bg");
      $("header").css("animation", "ease3f 0.2s ease-in");
      $("header").css("animation-fill-mode", "forwards");
      $(".language-switch").css("background-color", "rgba(82, 82, 82, 0.905)");
      // $("header").addClass("header-bf");
      $("#hero1").css("color", "#fff");
      $("#lang2").css("color", "#fff");
    } else {
      $("header").removeClass("header-bg");
      // $("header").removeClass("header-bf");
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
};
$(window).resize(function () {
  var div1Height = $("#text1e").height();
  var div2Height = $("#text2e").height();
  if (div1Height > div2Height) {
    $("#text2e").height(div1Height);
  } else {
    $("#text1e").height(div2Height);
  }
});
