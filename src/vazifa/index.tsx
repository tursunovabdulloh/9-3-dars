// ### 1. **TypeScript da Obyektlar**

// **Mashq 1:** Interfeys va Ob'ektlarni Yaratish

// 1. **Person** nomli interfeys yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `name`: string
//    - `age`: number
//    - `isStudent`: boolean

// JAVOOOOOOOOOOOOOOOOOOOOOOOOOOB

// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// 2. `Person` interfeysidan foydalanib, quyidagi ma'lumotlarni saqlovchi obyekt yarating:
//    - `name`: "John Doe"
//    - `age`: 25
//    - `isStudent`: false

// const Student: Person = {
//   name: "John Doe",
//   age: 25,
//   isStudent: false,
// };

// 3. **Book** nomli interfeys yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `title`: string
//    - `author`: string
//    - `publishedYear`: number

//   interface Book {
//     title: string,
//     author: string,
//     publishYear: number,
//   }

// 4. `Book` interfeysidan foydalanib, quyidagi ma'lumotlarni saqlovchi obyekt yarating:
//    - `title`: "The Great Gatsby"
//    - `author`: "F. Scott Fitzgerald"
//    - `publishedYear`: 1925

//  const Author: Book = {
//    title: "The Great Gatsby",
//    author: "F. Scott Fitzgerald",
//    publishYear: 1925
//  };

// ### 2. **Massivlar**

// **Mashq 2:** Massivlar bilan Ishlash

// 1. **number** turida massiv yaratib, unga quyidagi sonlarni qo‘shing: 1, 2, 3, 4, 5.

// let number: number[] = [1, 2, 3, 4, 5];

// 2. Massivdagi barcha sonlarning yig‘indisini hisoblaydigan funksiyani yozing.

// function Calculate(numbers: number[]): number {
//   let sum = 0;

//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// const total = Calculate(number);
// console.log("Massivdagi sonlarning yig'indisi:", total);

// 3. **string** turida massiv yaratib, unga quyidagi so‘zlarni qo‘shing: "apple", "banana", "cherry".

// let Fruits: string[] = ["apple", "banana", "chaerry"];

// 4. Massivdagi so‘zlarni katta harf bilan qaytaruvchi funksiyani yozing.

// function ToBig(strings: string[]): string[] {
//   return strings.map((word) => word.toLocaleUpperCase());
// }

// const word = ToBig(Fruits);
// console.log("big first letter", word);

// ### 3. **Tuple**

// **Mashq 3:** Tuple bilan Ishlash

// 1. **StudentRecord** nomli tuple yarating, quyidagi formatga ega bo‘lsin: `[string, number, boolean]`. Tuple quyidagi ma'lumotlarni o‘z ichiga olishi kerak:
//    - `name`: "Alice"
//    - `age`: 22
//    - `isEnrolled`: true

// let StudentRecord: [string, number, boolean] = ["Alice", 22, true];
// console.log("name", StudentRecord[0]);
// console.log("age", StudentRecord[1]);
// console.log("isEnrolled", StudentRecord[2]);

// 2. **Coordinate** nomli tuple yarating, quyidagi formatga ega bo‘lsin: `[number, number]`. Tuple quyidagi koordinatlarni o‘z ichiga olishi kerak:
//    - `x`: 10
//    - `y`: 20

// let Cordinate: [number, number] = [10, 20]
// console.log("x",  Cordinate[0]);
// console.log("y", Cordinate[1]);

// ### 4. **any**

// **Mashq 4:** `any` Tipidan Foydalanish

// 1. `any` turida o‘zgaruvchi yarating va unga turli turlardagi qiymatlarni (string, number, boolean) berib ko‘ring.

// let randomArray: any[] = [1, "ikrom", true, 1, 45, 8, ]

// 2. `any` turida massiv yarating va unga turli turlardagi qiymatlarni qo‘shing. Massivdagi barcha qiymatlarni konsolga chiqaruvchi funksiyani yozing.

