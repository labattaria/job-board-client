# Job Board client

---

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](#)
[![GraphQL](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![ApolloGraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)](#)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](#)

Це клієнтська частина React/GraphQL/Apollo, створена та налаштована для додатку **Job Board**

Це лише частина всього додатку, друга частина (сервер) знаходиться в цьому репо: [Job Board Server](https://github.com/labattaria/job-board-server)

Застосунок у цьому репозиторії працює з сервером, який розміщено за адресою: [https://render.com](https://render.com), hosting public URL: [https://job-board-server-mq1m.onrender.com](https://job-board-server-mq1m.onrender.com)

Але ви можете використовувати цей сервер вручну на своєму локальному комп’ютері.

## Залежностi, якi використовуються:

- **Vite** - Швидкий і сучасний інструмент збірки, який забезпечує дуже швидку та гарячу заміну модулів (HMR) для розробки, оптимізований для фреймворків
- **React** - Бібліотека, що використовується для створення користувацьких інтерфейсів, особливо для односторінкових застосунків, де потрібен швидкий та інтерактивний досвід
- **GraphQL** - Основна бібліотека GraphQL
- **JWT (JSON Web Token)** - Компактний, безпечний для URL формат токена, який використовується для безпечної передачі інформації між сторонами. Зазвичай застосовується для автентифікації та авторизації у вебзастосунках
- **Apollo-client** - Бібліотека для керування станом, спеціально розроблена для роботи з GraphQL API. Вона допомагає вашому застосунку ефективно отримувати, кешувати та керувати даними з GraphQL-сервера

Повний список залежностей можна знайти у файлі package.json.

---

## Вміст

- [Встановлення](#Встановлення)
- [Використання](#Використання)

### Встановлення

1. Склонуйте репозиторій:

```shell
git clone https://github.com/labattaria/job-board-client.git
```

2. Встановіть залежності проекту:

```shell
cd job-board-client
npm install
```

### Використання

Запустіть дев-сервер за допомогою наступної команди:

```shell
npm start
```

Сервер буде доступний за адресою **http://localhost:3000/job-board-client/**
