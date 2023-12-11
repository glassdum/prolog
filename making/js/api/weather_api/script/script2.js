const content = document.getElementById('contents');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('depth2_btn');
const push = document.getElementById('push');
const textInput = document.getElementById('text_box');
let weather = [];

const getWeatherApi = async function(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=938493a1e51858c5cfe16a307d2cf425&&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    weather = data;
    // console.log(weather);

    renderingIndex();

}
const getCityLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherApi(lat,lon);
        // console.log(lat,lon);
    })
}

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
}

push.addEventListener('click',getInputCityName);
textInput.addEventListener('keypress',function(e){
    const code = e.code;
    if(code == `Enter`){
        getInputCityName();
    }
})

// let city0 = [`seoul`,`busan`,`daegu`,`incheon`,`gwangju`,`daejeon`,`ulsan`,`sejong`,]

let city0 = [
    {
        en:'Seoul',
        ko:'서울'
    },
    {
        en:'busan',
        ko:'부산'
    },
    {
        en:'daegu',
        ko:'대구'
    },
    {
        en:'incheon',
        ko:'인천'
    },
    {
        en:'gwangju',
        ko:'광주'
    },
    {
        en:'daejeon',
        ko:'대전'
    },
    {
        en:'ulsan',
        ko:'울산'
    },
    {
        en:'sejong',
        ko:'세종'
    },
]

let button0 = document.getElementsByClassName('no0')
let button1 = document.getElementsByClassName('no1')
let button2 = document.getElementsByClassName('no2')
let button3 = document.getElementsByClassName('no3')
let button4 = document.getElementsByClassName('no4')
let button5 = document.getElementsByClassName('no5')
let button6 = document.getElementsByClassName('no6')
let button7 = document.getElementsByClassName('no7')
let button8 = document.getElementsByClassName('no8')
let button9 = document.getElementsByClassName('no9')


let test = document.querySelectorAll('#depth2_btn')
console.log(test)

let btnButton = document.querySelectorAll('#btn>button');
let btn0Button = document.querySelectorAll('.no0>button');
let btn1Button = document.querySelectorAll('.no1>button');
let btn2Button = document.querySelectorAll('.no2>button');
let btn3Button = document.querySelectorAll('.no3>button');
let btn4Button = document.querySelectorAll('.no4>button');
let btn5Button = document.querySelectorAll('.no5>button');
let btn6Button = document.querySelectorAll('.no6>button');
let btn7Button = document.querySelectorAll('.no7>button');
let btn8Button = document.querySelectorAll('.no8>button');
let btn9Button = document.querySelectorAll('.no9>button');


let btnHtml = '';
city0.map(function(e,i){
    let make = document.createElement('button');
    make.innerHTML = `${city0[i].ko}`
    console.log(make)
    test[0].appendChild(make);
})

console.log(btn0Button);




btn0Button.forEach(function(e,i){
    e.addEventListener('click',async function(){
        let city = city0[i].en
        let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=938493a1e51858c5cfe16a307d2cf425&&units=metric`;
        let response = await fetch(url2);
        let data = await response.json();
        weather = data;
        console.log(weather);
        renderingIndex();
    })
})

$('#btn>button').click(function(){
    let num = $(this).index()
    $(test).eq(num).fadeIn();
})
// $(test).click(function(){
//     $(this).fadeOut();
// })