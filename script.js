const cityInput  = document.querySelector('.city-input');
const getWeatherBtn = document.querySelector('.get-weather-btn');
const apiKey = '1dbfe771cc191463fb6dfa8f5970594a'

const weatherInfoSection = document.querySelector('.weather-info');
const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');

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

async function  getFetchData(endPoint, city){
    const apiUrl =`https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(apiUrl)

    return response.json()

}
async function updateWeatgherInfo(city){
    const weatherData =  await getFetchData('weather', city);

    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection)
        return
    }
    showDisplaySection(weatherInfoSection)
}

function showDisplaySection(section){
    [weatherInfoSection, notFoundSection, searchCitySection].forEach(section => section.computedStyleMap.display = 'none');
    
    section.style.display = 'flex';

}