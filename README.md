# Spot It

Интерфейс приложения для онлайн-бронирования и управления местами в коворкингах для IT-специалистов

URL: https://spots-it.ru/

## Запуск фронтенд-сервера

```sh
npm ci
npm run dev
```

- Фронтенд-сервер запустится по адресу http://localhost:5173

## Дополнительная информация

- Макет дизайна в Figma:
  https://clck.ru/35vJy2

- Автоматически обновляемая сборка Storybook на gh-pages:
  https://constantineepifanov.github.io/book-it-coworking-frontend/

### Порядок коммита

```sh
git add .
npm run commit
git push
```

### Дополнительные команды npm

- `lint:fix` : Запускает ESLint для проверки и исправления кода
- `format` : Запускает Prettier с редактированием кода
- `commit` : Запускает инструмент Commitizen для прекоммита (включает в себя запуск команд выше перед сохранением сообщения коммита)

- `storybook` : Запускает Storybook на 6006 порту
- `build-storybook` : Создает билд сторибука
