const {
  Builder,
  By,
  Key
} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require("assert"); // built in node js assertion library

async function myFirstTest() {
  // launch the browser
  // const driver = await new Builder().forBrowser("firefox").build();
  const driver = await new Builder().forBrowser("chrome").build();

  // navigate to apps (url)
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // todo
  // find element by id to locate the text box, then input "Learn Selenium" and hit Enter
  await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

  // assertion
  let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(value => {
    return value;
  });

  assert.strictEqual(todoText, "Learn Selenium");

  // close the browser
  await driver.quit();

}

myFirstTest();