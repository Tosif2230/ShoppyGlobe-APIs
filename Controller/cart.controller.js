import CartModel from "../model/Cart.model.js";

// Add product to cart
export async function addToCart(req, res) {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    // Check if product already in cart
    let cartItem = await CartModel.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();
      return res.status(200).json(cartItem);
    }
    const newCartItem = await CartModel.create({
      userId,
      productId,
      quantity: quantity || 1,
    });

    return res.status(201).json(newCartItem);
  } catch (err) {
    return res.status(500).json({ errorMessage: err.message });
  }
}

// Get logged-in user's cart
export async function getUserCart(req, res) {
  try {
    const userId = req.user._id;

    const cart = await CartModel.find({ userId }).populate(
      "productId",
      "name price description"
    );

    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json({ errorMessage: err.message });
  }
}

// Update cart item quantity
export async function updateCartItem(req, res) {
  try {
    const { quantity } = req.body;

    const updatedItem = await CartModel.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    return res.status(200).json(updatedItem);
  } catch (err) {
    return res.status(500).json({ errorMessage: err.message });
  }
}

// Remove item from cart
export async function removeCartItem(req, res) {
  try {
    const deletedItem = await CartModel.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    return res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    return res.status(500).json({ errorMessage: err.message });
  }
}
