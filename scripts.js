( function () {



    accordToggle = function () {

        let
            accordions = document.getElementsByClassName("accordion");

        for (let i = 0; i < accordions.length; i++) {
            accordions[i].addEventListener('click', function () {
            this.classList.toggle('is-open');



                let content = this.nextElementSibling;

                if (content.style.maxHeight) {
                    //accordion is open

                    content.style.maxHeight = 0;



                } else {
                    //accordion closed

                    content.style.maxHeight = content.scrollHeight + "px";
                }

            }) ; // accordions onclick
        }

    };


    init = function () {
      accordToggle();
    };

    window.addEventListener('load', init);

})();