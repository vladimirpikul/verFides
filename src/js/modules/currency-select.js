const currencySelect = () => {
  const currencyItem = $('.currency-select .item');

  currencyItem.click(function setActive(e) {
    e.preventDefault();
    currencyItem.removeClass('active');
    $(this).addClass('active');
  });
};

export default currencySelect;
