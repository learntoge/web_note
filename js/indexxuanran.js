document.querySelector('body').innerHTML = ` 
<!-- 导航栏模块 -->
<nav>
    <div class="nav_big_box">
        <span class="logotext"><a href="index.html"><img src="img/logo.png" alt="">
                <p>Learn Together</p>
            </a></span>
        <span class="nav_text">
            <span><a href="index.html">首页</a></span>
            <span class="menus"><a href="">学习笔记</a>
                <ul class="biji">
                    <!-- 笔记元素 -->
                </ul>
            </span>
            <span class="menus"><a href="">C#资料</a>
                <ul class="ziliao">
                    <!-- <li><a href="">
                            <img src="" alt="">
                            <p></p>
                        </a></li> -->
                </ul>
            </span>
            <span class="menus"><a href="">MySQL资料</a>
                <ul>
                    <!-- <li><a href="">
                            <img src="" alt="">
                            <p></p>
                        </a></li> -->
                </ul>
            </span>
            <span class="menus"><a href="">备用2</a>
                <ul>
                    <!-- <li><a href="">
                            <img src="" alt="">
                            <p></p>
                        </a></li> -->
                </ul>
            </span>
            <span class="menus"><a href="">备用3</a>
                <ul>
                    <!-- <li><a href="">
                            <img src="" alt="">
                            <p></p>
                        </a></li> -->
                </ul>
            </span>
        </span>

    </div>
</nav>
    <!-- 模块1 -->
    <div>
        <div class="first">

            <div class="gaokao">
                <div class="bg">
                    <p><strong>河北高考时间2025具体时间：2025年6月7日-6月9日举行！</strong></p>
                    <div class="title">2025年高考倒计时</div>
                    <div class="tian"></div>
                    <div class="shi"></div>
                    <div class="fen"></div>
                    <div class="miao"></div>



                </div>
                <table class="shijian">
                    <tbody>
                        <tr class="firstRow">
                            <td>日期</td>
                            <td>6月7日</td>
                            <td>6月8日</td>
                            <td>6月9日</td>
                        </tr>
                        <tr>
                            <td rowspan="4">上午</td>
                            <td rowspan="4">语文(9:00-11:30)</td>
                            <td rowspan="4">历史/物理(9:00-10:15)</td>
                            <td rowspan="4">
                                化学(8:30-9:45)<br><br>
                                地理(11:00-12:15)
                            </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td rowspan="4">下午</td>
                            <td rowspan="4">数学(15:00-17:00)</td>
                            <td rowspan="4">外语(15:00-17:00)</td>
                            <td rowspan="4">
                                思政(14:30-15:45)<br><br>
                                生物(17:00-18:15)
                            </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
                <div class="jiyv">
                    <video controls width="400" autoplay>
                        <source src="video/172254194-1-208.mp4" type="video/mp4" />
                    </video>
                    <h2>站长寄语</h2>
                    <p>2024年高考已落下帷幕，2025高考加油，愿你们前途似锦、未来可期!</p>
                    <font style="display: block; width: 90%; text-align: right; margin-top: 30px; color: chocolate;">
                        2024年6月9日</font>

                </div>
            </div>
            <div class="gonggao">
                <h3>网站公告</h3>
                <ol>
                    <li>本网站(原最美明天)始建于2023年4月，于2024年2月改版为Learn_Together</li>
                    <li>由于国内服务器即将到期，服务器续费金额昂贵，所以本站不再使用应用服务器部署</li>
                    <li>本站用于分享我的学习内容，笔记等。</li>
                    <li>本站学习内容可能存在不准确，不全面，甚至一些错误，如发现歧义，请以该语言的官方开发文档为准</li>
                    <li>网站分辨率1920*1080，16：9，PC浏览器端，如出现排版问题，可尝试增大或减小浏览器缩放比例</li>
                    <li>网站开发尚未完成，正在加紧开发。</li>
                </ol>
                <p>2024/03/01</p>
            </div>
        </div>
    </div>  
 <!-- 模块2 -->
    <div>
        <div class="second">
            <div class="timetable">
                <table>
                    <thead>
                        <tr>
                            <td>课时/时间</td>
                            <td>周一</td>
                            <td>周二</td>
                            <td>周三</td>
                            <td>周四</td>
                            <td>周五</td>
                            <td>周六</td>
                            <td>周日</td>
                        </tr>
                    </thead>
                    <tbody>
                        <!--课程信息 <tr><td></td></tr> -->
                    </tbody>
                </table>
            </div>
            <div class="weather_box">
                <div>
                    <h3>天气预报</h3>
                    <input type="text" class="weather_city" name="" id="" placeholder="输入城市名称查询天气(回车键确认)">
                    <ul class="citylist">
                        <!-- 城市列表 -->
                        <!-- <li data-id="101090503">河北省-唐山-丰润</li> -->
                    </ul>

                    <div class="now_city">河北省-唐山-丰润</div>
                    <div class="weat">
                        <!-- 天气预报内容 -->
                    </div>
                </div>


            </div>
        </div>
    </div>

    
 `