const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create } = require("./src/weedController");

const inform = console.log;

function run() {
  const action = process.argv[2];
  let weedProducts = readJSONFile("data", "weed.json");
  let writeToFile = false;
  let updatedWeedProducts = [];

  switch (action) {
    case "index":
      inform(action);
      break;
    case "create":
      updatedWeedProducts = create(weedProducts, process.argv.slice(3));
      writeToFile = true;
      break;
    case "show":
      inform(action);
      break;
    case "update":
      inform(action);
      break;
    case "destroy":
      inform(action);
      break;
    case "total":
      inform(action);
      break;
    case "empty":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("data", "weed.json", updatedWeedProducts);
  }
}

run();
