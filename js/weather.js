//获取城市id
function getcity(p) {
    const city = new Promise((yes, no) => {
        const xhr = new XMLHttpRequest()
        const str = new URLSearchParams(p.params)
        xhr.open('get', `${p.url}?${str}`)
        xhr.addEventListener('loadend', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                yes(xhr.response)
            }
            else {
                no(xhr.response)
            }
        })
        xhr.send()
    })
    city.then(resweather_cityt => {

        const p = JSON.parse(resweather_cityt).location
        const c = p.map((datas, index) => {
            return `<li data-ID=${datas.id}>${datas.adm1}-${datas.adm2}-${datas.name}</li>`
        })

        const citylist = document.querySelector('.citylist')
        citylist.style.display = 'block'
        citylist.innerHTML = c.join('')
    })
}
function weather(f) {
    const wea = new Promise((yes, no) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', `https://devapi.qweather.com/v7/weather/3d?location=${f}&key=65d0a2b066b648a5943de91b7cf5790e`)
        xhr.addEventListener('loadend', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                yes(xhr.response)
            }
            else {
                no(xhr.response)
            }
        })
        xhr.send()
    })
    wea.then(result => {
        const w = JSON.parse(result).daily
        const p = w.map((datas, index) => {
            return ` 
            <span>
                <div>${datas.fxDate}</div>     
                <div class="day">
                <div>----白天----</div>
                <div>${datas.tempMin}℃-${datas.tempMax}℃</div>
                <div>${datas.textDay}<i class="qi-${datas.iconDay}"></i></div>
                <div>${datas.windDirDay}${datas.windScaleDay}级</div>
                </div>
                <div class="night">
                <div>----夜间----</div>               
                <div>${datas.moonPhase}<i class="qi-${datas.moonPhaseIcon}"></i></div>
                <div>${datas.textNight}<i class="qi-${datas.iconNight}"></i></div>
                <div>${datas.windDirNight}${datas.windScaleNight}级</div>
                </div>
            </span>
                        `
        })
        document.querySelector('.weat').innerHTML = ""
        document.querySelector('.weat').innerHTML = p.join('')
    })
}
// 默认执行天气一次-默认为唐山丰润
weather(101090503)
//执行获取城市信息
const text = document.querySelector('.weather_city')
text.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {

        const a = {
            url: "https://geoapi.qweather.com/v2/city/lookup",
            params: {
                location: text.value || '唐山',
                key: "65d0a2b066b648a5943de91b7cf5790e"
            }
        }
        getcity(a)
    }
})
const citylist = document.querySelector('.citylist')
citylist.addEventListener('click', (e) => {
    weather(e.target.dataset.id)
    document.querySelector('.now_city').innerHTML = e.target.textContent
    citylist.style.display = 'none'
})