import express from "express";
import bookController from "../controller/book.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/addBook", upload.single("bookImage"), bookController.add);
router.get("/showAllBook",bookController.getAll);
router.get("/getByBook/:id",bookController.getById);
router.delete("/deleteBook/:id",bookController.deleteBook);

export default router;
