# OTUS SOCIAL NETWORRK API

Домашнее задание по курсу Highload Architect 2023-12. Реализует [спецификацию.](https://github.com/OtusTeam/highload/blob/master/homework/openapi.json)

## Запуск
1. Переименовать файл .env.example в .env
2. Присвоть переменным значения в .env
3. Выполнить <code>docker compose up -d --build</code>

## Запросы

По умолчанию сервер слушает 8080 порт.

### Примеры запросов

- Регистрация нового пользователя. <code>curl -X POST http://localhost:8080/user/register --json '{
    "firstName": "Petya",
    "lastName": "Zotov",
    "city": "Omsk",v
    "birthday":"1990-05-18",
    "biography": "Coder",
    "password": "Petya@password"
}'</code>

    Поля firstName и password обязательные. Минимальная длинна пароля 8 символов.

- Логин. <code>curl -X POST http://localhost:8080/login --json '{"userId": "d59e30a8-339e-48c6-bc7a-22bfceaaf432",
"password": "Petya@password"
    }'</code>

    Поля userId и password обязательные.

- Анкета пользователя. <code>curl http://localhost:8080/user/d59e30a8-339e-48c6-bc7a-22bfceaaf432</code>

- Поиск пользователей по имени и фамилии <code>curl --location 'localhost:8080/user/search?firstName=%D0%90%D1%80&lastName=%D0%90%D0%B3'</code>

## Нагрузочное тестирование

Отчёт по нагрузочному тестированию находится в папке [doc/performance-test](doc/performance-test). В папке [doc/performance-test/jmeter](doc/performance-test/jmeter) 
 расположены тестовые планы для jmeter и отчёты сгенерированные им.
 