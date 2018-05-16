const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  })
  return modesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistanceTravelled = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
  return totalDistanceTravelled;

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModesOfTransport = this.getModesOfTransport();
  const uniqueTransportArray = allModesOfTransport.filter((singleMode, index) => {
    return allModesOfTransport.indexOf(singleMode) == index;
   });
  return uniqueTransportArray;
};

module.exports = Traveller;
