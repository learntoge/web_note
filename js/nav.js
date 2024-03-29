// 定义变量，获取元素
let biji = document.querySelector(".biji");
let ziliao = document.querySelector('.ziliao')
// 使用存储数据
// 笔记数据
const biji_data = [
    { logo: 'img/logo-mysql-70x70.png', src: 'html_note/MySQL_text.html', tip: 'MySQL笔记' },
    { logo: 'img/logo-Typora-70x70.png', src: 'html_note/Typora.html', tip: 'Typora教程' },
    { logo: 'img/LOGO-Csharp.png', src: 'html_note/Csharp_text.html', tip: 'C#笔记' },
    { logo: 'img/linux.png', src: 'html_note/Linux_text.html', tip: 'Linux笔记' }
]//{ logo: '', src: '', tip: 'MySQL笔记' },

const ziliao_data = [
    { logo: 'img/logo_ceshi.png', src: 'index.html', tip: '测试模块' },
    { logo: 'img/logo_ceshi.png', src: 'index.html', tip: '测试模块' }]
//定义函数渲染菜单栏内容
function nav_data_in(data, obj) {

    //for循环将数据渲染到页面
    for (let i = 0; i < data.length; i++) {
        let li = window.document.createElement('li')
        li.innerHTML = `<a href="${data[i].src}">
                    <img src="${data[i].logo}" alt="">
                    <p>${data[i].tip}</p>
                    </a>`

        obj.appendChild(li)
        // console.log(li);
    }
}

nav_data_in(biji_data, biji);
nav_data_in(ziliao_data, ziliao)
/* 模板 
<li><a href="">
        <img src="" alt="">
        <p></p>
    </a></li> */