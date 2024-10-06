import express from 'express';
import {
    getRandomPhrase,
    getAllPhrases,
    addPhrase
} from '../controllers/phraseController.js';

const router = express.Router();

router.get('/random', getRandomPhrase);

router.get('/', getAllPhrases);

router.post('/', addPhrase);

export default router;