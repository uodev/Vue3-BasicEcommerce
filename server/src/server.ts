import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinaryConfig from "./infrastructure/config/cloudinary";
import fileUpload from "express-fileupload";
import { errorHandlinig } from "./api/middlewares/errors/errorHandling";
import router from "./api/routes";

dotenv.config({ path: __dirname + "/infrastructure/config/.env" });

const app = express();

cloudinaryConfig();

//! Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

//! Routes
app.use("/api", router);

//! Error Handling
app.use(errorHandlinig);
export default app;
