# Журнал изменений

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/).

## [2.0.0] -- 2026-04-17

### BREAKING CHANGES

- `warehouseApiWarehouseList` теперь требует параметр `{ limit }` (миграция с `/v1/warehouse/list` на `/v2/warehouse/list`). Старые вызовы без аргументов перестанут работать.
- `stocksByWarehouseFbs` изменил сигнатуру запроса и ответа (миграция с `/v1/...` на `/v2/product/info/stocks-by-warehouse/fbs`). Добавлены поля `limit`, `cursor`, `has_next` для пагинации.

### Добавлено

- `warehouseApiDeliveryMethodListV2` -- эндпоинт `/v2/delivery-method/list` (список методов доставки realFBS)
- `carriageApiCarriageDeliveryListV2` -- эндпоинт `/v2/carriage/delivery/list` (список методов доставки и отгрузок)
- `postingApiPostingFbsActCheckStatus` -- эндпоинт `/v2/posting/fbs/act/check-status` (статус отгрузки и документов)
- `postingApiPostingFbsGetAct` -- эндпоинт `/v2/posting/fbs/act/get-pdf` (PDF с документами)

### Изменено

- Миграция всех затронутых устаревших эндпоинтов v1 -> v2 (issue #4, отключение 20 марта 2026 + 7 апреля 2026)
- `tsconfig.json`: убран `emitDeclarationOnly`, добавлен `"include": ["Ozon/**/*.ts"]` -- теперь эмитит `.js` рядом с `.ts` в `Ozon/` и `.d.ts` в `declarations/Ozon/`
- `.claspignore`: переписан на whitelist с негацией (clasp v3 поддерживает через micromatch), в GAS улетают только `appsscript.json` + `Ozon/**/*.js`
- `package.json`: добавлены скрипты `build`, `clean`, `rebuild`

### Удалено

- `declarations/ozon_api/` -- декларации для автосгенерированного справочника больше не хранятся в репо (не нужны потребителям публичного API)

## [1.1.0] -- 2026-04-16

### Добавлено
- Новый метод и типы для эндпоинта `/v2/products/stocks`

### Изменено
- Обновлён эндпоинт `/v3/product/list` на новую версию API
- Переимплементирован метод `productApiGetProductList` для работы с V3
- Обновлено описание и типы для эндпоинта `/v3/product/list`

### Исправлено
- Заменён deprecated эндпоинт `/v4/product/info/prices` на новую версию `v5` с актуальными типами

## [1.0.1] -- 2025-02-20

### Исправлено
- Стабилизация и доработка типов API

## [1.0.0] -- 2025-02-20

### Добавлено
- Инициальный релиз библиотеки-клиента Ozon Seller API для Google Apps Script
