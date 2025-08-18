import express from "express";
import cors from "cors";
import superheroRoutes from "./routes/superhero.routes";
import path from "path";



const app = express();

// Enable CORS
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
// Отдаем статику из папки uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.get("/", (_, res) => {
  res.send("API is running");
});


// Mount API routes
app.use("/api/heroes", superheroRoutes);

app.listen(4000, () => console.log("Server running on http://localhost:4000"));

export default app;