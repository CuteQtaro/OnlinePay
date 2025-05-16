import express from "express";
import cors from "cors";
import router from "./routes";
import multer from "multer";
import path from "path";

const app = express();
app.use(cors());

app.use("/uploads", express.static("uploads"));

// Middleware để phân tích JSON và form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

if (import.meta.env.PROD) app.listen(3000);

export const viteNodeApp = app;
