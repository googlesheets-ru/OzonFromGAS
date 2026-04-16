declare namespace Ozon_ {
    export namespace Types {
        interface ClientRequestInit {
            endpoint: `/${Ozon_.Types.Version}/${string}/${string}`;
            /**@default GET */
            method?: 'GET' | 'POST' | 'PUT' | 'PATCH';
            payload?: {
                [key: string]: any;
            };
            queryParams?: {
                [key: string]: string | number | Array<string | number> | Object;
            };
        }
        interface OzonErrorDetails {
            code: number;
            details: {
                typeUrl: string;
                value: string;
            }[];
            message: string;
        }
        interface BasicSuccessResponse<T> {
            result: T[];
        }
        /**Фильтр по товарам. */
        interface GetProductListRequestFilter {
            /**Фильтр по параметру offer_id. Можно передавать список значений. */
            offer_id?: string[];
            /**Фильтр по параметру product_id. Можно передавать список значений. */
            product_id?: Array<string | number>;
            /**Фильтр по видимости товара */
            visibility?: Types.FilterVisibility;
        }
        interface GetProductListRequestInit {
            filter?: Types.GetProductListRequestFilter;
            /** Идентификатор последнего значения на странице.
             * Оставьте это поле пустым при выполнении первого запроса.
             * Чтобы получить следующие значения, укажите last_id из ответа предыдущего запроса. */
            last_id?: string;
            /** Количество значений на странице. Минимум — 1, максимум — 1000. */
            limit: number;
        }
        interface GetProductInfoListInit {
            offer_id?: string[];
            product_id?: number[];
            sku?: number[];
        }
    }
    export class OzonRequestError extends Error implements Ozon_.Types.OzonErrorDetails {
        code: number;
        details: {
            typeUrl: string;
            value: string;
        }[];
        constructor(requestError: Ozon_.Types.OzonErrorDetails);
    }
    /**
     * @class Client
     * @description Класс для подключения к апи Озон
     */
    class Client {
        protected clientId: number;
        protected apiKey: string;
        protected baseUrl: string;
        constructor(keys: Ozon_.Types.Keys);
        private getType;
        private qsBuilder;
        protected request<T>(init: Types.ClientRequestInit): T;
    }
    export class Api extends Client {
        constructor(keys: Types.Keys);
        /**
         * Список товаров
         *
         * @tags ProductAPI
         * @name ProductApiGetProductList
         * @summary Список товаров
         * @request POST:/v3/product/list
         * @response `200` `ProductApiGetProductListData` Список товаров
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetProductList(data: Types.GetProductListRequestInit): Types.ProductApiGetProductListData;
        /**
         * Получение информации о товаре по его идентификатору
         *
         * @tags ProductAPI
         * @name ProductApiGetProductInfoV3
         * @summary Информация о товарах
         * @request POST:/v3/product/info
         * @response `200` `ProductApiGetProductInfoV3Data` Информация о товарах
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetProductInfoV3(data: Types.Productv3GetProductInfoRequest): Types.ProductApiGetProductInfoV3Data;
        /**
         * @description Метод для получения массива товаров по их идентификаторам. В теле запроса должен быть массив однотипных идентификаторов, в ответе будет массив `items`. Для каждого товара внутри массива `items` поля совпадают с полями из метода [/v2/product/info](#operation/ProductAPI_GetProductInfoV2).
         * @deprecated Метод удален из API, используйте метод ProductApiGetProductInfoListV3 (`/v3/product/info/list`)
         * @tags ProductAPI
         * @name ProductApiGetProductInfoListV2
         * @summary Получить список товаров по идентификаторам
         * @request POST:/v2/product/info/list
         * @response `200` `ProductApiGetProductInfoListV2Data` Список товаров
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetProductInfoListV2(data: Types.Productv2GetProductInfoListRequest): Types.ProductApiGetProductInfoListV2Data;
        /**
         * Метод для получения информации о товарах по их идентификаторам.
         * В теле запроса должен быть массив однотипных идентификаторов, в ответе будет массив items.
         * В одном запросе вы можете передать не больше 1000 товаров
         * по параметрам `offer_id`, `product_id` и `sku` в сумме.
         * @see https://api-seller.ozon.ru/v3/product/info/list
         */
        productApiGetProductInfoListV3(data: Types.Productv3GetProductInfoListRequest): Types.ProductApiGetProductInfoListV3Data;
        /**
         * @description [Метод] для получения информации о ценах товара
         * в запросе вы можете передать максимум 1000 товаров.
         * @deprecated Метод отключён Озон 17.02.2025
         * @tags Prices&StocksAPI
         * @name ProductApiGetProductInfoPricesV4
         * @summary Получить информацию о цене товара
         * @request POST:/v4/product/info/prices
         * @response `200` `ProductApiGetProductInfoPricesV4Data` Информация о цене товара
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         *
         *
         * [Метод]: https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoPricesV4
         */
        productApiGetProductInfoPricesV4(data: Types.Productv4GetProductInfoPricesV4Request): Types.ProductApiGetProductInfoPricesV4Data;
        /**
         * @description [Метод] для получения информации о ценах товара
         * в запросе вы можете передать максимум 1000 товаров.
         * @tags Prices&StocksAPI
         * @name ProductApiGetProductInfoPrices
         * @summary Получить информацию о цене товара
         * @request POST:/v5/product/info/prices
         * @response `200` `ProductApiGetProductInfoPricesV4Data` Информация о цене товара
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         *
         *
         * [Метод]: https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoPrices
         */
        productApiGetProductInfoPrices(data: Types.GetProductInfoPricesRequest): Types.ProductInfoPricesResponseResult;
        /**
         * @description Позволяет [изменить цену одного или нескольких товаров][1].
         *  За один запрос можно изменить цены для 1000 товаров. Чтобы сбросить
         * `old_price` или `premium_price` — поставьте `0` у этих параметров.
         * #### Новая цена должна отличаться от старой минимум на 5%.
         * @tags Prices&StocksAPI
         * @name ProductApiImportProductsPrices
         * @summary Обновить цену
         * @request POST:/v1/product/import/prices
         * @response `200` `ProductApiImportProductsPricesData` Цена обновлена
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         *
         * [1]: https://api-seller.ozon.ru/v1/product/import/prices
         */
        productApiImportProductsPrices(data: Types.ProductImportProductsPricesRequest): Types.ProductApiImportProductsPricesData;
        /**
         * @description Отчёт по остаткам и товарам в перемещении по складам Ozon.
         *
         * @tags AnalyticsAPI
         * @name AnalyticsApiAnalyticsGetStockOnWarehousesV2
         * @summary Отчёт по остаткам и товарам (версия 2)
         * @request POST:/v2/analytics/stock_on_warehouses
         * @response `200` `AnalyticsApiAnalyticsGetStockOnWarehousesV2Data` Отчёт по остаткам и товарам
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        analyticsApiAnalyticsGetStockOnWarehousesV2(data: Types.AnalyticsStockOnWarehouseRequest): Types.AnalyticsApiAnalyticsGetStockOnWarehousesV2Data;
        /**
         * @description Метод для изменения `offer_id`, привязанных к товарам. Вы можете изменить несколько `offer_id`. Рекомендуем передавать до 250 значений в массиве.
         *
         * @tags ProductAPI
         * @name ProductApiProductUpdateOfferId
         * @summary Изменить артикулы товаров из системы продавца
         * @request POST:/v1/product/update/offer-id
         * @response `200` `ProductApiProductUpdateOfferIdData` Информация об изменении артикулов
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiProductUpdateOfferId(data: Types.V1ProductUpdateOfferIdRequest): Types.ProductApiProductUpdateOfferIdData;
        /**
         * @description Метод для создания товаров и обновления информации о них. В сутки можно создать или обновить определённое количество товаров. Чтобы узнать лимит, используйте [/v2/product/info/limit](#operation/ProductAPI_GetProductInfoLimitV2). Если количество загрузок и обновлений товаров превысит лимит, появится ошибка `item_limit_exceeded`. В одном запросе можно передать до 100 товаров. Каждый товар — это отдельный элемент в массиве `items`. Укажите всю информацию о товаре: его характеристики, штрихкод, изображения, габариты, цену и валюту цены. Указанная валюта должна совпадать с той, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль. Например, если у вас установлена валюта юань, передавайте значение `CNY`, иначе вернётся ошибка. Товар не будет создан или обновлён, если вы заполните неправильно или не укажете: - **Обязательные характеристики**: `images`, `name`, `offer_id`, `price`, `vat` и другие характеристики, которые зависят от категории товара. Вы можете узнать их в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/work-with-goods/trebovaniya-k-kartochkam-tovarov/harakteristiki-tovara.html) или получить методом [/v3/category/attribute](#operation/CategoryAPI_GetCategoryAttributesV3). - **Реальные объёмно-весовые характеристики**: `depth`, `width`, `height`, `dimension_unit`, `weight`, `weight_unit`. Не пропускайте эти параметры в запросе и не указывайте 0. Для некоторых характеристик можно использовать HTML-теги. [Подробнее о характеристиках в Базе знаний продавца](https://seller-edu.ozon.ru/docs/work-with-goods/trebovaniya-k-kartochkam-tovarov/harakteristiki-tovara.html) После модерации товар появится в вашем личном кабинете, но не будет виден пользователям, пока вы не выставите его на продажу. Каждый товар в запросе — отдельный элемент массива `items`. Чтобы объединить две карточки, для каждой передайте `9048` в массиве `attributes`. Все атрибуты в этих карточках, кроме размера или цвета, должны совпадать. ## Загрузка изображений Для загрузки передайте в запросе ссылки на изображения в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Для загрузки главного изображения товара используйте параметр `primary_image`. Если не передать значение `primary_image`, главным будет первое изображение в массиве `images`. Для каждого товара вы можете загрузить до 15 изображений, включая главное. Если передать значение `primary_image`, максимальное количество изображений в `images` — 14. Если параметр `primary_image` пустой, то в `images` можно передать до 15 изображений. Для загрузки изображений 360 используйте поле `images360`, для загрузки маркетингового цвета — `color_image`. Если вы хотите изменить состав или порядок изображений, получите информацию с помощью методов [/v2/product/info](#operation/ProductAPI_GetProductInfoV2) или [/v2/product/info/list](#operation/ProductAPI_GetProductInfoListV2) — в них отображается текущий порядок и состав изображений. Скопируйте данные полей `images`, `images360`, `color_image`, измените и дополните состав или порядок в соответствии с необходимостью. ## Загрузка видео Для загрузки передайте в запросе ссылки на видео. Для этого в параметре `complex_attributes` передайте объект. В нём в массиве `attributes` передайте 2 объекта с `complex_id = 100001`: - В первом передайте укажите `id = 21841` и в массиве `values` передайте объект с ссылкой на видео. __Пример__: ``` { "complex_id": 100001, "id": 21841, "values": [ { "value": "https://www.youtube.com/watch?v=ZwM0iBn03dY" } ] } ``` - Во втором укажите значение `id = 21837` и в массиве `values` передайте объект с названием видео. __Пример__: ``` { "complex_id": 100001, "id": 21837, "values": [ { "value": "videoName_1" } ] } ``` Если вы хотите загрузить несколько видео, передавайте значения для каждого видео в разных объектах массива `complex_attributes`. ## Загрузка таблицы размеров Чтобы добавить в карточку товара таблицу размеров, созданную с помощью [конструктора](https://table-constructor.ozon.ru/visual-editor), передайте её в массиве `attributes` в формате JSON как Rich-контент `id = 13164`. <br><br> [Конструктор в формате JSON](https://table-constructor.ozon.ru/schema.json)<br> [Подробнее о конструкторе в Базе знаний продавца](https://docs.ozon.ru/global/products/requirements/size-table-constructor/)
         *
         * @tags ProductAPI
         * @name ProductApiImportProductsV2
         * @summary Создать или обновить товар
         * @request POST:/v2/product/import
         * @response `200` `ProductApiImportProductsV2Data` Создан новый товар / Информация о товаре обновлена
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiImportProductsV2(data: Types.Productv2ImportProductsRequest): Types.ProductApiImportProductsV2Data;
        /**
         * @description Позволяет получить статус создания карточки товара.
         *
         * @tags ProductAPI
         * @name ProductApiGetImportProductsInfo
         * @summary Узнать статус добавления товара
         * @request POST:/v1/product/import/info
         * @response `200` `ProductApiGetImportProductsInfoData` Статус добавления товара
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetImportProductsInfo(data: Types.ProductGetImportProductsInfoRequest): Types.ProductApiGetImportProductsInfoData;
        /**
         * @description Возвращает описание характеристик товара по его идентификатору. Товар можно искать по `offer_id` или `product_id`.
         *
         * @tags ProductAPI
         * @name ProductApiGetProductAttributesV3
         * @summary Получить описание характеристик товара
         * @request POST:/v3/products/info/attributes
         * @response `200` `ProductApiGetProductAttributesV3Data` Описание характеристик товара
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetProductAttributesV3(data: Types.Productv3GetProductAttributesV3Request): Types.ProductApiGetProductAttributesV3Data;
        /**
         * @description Позволяет изменить информацию о количестве товара в наличии. Метод используется только для FBS и rFBS складов. За один запрос можно изменить наличие для 100 товаров. В минуту можно отправить до 80 запросов. Задать наличие товара возможно только после того, как его статус сменится на `processed`.
         * @deprecated метод будет отключён. Переключитесь на /v2/products/stocks
         * @tags Prices&StocksAPI
         * @name ProductApiImportProductsStocks
         * @summary Обновить остатки
         * @request POST:/v1/product/import/stocks
         * @response `200` `ProductApiImportProductsStocksData` Информация об остатках обновлена
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiImportProductsStocks(data: Types.ProductImportProductsStocksRequest): Types.ProductApiImportProductsStocksData;
        /**
         * @description Позволяет изменить информацию о количестве товара в наличии. Метод используется только для FBS и rFBS складов. За один запрос можно изменить наличие для 100 товаров. В минуту можно отправить до 80 запросов. Задать наличие товара возможно только после того, как его статус сменится на `price_sent`.
         *
         * @tags Prices&StocksAPI
         * @name ProductApiImportProductsStocksV2
         * @summary Обновить остатки
         * @request POST:/v2/products/stocks
         * @response `200` `ProductApiImportProductsStocksData` Информация об остатках обновлена
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiImportProductsStocksV2(data: Types.ProductImportProductsStocksV2Request): Types.ProductApiImportProductsStocksData;
        /**
         * @description Метод возвращает список складов FBS и rFBS.
         *
         * @tags WarehouseAPI
         * @name WarehouseListV2
         * @summary Список складов
         * @request POST:/v2/warehouse/list
         * @response `200` `WarehouseListV2Data` Список складов
         * @response `default` `RpcStatus` Ошибка
         */
        warehouseApiWarehouseList(data: Types.V2WarehouseListRequest): Types.WarehouseListV2Data;
        /**
         * @description Передайте в запросе offer_id или sku. Если укажете оба, будет использован только sku.
         *
         * @tags Prices&StocksAPI
         * @name ProductApiGetProductInfoStocksByWarehouseFbsV2
         * @summary Информация об остатках на складах продавца
         * @request POST:/v2/product/info/stocks-by-warehouse/fbs
         * @response `200` `ProductApiGetProductInfoStocksByWarehouseFbsV2Data` Количество товаров на складах
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        stocksByWarehouseFbs(data: Types.V2GetProductInfoStocksByWarehouseFbsRequest): Types.ProductApiGetProductInfoStocksByWarehouseFbsV2Data;
        /**
         * @description Позволяет изменить информацию о количестве товара в наличии. За один запрос можно изменить наличие для 100 товаров. В минуту можно отправить до 80 запросов. <aside class="warning">Обновлять остатки товара на одном складе можно только 1 раз в 2 минуты, иначе в ответе будет ошибка <code>TOO_MANY_REQUESTS</code>.</aside> Задать наличие товара возможно только после того, как его статус сменится на `processed`. Остатки крупногабаритных товаров можно обновлять только на предназначенных для них складах.
         *
         * @tags Prices&StocksAPI
         * @name ProductApiProductsStocksV2
         * @summary Обновить количество товаров на складах
         * @request POST:/v2/products/stocks
         * @response `200` `ProductApiProductsStocksV2Data` Количество товаров обновлено
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiProductsStocksV2(data: Types.Productv2ProductsStocksRequest): Types.ProductApiProductsStocksV2Data;
        /**
         * @description Возвращает подробную информацию по всем начислениям. Максимальный период, за который можно получить информацию в одном запросе — 1 месяц. Если в запросе не указывать `posting_number`, то в ответе будут все отправления за указанный период или отправления определённого типа.
         *
         * @tags FinanceAPI
         * @name FinanceApiFinanceTransactionListV3
         * @summary Список транзакций (версия 3)
         * @request POST:/v3/finance/transaction/list
         * @response `200` `FinanceApiFinanceTransactionListV3Data` Список транзакций
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        financeApiFinanceTransactionListV3(data: Types.Financev3FinanceTransactionListV3Request): Types.FinanceApiFinanceTransactionListV3Data;
        /**
         * @description Возвращает итоговые суммы по транзакциям за указанный период.
         *
         * @tags FinanceAPI
         * @name FinanceApiFinanceTransactionTotalV3
         * @summary Суммы транзакций
         * @request POST:/v3/finance/transaction/totals
         * @response `200` `FinanceApiFinanceTransactionTotalV3Data` Суммы транзакций
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        financeApiFinanceTransactionTotalV3(data: Types.Financev3FinanceTransactionTotalsV3Request): Types.FinanceApiFinanceTransactionTotalV3Data;
        /**
         * @description Список методов доставки realFBS-склада.
         *
         * @tags WarehouseAPI
         * @name WarehouseApiDeliveryMethodListV2
         * @summary Список методов доставки realFBS-склада
         * @request POST:/v2/delivery-method/list
         * @response `200` `WarehouseApiDeliveryMethodListV2Data` Список методов склада
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        warehouseApiDeliveryMethodListV2(data: Types.V2DeliveryMethodListRequest): Types.WarehouseApiDeliveryMethodListV2Data;
        /**
         * @description Список методов доставки и отгрузок. Метод не возвращает информацию по методам доставки, у которых нет отправлений.
         *
         * @tags DeliveryFBS
         * @name CarriageApiCarriageDeliveryListV2
         * @summary Список методов доставки и отгрузок
         * @request POST:/v2/carriage/delivery/list
         * @response `200` `CarriageApiCarriageDeliveryListV2Data` Список методов и отгрузок
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        carriageApiCarriageDeliveryListV2(data: Types.V2CarriageDeliveryListRequest): Types.CarriageApiCarriageDeliveryListV2Data;
        /**
         * @description Возвращает статус формирования штрихкода для отгрузки и документов.
         *
         * @tags DeliveryFBS
         * @name PostingApiPostingFbsActCheckStatus
         * @summary Статус отгрузки и документов
         * @request POST:/v2/posting/fbs/act/check-status
         * @response `200` `PostingApiPostingFbsActCheckStatusData` Статус отгрузки и документов
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        postingApiPostingFbsActCheckStatus(data: Types.PostingFBSActCheckStatusRequest): Types.PostingApiPostingFbsActCheckStatusData;
        /**
         * @description Получить PDF c документами: лист отгрузки, транспортную накладную или акт.
         *
         * @tags DeliveryFBS
         * @name PostingApiPostingFbsGetAct
         * @summary Получить PDF c документами
         * @request POST:/v2/posting/fbs/act/get-pdf
         * @response `200` `PostingApiPostingFbsGetActData` Документы
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        postingApiPostingFbsGetAct(data: Types.PostingFBSGetActRequest): Types.PostingApiPostingFbsGetActData;
    }
    export {};
}
