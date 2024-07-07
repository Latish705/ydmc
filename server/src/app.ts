import express from "express";
import userRoutes from "./user/routes/routes";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//user routes
app.use("/api/user", userRoutes);

export default app;
