import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.route.js";

const app = express();

app.use(
  cors({
     origin: [
      "http://localhost:5173",
      "https://my-portfolio-mm0v.onrender.com"
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

app.use("/api/contact", contactRoutes);

export default app;