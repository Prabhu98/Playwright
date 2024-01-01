// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');
const { on } = require('events');



/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  
  /*Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {
    timeout:5000
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects : [

    {

      name : "chrome",
      use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://127.0.0.1:3000',
    
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        //trace: 'on-first-retry',
       browserName: 'chromium',
       headless: false,
       screenshot : 'off',
       trace : 'on',
      // ...devices['Galaxy Note 3'],
       //viewport : {width:720,height:720} 
       
      }
    }
  ]
  

 

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

