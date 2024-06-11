import Book from './book.js';

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    // Геттери та сеттери для властивості fileFormat
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI', 'AZW'];
        if (!validFormats.includes(value)) {
            throw new Error('Формат файлу повинен бути одним з наступних: PDF, EPUB, MOBI, AZW');
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    }

    // Статичний метод для створення екземпляра EBook з екземпляра Book
    static fromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error('Потрібно передати екземпляр класу Book');
        }
        return new EBook(book.name, book.author, book.year, fileFormat);
    }
}

export default EBook;