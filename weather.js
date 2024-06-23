const apiKey="5be23c0093e508ff833180cdeedf83fc";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".sear input");
const searchBtn=document.querySelector(".sear button");
const weatherI=document.querySelector(".cloudi");


        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(response.status == 404)
            {
                document.querySelector(".error").style.display="block";
                document.querySelector(".clou").style.display="none";
            }
            else{
                var data = await response.json();
                const tem=document.querySelector(".temp");
        tem.innerHTML=Math.round(data.main.temp) + "°c";
        const cit=document.querySelector(".city");
        cit.innerHTML=data.name;
        const hum=document.querySelector(".humi");
        hum.innerHTML=data.main.humidity + "%";
        const win=document.querySelector(".wind");
        win.innerHTML=data.wind.speed + " km/h";

        if(data.weather[0].main=="Clouds"){
            weatherI.src="cloud.png";
        }
         else if(data.weather[0].main=="Clear"){
            weatherI.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherI.src="raini.png";
        }
        else if(data.weather[0].main=="Haze"){
            weatherI.src="drizz.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherI.src="mist.png";
        }
        document.querySelector(".clou").style.display="block";
        document.querySelector(".error").style.display="none";
        }
            }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
        