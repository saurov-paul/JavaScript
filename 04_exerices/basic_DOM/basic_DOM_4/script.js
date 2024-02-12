const form = document.querySelector("form-container");

const priceCal = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const priceBanner = document.querySelector(".price-banner");

  const totalPrice = parseInt(typeSelect.value);

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice = totalPrice + parseInt(checkboxes.value);
    }
  });
  priceBanner.textContent = `$${totalPrice}`;
};

form.addEventListener("change", priceCal);
