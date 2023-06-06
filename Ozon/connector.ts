namespace Ozon_ {
    export namespace Types {
        export interface ClientRequestInit {
            endpoint: `/${Ozon_.Types.Version}/${string}/${string}`;
            /**@default GET */
            method?: 'GET' | 'POST' | 'PUT' | 'PATCH';
            payload?: { [key: string]: any };
            queryParams?: {
                [key: string]: string | number | Array<string | number> | Object;
            };
        }
        export interface OzonErrorDetails {
            code: number;
            details: {
                typeUrl: string;
                value: string;
            }[];
            message: string;
        }

        export interface BasicSuccessResponse<T> {
            result: T[];
        }

        /**Фильтр по товарам. */
        export interface GetProductListRequestFilter {
            /**Фильтр по параметру offer_id. Можно передавать список значений. */
            offer_id?: string[];
            /**Фильтр по параметру product_id. Можно передавать список значений. */
            product_id?: Array<string | number>;
            /**Фильтр по видимости товара */
            visibility?: Types.FilterVisibility;
        }

        export interface GetProductListRequestInit {
            /* Фильтр по товарам. */
            filter?: Types.GetProductListRequestFilter;
            /** Идентификатор последнего значения на странице.
             * Оставьте это поле пустым при выполнении первого запроса.
             * Чтобы получить следующие значения, укажите last_id из ответа предыдущего запроса. */
            last_id?: string;
            /** Количество значений на странице. Минимум — 1, максимум — 1000. */
            limit: number;
        }

        export interface GetProductInfoListInit {
            offer_id?: string[];
            product_id?: number[];
            sku?: number[];
        }
    }
    export class OzonRequestError extends Error implements Ozon_.Types.OzonErrorDetails {
        code: number;
        details: { typeUrl: string; value: string }[];
        constructor(requestError: Ozon_.Types.OzonErrorDetails) {
            super(requestError.message);
            this.name = 'OzonRequestError';
            this.code = requestError.code;
            this.details = requestError.details;
        }
    }

    /**
     * @class Client
     * @description Класс для подключения к апи Озон
     */
    class Client {
        protected clientId: number;
        protected apiKey: string;
        protected baseUrl: string;

        constructor(keys: Ozon_.Types.Keys) {
            this.clientId = keys.clientId;
            this.apiKey = keys.apiKey;
            this.baseUrl = 'https://api-seller.ozon.ru';
        }

        private getType(obj: any) {
            if (!obj) {
                throw new Error('no obj was passed for detect his type.');
            }
            const objType = Object.prototype.toString.call(obj) as string;
            return objType.match(/\s(?<type>\w+)\]/)?.groups?.type;
        }

        private qsBuilder(data: { [key: string]: any }, prefix?: string, otherKey?: string) {
            const qsItems: Array<any> = [];
            prefix = prefix ? `${prefix}` : '';
            // tslint:disable-next-line: forin
            for (const key in data) {
                const valueType = this.getType(data[key]);

                if (['String', 'Number'].includes(valueType)) {
                    qsItems.push(`${prefix}${otherKey || key}=${data[key]}`);
                }

                if (valueType === 'Array') {
                    qsItems.push(this.qsBuilder(data[key], key, '[]'));
                }

                if (valueType === 'Date') {
                    qsItems.push(`${prefix}${otherKey || key}=${(data[key] as Date).toISOString()}`);
                }

                if (valueType === 'Object') {
                    for (const inKey in data[key]) {
                        if (this.getType(data[key][inKey]) == 'Object') {
                            qsItems.push(this.qsBuilder(data[key][inKey], `${key}.${inKey}.`));
                        } else {
                            qsItems.push(`${prefix}${key}.${inKey}=${data[key][inKey]}`);
                        }
                    }
                }
            }
            return qsItems.flat().join('&');
        }

        protected request<T>(init: Types.ClientRequestInit) {
            init.method ??= 'GET';
            let url = this.baseUrl + init.endpoint;
            if (init.queryParams) {
                url += '?' + this.qsBuilder(init.queryParams);
            }

            const fetchOptions: { [key: string]: any } = {
                muteHttpExceptions: true,
                method: init.method,
                headers: {
                    'Client-Id': String(this.clientId),
                    'Api-Key': this.apiKey,
                    'Content-Type': 'application/json',
                },
            };

            if (init.payload && init.method != 'GET') {
                fetchOptions.payload = JSON.stringify(init.payload);
            }

            const response = UrlFetchApp.fetch(url, fetchOptions);

            const responseJson = response.getContentText();
            if (response.getResponseCode() > 299) {
                const errorDetails = JSON.parse(responseJson) as Types.OzonErrorDetails;
                throw new OzonRequestError(errorDetails);
            }

            const result = JSON.parse(responseJson);

            return result as T;
        }
    }

    export class Api extends Client {
        constructor(keys: Types.Keys) {
            super(keys);
        }

        /**
         * Список товаров
         *
         * @tags ProductAPI
         * @name ProductApiGetProductList
         * @summary Список товаров
         * @request POST:/v2/product/list
         * @response `200` `ProductApiGetProductListData` Список товаров
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetProductList(data: Types.GetProductListRequestInit) {
            const response = this.request<Types.ProductApiGetProductListData>({
                endpoint: `/v2/product/list`,
                method: 'POST',
                payload: data,
            });
            return response;
        }

        /**
         * Получение информации о товаре по его идентификатору
         *
         * @tags ProductAPI
         * @name ProductApiGetProductInfoV2
         * @summary Информация о товарах
         * @request POST:/v2/product/info
         * @response `200` `ProductApiGetProductInfoV2Data` Информация о товарах
         * @response `400` `RpcStatus` Неверный параметр
         * @response `403` `RpcStatus` Доступ запрещён
         * @response `404` `RpcStatus` Ответ не найден
         * @response `409` `RpcStatus` Конфликт запроса
         * @response `500` `RpcStatus` Внутренняя ошибка сервера
         */
        productApiGetProductInfoV2(data: Types.Productv2GetProductInfoRequest) {
            const response = this.request<Types.ProductApiGetProductInfoV2Data>({
                endpoint: `/v2/product/info`,
                method: 'POST',
                payload: data,
            });
            return response;
        }

        /**
         * @description Метод для получения массива товаров по их идентификаторам. В теле запроса должен быть массив однотипных идентификаторов, в ответе будет массив `items`. Для каждого товара внутри массива `items` поля совпадают с полями из метода [/v2/product/info](#operation/ProductAPI_GetProductInfoV2).
         *
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
        productApiGetProductInfoListV2(data: Types.Productv2GetProductInfoListRequest) {
            const response = this.request<Types.ProductApiGetProductInfoListV2Data>({
                endpoint: `/v2/product/info/list`,
                method: 'POST',
                payload: data,
            });
            return response;
        }

        /**
         * @description [Метод] для получения информации о ценах товара
         * в запросе вы можете передать максимум 1000 товаров.
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
        productApiGetProductInfoPricesV4 = (data: Types.Productv4GetProductInfoPricesV4Request) => {
            const response = this.request<Types.ProductApiGetProductInfoPricesV4Data>({
                endpoint: `/v4/product/info/prices`,
                method: 'POST',
                payload: data,
            });
            return response;
        };

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
        productApiImportProductsPrices = (data: Types.ProductImportProductsPricesRequest) => {
            const response = this.request<Types.ProductApiImportProductsPricesData>({
                endpoint: `/v1/product/import/prices`,
                method: 'POST',
                payload: data,
            });
            return response;
        };

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
        analyticsApiAnalyticsGetStockOnWarehousesV2 = (data: Types.AnalyticsStockOnWarehouseRequest) => {
            this.request<Types.AnalyticsApiAnalyticsGetStockOnWarehousesV2Data>({
                endpoint: `/v2/analytics/stock_on_warehouses`,
                method: 'POST',
                payload: data,
            });
        };

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
        productApiProductUpdateOfferId(data: Types.V1ProductUpdateOfferIdRequest) {
            this.request<Types.ProductApiProductUpdateOfferIdData>({
                endpoint: `/v1/product/update/offer-id`,
                method: 'POST',
                payload: data,
            });
        }

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
        productApiImportProductsV2(data: Types.Productv2ImportProductsRequest) {
            this.request<Types.ProductApiImportProductsV2Data>({
                endpoint: `/v2/product/import`,
                method: 'POST',
                payload: data,
            });
        }
    }
}
