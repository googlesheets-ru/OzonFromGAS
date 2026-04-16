import { Fbsv4FbsPostingShipV4Request, Productv4GetProductAttributesV4Request, V1Empty, V4FbsPostingShipPackageV4Request, V4GetProductInfoStocksRequest } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class V4<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * @description Возвращает описание характеристик товаров по идентификатору и видимости. Товар можно искать по `offer_id`, `product_id` или `sku`.
     *
     * @tags ProductAPI
     * @name ProductApiGetProductAttributesV4
     * @summary Получить описание характеристик товара
     * @request POST:/v4/product/info/attributes
     * @response `200` `ProductApiGetProductAttributesV4Data` Описание характеристик товара
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductAttributesV4: (data: Productv4GetProductAttributesV4Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").Productv4GetProductAttributesV4Response, import("./data-contracts").RpcStatus>>;
    /**
     * @description Метод для получения информации о лимитах: - На ассортимент — сколько всего товаров можно создать в вашем личном кабинете. - На создание товаров — сколько товаров можно создать в сутки. - На обновление товаров — сколько товаров можно отредактировать в сутки. Если у вас есть лимит на ассортимент и вы израсходуете его, вы не сможете создавать новые товары. [Подробнее о лимитах в Базе знаний продавца](https://seller-edu.ozon.ru/work-with-goods/zagruzka-tovarov/creating-goods/limit/)
     *
     * @tags ProductAPI
     * @name ProductApiGetUploadQuota
     * @summary Лимиты на ассортимент, создание и обновление товаров
     * @request POST:/v4/product/info/limit
     * @response `200` `ProductApiGetUploadQuotaData` Лимиты на ассортмент, создание и обновление товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetUploadQuota: (data: V1Empty, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V4GetUploadQuotaResponse, import("./data-contracts").RpcStatus>>;
    /**
     * @description Возвращает информацию о ĸоличестве товаров по схемам FBS, rFBS и FBP: - сĸольĸо единиц есть в наличии, - сĸольĸо зарезервировано поĸупателями. Чтобы получить информацию об остатках по схеме FBO, используйте метод [/v1/analytics/stocks](#operation/AnalyticsAPI_AnalyticsStocks).
     *
     * @tags Prices&StocksAPI
     * @name ProductApiGetProductInfoStocks
     * @summary Информация о количестве товаров
     * @request POST:/v4/product/info/stocks
     * @response `200` `ProductApiGetProductInfoStocksData` Количество товара
     * @response `default` `RpcStatus` Ошибка
     */
    productApiGetProductInfoStocks: (data: V4GetProductInfoStocksRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V4GetProductInfoStocksResponse, import("./data-contracts").RpcStatus>>;
    /**
     * @description <aside class="warning"> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку заказа. Используйте метод <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>, чтобы проверить, что заказ собран. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку заказа. </aside> Делит заказ на отправления и переводит его в статус `awaiting_deliver`. Каждый элемент в `packages` может содержать несколько элементов `products` или отправлений. Каждый элемент в `products` — это товар, включённый в данное отправление. Разделить заказ нужно, если: - товары не помещаются в одну упаковку, - товары нельзя сложить в одну упаковку. Чтобы разделить заказ, передайте в массиве `packages` несколько объектов. Пример запроса, когда заказ разделять не нужно: 2 товара будут в одном отправлении. ``` { "packages": [ { "products": [ { "product_id": 185479045, "quantity": 2 } ] } ], "posting_number": "89491381-0072-1" } ``` Пример запроса, когда заказ нужно разделить: каждый товар будет в отдельном отправлении. ``` { "packages": [ { "products": [ { "product_id": 185479045, "quantity": 1 } ] }, { "products": [ { "product_id": 185479045, "quantity": 1 } ] } ], "posting_number": "89491381-0072-1" } ``` Чтобы внести информацию по экземплярам, используйте метод [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiShipFbsPostingV4
     * @summary Собрать заказ (версия 4)
     * @request POST:/v4/posting/fbs/ship
     * @response `200` `PostingApiShipFbsPostingV4Data` Результат сборки заказа
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiShipFbsPostingV4: (data: Fbsv4FbsPostingShipV4Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").Fbsv4FbsPostingShipV4Response, import("./data-contracts").RpcStatus>>;
    /**
     * @description <aside class="warning"> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку отправления. Используйте метод <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>, чтобы проверить, что отправление собрано. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку отправления. </aside> Если в запросе передать часть товаров из отправления, метод разделит первичное отправление на две части. В первичном несобранном отправлении останется часть товаров, которую не передали в запросе. По умолчанию статус созданных отправлений `awaiting_packaging` — ожидает сборки. Статус изначального отправления изменится только после изменения статуса отправлений, на которые он разделился.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiShipFbsPostingPackage
     * @summary Частичная сборка отправления (версия 4)
     * @request POST:/v4/posting/fbs/ship/package
     * @response `200` `PostingApiShipFbsPostingPackageData` Результат сборки отправления
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiShipFbsPostingPackage: (data: V4FbsPostingShipPackageV4Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V4FbsPostingShipPackageV4Response, import("./data-contracts").RpcStatus>>;
}
