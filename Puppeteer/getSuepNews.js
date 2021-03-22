/**
 * 采集上海电力大学新闻的js脚本
 */
const puppeteer = require("puppeteer");

let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://news.shiep.edu.cn/campus_news/list.htm");

    const result = await page.evaluate(() => {
        let data = []; // 初始化空数组来存储数据
        let elements = document.querySelectorAll(".Article_Title > a"); // 获取所有书籍元素

        for (var element of elements) {
            // // 循环
            let title = element.innerText; // 获取标题
            console.log(title)
            let href = element.href; // 获取标题
            //
            data.push({ title, href }); // 存入数组
        }

        return data; // 返回数据
    });

    browser.close();
    return result;
};

scrape().then(value => {
    console.log(value); // Success!
});
