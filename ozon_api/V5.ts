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
    PostingApiFbsPostingProductExemplarStatusV5Data,
    PostingApiFbsPostingProductExemplarStatusV5Error,
    PostingApiFbsPostingProductExemplarValidateV5Data,
    PostingApiFbsPostingProductExemplarValidateV5Error,
    ProductApiGetProductInfoPricesData,
    ProductApiGetProductInfoPricesError,
    Productv5GetProductInfoPricesV5Request,
    V5FbsPostingProductExemplarStatusV5Request,
    V5FbsPostingProductExemplarValidateV5Request,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V5<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

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
    productApiGetProductInfoPrices = (data: Productv5GetProductInfoPricesV5Request, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoPricesData, ProductApiGetProductInfoPricesError>({
            path: `/v5/product/info/prices`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    postingApiFbsPostingProductExemplarStatusV5 = (
        data: V5FbsPostingProductExemplarStatusV5Request,
        params: RequestParams = {},
    ) =>
        this.http.request<
            PostingApiFbsPostingProductExemplarStatusV5Data,
            PostingApiFbsPostingProductExemplarStatusV5Error
        >({
            path: `/v5/fbs/posting/product/exemplar/status`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    postingApiFbsPostingProductExemplarValidateV5 = (
        data: V5FbsPostingProductExemplarValidateV5Request,
        params: RequestParams = {},
    ) =>
        this.http.request<
            PostingApiFbsPostingProductExemplarValidateV5Data,
            PostingApiFbsPostingProductExemplarValidateV5Error
        >({
            path: `/v5/fbs/posting/product/exemplar/validate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}
