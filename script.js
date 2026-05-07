(function () {
  const config = window.SITE_CONFIG || {};
  const products = config.products || {};
  const defaultCheckoutUrl = config.defaultCheckoutUrl || config.checkoutUrl || "#products";
  const supportEmail = config.supportEmail || "support@example.com";

  document.querySelectorAll(".js-checkout").forEach((link) => {
    const productKey = link.dataset.product;
    const product = productKey ? products[productKey] : null;
    const checkoutUrl = product?.checkoutUrl || defaultCheckoutUrl;

    link.href = checkoutUrl;
    link.addEventListener("click", () => {
      window.localStorage.setItem(
        "creatorflow_last_checkout_click",
        JSON.stringify({
          product: product?.name || "default",
          clickedAt: new Date().toISOString()
        })
      );
    });
  });

  const support = document.getElementById("supportEmail");
  if (support) {
    support.href = `mailto:${supportEmail}`;
    support.textContent = supportEmail;
  }

  document.querySelectorAll(".custom-contact").forEach((link) => {
    link.href = `mailto:${supportEmail}?subject=${encodeURIComponent("커스텀 프로그램 제작 문의")}`;
  });
})();
