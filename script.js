const cityInput  = document.querySelector('.city-input');
const getWeatherBtn = document.querySelector('.get-weather-btn');
const apiKey = '1dbfe771cc191463fb6dfa8f5970594a'

getWeatherBtn.addEventListener('click', ()=>{   
    if(cityInput.value.trim() != ''){
    updateWeatgherInfo(cityInput.value)
    cityInput.value = ''   
    cityInput.blur()

    }
});

cityInput.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter' && cityInput.value.trim() != ''){
    updateWeatgherInfo(cityInput.value)
        cityInput.value = ''  
        cityInput.blur()    
    }
})

function  getFetchData(){
    const apiUrl ='https://api.openweathermap.org/data/2.5/forcast?q={city name}&appid=$(apiKey)'

}
function updateWeatgherInfo(city){
    const weatherData =  getFetchData()

}