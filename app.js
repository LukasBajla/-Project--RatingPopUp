const App = {
  $: {
    ratingContainer: document.querySelector("#rating"),
    thankyouContainer: document.querySelector("#thankyou"),
    btnSubmit: document.querySelector("#btn-Submit"),
    ratingCircle: document.querySelectorAll("#rating-circle"),
    thankyouImg : document.querySelector("#thankyou-img"),

  },
  init() {
    let ratingUserValue = 0;

    // Enter rating value
    App.$.ratingCircle.forEach((circle) => {
      // ------- HOVER ENTER
      circle.addEventListener("mouseenter", (event) => {
        App.$.ratingCircle.forEach((i) => {
          for (let i = 0; i < Number(circle.innerHTML); i++) {
            App.$.ratingCircle[i].classList.add("circle-hover");
          }
        });
      });
      // ------- HOVER LEAVE
      circle.addEventListener("mouseleave", (event) => {
        App.$.ratingCircle.forEach((e) => {
          e.classList.remove("circle-hover");
        });
      });

      // ------- CLICK RATING CIRCLE
      circle.addEventListener("click", (event) => {
        ratingUserValue = Number(circle.innerHTML);
        App.$.ratingCircle.forEach((e) => {
          e.classList.remove("circle-active");
        });
        App.$.ratingCircle.forEach((i) => {
          console.log("Rating user value is: " + ratingUserValue);
          for (let i = 0; i < ratingUserValue; i++) {
            App.$.ratingCircle[i].classList.add("circle-active");
          }
        });
      });
    });

    // ------- Submit rating value ---------
    App.$.btnSubmit.addEventListener("click", (event) => {
      // No input value
      const errors = App.$.ratingContainer.querySelector(".err");
      if (errors != null) errors.remove();
      if (ratingUserValue == 0) {
        App.errorNoRatingInput();
      } else {
        App.ratingSubmit(ratingUserValue);
      }
    });
  },
  errorNoRatingInput() {
    const errEl = document.createElement("p");
    const cont = document.querySelector("#rating");
    errEl.innerHTML = "No rating selected";
    errEl.classList.add("err");
    cont.appendChild(errEl);
  },
  ratingSubmit(userRating) {
    App.$.ratingContainer.classList.toggle("hidden");
    App.$.thankyouContainer.classList.toggle("hidden");
    const userRatingCont = document.createElement('p')
    userRatingCont.classList.add("rating-output-text")
    userRatingCont.innerHTML = "You selected "+userRating+" out of 5";
    App.$.thankyouImg.after(userRatingCont);
  },
};

window.addEventListener("load", App.init);
