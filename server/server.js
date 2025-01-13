const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors({
    origin: 'http://localhost:3001', // Replace with your frontend's URL
  }));
  
// Path to the SQLite database
const dbPath = './dua_main.sqlite';

// Connect to the SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the SQLite database');
});

// Endpoint to fetch all categories
app.get('/categories', (req, res) => {
    const query = 'SELECT * FROM category';
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint to fetch all subcategories of a specific category
app.get('/categories/:cat_id', (req, res) => {
    const { cat_id } = req.params;
    const query = 'SELECT * FROM sub_category WHERE cat_id = ?';
    db.all(query, [cat_id], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint to fetch all duas under a specific subcategory
app.get('/categories/:cat_id/subcategories/:subcat_id/duas', (req, res) => {
    const { cat_id, subcat_id } = req.params;
    const query = 'SELECT * FROM dua WHERE cat_id = ? AND subcat_id = ?';
    db.all(query, [cat_id, subcat_id], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint to fetch all details for a specific category
app.get('/categories/:cat_id/details', (req, res) => {
  const { cat_id } = req.params;

  // Query to fetch subcategories and related duas for the category
  const query = `
      SELECT 
          sc.subcat_id, 
          sc.subcat_name_en, 
          d.dua_id, 
          d.dua_name_en, 
          d.translation_en 
      FROM 
          sub_category sc
      LEFT JOIN 
          dua d 
      ON 
          sc.subcat_id = d.subcat_id
      WHERE 
          sc.cat_id = ?`;

  db.all(query, [cat_id], (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }

      // Transform data into a grouped format: { subcategories -> duas }
      const result = {};
      rows.forEach((row) => {
          if (!result[row.subcat_id]) {
              result[row.subcat_id] = {
                  subcat_id: row.subcat_id,
                  subcat_name_en: row.subcat_name_en,
                  duas: [],
              };
          }

          if (row.dua_id) {
              result[row.subcat_id].duas.push({
                  dua_id: row.dua_id,
                  dua_name_en: row.dua_name_en,
                  translation_en: row.translation_en,
              });
          }
      });

      // Send the response
      res.json(Object.values(result));
  });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Close the database connection when the process is terminated
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing the database:', err);
        } else {
            console.log('Database connection closed');
        }
        process.exit(0);
    });
});
