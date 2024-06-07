class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Назва повинна бути не порожнім рядком');
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Автор повинен бути не порожнім рядком');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || value < 0 || value > currentYear) {
            throw new Error('Рік видання повинен бути числом між 0 та поточним роком');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    // Статичний метод для знаходження найдавнішої книги
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('Необхідно передати масив об\'єктів книг');
        }

        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

export default Book;
