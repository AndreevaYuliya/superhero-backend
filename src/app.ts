import express from "express";
import superheroRoutes from "./routes/superhero.routes";

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

// app.get('/', (_, res) => {
//     res.send("LOX")
// })

app.use("/", superheroRoutes);  // add this line


// API routes
app.use("/api/superheroes", superheroRoutes);

export default app;
