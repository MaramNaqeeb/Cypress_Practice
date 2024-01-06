const { defineConfig } = require("cypress");
import * as XLSX from "xlsx";

import * as path from "path";
import { writeFileSync } from "fs";


module.exports = defineConfig({
  e2e: {
    env: {
      requestMode: true,
      snapshotOnly: true,
      download_dir: "./cypress/downloads",
    },

    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on: any, config: any) {
      on("task", {
        async convertXlsxToJson(xlsxPath: any) {
          const workbook = XLSX.readFile(xlsxPath);
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          const fileName = path.basename(xlsxPath, "xlsx");
          const jsonFilePath = `cypress/fixtures/${fileName}json`;
          writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 1));
          return null;
        },
      });

    },
    
    baseUrl: "https://opensource-demo.orangehrmlive.com",
  },
  
});

