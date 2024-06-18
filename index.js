const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {
  create,
  index,
  show,
  destroy,
  update,
  addToCart,
} = require("./src/weedController");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const productId = process.argv[3];
  let weedProducts = readJSONFile("data", "weed.json");
  let weedCart = readJSONFile("data", "weedCart.json");
  let writeToFile = false;
  let writeToCart = false;
  let updatedWeedProducts = [];
  let updatedWeedCart = [];

  switch (action) {
    case "index":
      inform(index(weedProducts));
      break;
    case "create":
      updatedWeedProducts = create(weedProducts, process.argv.slice(3));
      writeToFile = true;
      break;
    case "show":
      inform(show(weedProducts, productId));
      break;
    case "update":
      updatedWeedProducts = update(weedProducts, productId, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedWeedProducts = destroy(weedProducts, productId);
      writeToFile = true;
      break;
    case "addToCart":
      updatedWeedCart = addToCart(weedCart, productId);
      writeToCart = true;
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
  if (writeToCart) {
    writeJSONFile("data", "weedCart.json", updatedWeedCart);
  }
}

run();
