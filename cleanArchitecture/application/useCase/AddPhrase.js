export default class AddPhrase {
    constructor(phraseRepository) {
        this.phraseRepository = phraseRepository;
    }

    async execute(phraseText) {
        return await this.phraseRepository.addPhrase(phraseText);
    }
}