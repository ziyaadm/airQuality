$(document).ready(initializeApp)

function initializeApp(){
  var start = new AirQualityAPI();
  $(".submit").on("click", start.getValueFromInput)
}

class AirQualityAPI{
  constructor(){
    this.getValueFromInput = this.getValueFromInput.bind(this);
  }
  getValueFromInput(){
    var cityName = $("#inputCity").val();
    this.getData(cityName);
  }
  getData(cityName) {
    var ajaxConfigObject = {
      url: 'https://api.openaq.org/v1/locations?city='+cityName,
      method: 'GET',
      dataType: 'json',
      success: (response) => {
        console.log(response);
        this.updateElements(response);
      },
      error: function (response) {
        alert("Local error callback.");
      },
      complete: function (response) {
        alert("Local completion callback.");
      },
    }
    $.ajax(ajaxConfigObject)
  }
  updateElements(cityDOM){
    $(".result").text(cityDOM.results[0].count)
  }
}
