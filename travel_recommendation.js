let travelData = {};

// Cargar el JSON
fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
      travelData = data;
      console.log("Data loaded:", travelData);
  })
  .catch(error => {
      console.log("Error loading JSON:", error);
  });


// FUNCIÓN DE BÚSQUEDA
function searchRecommendation(){

    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    let found = false;


    // BUSCAR EN PLAYAS
    travelData.beaches.forEach(beach => {

        if(beach.name.toLowerCase().includes(keyword) || keyword.includes("beach")){

            const card = `
            <div>
                <h3>${beach.name}</h3>
                <img src="images/${beach.imageUrl}">
                <p>${beach.description}</p>
                <button class="explore-btn">Explore</button>
            </div>
            `;

            resultsDiv.innerHTML += card;
            found = true;
        }

    });


    // BUSCAR EN TEMPLOS
    travelData.temples.forEach(temple => {

        if(temple.name.toLowerCase().includes(keyword) || keyword.includes("temple")){

            const card = `
            <div>
                <h3>${temple.name}</h3>
                <img src="images/${temple.imageUrl}">
                <p>${temple.description}</p>
                <button class="explore-btn">Explore</button>
            </div>
            `;

            resultsDiv.innerHTML += card;
            found = true;
        }

    });


    // BUSCAR EN CIUDADES
    travelData.countries.forEach(country => {

        country.cities.forEach(city => {

            if(
                city.name.toLowerCase().includes(keyword) ||
                country.name.toLowerCase().includes(keyword) ||
                keyword.includes("country")
            ){

                const card = `
                <div>
                    <h3>${city.name}</h3>
                    <img src="images/${city.imageUrl}">
                    <p>${city.description}</p>
                    <button class="explore-btn">Explore</button>
                </div>
                `;

                resultsDiv.innerHTML += card;
                found = true;
            }

        });

    });


    // SI NO ENCUENTRA NADA
    if(!found){

        resultsDiv.innerHTML = `
        <div>
            <h3>No destinations found</h3>
            <p>Try searching for: beach, temple, tokyo, rio, brazil...</p>
        </div>
        `;

    }

}


// RESET
function clearResults(){

    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";

}

function handleKeyPress(event){

    if(event.key === "Enter"){
        searchRecommendation();
    }

}