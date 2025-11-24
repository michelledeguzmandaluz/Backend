import express from "express";
import "dotenv/config.js";
import cors from "cors";

import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";
import userRoutes from "./routers/UserRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/book", bookRoutes);
app.use("/student", studentRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

