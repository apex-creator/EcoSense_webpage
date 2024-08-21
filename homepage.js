

    document.addEventListener("DOMContentLoaded", function () {
      const frontElements = document.querySelectorAll(".frontstyle");
      const backElements = document.querySelectorAll(".backstyle");

      frontElements.forEach((element) => {
        element.addEventListener("animationend", () => {
          element.classList.add("inswing-final");
        });
      });

      backElements.forEach((element) => {
        element.addEventListener("animationend", () => {
          element.classList.add("outswing-final");
        });
      });
    });
