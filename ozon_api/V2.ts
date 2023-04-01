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
    AnalyticsApiAnalyticsGetStockOnWarehousesV2Data,
    AnalyticsApiAnalyticsGetStockOnWarehousesV2Error,
    AnalyticsStockOnWarehouseRequest,
    CategoryApiDictionaryValueBatchData,
    CategoryApiDictionaryValueBatchError,
    CategoryApiGetCategoryTreeData,
    CategoryApiGetCategoryTreeError,
    CategoryGetCategoryTreeRequest,
    Categoryv2DictionaryValueBatchRequest,
    CertificateAccordanceTypesData,
    CertificateAccordanceTypesError,
    ChatApiChatHistoryV2Data,
    ChatApiChatHistoryV2Error,
    ChatApiChatListV2Data,
    ChatApiChatListV2Error,
    ChatApiChatReadV2Data,
    ChatApiChatReadV2Error,
    ChatHistory,
    ChatList,
    ChatRead,
    PostingApiActPostingListData,
    PostingApiActPostingListError,
    PostingApiCancelFbsPostingData,
    PostingApiCancelFbsPostingError,
    PostingApiCancelFbsPostingProductData,
    PostingApiCancelFbsPostingProductError,
    PostingApiChangeFbsPostingProductData,
    PostingApiChangeFbsPostingProductError,
    PostingApiDigitalActDocumentSignData,
    PostingApiDigitalActDocumentSignError,
    PostingApiFbsActListData,
    PostingApiFbsActListError,
    PostingApiFbsPostingDeliveredData,
    PostingApiFbsPostingDeliveredError,
    PostingApiFbsPostingDeliveringData,
    PostingApiFbsPostingDeliveringError,
    PostingApiFbsPostingLastMileData,
    PostingApiFbsPostingLastMileError,
    PostingApiFbsPostingSentbysellerData,
    PostingApiFbsPostingSentbysellerError,
    PostingApiFbsPostingTrackingNumberSetData,
    PostingApiFbsPostingTrackingNumberSetError,
    PostingApiGetFboPostingData,
    PostingApiGetFboPostingError,
    PostingApiGetFboPostingListData,
    PostingApiGetFboPostingListError,
    PostingApiGetFbsPostingByBarcodeData,
    PostingApiGetFbsPostingByBarcodeError,
    PostingApiGetPostingFbsCancelReasonListData,
    PostingApiGetPostingFbsCancelReasonListError,
    PostingApiListCountryProductFbsPostingV2Data,
    PostingApiListCountryProductFbsPostingV2Error,
    PostingApiMoveFbsPostingToArbitrationData,
    PostingApiMoveFbsPostingToArbitrationError,
    PostingApiMoveFbsPostingToAwaitingDeliveryData,
    PostingApiMoveFbsPostingToAwaitingDeliveryError,
    PostingApiPostingFbsActCheckStatusData,
    PostingApiPostingFbsActCheckStatusError,
    PostingApiPostingFbsActCreateData,
    PostingApiPostingFbsActCreateError,
    PostingApiPostingFbsActGetContainerLabelsData,
    PostingApiPostingFbsActGetContainerLabelsError,
    PostingApiPostingFbsDigitalActCheckStatusData,
    PostingApiPostingFbsDigitalActCheckStatusError,
    PostingApiPostingFbsGetActData,
    PostingApiPostingFbsGetActError,
    PostingApiPostingFbsGetDigitalActData,
    PostingApiPostingFbsGetDigitalActError,
    PostingApiPostingFbsPackageLabelData,
    PostingApiPostingFbsPackageLabelError,
    PostingApiSetCountryProductFbsPostingV2Data,
    PostingApiSetCountryProductFbsPostingV2Error,
    PostingCancelFbsPostingRequest,
    PostingFbsPostingDeliveredRequest,
    PostingFbsPostingDeliveringRequest,
    PostingFbsPostingLastMileRequest,
    PostingFbsPostingSentbysellerRequest,
    PostingFbsPostingTrackingNumberSetRequest,
    PostingGetFboPostingListRequest,
    PostingGetFboPostingRequest,
    PostingGetFbsPostingByBarcodeRequest,
    PostingMovePostingRequest,
    PostingPostingFBSActCheckStatusRequest,
    PostingPostingFBSActCreateRequest,
    PostingPostingFBSActGetContainerLabelsRequest,
    PostingPostingFBSGetActRequest,
    PostingPostingFBSPackageLabelRequest,
    PostingPostingProductCancelRequest,
    PostingPostingProductChangeRequest,
    ProductApiDeleteProductsData,
    ProductApiDeleteProductsError,
    ProductApiGetProductInfoLimitV2Data,
    ProductApiGetProductInfoLimitV2Error,
    ProductApiGetProductInfoListV2Data,
    ProductApiGetProductInfoListV2Error,
    ProductApiGetProductInfoV2Data,
    ProductApiGetProductInfoV2Error,
    ProductApiGetProductListData,
    ProductApiGetProductListError,
    ProductApiImportProductsV2Data,
    ProductApiImportProductsV2Error,
    ProductApiProductsStocksV2Data,
    ProductApiProductsStocksV2Error,
    Productv2DeleteProductsRequest,
    Productv2GetProductInfoLimitV2Request,
    Productv2GetProductInfoListRequest,
    Productv2GetProductInfoRequest,
    Productv2GetProductListRequest,
    Productv2ImportProductsRequest,
    Productv2ProductsStocksRequest,
    ReturnsApiGetReturnsCompanyFboV2Data,
    ReturnsApiGetReturnsCompanyFboV2Error,
    ReturnsApiGetReturnsCompanyFbsData,
    ReturnsApiGetReturnsCompanyFbsError,
    ReturnsGetReturnsCompanyFboRequest,
    ReturnsGetReturnsCompanyFBSRequest,
    V2FbsPostingProductCountryListRequest,
    V2FbsPostingProductCountrySetRequest,
    V2PostingFBSActGetPostingsRequest,
    V2PostingFBSActListRequest,
    V2PostingFBSDigitalActCheckStatusRequest,
    V2PostingFBSDigitalActDocumentSignRequest,
    V2PostingFBSGetDigitalActRequest,
} = './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V2<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

    /**
     * @description Возвращает категории для товаров в виде дерева. Создание товаров доступно только в категориях последнего уровня, сравните именно эти категории с категориями своей площадки. Категории не создаются по запросу пользователя. <aside class="warning"> Выберите корректную категорию для товара, так как для разных категорий применяется разный размер комиссии на продаваемый товар. </aside>
     *
     * @tags CategoryAPI
     * @name CategoryApiGetCategoryTree
     * @summary Дерево категории товаров
     * @request POST:/v2/category/tree
     * @response `200` `CategoryApiGetCategoryTreeData` Дерево категории товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    categoryApiGetCategoryTree = (data: CategoryGetCategoryTreeRequest, params: RequestParams = {}) =>
        this.http.request<CategoryApiGetCategoryTreeData, CategoryApiGetCategoryTreeError>({
            path: `/v2/category/tree`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Узнать, есть ли у атрибута вложенный справочник, можно через метод [/v3/category/attribute](#operation/CategoryAPI_GetCategoryAttributesV3). Если справочники есть, их нужно запрашивать этим методом.
     *
     * @tags CategoryAPI
     * @name CategoryApiDictionaryValueBatch
     * @summary Справочник значений характеристики
     * @request POST:/v2/category/attribute/values
     * @response `200` `CategoryApiDictionaryValueBatchData` Справочник характеристик
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    categoryApiDictionaryValueBatch = (data: Categoryv2DictionaryValueBatchRequest, params: RequestParams = {}) =>
        this.http.request<CategoryApiDictionaryValueBatchData, CategoryApiDictionaryValueBatchError>({
            path: `/v2/category/attribute/values`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    productApiImportProductsV2 = (data: Productv2ImportProductsRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiImportProductsV2Data, ProductApiImportProductsV2Error>({
            path: `/v2/product/import`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
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
    productApiGetProductList = (data: Productv2GetProductListRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductListData, ProductApiGetProductListError>({
            path: `/v2/product/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
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
    productApiGetProductInfoV2 = (data: Productv2GetProductInfoRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoV2Data, ProductApiGetProductInfoV2Error>({
            path: `/v2/product/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    productApiGetProductInfoListV2 = (data: Productv2GetProductInfoListRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoListV2Data, ProductApiGetProductInfoListV2Error>({
            path: `/v2/product/info/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning">Этот метод возвращает информацию только об общем лимите на загрузку и обновление товаров. Чтобы узнать общий лимит и сколько всего товаров в рамках общего лимита можно создать, используйте метод <a href="#operation/ProductAPI_GetProductInfoLimit">/v3/product/info/limit</a>.</aside>
     *
     * @tags ProductAPI
     * @name ProductApiGetProductInfoLimitV2
     * @summary Получить информацию о лимите на загрузку и обновление товаров
     * @request POST:/v2/product/info/limit
     * @response `200` `ProductApiGetProductInfoLimitV2Data` Информация о лимите на загрузку и обновление товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoLimitV2 = (data: Productv2GetProductInfoLimitV2Request, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoLimitV2Data, ProductApiGetProductInfoLimitV2Error>({
            path: `/v2/product/info/limit`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description В одном запросе можно передать до 500 идентификаторов.
     *
     * @tags ProductAPI
     * @name ProductApiDeleteProducts
     * @summary Удалить товар без SKU из архива
     * @request POST:/v2/products/delete
     * @response `200` `ProductApiDeleteProductsData` Товар удалён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiDeleteProducts = (data: Productv2DeleteProductsRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiDeleteProductsData, ProductApiDeleteProductsError>({
            path: `/v2/products/delete`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    productApiProductsStocksV2 = (data: Productv2ProductsStocksRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductsStocksV2Data, ProductApiProductsStocksV2Error>({
            path: `/v2/products/stocks`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateAccordanceTypes
     * @summary Список типов соответствия требованиям (версия 2)
     * @request GET:/v2/product/certificate/accordance-types/list
     * @response `200` `CertificateAccordanceTypesData` Список типов соответствия требованиям
     * @response `default` `GooglerpcStatus` Ошибка
     */
    certificateAccordanceTypes = (params: RequestParams = {}) =>
        this.http.request<CertificateAccordanceTypesData, CertificateAccordanceTypesError>({
            path: `/v2/product/certificate/accordance-types/list`,
            method: 'GET',
            ...params,
        });
    /**
     * @description Возвращает список отправлений за указанный период времени. Дополнительно можно отфильтровать отправления по их статусу.
     *
     * @tags FBO
     * @name PostingApiGetFboPostingList
     * @summary Список отправлений
     * @request POST:/v2/posting/fbo/list
     * @response `200` `PostingApiGetFboPostingListData` Список отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFboPostingList = (data: PostingGetFboPostingListRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetFboPostingListData, PostingApiGetFboPostingListError>({
            path: `/v2/posting/fbo/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает информацию об отправлении по его идентификатору.
     *
     * @tags FBO
     * @name PostingApiGetFboPosting
     * @summary Информация об отправлении
     * @request POST:/v2/posting/fbo/get
     * @response `200` `PostingApiGetFboPostingData` Информация об отправлении
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFboPosting = (data: PostingGetFboPostingRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetFboPostingData, PostingApiGetFboPostingError>({
            path: `/v2/posting/fbo/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags FBS
     * @name PostingApiGetFbsPostingByBarcode
     * @summary Получить информацию об отправлении по штрихкоду
     * @request POST:/v2/posting/fbs/get-by-barcode
     * @response `200` `PostingApiGetFbsPostingByBarcodeData` Информация об отправлении
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFbsPostingByBarcode = (data: PostingGetFbsPostingByBarcodeRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetFbsPostingByBarcodeData, PostingApiGetFbsPostingByBarcodeError>({
            path: `/v2/posting/fbs/get-by-barcode`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка доступных стран-изготовителей и их ISO кодов.
     *
     * @tags FBS
     * @name PostingApiListCountryProductFbsPostingV2
     * @summary Список доступных стран-изготовителей
     * @request POST:/v2/posting/fbs/product/country/list
     * @response `200` `PostingApiListCountryProductFbsPostingV2Data` Список доступных стран-изготовителей
     * @response `default` `GooglerpcStatus` Ошибка
     */
    postingApiListCountryProductFbsPostingV2 = (
        data: V2FbsPostingProductCountryListRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<PostingApiListCountryProductFbsPostingV2Data, PostingApiListCountryProductFbsPostingV2Error>({
            path: `/v2/posting/fbs/product/country/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для добавления на продукт атрибута «Страна-изготовитель», если он не был указан.
     *
     * @tags FBS
     * @name PostingApiSetCountryProductFbsPostingV2
     * @summary Добавить информацию о стране-изготовителе товара
     * @request POST:/v2/posting/fbs/product/country/set
     * @response `200` `PostingApiSetCountryProductFbsPostingV2Data` Страна-изготовитель добавлена
     * @response `default` `GooglerpcStatus` Ошибка
     */
    postingApiSetCountryProductFbsPostingV2 = (
        data: V2FbsPostingProductCountrySetRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<PostingApiSetCountryProductFbsPostingV2Data, PostingApiSetCountryProductFbsPostingV2Error>({
            path: `/v2/posting/fbs/product/country/set`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Запускает формирование передаточных документов: акта приёма-передачи и транспортной накладной. Чтобы сформировать и получить передаточные документы, переведите отправление в статус `awaiting_deliver`.
     *
     * @tags FBS
     * @name PostingApiPostingFbsActCreate
     * @summary Создать акт и накладную
     * @request POST:/v2/posting/fbs/act/create
     * @response `200` `PostingApiPostingFbsActCreateData` Создан акт и накладная
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsActCreate = (data: PostingPostingFBSActCreateRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsActCreateData, PostingApiPostingFbsActCreateError>({
            path: `/v2/posting/fbs/act/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Если вы не подключены к электронному документообороту (ЭДО), в ответе вернётся статус формирования акта приёма-передачи и транспортной накладной. Если вы подключены к ЭДО, в ответе вернётся только статус формирования транспортной накладной.
     *
     * @tags FBS
     * @name PostingApiPostingFbsActCheckStatus
     * @summary Статус акта и накладной
     * @request POST:/v2/posting/fbs/act/check-status
     * @response `200` `PostingApiPostingFbsActCheckStatusData` Статус акта и накладной
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsActCheckStatus = (data: PostingPostingFBSActCheckStatusRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsActCheckStatusData, PostingApiPostingFbsActCheckStatusError>({
            path: `/v2/posting/fbs/act/check-status`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Получить сформированные передаточные документы в формате PDF: акт приёма-передачи и транспортную накладную. Если вы не подключены к электронному документообороту (ЭДО), в ответе вернутся акт приёма-передачи и транспортная накладная. Если вы подключены к ЭДО, в ответе вернётся только транспортная накладная.
     *
     * @tags FBS
     * @name PostingApiPostingFbsGetAct
     * @summary Получить акт и накладную
     * @request POST:/v2/posting/fbs/act/get-pdf
     * @response `200` `PostingApiPostingFbsGetActData` Акт приёма-передачи и накладная
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsGetAct = (data: PostingPostingFBSGetActRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsGetActData, PostingApiPostingFbsGetActError>({
            path: `/v2/posting/fbs/act/get-pdf`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Метод доступен только для продавцов, которые подключены к электронному документообороту. </aside> Получение статуса формирования электронных акта приёма-передачи и транспортной накладной.
     *
     * @tags FBS
     * @name PostingApiPostingFbsDigitalActCheckStatus
     * @summary Статус электронных акта и накладной
     * @request POST:/v2/posting/fbs/digital/act/check-status
     * @response `200` `PostingApiPostingFbsDigitalActCheckStatusData` Статус формирования акта и накладной
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsDigitalActCheckStatus = (
        data: V2PostingFBSDigitalActCheckStatusRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            PostingApiPostingFbsDigitalActCheckStatusData,
            PostingApiPostingFbsDigitalActCheckStatusError
        >({
            path: `/v2/posting/fbs/digital/act/check-status`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Метод доступен только для продавцов, которые подключены к электронному документообороту. </aside> Вы можете получить электронные документы, если в ответе метода [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus) был один из статусов: - `FORMED` — акт сформирован успешно, - `CONFIRMED` — акт подписан Ozon, - `CONFIRMED_WITH_MISMATCH` — акт подписан Ozon с расхождениями.
     *
     * @tags FBS
     * @name PostingApiPostingFbsGetDigitalAct
     * @summary Получить электронный акт по перевозке
     * @request POST:/v2/posting/fbs/digital/act/get-pdf
     * @response `200` `PostingApiPostingFbsGetDigitalActData` Электронный акт
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsGetDigitalAct = (data: V2PostingFBSGetDigitalActRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsGetDigitalActData, PostingApiPostingFbsGetDigitalActError>({
            path: `/v2/posting/fbs/digital/act/get-pdf`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning">Если вы работаете по схеме rFBS, этикетки для отправлений печатать не нужно.</aside> Генерирует PDF-файл с этикетками для указанных отправлений. В одном запросе можно передать не больше 20 идентификаторов. Если хотя бы для одного отправления возникнет ошибка, этикетки не будут подготовлены для всех отправлений в запросе. Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа. Ошибка `The next postings aren't ready` означает, что этикетки ещё не готовы, повторите запрос позднее.
     *
     * @tags FBS
     * @name PostingApiPostingFbsPackageLabel
     * @summary Напечатать этикетку
     * @request POST:/v2/posting/fbs/package-label
     * @response `200` `PostingApiPostingFbsPackageLabelData` Маркировка напечатана
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsPackageLabel = (data: PostingPostingFBSPackageLabelRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsPackageLabelData, PostingApiPostingFbsPackageLabelError>({
            path: `/v2/posting/fbs/package-label`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод создает этикетки для грузового места.
     *
     * @tags FBS
     * @name PostingApiPostingFbsActGetContainerLabels
     * @summary Этикетки для грузового места
     * @request POST:/v2/posting/fbs/act/get-container-labels
     * @response `200` `PostingApiPostingFbsActGetContainerLabelsData` Этикетки для грузового места
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsActGetContainerLabels = (
        data: PostingPostingFBSActGetContainerLabelsRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            PostingApiPostingFbsActGetContainerLabelsData,
            PostingApiPostingFbsActGetContainerLabelsError
        >({
            path: `/v2/posting/fbs/act/get-container-labels`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Если отправление передано в доставку, но не просканировано в сортировочном центре, можно открыть спор. Открытый спор переведёт отправление в статус `arbitration`.
     *
     * @tags FBS
     * @name PostingApiMoveFbsPostingToArbitration
     * @summary Открыть спор по отправлению
     * @request POST:/v2/posting/fbs/arbitration
     * @response `200` `PostingApiMoveFbsPostingToArbitrationData` Открыт спор по отправлению
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiMoveFbsPostingToArbitration = (data: PostingMovePostingRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiMoveFbsPostingToArbitrationData, PostingApiMoveFbsPostingToArbitrationError>({
            path: `/v2/posting/fbs/arbitration`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Передает спорные заказы к отгрузке. Статус отправления изменится на `awaiting_deliver`.
     *
     * @tags FBS
     * @name PostingApiMoveFbsPostingToAwaitingDelivery
     * @summary Передать отправление к отгрузке
     * @request POST:/v2/posting/fbs/awaiting-delivery
     * @response `200` `PostingApiMoveFbsPostingToAwaitingDeliveryData` Отправление передано к отгрузке
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiMoveFbsPostingToAwaitingDelivery = (data: PostingMovePostingRequest, params: RequestParams = {}) =>
        this.http.request<
            PostingApiMoveFbsPostingToAwaitingDeliveryData,
            PostingApiMoveFbsPostingToAwaitingDeliveryError
        >({
            path: `/v2/posting/fbs/awaiting-delivery`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список причин отмены для всех отправлений.
     *
     * @tags FBS
     * @name PostingApiGetPostingFbsCancelReasonList
     * @summary Причины отмены отправлений
     * @request POST:/v2/posting/fbs/cancel-reason/list
     * @response `200` `PostingApiGetPostingFbsCancelReasonListData` Причины отмены отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetPostingFbsCancelReasonList = (params: RequestParams = {}) =>
        this.http.request<PostingApiGetPostingFbsCancelReasonListData, PostingApiGetPostingFbsCancelReasonListError>({
            path: `/v2/posting/fbs/cancel-reason/list`,
            method: 'POST',
            ...params,
        });
    /**
     * @description Меняет статус отправления на `cancelled`. Если вы используете схему rFBS, у вас доступны следующие идентификаторы причин отмены — `cancel_reason_id`: - `352` — товара нет в наличии; - `400` — остался только бракованный товар; - `401` — отмена из арбитража; - `402` — другая причина; - `665` — покупатель не забрал заказ; - `666` — отсутствует доставка в данный регион; - `667` — заказ утерян службой доставки. Для условно-доставленных заказов доступны только 3 последние причины. Если значение параметра `cancel_reason_id` — 402, заполните поле `cancel_reason_message`.
     *
     * @tags FBS
     * @name PostingApiCancelFbsPosting
     * @summary Отменить отправление
     * @request POST:/v2/posting/fbs/cancel
     * @response `200` `PostingApiCancelFbsPostingData` Отправление отменено
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiCancelFbsPosting = (data: PostingCancelFbsPostingRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiCancelFbsPostingData, PostingApiCancelFbsPostingError>({
            path: `/v2/posting/fbs/cancel`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags FBS
     * @name PostingApiChangeFbsPostingProduct
     * @summary Добавить вес для весовых товаров в отправлении
     * @request POST:/v2/posting/fbs/product/change
     * @response `200` `PostingApiChangeFbsPostingProductData` Данные добавлены
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiChangeFbsPostingProduct = (data: PostingPostingProductChangeRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiChangeFbsPostingProductData, PostingApiChangeFbsPostingProductError>({
            path: `/v2/posting/fbs/product/change`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Используйте метод, если вы не можете отправить часть продуктов из отправления. Идентификаторы причин отмены `cancel_reason_id` при работе по схеме rFBS: - `352` — товара нет в наличии; - `400` — остался только бракованный товар; - `401` — отмена из арбитража; - `402` — другая причина; - `665` — покупатель не забрал заказ; - `666` — нет доставки в этот регион; - `667` — заказ утерян службой доставки. Для условно-доставленных заказов доступны только 3 последние причины. Если значение параметра `cancel_reason_id` — 402, заполните поле `cancel_reason_message`.
     *
     * @tags FBS
     * @name PostingApiCancelFbsPostingProduct
     * @summary Отменить отправку некоторых товаров в отправлении
     * @request POST:/v2/posting/fbs/product/cancel
     * @response `200` `PostingApiCancelFbsPostingProductData` Отправка отменена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiCancelFbsPostingProduct = (data: PostingPostingProductCancelRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiCancelFbsPostingProductData, PostingApiCancelFbsPostingProductError>({
            path: `/v2/posting/fbs/product/cancel`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список актов по отгрузкам с возможностью отфильтровать отгрузки по периоду, статусу и типу интеграции.
     *
     * @tags FBS
     * @name PostingApiFbsActList
     * @summary Список актов по отгрузкам
     * @request POST:/v2/posting/fbs/act/list
     * @response `200` `PostingApiFbsActListData` Список актов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiFbsActList = (data: V2PostingFBSActListRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiFbsActListData, PostingApiFbsActListError>({
            path: `/v2/posting/fbs/act/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Подписывает документы по отгрузке в системе электронных документов Ozon логистики.
     *
     * @tags FBS
     * @name PostingApiDigitalActDocumentSign
     * @summary Подписать документы по отгрузке
     * @request POST:/v2/posting/fbs/digital/act/document-sign
     * @response `200` `PostingApiDigitalActDocumentSignData` Результат подписания
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiDigitalActDocumentSign = (data: V2PostingFBSDigitalActDocumentSignRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiDigitalActDocumentSignData, PostingApiDigitalActDocumentSignError>({
            path: `/v2/posting/fbs/digital/act/document-sign`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список отправлений в акте по его идентификатору.
     *
     * @tags FBS
     * @name PostingApiActPostingList
     * @summary Список отправлений в акте
     * @request POST:/v2/posting/fbs/act/get-postings
     * @response `200` `PostingApiActPostingListData` Список отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiActPostingList = (data: V2PostingFBSActGetPostingsRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiActPostingListData, PostingApiActPostingListError>({
            path: `/v2/posting/fbs/act/get-postings`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Перевести отправление в статус «Доставляется», если используется сторонняя служба доставки.
     *
     * @tags FBS
     * @name PostingApiFbsPostingDelivering
     * @summary Изменить статус на «Доставляется»
     * @request POST:/v2/fbs/posting/delivering
     * @response `200` `PostingApiFbsPostingDeliveringData` Статус изменён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiFbsPostingDelivering = (data: PostingFbsPostingDeliveringRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiFbsPostingDeliveringData, PostingApiFbsPostingDeliveringError>({
            path: `/v2/fbs/posting/delivering`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Добавить трек-номера к отправлениям.
     *
     * @tags FBS
     * @name PostingApiFbsPostingTrackingNumberSet
     * @summary Добавить трек-номера
     * @request POST:/v2/fbs/posting/tracking-number/set
     * @response `200` `PostingApiFbsPostingTrackingNumberSetData` Трек-номер добавлен
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiFbsPostingTrackingNumberSet = (
        data: PostingFbsPostingTrackingNumberSetRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<PostingApiFbsPostingTrackingNumberSetData, PostingApiFbsPostingTrackingNumberSetError>({
            path: `/v2/fbs/posting/tracking-number/set`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Перевести отправление в статус «Последняя миля», если используется сторонняя служба доставки.
     *
     * @tags FBS
     * @name PostingApiFbsPostingLastMile
     * @summary Изменить статус на «Последняя миля»
     * @request POST:/v2/fbs/posting/last-mile
     * @response `200` `PostingApiFbsPostingLastMileData` Статус изменён
     * @response `400` `RpcStatus` Invalid parameter
     * @response `403` `RpcStatus` Access denied
     * @response `404` `RpcStatus` Response not found
     * @response `409` `RpcStatus` Request conflict
     * @response `500` `RpcStatus` Internal server error
     */
    postingApiFbsPostingLastMile = (data: PostingFbsPostingLastMileRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiFbsPostingLastMileData, PostingApiFbsPostingLastMileError>({
            path: `/v2/fbs/posting/last-mile`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Перевести отправление в статус «Доставлено», если используется сторонняя служба доставки.
     *
     * @tags FBS
     * @name PostingApiFbsPostingDelivered
     * @summary Изменить статус на «Доставлено»
     * @request POST:/v2/fbs/posting/delivered
     * @response `200` `PostingApiFbsPostingDeliveredData` Статус изменён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiFbsPostingDelivered = (data: PostingFbsPostingDeliveredRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiFbsPostingDeliveredData, PostingApiFbsPostingDeliveredError>({
            path: `/v2/fbs/posting/delivered`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Перевести отправление в статус «Отправлено продавцом». Статус доступен только продавцам с первой милей, продающим из-за рубежа.
     *
     * @tags FBS
     * @name PostingApiFbsPostingSentbyseller
     * @summary Изменить статус на «Отправлено продавцом»
     * @request POST:/v2/fbs/posting/sent-by-seller
     * @response `200` `PostingApiFbsPostingSentbysellerData` Статус изменён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiFbsPostingSentbyseller = (data: PostingFbsPostingSentbysellerRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiFbsPostingSentbysellerData, PostingApiFbsPostingSentbysellerError>({
            path: `/v2/fbs/posting/sent-by-seller`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> 1 апреля 2023 года мы отключим этот метод. Переключитесь на метод <a href="#operation/ReturnsAPI_GetReturnsCompanyFbo">/v3/returns/company/fbo</a>. </aside> Метод для получения информации о возвращённых товарах, которые продаются со склада Ozon.
     *
     * @tags ReturnsAPI
     * @name ReturnsApiGetReturnsCompanyFboV2
     * @summary Получить информацию о возвратах FBO (версия 2)
     * @request POST:/v2/returns/company/fbo
     * @deprecated
     * @response `200` `ReturnsApiGetReturnsCompanyFboV2Data` Информация о возвратах
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    returnsApiGetReturnsCompanyFboV2 = (data: ReturnsGetReturnsCompanyFboRequest, params: RequestParams = {}) =>
        this.http.request<ReturnsApiGetReturnsCompanyFboV2Data, ReturnsApiGetReturnsCompanyFboV2Error>({
            path: `/v2/returns/company/fbo`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения информации о возвращённых товарах, которые продаются со склада продавца. <aside class="warning"> 1 апреля 2023 года мы отключим этот метод. Переключитесь на метод <a href="#operation/ReturnsAPI_GetReturnsCompanyFBSv3">/v3/returns/company/fbs</a>. </aside>
     *
     * @tags ReturnsAPI
     * @name ReturnsApiGetReturnsCompanyFbs
     * @summary Получить информацию о возвратах FBS (версия 2)
     * @request POST:/v2/returns/company/fbs
     * @deprecated
     * @response `200` `ReturnsApiGetReturnsCompanyFbsData` Информация о возвратах
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    returnsApiGetReturnsCompanyFbs = (data: ReturnsGetReturnsCompanyFBSRequest, params: RequestParams = {}) =>
        this.http.request<ReturnsApiGetReturnsCompanyFbsData, ReturnsApiGetReturnsCompanyFbsError>({
            path: `/v2/returns/company/fbs`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает информацию о чатах по указанным фильтрам.
     *
     * @tags ChatAPI
     * @name ChatApiChatListV2
     * @summary Список чатов
     * @request POST:/v2/chat/list
     * @response `200` `ChatApiChatListV2Data` Список чатов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatListV2 = (data: ChatList, params: RequestParams = {}) =>
        this.http.request<ChatApiChatListV2Data, ChatApiChatListV2Error>({
            path: `/v2/chat/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ChatAPI
     * @name ChatApiChatHistoryV2
     * @summary История чата
     * @request POST:/v2/chat/history
     * @response `200` `ChatApiChatHistoryV2Data` История чата
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatHistoryV2 = (data: ChatHistory, params: RequestParams = {}) =>
        this.http.request<ChatApiChatHistoryV2Data, ChatApiChatHistoryV2Error>({
            path: `/v2/chat/history`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для отметки выбранного сообщения и сообщений до него прочитанными.
     *
     * @tags ChatAPI
     * @name ChatApiChatReadV2
     * @summary Отметить сообщения как прочитанные
     * @request POST:/v2/chat/read
     * @response `200` `ChatApiChatReadV2Data` Успешно
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatReadV2 = (data: ChatRead, params: RequestParams = {}) =>
        this.http.request<ChatApiChatReadV2Data, ChatApiChatReadV2Error>({
            path: `/v2/chat/read`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    analyticsApiAnalyticsGetStockOnWarehousesV2 = (
        data: AnalyticsStockOnWarehouseRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            AnalyticsApiAnalyticsGetStockOnWarehousesV2Data,
            AnalyticsApiAnalyticsGetStockOnWarehousesV2Error
        >({
            path: `/v2/analytics/stock_on_warehouses`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}
