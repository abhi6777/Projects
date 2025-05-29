import app from "./app.js";
import { home } from "./controllers/userController.js";

const PORT = process.env.PORT || 4000;

app.get("/", home);

app.listen(PORT, () => {
     console.log(`Server is running at http://localhost:${PORT}`);
});

