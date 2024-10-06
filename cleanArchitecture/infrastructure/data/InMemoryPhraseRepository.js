import PhraseRepository from '../../domain/repositories/PhraseRepository.js';
import Phrase from '../../domain/entities/Phrase.js';

export default class InMemoryPhraseRepository extends PhraseRepository {
    constructor() {
        super();
        this.phrases = [
            new Phrase(1, 'The life if beautiful enjoy it'),
            new Phrase(2, 'Carpe Diem'),
            new Phrase(3, 'A person who wants to achieve an accomplishment can do so by'),
        ];
    }

    async getAllPhrases() {
        return this.phrases;
    }

    async getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    async addPhrase(phraseText) {
        const newId = this.phrases.length + 1;
        const newPhrase = new Phrase(newId, phraseText);
        this.phrases.push(newPhrase);
        return newPhrase;
    }
}