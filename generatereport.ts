const reports = require("multiple-cucumber-html-reporter");


reports.generate({
    jsonDir: "BackendReport",
    reportPath: "./BackendReport/test-result/monocart-reporter",
    openReportInBrowser: true,
    saveCollectedJSON: true, // Make it true if you run with multiple feature file
    pageFooter: '<p align="center">Automation Report</p>',
    pageTitle: "Backend Report",
    reportName: "Test Case Report",
    displayDuration: true,


    metadata: {
        browser: {
            name: "chrome",
            version: "120",
        },
        device: "Local test machine",
        platform: {
            name: "ios",
            version: "16.04",
        },
    },
});