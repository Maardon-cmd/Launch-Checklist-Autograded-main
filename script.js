// Write your JavaScript code here!

window.addEventListener("load", function() {

  let listedPlanets ;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);

      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const selectedPlanet = pickPlanet(listedPlanets);
      const name = selectedPlanet.name;
      const diameter = selectedPlanet.diameter;
      const star = selectedPlanet.star;
      const distance = selectedPlanet.distance;
      const moons = selectedPlanet.moons;
      const imageUrl = selectedPlanet.image;
  addDestinationInfo(
      document,
      name,
      diameter,
      star,
      distance,
      moons,
      imageUrl
  );
  });

  const form = document.querySelector("form");
  const list = document.getElementById("faultyItems");

  form.addEventListener("submit", function (event) {
  event.preventDefault();
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName = document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
  formSubmission(
   document,
   list,
   pilotName.value,
   copilotName.value,
   fuelLevel.value,
   cargoMass.value
  );
  });
});

