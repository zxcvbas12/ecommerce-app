import orderModel from "../models/orderModel.js";

// placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    //check data validation
    // if (!userId || !items || !amount || !address) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Missing required fields" });
    // }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cardData: {} });

    // just in case
    //await userModel.findByIdAndUpdate(userId, { cartItems: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// placing orders using Stripe method
const placeOrderStripe = async (req, res) => {};

// placing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {};

// all orders data for admin panel
const allOrders = async (req, res) => {};

// user order data for frontend
const userOrders = async (req, res) => {};

// update order status from admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
