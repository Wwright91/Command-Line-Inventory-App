const { nanoid } = require("nanoid");

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

function show(weedProducts, productId) {
  const currentProduct = weedProducts.find(
    (product) => product.id === productId
  );
  const { id, name, priceInCents, inStock, strand } = currentProduct;
  return `ID: ${id} | Product Name: ${name} | Cost: ${priceInCents} | In Stock: ${inStock} | Strand: ${strand}`;
}

module.exports = { create, index, show };
