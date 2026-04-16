# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Обзор проекта

Библиотека-клиент Ozon Seller API для Google Apps Script. Публикуется как GAS-библиотека (идентификатор `1jNkKwjF2fasD2kSn9KvjtcOe-09LepeUS4016TolPomer8oo4bsFkPLt`) и деплоится через `clasp`.

Принцип: библиотека содержит **только** методы и типы из официальной документации Ozon -- никаких хелперов, сахара и обёрток.

## Команды

- `npm run updateApi` -- перегенерация типов из Ozon Swagger (`ozon_api/` директория)
- `npx tsc` -- компиляция TypeScript, генерация деклараций в `declarations/`
- `clasp push` -- деплой в Google Apps Script
- `clasp pull` -- скачать текущий код из GAS

## Архитектура

### Рабочий код (деплоится в GAS)

- `Ozon/index.ts` -- точка входа, экспортирует функцию `client(keys)` для создания API-клиента
- `Ozon/connector.ts` -- класс `Client` (HTTP-транспорт через `UrlFetchApp.fetch`) и класс `Api` (все методы Ozon Seller API). Каждый метод -- обёртка над `this.request<T>()` с типизированным ответом
- `Ozon/types.ts` -- ручные типы (Keys, фильтры, интерфейсы ответов)

### Сгенерированные типы (не деплоятся)

- `ozon_api/` -- автоматически сгенерировано `swagger-typescript-api` из Ozon Swagger. Файлы `V1.ts`..`V4.ts`, `data-contracts.ts`, `http-client.ts`. **Не редактировать вручную** -- перегенерируется через `npm run updateApi`
- `declarations/` -- `.d.ts` файлы, генерируемые `tsc`

### Пространство имён

Весь код живёт в namespace `Ozon_`. Типы -- в `Ozon_.Types`. Это обусловлено спецификой GAS (нет модулей, глобальный скоуп).

## Добавление нового API-метода

1. Добавить типы запроса/ответа в `Ozon/types.ts` (или использовать уже сгенерированные из `ozon_api/data-contracts.ts`)
2. Добавить метод в класс `Api` в `Ozon/connector.ts` с JSDoc из документации Ozon
3. Метод вызывает `this.request<ResponseType>({ endpoint, method: 'POST', payload: data })`

## Форматирование

- Prettier: одинарные кавычки, trailing comma, 4 пробела, 120 символов
- TSLint: `tslint.json` в корне
