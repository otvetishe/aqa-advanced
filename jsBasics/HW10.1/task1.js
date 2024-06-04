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

// Новий клас EBook, що успадковує клас Book
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

// Створення екземплярів класів Book та EBook
const book1 = new Book("1984", "Джордж Орвелл", 1949);
const book2 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
const book3 = new Book("До зірок", "Артур Кларк", 1952);
const ebook1 = new EBook("Чорна риторика", "Карстен Бредемайєр", 2020, "PDF");
const ebook2 = new EBook("Каміне лице", "Лі Тянь", 2018, "EPUB");
const ebook3 = new EBook("Чорне сердце", "Джейн Еванс", 2015, "MOBI");

// Масив об'єктів книг
const books = [book1, book2, book3, ebook1, ebook2, ebook3];

// Використання геттерів та сеттерів
    ebook1.name = "Книга мертвих";
    ebook1.author = "Єгиптяни";
    ebook1.year = 99;
    ebook1.fileFormat = "PDF";

    ebook1.printInfo();

// Виклик статичного методу для знаходження найдавнішої книги
const oldestBook = Book.findOldestBook(books);

// Вивід інформації про найдавнішу книгу
oldestBook.printInfo();

// Створення екземпляра EBook з екземпляра Book
const newEBook = EBook.fromBook(book1, 'EPUB');

// Вивід інформації про новий екземпляр EBook
newEBook.printInfo();
