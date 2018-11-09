var app = (function () {
    "use strict";

    const click = function () {
        let p = document.querySelector("blockquote p");
        let citation = p.textContent
        let citation2 = "Un message que Charles Leclerc a écrit sur son casque lors du GP de Monaco 2018.";
        let texteChangé = false
        p.addEventListener("click", function() {
          if (!texteChangé) {  
            p.textContent = citation2;
          }
          else {
              p.textContent = citation;
          }
          texteChangé = !texteChangé;
        })

    }


    window.addEventListener("DOMContentLoaded", click);

}());

