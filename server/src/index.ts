import express from "express";
import connnectDB from "./config/db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;
connnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
