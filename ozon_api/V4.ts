/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
    Fbsv4FbsPostingShipV4Request,
    Fbsv4GetProductExemplarStatusRequest,
    Fbsv4SetProductExemplarRequest,
    PostingApiFbsPostingProductExemplarValidateData,
    PostingApiFbsPostingProductExemplarValidateError,
    PostingApiGetProductExemplarStatusData,
    PostingApiGetProductExemplarStatusError,
    PostingApiSetProductExemplarData,
    PostingApiSetProductExemplarError,
    PostingApiShipFbsPostingV4Data,
    PostingApiShipFbsPostingV4Error,
    Postingv4FbsPostingProductExemplarValidateRequest,
    ProductApiGetProductInfoPricesV4Data,
    ProductApiGetProductInfoPricesV4Error,
    ProductApiGetUploadQuotaData,
    ProductApiGetUploadQuotaError,
    Productv4GetProductInfoPricesV4Request,
    V1Empty,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V4<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

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
    productApiGetUploadQuota = (data: V1Empty, params: RequestParams = {}) =>
        this.http.request<ProductApiGetUploadQuotaData, ProductApiGetUploadQuotaError>({
            path: `/v4/product/info/limit`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description В запросе вы можете передать максимум 1000 товаров.
     *
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
     */
    productApiGetProductInfoPricesV4 = (data: Productv4GetProductInfoPricesV4Request, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoPricesV4Data, ProductApiGetProductInfoPricesV4Error>({
            path: `/v4/product/info/prices`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для проверки кодов на соответствие требованиям системы «Честный ЗНАК» по количеству и составу символов. Если у вас нет номера грузовой таможенной декларации (ГТД), вы можете его не указывать.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiFbsPostingProductExemplarValidate
     * @summary Валидация кодов маркировки
     * @request POST:/v4/fbs/posting/product/exemplar/validate
     * @response `200` `PostingApiFbsPostingProductExemplarValidateData` Результат валидации
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiFbsPostingProductExemplarValidate = (
        data: Postingv4FbsPostingProductExemplarValidateRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            PostingApiFbsPostingProductExemplarValidateData,
            PostingApiFbsPostingProductExemplarValidateError
        >({
            path: `/v4/fbs/posting/product/exemplar/validate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Асинхронный метод: - для проверки наличия экземпляров в обороте в системе «Честный ЗНАК»; - для сохранения данных экземпляров. Чтобы получить результаты проверок, используйте метод [/v4/fbs/posting/product/exemplar/status](#operation/PostingAPI_GetProductExemplarStatus). При необходимости укажите номер грузовой таможенной декларации в параметре `gtd`. Если его нет, передайте значение `is_gtd_absent = true`. Если у вас несколько одинаковых товаров в отправлении, укажите один `product_id` и массив `exemplars` для каждого товара из отправления. Всегда передавайте полный набор данных по экземплярам и продуктам. Например, в вашей системе 10 экземпляров. Вы передали их для проверки и сохранения. Потом добавили в своей системе ещё 60 экземпляров. При повторной передаче экземпляров для проверки и сохранения укажите все экземпляры: и старые, и только что добавленные.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiSetProductExemplar
     * @summary Проверить и сохранить данные экземпляров
     * @request POST:/v4/fbs/posting/product/exemplar/set
     * @response `200` `PostingApiSetProductExemplarData` Запрос обработан
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiSetProductExemplar = (data: Fbsv4SetProductExemplarRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiSetProductExemplarData, PostingApiSetProductExemplarError>({
            path: `/v4/fbs/posting/product/exemplar/set`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения статусов проверки экземпляров, переданных в методе [/v4/fbs/posting/product/exemplar/set](#operation/PostingAPI_SetProductExemplar). Также возвращает данные по этим экземплярам.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiGetProductExemplarStatus
     * @summary Получить статус проверки экземпляров
     * @request POST:/v4/fbs/posting/product/exemplar/status
     * @response `200` `PostingApiGetProductExemplarStatusData` Статусы проверки экземпляров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetProductExemplarStatus = (data: Fbsv4GetProductExemplarStatusRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetProductExemplarStatusData, PostingApiGetProductExemplarStatusError>({
            path: `/v4/fbs/posting/product/exemplar/status`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Делит заказ на отправления и переводит его в статус `awaiting_deliver`. Каждый элемент в `packages` может содержать несколько элементов `products` или отправлений. Каждый элемент в `products` — это товар, включённый в данное отправление. Разделить заказ нужно, если: - товары не помещаются в одну упаковку, - товары нельзя сложить в одну упаковку. Отличается от [/v3/posting/fbs/ship](#operation/PostingAPI_ShipFbsPostingV3) отсутствием передачи информации по экземплярам в запросе.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiShipFbsPostingV4
     * @summary Собрать заказ (версия 4)
     * @request POST:/v4/posting/fbs/ship
     * @response `200` `PostingApiShipFbsPostingV4Data` Заказ собран
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiShipFbsPostingV4 = (data: Fbsv4FbsPostingShipV4Request, params: RequestParams = {}) =>
        this.http.request<PostingApiShipFbsPostingV4Data, PostingApiShipFbsPostingV4Error>({
            path: `/v4/posting/fbs/ship`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}
