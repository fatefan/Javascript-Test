// var webdriver = require('selenium-webdriver'),
// By = webdriver.By,
// until = webdriver.until;
// var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
// var driver = new webdriver.Builder().forBrowser('chrome').build();
// try {
// driver.get('http://localhost:9000/');

// } catch(e) {
//     console.log(e);
// }
// driver.findElement(By.linkText('7')).click();
// until.elementTextIs(driver.findElement(By.id('screen')),'7');
// driver.quit() 

const webdriver = require('selenium-webdriver');
const Capabilities = require('selenium-webdriver/lib/capabilities').Capabilities;
By = webdriver.By,
    until = webdriver.until;
var capabilities = Capabilities.firefox();

capabilities.set('marionette', true);

var driver = new webdriver.Builder().withCapabilities(capabilities).build();
driver.get('http://localhost:9000/');
driver.findElement(By.xpath('//*[@id="keyboard"]/div[2]/button[1]')).click();
var screenValue = driver.findElement(By.id('screen'));
driver.wait(until.elementTextIs(screenValue,'7'),10);

// driver.quit() 