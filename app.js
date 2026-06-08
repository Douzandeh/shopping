import Cart from "./models/Cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart_list");
const totalPriceNode = document
  .getElementById("total_price")
  .querySelector("span");

async function render() {
  const productsData = await fetchData();

  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance,
  );
  console.log(cartInstance);

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
