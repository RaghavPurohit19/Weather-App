const apiKey ="bae442f967620904ddc5f3ac2bcac523";
        const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(respone.status ==404){
                document.querySelector(".error").style.display= "block";
                document.querySelector(".weather").style.display= "none";
            }else{
                var data = await respone.json();

           

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            if(data.weather[0].main =="Clouds"){
                weatherIcon.src = "images/clouds.png";
            }else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }else if(data.weather[0].main=="Rain"){
                weatherIcon.src = "images/rain.png"
            }else if(data.weather[0].main=="Snow"){
                weatherIcon.src = "images/snow.png"
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display= "none";

            }
            
        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })
        checkWeather(city);