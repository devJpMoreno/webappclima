// Api key OpenWeather
const API_KEY = '0b91c4f549ccf73c2e7dfd2a68eb2d01';

//Funcion para recibir el la localizacion del usuario
const fetchData = position => {
    const{ latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setweatherData(data));

    console.log(position);
}
// obtener los datos de la api para mostrarlos
const setweatherData = data =>{
    console.log(data);
    const weatherData ={
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.temp,
        temperature: data.main.temp,
        date: getDate(),
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key]
    });

    clearUp();
}
//Funcion para mostrar el contenido despues del spinner
const clearUp = () => {
     let container = document.getElementById('container');
     let loader = document.getElementById('loader');

     loader.style.display = 'none';
     container.style.display = 'flex';
}

// funcion para obtener fecha

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0'+ (date.getMonth() +1)).slice(-2)}${-date.getFullYear()}`
}
//Funcion para Obtener la ubicacion del usuario
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}
