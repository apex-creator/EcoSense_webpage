      // JavaScript to detect Android and macOS and restrict access
      function detectDevice() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var isAndroid = /android/i.test(userAgent);
        var isMac = /macintosh|mac os x/i.test(userAgent);
        
        if (isAndroid || isMac) {
            document.body.innerHTML = "<h1>Access Restricted</h1><p>This webpage is not accessible on Android and macOS devices.</p>";
        }
    }

    window.onload = detectDevice;

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