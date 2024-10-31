const city = document.querySelector('input');
const btn = document.querySelector('button');

const temp = document.querySelector('.temp');
const city_Name = document.querySelector('.city_Name');





btn.addEventListener("click", async () => {
    try {
        let citym = city.value;
        console.log(citym);
        const apiKey = '89bab08da6bb402992773347240908';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${citym}`;

        console.log(url);
        let res = await fetch(url);


        if (!res.ok) {
            alert("Not Found");
        }


        let data = await res.json();


        const c = Math.floor(data.current.temp_c) * 1;


        temp.innerHTML = c + "°C";

        city_Name.innerHTML = citym;


        // console.log(`The temperature in ${city} is ${data.current.temp_c}°C.`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});