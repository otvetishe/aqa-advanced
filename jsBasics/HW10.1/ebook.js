class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }
}

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    }
}

const ebook1 = new EBook("451 градус по Фаренгейту", "Рей Бредберрі", 1953, "PDF");

ebook1.printInfo();