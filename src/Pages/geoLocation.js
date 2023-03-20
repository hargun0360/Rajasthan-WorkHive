export const geoLocation = () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        alert( "Geolocation is not supported by this browser.");
      }
}

function showPosition(position) {
    localStorage.setItem("latitude",position.coords.latitude);
    localStorage.setItem("longitude",position.coords.longitude);
  }
