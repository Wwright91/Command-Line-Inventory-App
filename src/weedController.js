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

module.exports = { create };
