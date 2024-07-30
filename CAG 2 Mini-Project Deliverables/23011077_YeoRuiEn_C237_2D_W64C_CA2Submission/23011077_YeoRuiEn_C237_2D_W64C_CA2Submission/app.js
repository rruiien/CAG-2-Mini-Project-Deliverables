const express = require('express'); 
const mysql = require('mysql2'); 
const multer = require('multer');
const app = express(); 

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Create MySQL connection 
const connection = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'overseas_shopping_assistance_platform' 
});
 
connection.connect((err) => { 
  if (err) { 
    console.error('Error connecting to MySQL:', err); 
    return; 
  } 
  console.log('Connected to MySQL database'); 
});
 
// Set up view engine 
app.set('view engine', 'ejs'); 

// enable static files 
app.use(express.static('public')); 

// enable form processing
app.use(express.urlencoded( {
    extended: false
}));

// Define routes 
app.get('/', (req, res) => { 
  connection.query('SELECT * FROM Orders', (error, results) => { 
    if (error) throw error; 
    res.render('index', { orders: results }); // Render HTML page with data 
  }); 
}); 

app.get('/order/:id', (req, res) => {
    // Extract the order ID from the request parameters
    const orderId = req.params.id;
    const sql = 'SELECT * FROM orders WHERE orderId = ?';
    // Fetch data from MySQL based on the student ID
    connection.query( sql, [orderId], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send('Error Retrieving order by ID');
        }
        // Check if any order with the given ID was found
        if (results.length > 0) {
            // Render HTML page with the student data
            res.render('order', { order: results[0] });
        } else {
            // If no order with the given ID was found, render a 404 page or handle it accordingly
            res.status(404).send('Order not found');
        }
    });
});


app.get('/addOrder', (req, res) => {
    const order = {
        tracking_number: '',
        website_url: ''
    };
    res.render('addOrder', {order});
});

app.post('/addOrder', upload.single('image'), (req, res) => {
    // Extract product from the request body
    const { productName, tracking_number, website_url } = req.body;
    let image;
    if (req.file) {
        image = req.file.filename; // Save only the filename
    } else {
        image = null;
    }
    console.log("test", image)

    const sql = 'INSERT INTO orders (productName, tracking_number, website_url, image) VALUES (?, ?, ?, ?)';
    // Insert the new order into the database
    connection.query( sql, [productName, tracking_number, website_url, image], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error adding order:", error);
            res.status(500).send('Error adding order');
        } else {
            // Send a success response
            res.redirect('/');
        }
    });
});

app.get('/editOrder/:id', (req,res) => {
    const orderId = req.params.id;
    const sql = 'SELECT * FROM orders WHERE orderId = ?';
    // Fetch data from MySQL based on the order ID
    connection.query( sql, [orderId], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send('Error retrieving order by ID');
        }
        // Check if any order with the given ID was found
        if (results.length > 0) {
            // Render HTML page with the order data
            res.render('editOrder', { order: results[0] });
        } else {
            // If no order with the given ID was found, render a 404 page or handle it accordingly
            res.status(404).send('Order not found');
        }
    });
});

app.post('/editOrder/:id', upload.single('image'), (req, res) => {
    const orderId = req.params.id;
    // Extract order data from the request body
    const { productName, tracking_number, website_url } = req.body;
    let image = req.body.currentImage; // retrieve current image filename
    if (req.file) { // if new image is uploaded
        image = req.file.filename; // set image to be new image filename
    }

    const sql = 'UPDATE orders SET productName = ? , tracking_number = ?, website_url = ?, image = ? WHERE orderId = ?';

    // Insert the new order into the database
    connection.query( sql, [productName, tracking_number, website_url, image, orderId], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error updating order:", error);
            res.status(500).send('Error updating order');
        } else {
            // Send a success response
            res.redirect('/');
        }
    });
});

app.get('/deleteOrder/:id', (req, res) => {
    const orderId = req.params.id;
    const sql = 'DELETE FROM orders WHERE orderId = ?';
    connection.query( sql, [orderId], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error deleting order:", error);
            res.status(500).send('Error deleting order');
        } else {
            // Send a success response
            res.redirect('/');
        }
    });
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`)); 

// 23011077 ruien