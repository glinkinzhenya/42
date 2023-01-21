// Реалізовуємо форму для реєстрації.
//     Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження(Текстове поле)
// Стать(radio)
// Місто(select)
// Адреса(textarea)
// Мови, якими володіє(checkbox)
// ….
// Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
const form = document.getElementById("container");
const name1 = document.getElementById("name");
const day = document.getElementById("day");
const button = document.getElementById("button");
const man = document.getElementById("man");
const woman = document.getElementById("woman");
const town = document.getElementById("town");
const adress = document.getElementById("adress");
const ukr = document.getElementById("ukr");
const eng = document.getElementById("eng");
const info = document.getElementById("info");
const sex = document.getElementById("sex");

button.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("h1>span").innerText = ` ${name1.value}`;
    document.getElementById("year").innerText = ` ${day.value}`;

    if (man.checked) sex.innerText = ` ${man.value}`;
    if (woman.checked) sex.innerText = ` ${woman.value}`;

    document.getElementById("city").innerText = ` ${town.value}`;
    document.getElementById("street").innerText = ` ${adress.value}`;

    if (ukr.checked && eng.checked) {
        document.getElementById("language").innerText = ` ${ukr.value}, ${eng.value}`;
    } else if (ukr.checked) {
        document.getElementById("language").innerText = ` ${ukr.value}`;
    } else if (eng.checked) {
        document.getElementById("language").innerText = ` ${eng.value}`;
    };

    info.classList.remove("block");
    form.classList.add("block");
});