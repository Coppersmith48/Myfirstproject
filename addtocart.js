<script>
// add to cart function that saves to localStorage
const addToCart = (productName, price, imageUrl) => {
  // Fetch cart from localStorage or initialize as an empty array
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    // Increase quantity if product exists
    existingProduct.quantity += 1;
  } else {
    // Add new product to the cart if it doesn't exist
    const newProduct = {
      name : productName,
      price: price,
      image: imageUrl,
      quantity: 1,
    };
    cart.push(newProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("product has been add to cart")
  // Swal.fire({
  //   title: "Added to Cart!",
  //   text: `${productName} has been added to your cart.`,
  //   icon: "success",
  //   confirmButtonText: "Cool!",
  //   timer: 2000, // Set the timer to 3000ms (3 seconds)
  //   timerProgressBar: true, // Show a progress bar during the timer
  // });

  // Update cart count in the cart-icon
  updateCartCount();
};

const viewProductDetails = (name, price, imageUrl) => {
  const productDetails = {
    name: name,
    price: price,
    imageUrl: imageUrl,
  };
  localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
  // Redirect to product details page
  window.location.href = "/detail page/detail.html";
};

// function to update cart icon count
const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItem;

  const cartCountElement = document.getElementById("cart-count"); // Select the cart count element
  cartCountElement.textContent = totalItem; // Update the text content with total items

  // Show or hide the badge based on totalItem
  if (totalItem > 0) {
    cartCountElement.style.display = "inline-block"; // Show badge if count > 0
  } else {
    cartCountElement.style.display = "none"; // Hide badge if count is 0
  }
};
window.onload = updateCartCount;

document.getElementById("hamburg")?.addEventListener("click", () => {
  document.getElementById("nav-menu")?.classList.toggle("active");
});
</script>