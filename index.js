const express = require("express");
const port = 5555;
const app = express();
const mongoose = require("mongoose");
const productRoutes=require('./routes/product')
const userRoute = require('./routes/userRoute');
const sellerRoute =require('./routes/sellerRoute');
const cartRoutes=require('./routes/cartRoutes');

app.get("/", (req, res) => {
  res.send("hellow guys");
});

app.use(express.json());

app.use('/api',productRoutes)
app.use('/api',userRoute);
app.use('/api',sellerRoute);
app.use('/api',cartRoutes);

mongoose.connect(
  "mongodb+srv://onlypatilsaheb:o3vZ2Mbud8gbpJkk@crud.e2eomo0.mongodb.net/?retryWrites=true&w=majority&appName=crud"
).then(()=>{
    app.listen(port, () => {
        console.log("server is running on port ", port);
      });
})
.catch((error)=>{
    console.log(error);
})



