let temp = document.querySelector('#temp');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let wind = document.querySelector('#wind');
let weather = document.querySelector('#weather');
let icon = document.querySelector("#icon");
let icon_url = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";

function get_weather(){
    cityname = document.getElementById('cityName').value
    cfk = document.getElementById('cfk').value
    
    val = ''

    // alert(cfk)
    // cityname = city1.value
    // alert(cityname)
    
    weather_url = 'https://api.openweathermap.org/data/2.5/find?'
    if(cfk == "°C"){
        val = "metric"
    } else if(cfk == "°F"){
        val = "imperial"
    }else{
        val = "standard"
    }
    // alert(val)
    appid = '&units=' + val + '&appid=7d96bc5108f52b80e2d9075a369b9f35'
    final_url = weather_url + 'q=' + cityname + appid

    axios.get(final_url)
    .then(function(response) {
        console.log(response.data);
        let wdata = response.data.list[0];
        let exdata = response.data.list[0].weather[0];

        city.innerText = cityname
        temp.innerText = wdata.main.temp + cfk;
        min.innerText = wdata.main.temp_min + cfk;
        max.innerText = wdata.main.temp_max + cfk;
        wind.innerText = wdata.wind.speed;

        weather.innerText = exdata.main + "," + exdata.description;
        icon.setAttribute('src', icon_url + exdata.icon + ".png");
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {});
}