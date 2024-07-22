import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Frontend',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [
    ['list'],
    ['monocart-reporter', {  
        name: "Test Report",
        outputFile: './test-results/report.html',
    }]
],
use: {
  browserName: "chromium",
  headless:true,
  screenshot:'on',
  actionTimeout: 50 * 1000,
},
 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});
