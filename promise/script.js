fetch("https://restcountries.eu/rest/v2/all")
  .then(function (resp) {
    return resp.json();
  }) // Convert data to json
  .then(function (data) {
    var dynamic = document.querySelector(".row");
    i = data.length - 1;

    for (i; i >= 0; i--) {
      var fetch = document.querySelector(".row").innerHTML;
      //console.log(data[i].latlng);
      dynamic.innerHTML =
        `
        <div class="col-md-4">
        <div class="card text-center">
          <h5 class="card-head" id='conName'>${data[i].name}</h5>
          <div class="card-body">
            <img src="${data[i].flag}" alt="flag" id='conFlag'></img>
            <p>Captial:<span class='b-text'> ${data[i].capital}</span></p>
            <p>Region:<span class='b-text'> ${data[i].region}</span></p>
            <p>Country Code:<span class='b-text'> ${
              data[i].alpha3Code
            }</span></p>
            <button class="btn btn-primary" onclick="weatherInfo(${
              (data[i].latlng[0], data[i].latlng)
            })">Get Weather</button>
          </div>
        </div>
      </div>
        ` + fetch;
    }
  })
  .catch(function () {
    // catch any errors
    alert("country error");
  });

function weatherInfo(latitude, longitude) {
  console.log("lat", latitude, "long", longitude);
  weatherBalloon(latitude, longitude);
}

function weatherBalloon(latt, longn) {
  var key = "YOUR_API_KEY";

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latt +
      "&lon=" +
      longn +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log("Weather in " + data.name + ": " + data.weather[0].main);
      alert("Weather in " + data.name + ": " + data.weather[0].main);
    })
    .catch(function () {
      // catch any errors
      alert("Error in API");
    });
}
