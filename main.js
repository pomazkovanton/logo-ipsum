const priceYears = document.querySelector('.switch__btn_position_left');
const priceMonth = document.querySelector('.switch__btn_position_right');
const priceEnterprise = document.querySelector('.cards__price_type_enterprise');
const pricePremium = document.querySelector('.cards__price_type_premium');
const pricePeriodText = document.querySelectorAll('.cards__price-period');

priceYears.addEventListener('click', function () {
  priceYears.classList.toggle('switch__btn_active');
  priceMonth.classList.toggle('switch__btn_active');
  for (let index = 0; index < pricePeriodText.length; index++) {
    pricePeriodText[index].textContent = '/year';
  }
  pricePremium.textContent = '$179';
  priceEnterprise.textContent = '$219';
});

priceMonth.addEventListener('click', function () {
  priceYears.classList.toggle('switch__btn_active');
  priceMonth.classList.toggle('switch__btn_active');
  for (let index = 0; index < pricePeriodText.length; index++) {
    pricePeriodText[index].textContent = '/month';
  }
  pricePremium.textContent = '$29';
  priceEnterprise.textContent = '$49';
});
