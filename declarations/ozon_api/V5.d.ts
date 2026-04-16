import { Productv5GetProductInfoPricesV5Request, V5FbsPostingProductExemplarStatusV5Request, V5FbsPostingProductExemplarValidateV5Request } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class V5<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Prices&StocksAPI
     * @name ProductApiGetProductInfoPrices
     * @summary Получить информацию о цене товара
     * @request POST:/v5/product/info/prices
     * @response `200` `ProductApiGetProductInfoPricesData` Информация о цене товара
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoPrices: (data: Productv5GetProductInfoPricesV5Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").Productv5GetProductInfoPricesV5Response, import("./data-contracts").RpcStatus>>;
    /**
     * @description Метод для получения статусов добавления экземпляров, переданных в методе [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6). Также возвращает данные по этим экземплярам.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiFbsPostingProductExemplarStatusV5
     * @summary Получить статус добавления экземпляров
     * @request POST:/v5/fbs/posting/product/exemplar/status
     * @response `200` `PostingApiFbsPostingProductExemplarStatusV5Data` Статусы проверки экземпляров
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiFbsPostingProductExemplarStatusV5: (data: V5FbsPostingProductExemplarStatusV5Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V5FbsPostingProductExemplarStatusV5Response, import("./data-contracts").RpcStatus>>;
    /**
     * @description Метод для проверки кодов на соответствие требованиям системы «Честный ЗНАК» по количеству и составу символов, а также других маркировок. Если у вас нет номера грузовой таможенной декларации (ГТД), вы можете его не указывать.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiFbsPostingProductExemplarValidateV5
     * @summary Валидация кодов маркировки
     * @request POST:/v5/fbs/posting/product/exemplar/validate
     * @response `200` `PostingApiFbsPostingProductExemplarValidateV5Data` Результат валидации
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiFbsPostingProductExemplarValidateV5: (data: V5FbsPostingProductExemplarValidateV5Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V5FbsPostingProductExemplarValidateV5Response, import("./data-contracts").RpcStatus>>;
}
