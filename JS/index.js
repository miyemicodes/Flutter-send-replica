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

  const dropList = document.querySelectorAll(".input-select select");
  const symbolSpan1 = document.querySelector("#symbol1");
  const symbolSpan2 = document.querySelector("#symbol2");


  symbolSpan1.innerHTML = currencyList["NGN"][4];
  symbolSpan2.innerHTML = currencyList["USD"][4];



  for (let i = 0; i < dropList.length; i++) {

      for (let currency_code in country_code){

        let selected;
          if (i == 0) {
            selected = currency_code == "NGN" ? "selected " : "";
          //  symbolSpan1.innerHTML = currencyList[ currency_code][4];
          }else if(i == 1){
              selected = currency_code == "USD" ? "selected " : "" ;  
             // symbolSpan2.innerHTML = currencyList[ currency_code][4];

          } 


        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
      }

      dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
        console.log(e.target.value);
        const getSingleCurrencyList = currencyList[e.target.value][4];

        if (i == 0) {
          symbolSpan1.innerHTML = getSingleCurrencyList;
        }else if(i == 1){
          symbolSpan2.innerHTML = getSingleCurrencyList;
        }

        console.log(getSingleCurrencyList);
   

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


    const firstInput = document.querySelector('.firstInput');
    const firstSelectOption = document.querySelector('.firstSelectOption');
    const minMaxSend = document.querySelector('.minMaxSend');
    const generateRate = document.querySelector('.generateRate');
    const secondInput = document.querySelector('.secondInput');
    const secondSelectOption = document.querySelector('.secondSelectOption');
    const fee = document.querySelector('.span-fee');
    const totalPay = document.querySelector('.totalPay');
    const toGet = document.querySelector('.toGet');




    firstInput.addEventListener("keyup", function (e){
    console.log(e);

   const firstValue = Number(e.target.value);
   if (isNaN(firstValue) ) {
    console.log( "its not  a number" )
   }else{
    console.log( "its a number" )
      if (firstValue < 2){
        minMaxSend.innerHTML = "You can send a minimum of 2 ";
      }else if(firstValue > 2000) {
        minMaxSend.innerHTML = "You can only send a maximum of 2000 ";
      }
      else {
        minMaxSend.innerHTML = " ";
      }
   }

    }); 


    
 