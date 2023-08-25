const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    header.classList.toggle("active");
});


$(".question-wrapper").click( function () {
    var container = $(this).parents(".faq-accordion");
    var answer = container.find(".answer-wrapper");
    var trigger = container.find(".f-icon");
    var state = container.find(".question-wrapper");
    
    answer.animate({height: "toggle"}, 100);
    
    if (trigger.hasClass("icon-expend")) {
      trigger.removeClass("icon-expend");
    }
    else {
      trigger.addClass("icon-expend");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });

  const dropList = document.querySelectorAll(".input-select select"),
  amount = document.querySelector(".f-amount input"),
  fromCurrency = document.querySelectorAll(".amount-sub select"),
  toCurrency = document.querySelector(".reci-sub select");

  for (let i = 0; i < dropList.length; i++) {

      for (let currency_code in country_code){

        let selected;
          if (i == 0) {
            selected = currency_code == "NGN" ? "selected " : "";
          }else if(i == 1){
              selected = currency_code == "USD" ? "selected " : "" ;  
          }


        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
      }

      dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
  }
  function loadFlag(element) {
    for (code in country_code){
        if(code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag .src = `https://flagsapi.com/${country_code[code]}/flat/64.png`;
        }
    }
    }

  
