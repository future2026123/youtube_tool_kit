(function () {
  const config = window.SITE_CONFIG || {};
  const products = config.products || {};
  const defaultCheckoutUrl = config.defaultCheckoutUrl || "https://www.latpeed.com/";
  const supportEmail = config.supportEmail || "support@example.com";

  document.querySelectorAll(".js-checkout").forEach((link) => {
    const productKey = link.dataset.product;
    const product = productKey ? products[productKey] : null;
    link.href = product?.checkoutUrl || defaultCheckoutUrl;
    link.addEventListener("click", () => {
      window.localStorage.setItem(
        "thumbnail_maker_checkout_click",
        JSON.stringify({
          product: product?.name || "Thumbnail Maker",
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

  const price = document.getElementById("productPrice");
  if (price && products.thumbnailMaker?.price) {
    price.textContent = products.thumbnailMaker.price;
  }
})();
