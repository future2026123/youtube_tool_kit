(function () {
  const config = window.SITE_CONFIG || {};
  const checkoutUrl = config.latpeedCheckoutUrl || "https://www.latpeed.com/";
  const supportEmail = config.supportEmail || "support@example.com";

  document.querySelectorAll(".js-checkout").forEach((link) => {
    link.href = checkoutUrl;
    link.addEventListener("click", () => {
      window.localStorage.setItem("creatorflow_last_checkout_click", new Date().toISOString());
    });
  });

  const support = document.getElementById("supportEmail");
  if (support) {
    support.href = `mailto:${supportEmail}`;
    support.textContent = supportEmail;
  }
})();
