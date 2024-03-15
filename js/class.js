//捕获元素
const tbody = document.querySelector('.timetable tbody')

//存入数据
class_data = [
    { name: "网络原理实验", classroom: [null, null], date: [12, 13, 14, 15, 16, 17], weekclass: [[1, 1], [1, 4]] },
    { name: "网络原理及操作", classroom: [5202, 6306], date: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11], weekclass: [[1, 2], [3, 1]] },
    { name: "习近平中国特色社会主义思想概论", classroom: [2102, 2102], date: [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], weekclass: [[1, 3], [5, 1]] },
    { name: "体育", classroom: ['羽毛球馆'], date: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], weekclass: [[2, 1]] },
    { name: "c#程序设计", classroom: [6206, 5301], date: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], weekclass: [[2, 3], [4, 3]] },
    { name: "大学英语", classroom: [6401, 6107], date: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13], weekclass: [[2, 4], [5, 2]] },
    { name: "数据库原理及其应用", classroom: [2203], date: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], weekclass: [[3, 3]] },
    { name: "UI交互设计与表现", classroom: [3408, 3408], date: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18], weekclass: [[3, 4], [4, 2]] },
    { name: "UI交互设计与表现", classroom: [3408], date: [1, 2], weekclass: [[5, 3]] },
    { name: "思想道德与法制", classroom: [2203], date: [16, 17, 18], weekclass: [[5, 3]] },
    { name: "思想道德与法制", classroom: [5101], date: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18], weekclass: [[1, 5]] },
    { name: "职业核心能力", classroom: [4107], date: [1, 2, 3, 4, 5, 6, 7, 8], weekclass: [[4, 4]] },
    { name: "形势与政策", classroom: [2201], date: [5, 6, 7, 8], weekclass: [[6, 2]] },
    { name: "【选修】创新创业理论技术", classroom: [5302], date: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18], weekclass: [[6, 3]] },
    { name: "【选修】中国古建筑欣赏与设计", classroom: [2402], date: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18], weekclass: [[6, 4]] },
    { name: "c#上机", classroom: [3401], date: [2, 3, 4, 5, 6, 7, 8, 10, 11], weekclass: [[1, 1]] },
    { name: "c#上机", classroom: [3401], date: [12, 13, 14], weekclass: [[1, 2]] },
    { name: "数据库上机", classroom: [null], date: [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], weekclass: [[4, 1]] },

]

//使用dom创建表格
// 时间数据
const classtime = [{ noc: '第一讲', times: '08:30-10:05' }, { noc: '第二讲', times: '10:20-11:55' }, { noc: '第三讲', times: '13:30-15:05' }, { noc: '第四讲', times: '15:20-16:55' }, { noc: '晚上', times: '18:30-20:00' }]
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr')
    tr.innerHTML = `<td><div>${classtime[i].noc}</div><div>(${classtime[i].times})</div></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
        `
    tbody.appendChild(tr);
}
// 渲染数据函数
function fn_timetable() {

    let now_time = new Date();
    let begin_time = new Date('2024-03-03 21:00:00');
    // 计算时间差（毫秒数）
    let time_diff = now_time.getTime() - begin_time.getTime();
    // 将毫秒数转换为周数（以 7 天为一周）
    let weeks_passed = Math.floor(time_diff / (1000 * 60 * 60 * 24 * 7));

    // 判断当前是否开课
    if (time_diff >= 0) {

        // 循环遍历数据并插入表格中
        for (let j = 0; j < class_data.length; j++) {
            //循环取得课程周数
            for (let k = 0; k < class_data[j].date.length; k++) {
                //先将课程周数与当前周数作比较,如果当前周数与现在时间相同,则添加数据
                if (class_data[j].date[k] == weeks_passed + 1) {
                    for (let i = 0; i < class_data[j].weekclass.length; i++) {
                        const td = document.querySelector(`.timetable tbody >:nth-child(${class_data[j].weekclass[i][1]}) >:nth-child(${class_data[j].weekclass[i][0] + 1})`)
                        td.innerHTML = ` <div>${class_data[j].name}</div> <div>${class_data[j].classroom[i]}</div > `
                    }
                }
                //否则跳过
                else {
                    continue
                }
            }
        }
    }

}
fn_timetable()
// 定时刷新函数
function executeAt2100() {
    let now = new Date();
    let today2100 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0, 0);

    // 如果当前时间已经超过了今天 22:00，将明天的 22:00 设为执行时间
    if (now >= today2100) {

        today2100.setDate(today2100.getDate() + 1);
    }

    let timeUntil2100 = today2100 - now;

    // 设置定时器，在 22:00 时执行函数
    setTimeout(function () {
        // 执行特定函数
        fn_timetable();
        console.log(1);

        executeAt2100();

    }, timeUntil2100);
}
// 调用函数启动定时任务
executeAt2100();
