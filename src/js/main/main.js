const URL = "https://api.staging.fourthwall.com/api/mailing-list";
const formElement = document.querySelector("form");
const responseElement = document.querySelector("#responses");

formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputElement = formElement.querySelector("input");

  if (inputElement.value) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-ShopId": "sh_9f57832f-456b-44f3-888f-8a370b155a18",
      },
      body: JSON.stringify({ email: inputElement.value }),
    };

    responseElement.classList.remove("form__message--error");
    responseElement.innerText = "Submitting...";

    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.id) {
          responseElement.innerText = "Thanks for subscribing!";
          inputElement.value = "";
        } else if (data.status === 400) {
          responseElement.innerText =
            "There was an error subscribing to the newsletter";
          responseElement.classList.add("form__message--error");
        }
      })
      .catch((err) => {
        console.log(err);
        responseElement.innerText =
          "There was an error subscribing to the newsletter";
        responseElement.classList.add("form__message--error");
      });
  }
});
