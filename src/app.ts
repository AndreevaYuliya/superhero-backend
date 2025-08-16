import express from "express";
import superheroRoutes from "./routes/superhero.routes";

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

// Test root route
app.get("/", (req, res) => {
  res.send("🚀 Superhero API is running!");
});

// API routes
app.use("/api/superheroes", superheroRoutes);

export default app;
