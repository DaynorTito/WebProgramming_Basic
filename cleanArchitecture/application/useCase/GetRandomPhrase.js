export default class GetRandomPhrase {
    constructor(phraseRepository) {
        this.phraseRepository = phraseRepository;
    }

    async execute() {
        return await this.phraseRepository.getRandomPhrase();
    }
}