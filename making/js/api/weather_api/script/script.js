const content = document.getElementById('contents');
const searchBox = document.getElementById('search_box');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('depth2_btn');
let btn2Button = document.querySelectorAll('#depth2_btn>button');
const push = document.getElementById('push');
const textInput = document.getElementById('text_box');
let weather = [];


const getWeatherApi = async function(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=938493a1e51858c5cfe16a307d2cf425&&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    weather = data;
    city[0] = weather.name;
    // console.log(city)
    renderingIndex();
    let bg = weather.weather[0].main
            console.log(bg)
            if(bg == 'Clouds'){
                $('body').css({'background':'url(images/Clouds.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else if(bg == 'Rain'){
                $('body').css({'background':'url(images/Rain.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else if(bg == 'Snow'){
                $('body').css({'background':'url(images/Snow.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else{
                $('body').css({'background':'url(images/Clear.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }
    btnButton.forEach(function(e,i){
        e.addEventListener('click',async function(){
            let city2 = city[i]
            let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=938493a1e51858c5cfe16a307d2cf425&&units=metric`;
            let response = await fetch(url2);
            let data = await response.json();
            weather = data;
            renderingIndex();
            console.log(weather)
            let bg = weather.weather[0].main
            if(bg == 'Clouds'){
                $('body').css({'background':'url(images/Clouds.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else if(bg == 'Rain'){
                $('body').css({'background':'url(images/Rain.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else if(bg == 'Snow'){
                $('body').css({'background':'url(images/Snow.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else{
                $('body').css({'background':'url(images/Clear.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }
        })
    })
}

const getCityLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherApi(lat,lon);
        // console.log(lat,lon);
    })
}

let city0 = [`Seoul`,`Busan`,`Daegu`,`Incheon`,`Gwangju`,`Daejeon`,`Ulsan`,`Sejong`,`Suwon-si`,`Seongnam-si`,`Uijeongbu-si`,`Anyang-si`,`Bucheon-si`,`Gwangmyeong-si`,`Dongducheon-si`,`Pyeongtaek-si`,`Ansan-si`,`Goyang-si`,`Gwacheon`,`Guri`,`Namyangju`,`Osan`,`Siheung-si`,`Gunpo-si`,`Uiwang`,`Hanam-si`,`Yongin-si`,`Paju`,`Icheon-si`,`Anseong-si`,`Gimpo-si`,`Hwaseong-si`,`Gwangju-si`,`Yangju-si`,`Pocheon-si`,`Yeoju-si`,`Chuncheon-si`,`Wonju-si`,`Gangneung-si`,`Donghae-si`,`Taebaek-si`,`Sokcho-si`,`Samcheok-si`,`Cheongju-si`,`Chungju-si`,`Jecheon-si`,`Cheonan-si`,`Gongju`,`Boryeong-si`,`Asan-si`,`Seosan-si`,`Nonsan`,`Gyeryong-si`,`Jeonju`,`Gunsan`,`Iksan-si`,`Namwon`,`Gimje`,`Mokpo`,`Yeosu`,`Suncheon`,`Naju`,`Gwangyang`,`Pohang`,`Gyeongju`,`Gimcheon-si`,`Andong`,`Gumi`,`Yeongju-si`,`Sangju-si`,`Mungyeong`,`Gyeongsan-si`,`Changwon`,`Jinju`,`Sacheon`,`Gimhae`,`Miryang`,`Yangsan`,`Jeju`]
let city = city0.sort()
// console.log(city)
city.unshift('현재위치')


getCityLocation()

let renderingIndex = function(){
    let rendering = '';
    let integerCel = (Math.floor(weather.main.temp))
    let integerFah = (Math.floor(integerCel * 9/5) + 32)
    rendering = `<div class="contents_area">
        <h1>${weather.name}</h1>
        <h3><span>${integerCel}</span>&nbsp;℃&nbsp;/&nbsp;<span>${integerFah}</span>Ｆ</h3>
        <p class="weather">${weather.weather[0].description}</p>
        <p>체감온도:&nbsp;<span>${weather.main.feels_like}℃</span></p>
        <p>최저온도:&nbsp;<span>${weather.main.temp_min}℃</span></p>
        <p>최고온도:&nbsp;<span>${weather.main.temp_max}℃</span></p>
        <p>습도:&nbsp;<span>${weather.main.humidity}%</span></p>
        <p>풍속:&nbsp;<span>${weather.wind.speed}㎧</span></p>
    </div>`;
    content.innerHTML = rendering;
    textInput.value = '';
}

let getInputCityName = async function(){
    let search = document.getElementById('text_box').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=938493a1e51858c5cfe16a307d2cf425&&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    weather = data;
    // console.log(weather);
    renderingIndex();
    let bg = weather.weather[0].main
            if(bg == 'Clouds'){
                $('body').css({'background':'url(images/Clouds.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else if(bg == 'Rain'){
                $('body').css({'background':'url(images/Rain.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else if(bg == 'Snow'){
                $('body').css({'background':'url(images/Snow.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }else{
                $('body').css({'background':'url(images/Clear.jpg)','background-size':'cover','width':'100%','height':'100vh'})
            }
}

push.addEventListener('click',getInputCityName);
textInput.addEventListener('keypress',function(e){
    const code = e.code;
    if(code == `Enter`){
        getInputCityName();
    }
})

let btnHtml = '';
city.map(function(e,i){
    btnHtml+= `<button>${city[i]}</button>`
})
btn.innerHTML = btnHtml;

let btnButton = document.querySelectorAll('#btn>button');
// console.log(btnButton)