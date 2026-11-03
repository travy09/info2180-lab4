document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("search-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch("superheroes.php")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed");
        }

        return response.text();
      })
      .then(function (data) {
        alert(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});
