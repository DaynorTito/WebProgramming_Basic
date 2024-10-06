export default class GetAllPhrases {
    constructor(phraseRepository) {
        this.phraseRepository = phraseRepository;
    }

    async execute() {
        return await this.phraseRepository.getAllPhrases();
    }
}