// function ReturnConsole(random :any[]): any {
//     return console.log(random);
// }

// ReturnConsole(randomArray)

// ### 5. **unknown**

// **Mashq 5:** `unknown` Tipidan Foydalanish

// 1. `unknown` turida o‘zgaruvchi yarating va unga turli turlardagi qiymatlarni bering.

// let value: unknown;
// value = " hello";

// 2. `unknown` turidagi qiymatni `string` turiga o‘zgartirishdan oldin tekshiruvchi funksiyani yozing.

// if (typeof value === "string") {
//   console.log(value.length);
// }

// ### 6. **never**

// **Mashq 6:** `never` Tipidan Foydalanish

// 1. `never` turida funksiyani yarating, bu funksiya xatolik tashlaydi.

// function ThrowError(message: string): never {
//   throw new Error(message);
// }

// 2. `never` turida funksiyani yarating, bu funksiya abadiy davom etadi (masalan, `while (true)`).

// function InfiniteLoop(): never {
//   while (true) {
//     console.log("it is true");
//   }
// }
// ### 7. **Funksiyalar**

// **Mashq 7:** Funksiyalarni Yozish

// 1. **addNumbers** nomli funksiyani yozing, bu funksiya ikkita sonni qabul qilib, ularning yig‘indisini qaytaradi.

// function addNUmbers(x: number, y: number): number {
//   let added = x + y;
//   return added;
// }
// addNUmbers(15, 20);

// 2. **formatDate** nomli funksiyani yozing, bu funksiya sanani qabul qilib, `"YYYY-MM-DD"` formatida qaytaradi.

// function FormData(date: Date): string {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDay()).padStart(2, "0");
//   return `${year}--${month}--${day}`;
// }

// const today = new Date();
// console.log(FormData(today));

// ### 8. **Enum**

// **Mashq 8:** `Enum`dan Foydalanish

// 1. **DaysOfWeek** nomli `enum` yarating, quyidagi qiymatlar bilan: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`.

// enum DaysOfWeek {
//   Monday,
//   Tuesaday,
//   Wednesady,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// 2. **printDay** nomli funksiyani yozing, bu funksiya `DaysOfWeek` `enum`idan biror kunni qabul qilib, u kunning nomini konsolga chiqaradi.

// function printData(day: DaysOfWeek): void {
//   console.log(DaysOfWeek[day]);
// }
// console.log(printData(DaysOfWeek.Friday));

// ### 9. **Intersection**

// **Mashq 9:** Intersection Tiplari

// 1. **Person** va **Employee** nomli ikki interfeys yarating:
//    - **Person**: `name`: string, `age`: number
//    - **Employee**: `employeeId`: number, `department`: string

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }

// 2. **Worker** nomli intersection tipi yarating, bu **Person** va **Employee** interfeyslarini birlashtirsin.

// type Worker = Person & Employee;

// 3. `Worker` tipidagi ob'ekt yaratib, uning qiymatlarini to‘ldiring:
//    - `name`: "Jane Doe"
//    - `age`: 30
//    - `employeeId`: 12345
//    - `department`: "HR"

// let EmployeeObj: Worker = {
//   name: "Ikrom",
//   age: 25,
//   employeeId: 28,
//   department: "HR",
// };

// ### 10. **interface**

// **Mashq 10:** Interfeyslar

// 1. **Vehicle** nomli interfeys yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `make`: string
//    - `model`: string
//    - `year`: number

// interface Vehicle {
//   make: string;
//   model: string;
//   year: number;
// }

// 2. **Car** interfeysini yarating, **Vehicle** interfeysini kengaytirib, qo‘shimcha xususiyatlarni qo‘shing:
//    - `numberOfDoors`: number
//    - `isElectric`: boolean

// interface Car extends Vehicle {
//      numberOfDoors: number
//      isElectric: boolean
// }

// 3. `Car` tipidagi ob'ekt yarating va uning qiymatlarini to‘ldiring:
//    - `make`: "Tesla"
//    - `model`: "Model S"
//    - `year`: 2024
//    - `numberOfDoors`: 4
//    - `isElectric`: true

