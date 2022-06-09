import express from "express";
import { getAllUser, login, singup } from "../controllers/user-controller";

const router = express.Router();

router.get("/",getAllUser);
router.post("/singup",singup);
router.post("/login",login);
export default router;