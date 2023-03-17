function marketplace() {
  $(document).on("click", "[data-marketplace]", function (e) {
    e.preventDefault();

    $(".marketplace--popup").toggleClass("--show");
    $(".overlay").toggleClass("--show");
    $("body").toggleClass("--hidden");
  });

  $(document).on("click", "[data-marketplace-close]", function (e) {
    e.preventDefault();

    $(".marketplace--popup").removeClass("--show");
    $(".overlay").removeClass("--show");
    $("body").removeClass("--hidden");
  });

  $(document).on("mouseup", function (e) {
    let marketplace = $(".marketplace--popup");
    if (!marketplace.is(e.target) && marketplace.has(e.target).length === 0) {
      $("[data-marketplace-close]").trigger("click");
    }
  });

  $(document).on("keydown", function (e) {
    if (e.keyCode === 27) {
      $("[data-marketplace-close]").trigger("click");
    }
  });
}
marketplace();