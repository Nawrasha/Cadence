const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Autoriser CORS
app.use(cors());

// Pour lire le JSON dans les requêtes
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQL2',
    database: 'cadence'
  });

// Simple route pour tester
app.get('/categories',  (req, res) => {
    const query = 'SELECT * FROM categories';
     db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération :', err);
        return res.status(500).send('Erreur de serveur');
      }
      res.json(results); // Envoie les résultats en JSON
    });
});
app.get('/productsByCategory/:categ', (req, res) => {
  const categoryId = req.params.categ;  // Récupérer l'ID de la catégorie depuis l'URL

  // Requête SQL pour récupérer les produits d'une catégorie avec leurs images
  const query = `
      SELECT products.*, GROUP_CONCAT(images.url) AS imageUrls
      FROM products
      LEFT JOIN images ON products.id = images.product
      WHERE products.category = ?
      GROUP BY products.id
  `;
  
  db.query(query, [categoryId], (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des produits :', err);
          return res.status(500).send('Erreur de serveur');
      }
      
      // Transformer les résultats pour avoir un tableau d'objets d'images
      const productsWithImages = results.map(product => {
          const imageUrls = product.imageUrls ? product.imageUrls.split(',') : [];
          const images = imageUrls.map(url => ({ url })); // Transformer en tableau d'objets avec la clé `url`
          
          return {
              ...product,
              images: images  // Ajoute un champ `images` contenant un tableau d'objets avec les URLs
          };
      });
      
      res.json(productsWithImages);  // Envoie les produits avec leurs images sous le format demandé
  });
});


app.get('/products', (req, res) => {
  // Requête SQL pour récupérer tous les produits avec leurs images
  const query = `
      SELECT products.*, GROUP_CONCAT(images.url) AS imageUrls
      FROM products
      LEFT JOIN images ON products.id = images.product
      GROUP BY products.id
  `;
  
  db.query(query, (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des produits :', err);
          return res.status(500).send('Erreur de serveur');
      }
      
      // Transformer les résultats pour avoir un tableau d'objets d'images
      const productsWithImages = results.map(product => {
          const imageUrls = product.imageUrls ? product.imageUrls.split(',') : [];
          const images = imageUrls.map(url => ({ url })); // Transformer en tableau d'objets avec la clé `url`
          
          return {
              ...product,
              images: images  // Ajoute un champ `images` contenant un tableau d'objets avec les URLs
          };
      });
      
      res.json(productsWithImages);  // Envoie les produits avec leurs images sous le format demandé
  });
});
// 
// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend écoute sur http://localhost:${PORT}`);
});
