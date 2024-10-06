import PhraseRepository from '../../domain/repositories/PhraseRepository.js';
import Phrase from '../../domain/entities/Phrase.js';
import mysql from 'mysql2/promise';
import { dbConfig } from '../../config/dbConfig.js';

export default class MySQLPhraseRepository extends PhraseRepository {
    constructor() {
        super();
        this.init();
    }

    async init() {
        this.connection = await mysql.createConnection(dbConfig);
    }

    async getAllPhrases() {
        const [rows] = await this.connection.execute('SELECT * FROM phrases');
        return rows.map(row => new Phrase(row.id, row.text));
    }

    async getRandomPhrase() {
        const [rows] = await this.connection.execute('SELECT * FROM phrases ORDER BY RAND() LIMIT 1');
        if (rows.length > 0) {
            const row = rows[0];
            return new Phrase(row.id, row.text);
        }
        return null;
    }

    async addPhrase(phraseText) {
        const [result] = await this.connection.execute('INSERT INTO phrases (text) VALUES (?)', [phraseText]);
        return new Phrase(result.insertId, phraseText);
    }
}