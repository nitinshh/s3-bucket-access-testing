const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.redirect("https://test-bucket-something.s3.ap-south-1.amazonaws.com/37CC8BEE-DD17-4D0D-B7F2-987A530DD11D.png");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