// const CarObj: Car = {
//     make: "Tesla",
//      model: "Model S",
//      year: 2024,
//      numberOfDoors: 4,
//      isElectric: true,
// };

// ### 11. **Type Alias**

// **Mashq 11:** Type Alias

// 1. **Address** nomli type alias yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `street`: string
//    - `city`: string
//    - `postalCode`: string

// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// type Address = {
//   street: string;
//   city: string;
//   postalCode: string;
// };

// 2. **PersonWithAddress** nomli type alias yarating, bu **Person** interfeysini va **Address** type aliasini o‘z ichiga oladi.

// type PersonWithAddress = Address & Person;

// 3. `PersonWithAddress` tipidagi ob'ekt yarating va uning qiymatlarini to‘ldiring:
//    - `name`: "Mark"
//    - `age`: 28
//    - `isStudent`: true
//    - `address`:
//      - `street`: "Main St"
//      - `city`: "Springfield"
//      - `postalCode`: "12345"

// const Aziz: PersonWithAddress = {
//   name: "Mark",
//   age: 28,
//   isStudent: true,
//   street: "Main St",
//   city: "Springfield",
//   postalCode: "12345",
// };

// ### **Aralash Mashqlar**

// **Mashq 12:** Obyekt, Funksiya va Tupleni Aralashtirib Ishlash

// 1. **Student** nomli interfeysni yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `name`: string
//    - `age`: number
//    - `grades`: number[] (massiv)
//    - `address`: [string, number] (tuple)

// interface Student {
//   name: string;
//   age: number;
//   grades: number[];
//   address: [string, number];
// }

// const StudentObj: Student = {
//   name: "Aziz",
//   age: 18,
//   grades: [5, 4, 3, 5, 4, 5],
//   address: ["fergana", 52],
// };

// 2. **getStudentSummary** nomli funksiyani yozing, bu funksiya **Student** interfeysidan bir ob'ektni qabul qiladi va uning qisqacha ma'lumotini qaytaradi (nomi, yoshi, o‘rtacha baho).

// function getStudentSummary(student: Student): string {
//   const totalGrades = student.grades.reduce((acc, grade) => acc + grade, 0);
//   const averageGrade = totalGrades / student.grades.length;
//   return `name: ${student.name}, yoshi: ${student.age}, ortacha bahosi: ${averageGrade}`;
// }

// console.log(getStudentSummary(StudentObj));

// **Mashq 13:** Enum, Type Alias va Intersectionni Aralashtirib Ishlash

// 1. **OrderStatus** nomli `enum` yarating, quyidagi qiymatlar bilan: `Pending`, `Shipped`, `Delivered`, `Cancelled`.

// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
// }

// 2. **Order** nomli interfeysni yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `orderId`: number
//    - `status`: OrderStatus
//    - `totalAmount`: number

// interface Order {
//   orderId: number;
//   status: OrderStatus;
//   totalAmount: number;
// }

// 3. **Customer** nomli interfeysni yarating, quyidagi xususiyatlarga ega bo‘lsin:
//    - `customerId`: number
//    - `name`: string

// interface Customer {
//   customerId: number;
//   name: string;
// }

// 4. **CustomerOrder** nomli intersection tipi yarating, bu **Order** va **Customer** interfeyslarini birlashtirsin.

// type CustomerOrder = Order & Customer;

// 5. `CustomerOrder` tipidagi ob'ekt yaratib, uning qiymatlarini to‘ldiring:
//    - `orderId`: 456
//    - `status`: OrderStatus.Shipped
//    - `totalAmount`: 150.00
//    - `customerId`: 789
//    - `name`: "Sarah"

// const CustomerObj: CustomerOrder = {
//   orderId: 456,
//   status: OrderStatus.Shipped,
//   totalAmount: 150.0,
//   customerId: 789,
//   name: "Sarah",
// };
