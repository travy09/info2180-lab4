document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Search button clicked!");

    const query = searchInput.value.trim();

    const url = "superheroes.php?query=" + encodeURIComponent(query);

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed");
        }

        return response.text();
      })
      .then(function (data) {
        result.innerHTML = data;
      })
      .catch(function (error) {
        console.error(error);
        result.textContent = "An error occurred while searching.";
      });
  });
});
