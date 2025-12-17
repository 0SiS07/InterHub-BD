fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;

        const year = document.getElementById("year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    });



fetch("contact.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("contact").innerHTML = data;
  });
