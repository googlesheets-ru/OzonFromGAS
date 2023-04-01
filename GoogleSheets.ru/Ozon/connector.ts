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
    }
}
