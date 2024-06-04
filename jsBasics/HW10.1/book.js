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

const book1 = new Book("451 градус по Фаренгейту", "Рей Бредберрі", 1953)
const book2 = new Book("Чорна риторика", "Карстен Бредемайєр", 2020);
const book3 = new Book("Каміне лице", "Лі Тянь", 2018);

book1.printInfo();
book2.printInfo();
book3.printInfo();