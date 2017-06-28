import {expect} from 'chai';//use 'expect' style that comes with chai, which is an assertion library that is not included with Mocha
import jsdom from 'jsdom';//a JavaScript based headless browser that can be used to create a realistic testing environment
import fs from 'fs';//comes with Node...lets us interact with filesystem

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {//2nd test w/ jsdom
  it('should have h1 that says Users', (done) => {//tell Mocha that test is done once it runs
    const index = fs.readFileSync('./src/index.html', "utf-8");//hold in memory
    jsdom.env(index, function(err, window) {//create virtual dom in memory
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");//write assertion
      done();
      window.close();
    });
  })
})
