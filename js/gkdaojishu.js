
setInterval(function () {
    // 读取元素
    const text_tian = document.querySelector('.tian');
    const text_miao = document.querySelector('.miao');
    const text_fen = document.querySelector('.fen');
    const text_shi = document.querySelector('.shi')
    // 定义时间
    let last_time = new Date('2024-06-07 00:00:00')
    let now_time = new Date();
    let times = (last_time - now_time) / 1000
    let d = parseInt(times / 60 / 60 / 24);
    text_tian.innerHTML = (d < 10 ? "0" + d : d) + '天';
    let h = parseInt(times / 60 / 60 % 24);
    text_shi.innerHTML = (h < 10 ? "0" + h : h) + '时';
    let m = parseInt(times / 60 % 60);
    text_fen.innerHTML = (m < 10 ? "0" + m : m) + '分';
    let s = parseInt(times % 60);
    text_miao.innerHTML = (s < 10 ? "0" + s : s) + '秒';

}, 1000)
