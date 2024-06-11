import Book from './book.js';
import EBook from './ebook.js';

//Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
const book10 = new Book("451 градус по Фаренгейту", "Рей Бредберрі", 1953)
const book20 = new Book("Чорна риторика", "Карстен Бредемайєр", 2020);
const book30 = new Book("Каміне лице", "Лі Тянь", 2018);

book10.printInfo();
book20.printInfo();
book30.printInfo();

//Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

const ebook10 = new EBook("451 градус по Фаренгейту", "Рей Бредберрі", 1953, "PDF");

ebook10.printInfo();

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
