// presentation/api/controllers/phraseController.js
import GetRandomPhrase from '../../../application/useCase/GetRandomPhrase.js';
import GetAllPhrases from '../../../application/useCase/GetAllPhrases.js';
import AddPhrase from '../../../application/useCase/AddPhrase.js';
import MySQLPhraseRepository from '../../../infrastructure/data/MySQLPhraseRepository.js';

const phraseRepository = new MySQLPhraseRepository();
await phraseRepository.init();

const getRandomPhraseUseCase = new GetRandomPhrase(phraseRepository);
const getAllPhrasesUseCase = new GetAllPhrases(phraseRepository);
const addPhraseUseCase = new AddPhrase(phraseRepository);

export const getRandomPhrase = async (req, res, next) => {
    try {
        const phrase = await getRandomPhraseUseCase.execute();
        res.json({ phrase: phrase.text });
    } catch (error) {
        next(error);
    }
};

export const getAllPhrases = async (req, res, next) => {
    try {
        const phrases = await getAllPhrasesUseCase.execute();
        res.json({ phrases: phrases.map(p => p.text) });
    } catch (error) {
        next(error);
    }
};

export const addPhrase = async (req, res, next) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'El campo "text" es requerido.' });
        }
        const newPhrase = await addPhraseUseCase.execute(text);
        res.status(201).json({ phrase: newPhrase.text });
    } catch (error) {
        next(error);
    }
};
