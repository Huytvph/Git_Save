window.onscroll = function() {cpsHeader()};

var headerTop = document.getElementById("cpsHeader");

var stickey = header.offsetTop;

function cpsHeader(){
    if (window.pageYOffset > stickey) {
        header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
}
 
}

function changeColor(element){
    element.classList.add("active");
}
function initMap() {
    var location = {lat: 40.712776, lng: -74.005974}; // Vị trí New York
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }