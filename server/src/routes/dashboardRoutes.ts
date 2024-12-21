import express from 'express';
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Dashboard route');
});

export default router;  // Add a default export here
