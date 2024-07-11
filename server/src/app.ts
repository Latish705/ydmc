import express from 'express';
import userRoutes from './user/routes/routes';
import adminRoutes from './admin/routes/routes';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//user routes
app.use("/api/user", userRoutes);

//admin routes
app.use("/api/admin", adminRoutes);

export default app;
