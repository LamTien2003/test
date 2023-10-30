var api = [{ code: 123 }, { code: 123 }, { code: 123 }];
console.log("Hello")
var keytNAw3h26MVkMXZ = "demo_promotion_detail";
var promotionsPromotionDetail =
  typeof fundiin != "undefined" && fundiin.promotions != "undefined"
    ? fundiin.promotions
    : [
        {
          code: "XINCHAO",
          created_date: "2023-05-15",
          expired_date: "2023-07-15",
          public_text_html:
            "Giảm <b>50%</b> tối đa <b>50K</b> cho ĐH từ <b>100K</b>",
          constraint: "new_user",
          widget_text_html:
            "Nhập mã XINCHAO để giảm 50K cho đơn từ 100K khi thanh toán qua Fundiin",
        },
        {
          code: "FUNGIFT",
          created_date: "2023-05-15",
          expired_date: "2023-07-15",
          public_text_html: "Giảm <b>20K</b> cho ĐH từ <b>200K</b>",
          constraint: "old_user",
          widget_text_html:
            "Nhập mã XINCHAO để giảm 50K cho đơn từ 100K khi thanh toán qua Fundiin",
        },
      ];
/** End giả lập */

/* update month repeat */
var monthRepeats = document.querySelectorAll(".fundiin__month-repeat");
Array.from(monthRepeats).forEach((ele, index) => {
  if (promotionsPromotionDetail[index].code == "FUNGIFT") {
    ele.style.display = "inline";
  }
});

/* update code */
var codeElements = document.querySelector(".promotion-123123");
var htmlPromotion = api
  .map(function (item) {
    return `<div class="fundiin__block-promotion">
            <div class="fundiin__promotion-panel">
              <div class="fundiin__logo-img"><img src="https://assets.fundiin.vn/merchant/fundiin_voucher_logo.svg?20230509" width="70"></div>
              <div class="fundiin__logo-description">
                <div>Nhập mã <span class="fundiin__promotion-code">${item.code}</span></div>
                <div class="fundiin__public-text"></div>
              </div>
            </div>

            <div class="fundiin__promotion-condition">
              <div class="fundiin__promotion-condition__description">
                <span>Dành cho khách hàng <span class="font-weight-500 fundiin__constraint-rule"></span> qua Fundiin</span>
                <span class="fundiin__month-repeat">Mã được dùng <span class='fundiin__month-repeat__impress'>2 lần/tháng</span> cho đến khi có thông báo mới</span>
              </div>
            </div>
          </div>`;
  })
  .join("");
codeElements.innerHTML = htmlPromotion;
console.log(codeElements);
console.log(htmlPromotion);
/* update public text*/
var publicTextElements = document.querySelectorAll(".fundiin__public-text");
Array.from(publicTextElements).forEach((ele, index) => {
  ele.innerHTML = promotionsPromotionDetail[index].public_text_html;
  if (promotionsPromotionDetail[index].promotion_type == "range") {
    if (promotion.range.length) {
      var range = Array.from(promotion.range).filter(range_item => {
        if (
          range_item["order_from"] < price &&
          price <= range_item["order_to"]
        ) {
          return range_item;
        }
      });
      if (range.length) {
        var strongElements = ele.querySelectorAll("strong");
        /* ignore at 0 => that's is promotion_amount
           index at 1 => that's order_from */
        strongElements[0].innerText = range[0]["promotion_text"];
        strongElements[1].innerText =
          Number(range[0]["order_from"]).toLocaleString("vi") + "đ";
      }
    }
  } else {
    /* Do nothing */
  }
});
/* update created date*/
var createdElements = document.querySelectorAll(".fundiin__created-date");
Array.from(createdElements).forEach((ele, index) => {
  ele.innerHTML = new Date(
    promotionsPromotionDetail[index].created_date
  ).toLocaleDateString("en-GB");
});
/* update expired date*/
var expiredElements = document.querySelectorAll(".fundiin__expired-date");
Array.from(expiredElements).forEach((ele, index) => {
  ele.innerHTML = new Date(
    promotionsPromotionDetail[index].expired_date
  ).toLocaleDateString("en-GB");
});
/* update constraint*/
var constraintRuleElements = document.querySelectorAll(
  ".fundiin__constraint-rule"
);
Array.from(constraintRuleElements).forEach((ele, index) => {
  if (promotionsPromotionDetail[index].constraint == "new_user") {
    ele.innerHTML = "lần đầu thanh toán";
  } else if (promotionsPromotionDetail[index].constraint == "old_user") {
    ele.innerHTML = "đã thanh toán";
  }
});
// var promotionTrigger = document.querySelector("a.fundiin__promotion-trigger");
// var modalElement = document.querySelector(".fundiin_promo__modl");
// var modalContentElement = document.querySelector(
//   ".fundiin_promo__modal-content"
// );
// var fundiinShow = undefined;

// promotionTrigger.addEventListener("click", function (event) {
//   modalElement.style.display = "block";
//   modalElement.classList.add("fundiin_promo__show");
// });

// modalElement.addEventListener("click", function (event) {
//   fundiinShow = document.querySelector(".fundiin_promo__show");
//   var buttonClose = document.querySelector("button.fundiin_promo__close");

//   if (!modalContentElement.contains(event.target) && !!fundiinShow) {
//     modalElement.style.display = "";
//     modalElement.classList.remove("fundiin_promo__show");
//   } else if (buttonClose.contains(event.target) && !!fundiinShow) {
//     modalElement.style.display = "";
//     modalElement.classList.remove("fundiin_promo__show");
//   }
// });
