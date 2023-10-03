const express = require('express')
const app = express()
const port = 3000
const cors=require('cors')
const db=require('./db')
const productController=require('./Controllers/ProductController')
const userController=require('./Controllers/UserController')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/products', (req, res) => {

    const data=[
        {
          url: "https://wallpapercave.com/wp/wp6670073.jpg",
          name: "Beats Headphone",
          price: 18000,
        },
    
        {
          url: "https://istyle.ma/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_14_pro_max_deep_purple_pdp_image_position-1a_en_4.jpg",
          name: "Iphone 14 Pro",
          price: 120000,
        },
    
        {
          url: "https://m.media-amazon.com/images/I/71BFWj3oHoL.jpg",
          name: "HP Pavillion",
          price: 35000,
        },
    
        {
          url: "https://cdn.mos.cms.futurecdn.net/FteziyLdBGk46TKmKaThhQ-1200-80.jpg",
          name: "JBL Bluetooth Speker",
          price: 6000,
        },
    
        {
          url: "https://m.media-amazon.com/images/I/6128OgyhQTL.jpg",
          name: "Samsung Galaxy Watch 4",
          price: 15000,
        },
    
        {
          url: "https://img.giznext.com/assets/model/4/3385/xiaomi-redmi-note-11-pro-712a5251d4a6b514eb8e907d96e452.jpg",
          name: "Redmi Note 12",
          price: 22000,
        },
    
        {
          url: "https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/z/e/zebronics-power-bank-20w-blue-thum1.jpg",
          name: "Zebronics Power Bank",
          price: 4000,
        },
    
        {
          url: "https://assets.ajio.com/medias/sys_master/root/20211130/qwgg/61a52b47aeb2690110e26d2e/-288Wx360H-469060104-twotone-MODEL.jpg",
          name: "Fossil Watch",
          price: 28000,
        },
    
        {
          url: "https://idestiny.in/wp-content/uploads/2021/10/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__en-IN.jpg",
          name: "MacBook Air",
          price: 150000,
        },
      ]
      
  res.send({code:200, message:'Fetch products success.', data: data})
})

app.post('/add-product', productController.addproduct )
app.get('/get-product', productController.getproduct )
app.post('/edit-product', productController.editproduct)
app.get('/get-product/:id', productController.getproductbyid)
app.post('/delete-product', productController.deleteproduct)
app.post('/signup', userController.signup)
app.post('/login', userController.login)
app.post('/add-to-cart', userController.addtocart)
app.post('/get-cart', userController.getcart)

app.listen(port, () => {
  console.log('E-commerce app backend running...')
})