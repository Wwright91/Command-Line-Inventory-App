const { nanoid } = require("nanoid");

const weedProductsJSON = require("../data/weed.json");

const inform = console.log;

function create(weedProducts, productDetails) {
  // console.log("product details", productDetails)
  const [name, priceInCents, strand] = productDetails;
  const currentProduct = {
    id: nanoid(4),
    name,
    priceInCents: +priceInCents,
    inStock: true,
    strand,
  };

  weedProducts.push(currentProduct);
  return weedProducts;
}

function index(weedProducts) {
  return weedProducts
    .map(({ id, name }) => `ID: ${id} - Product Name: ${name}`)
    .join("\n");
}

function show(weedProducts, productId, modify = false) {
  const currentProduct = weedProducts.find(
    (product) => product.id === productId
  );
  if (modify) {
    return currentProduct.name;
  }
  const { id, name, priceInCents, inStock, strand } = currentProduct;
  return `ID: ${id} | Product Name: ${name} | Cost: ${priceInCents} | In Stock: ${inStock} | Strand: ${strand}`;
}

function destroy(weedProducts, productId) {
  const index = weedProducts.findIndex((product) => product.id === productId);
  if (index > -1) {
    inform(
      `Product '${show(
        weedProducts,
        productId,
        true
      )}' was successfully removed`
    );
    weedProducts.splice(index, 1);
  } else {
    inform(`No product was found with ID: '${productId}'`);
  }
  return weedProducts;
}

function update(weedProducts, productId, availabilty) {
  const index = weedProducts.findIndex((product) => product.id === productId);
  if (index > -1) {
    weedProducts[index].inStock = JSON.parse(availabilty);
    inform(
      `Product '${show(
        weedProducts,
        productId,
        true
      )}' was successfully updated`
    );
  } else {
    inform(`No product was found with ID: '${productId}'. No action taken`);
  }
  return weedProducts;
}

function addToCart(weedCart, productId) {
  const productToAdd = weedProductsJSON.find(
    (product) => product.id === productId
  );
  const productInCart = weedCart.findIndex(
    (product) => product.id === productId
  );
  if (productToAdd && productToAdd.inStock) {
    if (productInCart > -1) {
      weedCart[productInCart].quantity++;
    } else {
      productToAdd.quantity = 1;
      weedCart.push(productToAdd);
    }
    inform(`Product '${productToAdd.name}' was added to the cart`);
  } else if (!productToAdd.inStock) {
    inform(
      `Product '${show(
        weedProductsJSON,
        productId,
        true
      )}' is currently out of stock`
    );
  } else {
    inform(`No product was found with ID: '${productId}'. No action taken`);
  }
  return weedCart;
}

module.exports = { create, index, show, destroy, update, addToCart };
