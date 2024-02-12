const form = document.querySelector(".form-container");

const priceCal = () => {
  const typeselecrt = document.querySelector("#type");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const priceBanner = document.querySelector("#price-banner");

  let totalAmount = parseInt(typeselecrt.value);

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
  }

  priceBanner.textContent = `$${totalAmount}`;
};

form.addEventListener("change", priceCal);
