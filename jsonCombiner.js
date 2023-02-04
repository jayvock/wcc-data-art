const fs = require("fs");
const path = require("path");

async function combineJSONFiles(filePath) {
  let superArray = [];
  let imageNames = [];
  const files = fs.readdirSync(filePath);

  for (let file of files) {
    let fileName = path.join(filePath, file);
    let data = await fs.promises.readFile(fileName, "utf8");
    let jsonData = JSON.parse(data);
    imageNames.push(...jsonData.url.imageNames);
  }
  superArray.push({"imageNames": imageNames});
  fs.writeFileSync(path.join(filePath, "superArray.json"), JSON.stringify(superArray));
  console.log("Super Array created successfully");
};

combineJSONFiles('./json/');