const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('.a-selector-on-page');
  await percySnapshot('homepage');
});
