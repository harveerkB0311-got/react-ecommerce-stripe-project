const db = require('../config/db');

const getProducts = async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM products WHERE is_active = 1');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

module.exports = { getProducts };
