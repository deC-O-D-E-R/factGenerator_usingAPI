import express from "express";
import axios from "axios";

const app = express();
const port = 2000;

app.use(express.static('public'));

const api_key = "tZRC7FSPhwkjkt4IOuQCwA==Z1D17X6h1tS4mati"
const url = "https://catfact.ninja/fact"

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/fact", async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact", Headers= {'X-Api-Key': 'tZRC7FSPhwkjkt4IOuQCwA==Z1D17X6h1tS4mati'});
        const result = response.data;
        res.render("index.ejs", { quote: result.fact });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});