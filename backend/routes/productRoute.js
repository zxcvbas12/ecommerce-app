import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([{ name: "image1", maxCount: 1 }]),
  addProduct
);
productRouter.post("/list", listProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);

export default productRouter;
