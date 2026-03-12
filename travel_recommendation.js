let travelData = {};

fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
      travelData = data;
      console.log(travelData);
  })
  .catch(error => {
      console.log("Error loading JSON:", error);
  });

  function searchRecommendation(){

    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    if(keyword.includes("beach")){
        showBeaches();
    }
    else if(keyword.includes("temple")){
        showTemples();
    }
    else if(keyword.includes("country")){
        showCountries();
    }
}

function showBeaches(){

    const resultsDiv = document.getElementById("results");

    travelData.beaches.forEach(beach => {

        const card = `
        <div>
            <h3>${beach.name}</h3>
            <img src="images/${beach.imageUrl}" width="300">
            <p>${beach.description}</p>
        </div>
        `;

        resultsDiv.innerHTML += card;

    });

}

function showTemples(){

    const resultsDiv = document.getElementById("results");

    travelData.temples.forEach(temple => {

        const card = `
        <div>
            <h3>${temple.name}</h3>
            <img src="images/${temple.imageUrl}" width="300">
            <p>${temple.description}</p>
        </div>
        `;

        resultsDiv.innerHTML += card;

    });

}
function showCountries(){

    const resultsDiv = document.getElementById("results");

    travelData.countries.forEach(country => {

        country.cities.forEach(city => {

            const card = `
            <div>
                <h3>${city.name}</h3>
                <img src="images/${city.imageUrl}" width="300">
                <p>${city.description}</p>
            </div>
            `;

            resultsDiv.innerHTML += card;

        });

    });

}
function clearResults(){
    document.getElementById("results").innerHTML = "";
}
