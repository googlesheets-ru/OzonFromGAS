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
    ActionsApiActivateHotSalesProductsData,
    ActionsApiActivateHotSalesProductsError,
    ActionsApiDeactivateHotSalesProductsData,
    ActionsApiDeactivateHotSalesProductsError,
    ActionsApiGetHotSalesListData,
    ActionsApiGetHotSalesListError,
    ActionsApiGetHotSalesProductsData,
    ActionsApiGetHotSalesProductsError,
    AnalyticsAnalyticsGetDataRequest,
    AnalyticsAnalyticsGetStockOnWarehousesRequest,
    AnalyticsApiAnalyticsGetDataData,
    AnalyticsApiAnalyticsGetDataError,
    AnalyticsApiAnalyticsGetStockOnWarehousesData,
    AnalyticsApiAnalyticsGetStockOnWarehousesError,
    AnalyticsApiAnalyticsItemTurnoverDataV3Data,
    AnalyticsApiAnalyticsItemTurnoverDataV3Error,
    BrandApiBrandCompanyCertificationListData,
    BrandApiBrandCompanyCertificationListError,
    BrandBrandCompanyCertificationListRequest,
    CancellationApiConditionalCancellationApproveData,
    CancellationApiConditionalCancellationApproveError,
    CancellationApiConditionalCancellationRejectData,
    CancellationApiConditionalCancellationRejectError,
    CancellationApiGetConditionalCancellationData,
    CancellationApiGetConditionalCancellationError,
    CancellationApiGetConditionalCancellationListData,
    CancellationApiGetConditionalCancellationListError,
    CertificateDeleteData,
    CertificateDeleteError,
    CertificateInfoData,
    CertificateInfoError,
    CertificateListData,
    CertificateListError,
    CertificateProductsListData,
    CertificateProductsListError,
    CertificateStatusListData,
    CertificateStatusListError,
    CertificateUnbindData,
    CertificateUnbindError,
    ChatApiChatHistoryData,
    ChatApiChatHistoryError,
    ChatApiChatListData,
    ChatApiChatListError,
    ChatApiChatSendFileData,
    ChatApiChatSendFileError,
    ChatApiChatSendMessageData,
    ChatApiChatSendMessageError,
    ChatApiChatStartData,
    ChatApiChatStartError,
    ChatApiChatUpdatesData,
    ChatApiChatUpdatesError,
    ChatChatHistoryRequest,
    ChatChatListRequest,
    ChatChatSendFileRequest,
    ChatChatSendMessageRequest,
    ChatChatStartRequest,
    ChatChatUpdatesRequest,
    FinanceApiFinanceCashFlowStatementListData,
    FinanceApiFinanceCashFlowStatementListError,
    FinanceApiGetRealizationReportData,
    FinanceApiGetRealizationReportError,
    FinanceGetRealizationReportRequest,
    InvoiceCreateData,
    InvoiceCreateError,
    InvoiceDeleteData,
    InvoiceDeleteError,
    InvoiceGetData,
    InvoiceGetError,
    PolygonApiBindPolygonData,
    PolygonApiBindPolygonError,
    PolygonApiCreatePolygonData,
    PolygonApiCreatePolygonError,
    PolygonApiDeletePolygonData,
    PolygonApiDeletePolygonError,
    Polygonv1PolygonBindRequest,
    Polygonv1PolygonCreateRequest,
    Polygonv1PolygonDeleteRequest,
    PostingApiCreateLabelBatchData,
    PostingApiCreateLabelBatchError,
    PostingApiGetCarriageAvailableListData,
    PostingApiGetCarriageAvailableListError,
    PostingApiGetEtgbData,
    PostingApiGetEtgbError,
    PostingApiGetLabelBatchData,
    PostingApiGetLabelBatchError,
    PostingApiGetPostingFbsCancelReasonV1Data,
    PostingApiGetPostingFbsCancelReasonV1Error,
    PostingApiGetRestrictionsData,
    PostingApiGetRestrictionsError,
    PostingApiPostingTimeslotChangeRestrictionsData,
    PostingApiPostingTimeslotChangeRestrictionsError,
    PostingApiSetPostingTimeslotData,
    PostingApiSetPostingTimeslotError,
    PostingCancelReasonRequest,
    Postingv1GetCarriageAvailableListRequest,
    ProductApiGetGeoRestrictionsV1Data,
    ProductApiGetGeoRestrictionsV1Error,
    ProductApiGetImportProductsInfoData,
    ProductApiGetImportProductsInfoError,
    ProductApiGetProductInfoDescriptionData,
    ProductApiGetProductInfoDescriptionError,
    ProductApiGetProductInfoDiscountedData,
    ProductApiGetProductInfoDiscountedError,
    ProductApiGetProductRatingBySkuData,
    ProductApiGetProductRatingBySkuError,
    ProductApiImportProductsBySkuData,
    ProductApiImportProductsBySkuError,
    ProductApiImportProductsPricesData,
    ProductApiImportProductsPricesError,
    ProductApiImportProductsStocksData,
    ProductApiImportProductsStocksError,
    ProductApiProductArchiveData,
    ProductApiProductArchiveError,
    ProductApiProductCertificateAccordanceTypesData,
    ProductApiProductCertificateAccordanceTypesError,
    ProductApiProductCertificateBindData,
    ProductApiProductCertificateBindError,
    ProductApiProductCertificateCreateData,
    ProductApiProductCertificateCreateError,
    ProductApiProductCertificateCreatePayload,
    ProductApiProductCertificateTypesData,
    ProductApiProductCertificateTypesError,
    ProductApiProductCertificationListData,
    ProductApiProductCertificationListError,
    ProductApiProductImportPicturesData,
    ProductApiProductImportPicturesError,
    ProductApiProductInfoPicturesData,
    ProductApiProductInfoPicturesError,
    ProductApiProductStocksByWarehouseFbsData,
    ProductApiProductStocksByWarehouseFbsError,
    ProductApiProductUnarchiveData,
    ProductApiProductUnarchiveError,
    ProductApiProductUpdateDiscountData,
    ProductApiProductUpdateDiscountError,
    ProductApiProductUpdateOfferIdData,
    ProductApiProductUpdateOfferIdError,
    ProductApiUploadDigitalCodeData,
    ProductApiUploadDigitalCodeError,
    ProductApiUploadDigitalCodeInfoData,
    ProductApiUploadDigitalCodeInfoError,
    ProductGetImportProductsInfoRequest,
    ProductGetProductInfoDescriptionRequest,
    ProductImportProductsBySKURequest,
    ProductImportProductsPricesRequest,
    ProductImportProductsStocksRequest,
    ProductProductArchiveRequest,
    ProductProductCertificateBindRequest,
    ProductProductCertificationListRequest,
    ProductProductUnarchiveRequest,
    ProductStatusListData,
    ProductStatusListError,
    Productsv1GetProductInfoStocksByWarehouseFbsRequest,
    Productv1ProductImportPicturesRequest,
    Productv1ProductInfoPicturesRequest,
    Productv2GetGeoRestrictionsByFilterRequest,
    PromosCandidatesData,
    PromosCandidatesError,
    PromosData,
    PromosError,
    PromosProductsActivateData,
    PromosProductsActivateError,
    PromosProductsData,
    PromosProductsDeactivateData,
    PromosProductsDeactivateError,
    PromosProductsError,
    PromosTaskApproveData,
    PromosTaskApproveError,
    PromosTaskDeclineData,
    PromosTaskDeclineError,
    PromosTaskListData,
    PromosTaskListError,
    RatingApiRatingHistoryV1Data,
    RatingApiRatingHistoryV1Error,
    RatingApiRatingSummaryV1Data,
    RatingApiRatingSummaryV1Error,
    RejectionReasonsListData,
    RejectionReasonsListError,
    ReportApiCreateCompanyFinanceReportData,
    ReportApiCreateCompanyFinanceReportError,
    ReportApiCreateCompanyPostingsReportData,
    ReportApiCreateCompanyPostingsReportError,
    ReportApiCreateCompanyProductsPricesReportData,
    ReportApiCreateCompanyProductsPricesReportError,
    ReportApiCreateCompanyProductsReportData,
    ReportApiCreateCompanyProductsReportError,
    ReportApiCreateCompanyReturnsReportData,
    ReportApiCreateCompanyReturnsReportError,
    ReportApiCreateCompanyStockReportData,
    ReportApiCreateCompanyStockReportError,
    ReportApiCreateCompanyTransactionsReportData,
    ReportApiCreateCompanyTransactionsReportError,
    ReportApiCreateDiscountedReportData,
    ReportApiCreateDiscountedReportError,
    ReportApiCreateProductsMovementReportData,
    ReportApiCreateProductsMovementReportError,
    ReportApiDiscountedReportInfoData,
    ReportApiDiscountedReportInfoError,
    ReportApiDiscountedReportListData,
    ReportApiDiscountedReportListError,
    ReportApiReportInfoData,
    ReportApiReportInfoError,
    ReportApiReportListData,
    ReportApiReportListError,
    ReportCreateCompanyFinanceReportRequest,
    ReportCreateCompanyPostingsReportRequest,
    ReportCreateCompanyProductsPricesReportRequest,
    ReportCreateCompanyProductsReportRequest,
    ReportCreateCompanyReturnsReportRequest,
    ReportCreateCompanyStockReportRequest,
    ReportCreateCompanyTransactionsReportRequest,
    ReportCreateDiscountedRequest,
    ReportCreateProductsMovementReportRequest,
    ReportDiscountedInfoRequest,
    ReportDiscountedListRequest,
    ReportReportInfoRequest,
    ReportReportListRequest,
    SellerApiActivateProductV1Request,
    SellerApiGetSellerProductV1Request,
    SellerApiProductIDsV1Request,
    V1ActivateHotSalesProductsRequest,
    V1AnalyticsItemTurnoverDataV3Request,
    V1ApproveDiscountTasksRequest,
    V1ConditionalCancellationMoveRequest,
    V1CreateLabelBatchRequest,
    V1DeactivateHotSalesProductsRequest,
    V1DeclineDiscountTasksRequest,
    V1Empty,
    V1GetConditionalCancellationListRequest,
    V1GetConditionalCancellationRequest,
    V1GetDiscountTaskListRequest,
    V1GetEtgbRequest,
    V1GetHotSalesListRequest,
    V1GetHotSalesProductsRequest,
    V1GetLabelBatchRequest,
    V1GetProductInfoDiscountedRequest,
    V1GetProductRatingBySkuRequest,
    V1GetRestrictionsRequest,
    V1InvoiceCreateOrUpdateRequest,
    V1InvoiceDeleteRequest,
    V1InvoiceGetRequest,
    V1PostingFbsTimeslotChangeRestrictionsRequest,
    V1PostingFbsTimeslotSetRequest,
    V1ProductCertificateDeleteRequest,
    V1ProductCertificateInfoRequest,
    V1ProductCertificateListRequest,
    V1ProductCertificateProductsListRequest,
    V1ProductCertificateProductStatusListRequest,
    V1ProductCertificateRejectionReasonsListRequest,
    V1ProductCertificateStatusListRequest,
    V1ProductCertificateUnbindRequest,
    V1ProductUpdateDiscountRequest,
    V1ProductUpdateOfferIdRequest,
    V1ProductUploadDigitalCodesRequest,
    V1ProductUploadDigitalCodesRequestInfo,
    V1RatingHistoryV1Request,
    V3FinanceCashFlowStatementListRequest,
    WarehouseApiDeliveryMethodListData,
    WarehouseApiDeliveryMethodListError,
    WarehouseApiWarehouseListData,
    WarehouseApiWarehouseListError,
    WarehouseDeliveryMethodListRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V1<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

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
    productApiGetImportProductsInfo = (data: ProductGetImportProductsInfoRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetImportProductsInfoData, ProductApiGetImportProductsInfoError>({
            path: `/v1/product/import/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Создаёт товар по указанному Ozon ID. Количество товаров не ограничено. Обновить товар по Ozon ID нельзя.
     *
     * @tags ProductAPI
     * @name ProductApiImportProductsBySku
     * @summary Создать товар по Ozon ID
     * @request POST:/v1/product/import-by-sku
     * @response `200` `ProductApiImportProductsBySkuData` Товар создан
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiImportProductsBySku = (data: ProductImportProductsBySKURequest, params: RequestParams = {}) =>
        this.http.request<ProductApiImportProductsBySkuData, ProductApiImportProductsBySkuError>({
            path: `/v1/product/import-by-sku`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для загрузки или обновления изображений товара. При каждом вызове метода передавайте все изображения, которые должны быть на карточке товара. Например, если вы вызвали метод и загрузили 10 изображений, а затем вызвали метод второй раз и загрузили ещё одно, то все 10 предыдущих сотрутся. Для загрузки передайте адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Главным будет первое изображение в массиве. Для каждого товара вы можете загрузить до 15 изображений. Для загрузки изображений 360 используйте поле `images360`, для загрузки маркетингового цвета — `color_image`. Если вы хотите изменить состав или порядок изображений, получите информацию с помощью методов [/v2/product/info](#operation/ProductAPI_GetProductInfoV2) или [/v2/product/info/list](#operation/ProductAPI_GetProductInfoListV2) — в них отображается текущий порядок и состав изображений. Скопируйте данные полей `images`, `images360`, `color_image`, измените и дополните состав или порядок в соответствии с необходимостью.
     *
     * @tags ProductAPI
     * @name ProductApiProductImportPictures
     * @summary Загрузить или обновить изображения товара
     * @request POST:/v1/product/pictures/import
     * @response `200` `ProductApiProductImportPicturesData` Предварительный результат работы метода
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductImportPictures = (data: Productv1ProductImportPicturesRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductImportPicturesData, ProductApiProductImportPicturesError>({
            path: `/v1/product/pictures/import`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ProductAPI
     * @name ProductApiProductInfoPictures
     * @summary Проверить статус загрузки изображений товара
     * @request POST:/v1/product/pictures/info
     * @response `200` `ProductApiProductInfoPicturesData` Статус загрузки изображений товара
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductInfoPictures = (data: Productv1ProductInfoPicturesRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductInfoPicturesData, ProductApiProductInfoPicturesError>({
            path: `/v1/product/pictures/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения контент-рейтинга товаров, а также рекомендаций по его увеличению. [Подробнее о контент-рейтинге](https://seller-edu.ozon.ru/docs/work-with-goods/content-rating.html)
     *
     * @tags ProductAPI
     * @name ProductApiGetProductRatingBySku
     * @summary Получить контент-рейтинг товаров по SKU
     * @request POST:/v1/product/rating-by-sku
     * @response `200` `ProductApiGetProductRatingBySkuData` Контент-рейтинг товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductRatingBySku = (data: V1GetProductRatingBySkuRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductRatingBySkuData, ProductApiGetProductRatingBySkuError>({
            path: `/v1/product/rating-by-sku`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ProductAPI
     * @name ProductApiGetProductInfoDescription
     * @summary Получить описание товара
     * @request POST:/v1/product/info/description
     * @response `200` `ProductApiGetProductInfoDescriptionData` Описание товара
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoDescription = (data: ProductGetProductInfoDescriptionRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoDescriptionData, ProductApiGetProductInfoDescriptionError>({
            path: `/v1/product/info/description`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    productApiProductUpdateOfferId = (data: V1ProductUpdateOfferIdRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductUpdateOfferIdData, ProductApiProductUpdateOfferIdError>({
            path: `/v1/product/update/offer-id`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ProductAPI
     * @name ProductApiProductArchive
     * @summary Перенести товар в архив
     * @request POST:/v1/product/archive
     * @response `200` `ProductApiProductArchiveData` Товар перенесён в архив
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductArchive = (data: ProductProductArchiveRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductArchiveData, ProductApiProductArchiveError>({
            path: `/v1/product/archive`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ProductAPI
     * @name ProductApiProductUnarchive
     * @summary Вернуть товар из архива
     * @request POST:/v1/product/unarchive
     * @response `200` `ProductApiProductUnarchiveData` Товар из архива возвращён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductUnarchive = (data: ProductProductUnarchiveRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductUnarchiveData, ProductApiProductUnarchiveError>({
            path: `/v1/product/unarchive`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ProductAPI
     * @name ProductApiGetGeoRestrictionsV1
     * @summary Получить список геоограничений для услуг
     * @request POST:/v1/products/geo-restrictions-catalog-by-filter
     * @response `200` `ProductApiGetGeoRestrictionsV1Data` Список геоограничений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetGeoRestrictionsV1 = (data: Productv2GetGeoRestrictionsByFilterRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetGeoRestrictionsV1Data, ProductApiGetGeoRestrictionsV1Error>({
            path: `/v1/products/geo-restrictions-catalog-by-filter`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Загрузите коды активации, если вы загружаете цифровые товары или услуги. Код активации привязывается к карточке цифрового товара.
     *
     * @tags ProductAPI
     * @name ProductApiUploadDigitalCode
     * @summary Загрузить коды активации для услуг и цифровых товаров
     * @request POST:/v1/product/upload_digital_codes
     * @response `200` `ProductApiUploadDigitalCodeData` Идентификатор задачи на загрузку кодов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiUploadDigitalCode = (data: V1ProductUploadDigitalCodesRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiUploadDigitalCodeData, ProductApiUploadDigitalCodeError>({
            path: `/v1/product/upload_digital_codes`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения статуса загрузки кодов активации для услуг и цифровых товаров.
     *
     * @tags ProductAPI
     * @name ProductApiUploadDigitalCodeInfo
     * @summary Статус загрузки кодов активации
     * @request POST:/v1/product/upload_digital_codes/info
     * @response `200` `ProductApiUploadDigitalCodeInfoData` Статус задачи на загрузку кодов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiUploadDigitalCodeInfo = (data: V1ProductUploadDigitalCodesRequestInfo, params: RequestParams = {}) =>
        this.http.request<ProductApiUploadDigitalCodeInfoData, ProductApiUploadDigitalCodeInfoError>({
            path: `/v1/product/upload_digital_codes/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Позволяет изменить информацию о количестве товара в наличии. Метод используется только для FBS и rFBS складов. За один запрос можно изменить наличие для 100 товаров. В минуту можно отправить до 80 запросов. Задать наличие товара возможно только после того, как его статус сменится на `processed`.
     *
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
    productApiImportProductsStocks = (data: ProductImportProductsStocksRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiImportProductsStocksData, ProductApiImportProductsStocksError>({
            path: `/v1/product/import/stocks`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags Prices&StocksAPI
     * @name ProductApiProductStocksByWarehouseFbs
     * @summary Информация об остатках на складах продавца (FBS и rFBS)
     * @request POST:/v1/product/info/stocks-by-warehouse/fbs
     * @response `200` `ProductApiProductStocksByWarehouseFbsData` Количество товаров на складах FBS и rFBS
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductStocksByWarehouseFbs = (
        data: Productsv1GetProductInfoStocksByWarehouseFbsRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<ProductApiProductStocksByWarehouseFbsData, ProductApiProductStocksByWarehouseFbsError>({
            path: `/v1/product/info/stocks-by-warehouse/fbs`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Позволяет изменить цену одного или нескольких товаров. За один запрос можно изменить цены для 1000 товаров. Чтобы сбросить `old_price` или `premium_price` — поставьте `0` у этих параметров. Новая цена должна отличаться от старой минимум на 5%.
     *
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
     */
    productApiImportProductsPrices = (data: ProductImportProductsPricesRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiImportProductsPricesData, ProductApiImportProductsPricesError>({
            path: `/v1/product/import/prices`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения информации о состоянии и дефектах уценённого товара по его SKU. Также метод возвращает SKU основного товара.
     *
     * @tags Prices&StocksAPI
     * @name ProductApiGetProductInfoDiscounted
     * @summary Узнать информацию об уценке и основном товаре по SKU уценённого товара
     * @request POST:/v1/product/info/discounted
     * @response `200` `ProductApiGetProductInfoDiscountedData` Информация об уценке и основном товаре
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoDiscounted = (data: V1GetProductInfoDiscountedRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoDiscountedData, ProductApiGetProductInfoDiscountedError>({
            path: `/v1/product/info/discounted`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для установки размера скидки на уценённые товары, продающиеся по схеме FBS.
     *
     * @tags Prices&StocksAPI
     * @name ProductApiProductUpdateDiscount
     * @summary Установить скидку на уценённый товар
     * @request POST:/v1/product/update/discount
     * @response `200` `ProductApiProductUpdateDiscountData` Успешно
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductUpdateDiscount = (data: V1ProductUpdateDiscountRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductUpdateDiscountData, ProductApiProductUpdateDiscountError>({
            path: `/v1/product/update/discount`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка акций, в которых можно участвовать.
     *
     * @tags Promos
     * @name Promos
     * @summary Список акций
     * @request GET:/v1/actions
     * @response `200` `PromosData` Список акций
     * @response `default` `RpcStatus` Ошибка
     */
    promos = (params: RequestParams = {}) =>
        this.http.request<PromosData, PromosError>({
            path: `/v1/actions`,
            method: 'GET',
            ...params,
        });
    /**
     * @description Метод для получения списка товаров, которые могут участвовать в акции, по её идентификатору.
     *
     * @tags Promos
     * @name PromosCandidates
     * @summary Список доступных для акции товаров
     * @request POST:/v1/actions/candidates
     * @response `200` `PromosCandidatesData` Список товаров
     * @response `default` `RpcStatus` Ошибка
     */
    promosCandidates = (data: SellerApiGetSellerProductV1Request, params: RequestParams = {}) =>
        this.http.request<PromosCandidatesData, PromosCandidatesError>({
            path: `/v1/actions/candidates`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка товаров, участвующих в акции, по её идентификатору.
     *
     * @tags Promos
     * @name PromosProducts
     * @summary Список участвующих в акции товаров
     * @request POST:/v1/actions/products
     * @response `200` `PromosProductsData` Список товаров
     * @response `default` `RpcStatus` Ошибка
     */
    promosProducts = (data: SellerApiGetSellerProductV1Request, params: RequestParams = {}) =>
        this.http.request<PromosProductsData, PromosProductsError>({
            path: `/v1/actions/products`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для добавления товаров в доступную акцию.
     *
     * @tags Promos
     * @name PromosProductsActivate
     * @summary Добавить товар в акцию
     * @request POST:/v1/actions/products/activate
     * @response `200` `PromosProductsActivateData` Товар добавлен в акцию
     * @response `default` `RpcStatus` Ошибка
     */
    promosProductsActivate = (data: SellerApiActivateProductV1Request, params: RequestParams = {}) =>
        this.http.request<PromosProductsActivateData, PromosProductsActivateError>({
            path: `/v1/actions/products/activate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для удаления товаров из акции.
     *
     * @tags Promos
     * @name PromosProductsDeactivate
     * @summary Удалить товары из акции
     * @request POST:/v1/actions/products/deactivate
     * @response `200` `PromosProductsDeactivateData` Товары удалены из акции
     * @response `default` `RpcStatus` Ошибка
     */
    promosProductsDeactivate = (data: SellerApiProductIDsV1Request, params: RequestParams = {}) =>
        this.http.request<PromosProductsDeactivateData, PromosProductsDeactivateError>({
            path: `/v1/actions/products/deactivate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags Promos
     * @name ActionsApiGetHotSalesList
     * @summary Список доступных акций Hot Sale
     * @request POST:/v1/actions/hotsales/list
     * @response `200` `ActionsApiGetHotSalesListData` Список доступных акций Hot Sale
     * @response `default` `RpcStatus` Ошибка
     */
    actionsApiGetHotSalesList = (data: V1GetHotSalesListRequest, params: RequestParams = {}) =>
        this.http.request<ActionsApiGetHotSalesListData, ActionsApiGetHotSalesListError>({
            path: `/v1/actions/hotsales/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка товаров, которые могут участвовать или уже участвуют в акции Hot Sale.
     *
     * @tags Promos
     * @name ActionsApiGetHotSalesProducts
     * @summary Список товаров, которые участвуют в акции Hot Sale
     * @request POST:/v1/actions/hotsales/products
     * @response `200` `ActionsApiGetHotSalesProductsData` Товары, которые участвуют в Hot Sale
     * @response `default` `RpcStatus` Ошибка
     */
    actionsApiGetHotSalesProducts = (data: V1GetHotSalesProductsRequest, params: RequestParams = {}) =>
        this.http.request<ActionsApiGetHotSalesProductsData, ActionsApiGetHotSalesProductsError>({
            path: `/v1/actions/hotsales/products`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags Promos
     * @name ActionsApiActivateHotSalesProducts
     * @summary Добавить товары в акцию Hot Sale
     * @request POST:/v1/actions/hotsales/activate
     * @response `200` `ActionsApiActivateHotSalesProductsData` Товары в акции Hot Sale
     * @response `default` `RpcStatus` Ошибка
     */
    actionsApiActivateHotSalesProducts = (data: V1ActivateHotSalesProductsRequest, params: RequestParams = {}) =>
        this.http.request<ActionsApiActivateHotSalesProductsData, ActionsApiActivateHotSalesProductsError>({
            path: `/v1/actions/hotsales/activate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags Promos
     * @name ActionsApiDeactivateHotSalesProducts
     * @summary Удалить товары из акции Hot Sale
     * @request POST:/v1/actions/hotsales/deactivate
     * @response `200` `ActionsApiDeactivateHotSalesProductsData` Товары из акции Hot Sale удалены
     * @response `default` `RpcStatus` Ошибка
     */
    actionsApiDeactivateHotSalesProducts = (data: V1DeactivateHotSalesProductsRequest, params: RequestParams = {}) =>
        this.http.request<ActionsApiDeactivateHotSalesProductsData, ActionsApiDeactivateHotSalesProductsError>({
            path: `/v1/actions/hotsales/deactivate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка товаров, которые покупатели хотят купить со скидкой.
     *
     * @tags Promos
     * @name PromosTaskList
     * @summary Список заявок на скидку
     * @request POST:/v1/actions/discounts-task/list
     * @response `200` `PromosTaskListData` Список заявок
     * @response `default` `RpcStatus` Ошибка
     */
    promosTaskList = (data: V1GetDiscountTaskListRequest, params: RequestParams = {}) =>
        this.http.request<PromosTaskListData, PromosTaskListError>({
            path: `/v1/actions/discounts-task/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Вы можете согласовывать заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
     *
     * @tags Promos
     * @name PromosTaskApprove
     * @summary Согласовать заявку на скидку
     * @request POST:/v1/actions/discounts-task/approve
     * @response `200` `PromosTaskApproveData` Заявки согласованы
     * @response `default` `RpcStatus` Ошибка
     */
    promosTaskApprove = (data: V1ApproveDiscountTasksRequest, params: RequestParams = {}) =>
        this.http.request<PromosTaskApproveData, PromosTaskApproveError>({
            path: `/v1/actions/discounts-task/approve`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Вы можете отклонить заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
     *
     * @tags Promos
     * @name PromosTaskDecline
     * @summary Отклонить заявку на скидку
     * @request POST:/v1/actions/discounts-task/decline
     * @response `200` `PromosTaskDeclineData` Заявки отклонены
     * @response `default` `RpcStatus` Ошибка
     */
    promosTaskDecline = (data: V1DeclineDiscountTasksRequest, params: RequestParams = {}) =>
        this.http.request<PromosTaskDeclineData, PromosTaskDeclineError>({
            path: `/v1/actions/discounts-task/decline`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка брендов, для которых требуется предоставить сертификат. Ответ содержит список брендов, товары которых есть в вашем личном кабинете. Список брендов может изменяться, если Ozon получит требование от бренда предоставлять сертификат.
     *
     * @tags BrandAPI
     * @name BrandApiBrandCompanyCertificationList
     * @summary Список сертифицируемых брендов
     * @request POST:/v1/brand/company-certification/list
     * @response `200` `BrandApiBrandCompanyCertificationListData` Список брендов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    brandApiBrandCompanyCertificationList = (
        data: BrandBrandCompanyCertificationListRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<BrandApiBrandCompanyCertificationListData, BrandApiBrandCompanyCertificationListError>({
            path: `/v1/brand/company-certification/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name ProductApiProductCertificateAccordanceTypes
     * @summary Список типов соответствия требованиям (версия 1)
     * @request GET:/v1/product/certificate/accordance-types
     * @response `200` `ProductApiProductCertificateAccordanceTypesData` Cправочник типов соответствия требованиям
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductCertificateAccordanceTypes = (params: RequestParams = {}) =>
        this.http.request<
            ProductApiProductCertificateAccordanceTypesData,
            ProductApiProductCertificateAccordanceTypesError
        >({
            path: `/v1/product/certificate/accordance-types`,
            method: 'GET',
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name ProductApiProductCertificateTypes
     * @summary Справочник типов документов
     * @request GET:/v1/product/certificate/types
     * @response `200` `ProductApiProductCertificateTypesData` Справочник типов документов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductCertificateTypes = (params: RequestParams = {}) =>
        this.http.request<ProductApiProductCertificateTypesData, ProductApiProductCertificateTypesError>({
            path: `/v1/product/certificate/types`,
            method: 'GET',
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name ProductApiProductCertificationList
     * @summary Список сертифицируемых категорий
     * @request POST:/v1/product/certification/list
     * @response `200` `ProductApiProductCertificationListData` Список сертифицируемых категорий
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductCertificationList = (data: ProductProductCertificationListRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductCertificationListData, ProductApiProductCertificationListError>({
            path: `/v1/product/certification/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name ProductApiProductCertificateCreate
     * @summary Добавить сертификаты для товаров
     * @request POST:/v1/product/certificate/create
     * @response `200` `ProductApiProductCertificateCreateData` Идентификатор загруженного сертификата
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductCertificateCreate = (
        data: ProductApiProductCertificateCreatePayload,
        params: RequestParams = {},
    ) =>
        this.http.request<ProductApiProductCertificateCreateData, ProductApiProductCertificateCreateError>({
            path: `/v1/product/certificate/create`,
            method: 'POST',
            body: data,
            type: ContentType.FormData,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name ProductApiProductCertificateBind
     * @summary Привязать сертификат к товару
     * @request POST:/v1/product/certificate/bind
     * @response `200` `ProductApiProductCertificateBindData` Сертификат привязан к товару
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiProductCertificateBind = (data: ProductProductCertificateBindRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductCertificateBindData, ProductApiProductCertificateBindError>({
            path: `/v1/product/certificate/bind`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateDelete
     * @summary Удалить сертификат
     * @request POST:/v1/product/certificate/delete
     * @response `200` `CertificateDeleteData` Результат удаления сертификата
     * @response `default` `RpcStatus` Ошибка
     */
    certificateDelete = (data: V1ProductCertificateDeleteRequest, params: RequestParams = {}) =>
        this.http.request<CertificateDeleteData, CertificateDeleteError>({
            path: `/v1/product/certificate/delete`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateInfo
     * @summary Информация о сертификате
     * @request POST:/v1/product/certificate/info
     * @response `200` `CertificateInfoData` Информация о сертификате
     * @response `default` `RpcStatus` Ошибка
     */
    certificateInfo = (data: V1ProductCertificateInfoRequest, params: RequestParams = {}) =>
        this.http.request<CertificateInfoData, CertificateInfoError>({
            path: `/v1/product/certificate/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateList
     * @summary Список сертификатов
     * @request POST:/v1/product/certificate/list
     * @response `200` `CertificateListData` Список сертификатов
     * @response `default` `RpcStatus` Ошибка
     */
    certificateList = (data: V1ProductCertificateListRequest, params: RequestParams = {}) =>
        this.http.request<CertificateListData, CertificateListError>({
            path: `/v1/product/certificate/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка возможных статусов товаров при их привязке к сертификату.
     *
     * @tags CertificationAPI
     * @name ProductStatusList
     * @summary Список возможных статусов товаров
     * @request POST:/v1/product/certificate/product_status/list
     * @response `200` `ProductStatusListData` Список статусов товаров
     * @response `default` `RpcStatus` Ошибка
     */
    productStatusList = (data: V1ProductCertificateProductStatusListRequest, params: RequestParams = {}) =>
        this.http.request<ProductStatusListData, ProductStatusListError>({
            path: `/v1/product/certificate/product_status/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateProductsList
     * @summary Список товаров, привязанных к сертификату
     * @request POST:/v1/product/certificate/products/list
     * @response `200` `CertificateProductsListData` Список товаров
     * @response `default` `RpcStatus` Ошибка
     */
    certificateProductsList = (data: V1ProductCertificateProductsListRequest, params: RequestParams = {}) =>
        this.http.request<CertificateProductsListData, CertificateProductsListError>({
            path: `/v1/product/certificate/products/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateUnbind
     * @summary Отвязать товар от сертификата
     * @request POST:/v1/product/certificate/unbind
     * @response `200` `CertificateUnbindData` Товар отвязан от сертификата
     * @response `default` `RpcStatus` Ошибка
     */
    certificateUnbind = (data: V1ProductCertificateUnbindRequest, params: RequestParams = {}) =>
        this.http.request<CertificateUnbindData, CertificateUnbindError>({
            path: `/v1/product/certificate/unbind`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name RejectionReasonsList
     * @summary Возможные причины отклонения сертификата
     * @request POST:/v1/product/certificate/rejection_reasons/list
     * @response `200` `RejectionReasonsListData` Причины отклонения сертификата
     * @response `default` `RpcStatus` Ошибка
     */
    rejectionReasonsList = (data: V1ProductCertificateRejectionReasonsListRequest, params: RequestParams = {}) =>
        this.http.request<RejectionReasonsListData, RejectionReasonsListError>({
            path: `/v1/product/certificate/rejection_reasons/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags CertificationAPI
     * @name CertificateStatusList
     * @summary Возможные статусы сертификатов
     * @request POST:/v1/product/certificate/status/list
     * @response `200` `CertificateStatusListData` Возможные статусы сертификатов
     * @response `default` `RpcStatus` Ошибка
     */
    certificateStatusList = (data: V1ProductCertificateStatusListRequest, params: RequestParams = {}) =>
        this.http.request<CertificateStatusListData, CertificateStatusListError>({
            path: `/v1/product/certificate/status/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description В запросе не нужно указывать параметры. Ваша компания будет определена по `Client-ID`.
     *
     * @tags WarehouseAPI
     * @name WarehouseApiWarehouseList
     * @summary Список складов
     * @request POST:/v1/warehouse/list
     * @response `200` `WarehouseApiWarehouseListData` Список складов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    warehouseApiWarehouseList = (params: RequestParams = {}) =>
        this.http.request<WarehouseApiWarehouseListData, WarehouseApiWarehouseListError>({
            path: `/v1/warehouse/list`,
            method: 'POST',
            ...params,
        });
    /**
     * No description
     *
     * @tags WarehouseAPI
     * @name WarehouseApiDeliveryMethodList
     * @summary Список методов доставки склада
     * @request POST:/v1/delivery-method/list
     * @response `200` `WarehouseApiDeliveryMethodListData` Список методов склада
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    warehouseApiDeliveryMethodList = (data: WarehouseDeliveryMethodListRequest, params: RequestParams = {}) =>
        this.http.request<WarehouseApiDeliveryMethodListData, WarehouseApiDeliveryMethodListError>({
            path: `/v1/delivery-method/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Вы можете добавить полигон к методу доставки. Создайте полигон, получив его координаты на https://geojson.io: отметьте на карте минимум 3 точки и соедините их линиями.
     *
     * @tags PolygonAPI
     * @name PolygonApiCreatePolygon
     * @summary Создайте полигон доставки
     * @request POST:/v1/polygon/create
     * @response `200` `PolygonApiCreatePolygonData` Полигон создан
     * @response `400` `RpcStatusV1PolygonCreate` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    polygonApiCreatePolygon = (data: Polygonv1PolygonCreateRequest, params: RequestParams = {}) =>
        this.http.request<PolygonApiCreatePolygonData, PolygonApiCreatePolygonError>({
            path: `/v1/polygon/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags PolygonAPI
     * @name PolygonApiBindPolygon
     * @summary Свяжите метод доставки с полигоном доставки
     * @request POST:/v1/polygon/bind
     * @response `200` `PolygonApiBindPolygonData` Успешно
     * @response `400` `RpcStatusV1PolygonBind` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    polygonApiBindPolygon = (data: Polygonv1PolygonBindRequest, params: RequestParams = {}) =>
        this.http.request<PolygonApiBindPolygonData, PolygonApiBindPolygonError>({
            path: `/v1/polygon/bind`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags PolygonAPI
     * @name PolygonApiDeletePolygon
     * @summary Удалите полигон
     * @request POST:/v1/polygon/delete
     * @response `200` `PolygonApiDeletePolygonData` Успешно
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    polygonApiDeletePolygon = (data: Polygonv1PolygonDeleteRequest, params: RequestParams = {}) =>
        this.http.request<PolygonApiDeletePolygonData, PolygonApiDeletePolygonError>({
            path: `/v1/polygon/delete`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения габаритных, весовых и прочих ограничений пункта приёма по номеру отправления. Метод применим только для работы по схеме FBS.
     *
     * @tags FBS
     * @name PostingApiGetRestrictions
     * @summary Получить ограничения пункта приёма
     * @request POST:/v1/posting/fbs/restrictions
     * @response `200` `PostingApiGetRestrictionsData` Ограничения пункта приёма
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetRestrictions = (data: V1GetRestrictionsRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetRestrictionsData, PostingApiGetRestrictionsError>({
            path: `/v1/posting/fbs/restrictions`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения перевозок, для которых нужно распечатать акт приёма-передачи и транспортную накладную.
     *
     * @tags FBS
     * @name PostingApiGetCarriageAvailableList
     * @summary Список доступных перевозок
     * @request POST:/v1/posting/carriage-available/list
     * @response `200` `PostingApiGetCarriageAvailableListData` Список перевозок
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetCarriageAvailableList = (data: Postingv1GetCarriageAvailableListRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetCarriageAvailableListData, PostingApiGetCarriageAvailableListError>({
            path: `/v1/posting/carriage-available/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для создания задания на асинхронное формирование этикеток. Для получения этикеток, созданных в результате вызова метода, используйте [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch).
     *
     * @tags FBS
     * @name PostingApiCreateLabelBatch
     * @summary Создать задание на выгрузку этикеток
     * @request POST:/v1/posting/fbs/package-label/create
     * @response `200` `PostingApiCreateLabelBatchData` Идентификатор задания на формирование этикеток
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiCreateLabelBatch = (data: V1CreateLabelBatchRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiCreateLabelBatchData, PostingApiCreateLabelBatchError>({
            path: `/v1/posting/fbs/package-label/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения этикеток после вызова [/v1/posting/fbs/package-label/create](#operation/PostingAPI_CreateLabelBatch).
     *
     * @tags FBS
     * @name PostingApiGetLabelBatch
     * @summary Получить файл с этикетками
     * @request POST:/v1/posting/fbs/package-label/get
     * @response `200` `PostingApiGetLabelBatchData` Статус формирования этикеток или файл с ними
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetLabelBatch = (data: V1GetLabelBatchRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetLabelBatchData, PostingApiGetLabelBatchError>({
            path: `/v1/posting/fbs/package-label/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список причин отмены для конкретных отправлений.
     *
     * @tags FBS
     * @name PostingApiGetPostingFbsCancelReasonV1
     * @summary Причины отмены отправления
     * @request POST:/v1/posting/fbs/cancel-reason
     * @response `200` `PostingApiGetPostingFbsCancelReasonV1Data` Причины отмены отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetPostingFbsCancelReasonV1 = (data: PostingCancelReasonRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetPostingFbsCancelReasonV1Data, PostingApiGetPostingFbsCancelReasonV1Error>({
            path: `/v1/posting/fbs/cancel-reason`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения доступных дат для переноса доставки и количества доступных переносов.
     *
     * @tags FBS
     * @name PostingApiPostingTimeslotChangeRestrictions
     * @summary Доступные даты для переноса доставки
     * @request POST:/v1/posting/fbs/timeslot/change-restrictions
     * @response `200` `PostingApiPostingTimeslotChangeRestrictionsData` Доступные даты и количество
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingTimeslotChangeRestrictions = (
        data: V1PostingFbsTimeslotChangeRestrictionsRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            PostingApiPostingTimeslotChangeRestrictionsData,
            PostingApiPostingTimeslotChangeRestrictionsError
        >({
            path: `/v1/posting/fbs/timeslot/change-restrictions`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Вы можете изменить дату доставки отправления не больше двух раз.
     *
     * @tags FBS
     * @name PostingApiSetPostingTimeslot
     * @summary Перенести дату доставки
     * @request POST:/v1/posting/fbs/timeslot/set
     * @response `200` `PostingApiSetPostingTimeslotData` Результат запроса
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiSetPostingTimeslot = (data: V1PostingFbsTimeslotSetRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiSetPostingTimeslotData, PostingApiSetPostingTimeslotError>({
            path: `/v1/posting/fbs/timeslot/set`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения таможенных деклараций Elektronik Ticaret Gümrük Beyannamesi (ETGB) для продавцов из Турции.
     *
     * @tags FBS
     * @name PostingApiGetEtgb
     * @summary Таможенные декларации ETGB
     * @request POST:/v1/posting/global/etgb
     * @response `200` `PostingApiGetEtgbData` Информация о декларациях
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetEtgb = (data: V1GetEtgbRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetEtgbData, PostingApiGetEtgbError>({
            path: `/v1/posting/global/etgb`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения информации о заявке на отмену rFBS-заказа.
     *
     * @tags CancellationAPI
     * @name CancellationApiGetConditionalCancellation
     * @summary Получить информацию о заявке на отмену rFBS
     * @request POST:/v1/conditional-cancellation/get
     * @response `200` `CancellationApiGetConditionalCancellationData` Информация о заявке на отмену
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    cancellationApiGetConditionalCancellation = (
        data: V1GetConditionalCancellationRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiGetConditionalCancellationData,
            CancellationApiGetConditionalCancellationError
        >({
            path: `/v1/conditional-cancellation/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка заявок на отмену rFBS-заказов.
     *
     * @tags CancellationAPI
     * @name CancellationApiGetConditionalCancellationList
     * @summary Получить список заявок на отмену rFBS
     * @request POST:/v1/conditional-cancellation/list
     * @response `200` `CancellationApiGetConditionalCancellationListData` Список заявок на отмену
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    cancellationApiGetConditionalCancellationList = (
        data: V1GetConditionalCancellationListRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiGetConditionalCancellationListData,
            CancellationApiGetConditionalCancellationListError
        >({
            path: `/v1/conditional-cancellation/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод позволяет согласовать заявку на отмену в статусе `ON_APPROVAL`. Метод применим для rFBS-заказов. Заказ будет отменён, а деньги вернутся покупателю.
     *
     * @tags CancellationAPI
     * @name CancellationApiConditionalCancellationApprove
     * @summary Подтвердить заявку на отмену rFBS
     * @request POST:/v1/conditional-cancellation/approve
     * @response `200` `CancellationApiConditionalCancellationApproveData` Заявка подтверждена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    cancellationApiConditionalCancellationApprove = (
        data: V1ConditionalCancellationMoveRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiConditionalCancellationApproveData,
            CancellationApiConditionalCancellationApproveError
        >({
            path: `/v1/conditional-cancellation/approve`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод позволяет отклонить заявку на отмену в статусе `ON_APPROVAL`. Метод применим для rFBS-заказов. Объясните своё решение в параметре `comment`. Заказ останется в том же статусе, и его нужно будет доставить покупателю.
     *
     * @tags CancellationAPI
     * @name CancellationApiConditionalCancellationReject
     * @summary Отклонить заявку на отмену rFBS
     * @request POST:/v1/conditional-cancellation/reject
     * @response `200` `CancellationApiConditionalCancellationRejectData` Заявка отклонена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    cancellationApiConditionalCancellationReject = (
        data: V1ConditionalCancellationMoveRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiConditionalCancellationRejectData,
            CancellationApiConditionalCancellationRejectError
        >({
            path: `/v1/conditional-cancellation/reject`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает информацию о чатах с указанными идентификаторами. В ответе метода могут быть чаты с `last_message_id = 0` и без сообщений. Это происходит, когда покупатель открыл чат с продавцом, но ничего не написал.
     *
     * @tags ChatAPI
     * @name ChatApiChatList
     * @summary Список чатов
     * @request POST:/v1/chat/list
     * @response `200` `ChatApiChatListData` Список чатов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatList = (data: ChatChatListRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatListData, ChatApiChatListError>({
            path: `/v1/chat/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отправляет сообщение в существующий чат по его идентификатору.
     *
     * @tags ChatAPI
     * @name ChatApiChatSendMessage
     * @summary Отправить сообщение
     * @request POST:/v1/chat/send/message
     * @response `200` `ChatApiChatSendMessageData` Сообщение отправлено
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatSendMessage = (data: ChatChatSendMessageRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatSendMessageData, ChatApiChatSendMessageError>({
            path: `/v1/chat/send/message`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отправляет файл в существующий чат по его идентификатору.
     *
     * @tags ChatAPI
     * @name ChatApiChatSendFile
     * @summary Отправить файл
     * @request POST:/v1/chat/send/file
     * @response `200` `ChatApiChatSendFileData` Файл отправлен
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatSendFile = (data: ChatChatSendFileRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatSendFileData, ChatApiChatSendFileError>({
            path: `/v1/chat/send/file`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает историю сообщений в чате. По умолчанию сообщения показываются от старого к новому. Чтобы получить историю сообщений от самого нового сообщения до самого старого, используйте метод [/v1/chat/updates](#operation/ChatAPI_ChatUpdates). У методов [/v1/chat/history](#operation/ChatAPI_ChatHistory) и [/v1/chat/updates](#operation/ChatAPI_ChatUpdates) одинаковая структура запроса и ответа.
     *
     * @tags ChatAPI
     * @name ChatApiChatHistory
     * @summary История чата
     * @request POST:/v1/chat/history
     * @response `200` `ChatApiChatHistoryData` История чата
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatHistory = (data: ChatChatHistoryRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatHistoryData, ChatApiChatHistoryError>({
            path: `/v1/chat/history`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ChatAPI
     * @name ChatApiChatUpdates
     * @summary Обновить чат
     * @request POST:/v1/chat/updates
     * @response `200` `ChatApiChatUpdatesData` Чат обновлён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatUpdates = (data: ChatChatUpdatesRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatUpdatesData, ChatApiChatUpdatesError>({
            path: `/v1/chat/updates`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Создает новый чат с покупателем по отправлению. Например, чтобы уточнить адрес или модель товара.
     *
     * @tags ChatAPI
     * @name ChatApiChatStart
     * @summary Создать новый чат
     * @request POST:/v1/chat/start
     * @response `200` `ChatApiChatStartData` Создан новый чат
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatStart = (data: ChatChatStartRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatStartData, ChatApiChatStartError>({
            path: `/v1/chat/start`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Создание или изменение ссылки на таможенную счёт-проформу для возврата НДС продавцам из Турции.
     *
     * @tags SupplierAPI
     * @name InvoiceCreate
     * @summary Создать или изменить ссылку на счёт-проформу
     * @request POST:/v1/invoice/create-or-update
     * @response `200` `InvoiceCreateData` Ссылка создана или изменена
     * @response `default` `RpcStatus` Ошибка
     */
    invoiceCreate = (data: V1InvoiceCreateOrUpdateRequest, params: RequestParams = {}) =>
        this.http.request<InvoiceCreateData, InvoiceCreateError>({
            path: `/v1/invoice/create-or-update`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags SupplierAPI
     * @name InvoiceGet
     * @summary Получить ссылку на счёт-проформу
     * @request POST:/v1/invoice/get
     * @response `200` `InvoiceGetData` Ссылка на счёт-проформу
     * @response `default` `RpcStatus` Ошибка
     */
    invoiceGet = (data: V1InvoiceGetRequest, params: RequestParams = {}) =>
        this.http.request<InvoiceGetData, InvoiceGetError>({
            path: `/v1/invoice/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags SupplierAPI
     * @name InvoiceDelete
     * @summary Удалить ссылку на счёт-проформу
     * @request POST:/v1/invoice/delete
     * @response `200` `InvoiceDeleteData` Ссылка удалена
     * @response `default` `RpcStatus` Ошибка
     */
    invoiceDelete = (data: V1InvoiceDeleteRequest, params: RequestParams = {}) =>
        this.http.request<InvoiceDeleteData, InvoiceDeleteError>({
            path: `/v1/invoice/delete`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает информацию о созданном ранее отчёте по его идентификатору.
     *
     * @tags ReportAPI
     * @name ReportApiReportInfo
     * @summary Информация об отчёте
     * @request POST:/v1/report/info
     * @response `200` `ReportApiReportInfoData` Информация об отчёте
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiReportInfo = (data: ReportReportInfoRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiReportInfoData, ReportApiReportInfoError>({
            path: `/v1/report/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список отчётов, которые были сформированы раньше.
     *
     * @tags ReportAPI
     * @name ReportApiReportList
     * @summary Список отчётов
     * @request POST:/v1/report/list
     * @response `200` `ReportApiReportListData` Список отчётов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiReportList = (data: ReportReportListRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiReportListData, ReportApiReportListError>({
            path: `/v1/report/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения отчёта с данными о товарах. Например, Ozon ID, количества товаров, цен, статуса. Пояснения к некоторым полям: - __Ozon Product ID__ — идентификатор товара в нашей системе. Например, если вы продаёте товар со склада Ozon и со своего склада, Ozon Product ID будет для них одинаковым. - __FBO Ozon SKU ID__ — идентификатор товара, который продаётся со склада Ozon. - __FBS Ozon SKU ID__ — идентификатор товара, который продаётся с вашего склада. - __CrossBorder Ozon SKU__ — идентификатор товара, который продаётся из-за границы. - __Barcode__ — штрихкод товара, который печатается на маркировке. - __Статус товара__ — можно ли купить товар на Ozon. Если статус «Готов к продаже», товар купить нельзя. - __Доступно на складе Ozon, шт__ — сколько штук товара на складе доступно для продажи. Это количество не включает зарезервированные товары. - __Зарезервировано, шт__ — сколько штук товара со статусом «Зарезервировано». Товар зарезервирован с момента получения заказа на Ozon и до упаковки для передачи покупателю. - __Текущая цена с учётом скидки, руб.__ — цена, по которой товар продаётся сейчас (на момент загрузки отчёта, с учётом скидки). Если товар участвует в акции, указана цена без её учёта. - __Базовая цена (цена до скидок), руб.__ — цена без учёта скидки. - __Цена Premium, руб.__ — цена для покупателей с подпиской Ozon Premium. - __Рекомендованная цена, руб.__ — минимальная цена на товар на другой торговой площадке. - __Актуальная ссылка на рекомендованную цену__ — ссылка на товар с рекомендованной ценой на другой торговой площадке.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyProductsReport
     * @summary Отчёт по товарам
     * @request POST:/v1/report/products/create
     * @response `200` `ReportApiCreateCompanyProductsReportData` Отчёт по товарам
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyProductsReport = (
        data: ReportCreateCompanyProductsReportRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<ReportApiCreateCompanyProductsReportData, ReportApiCreateCompanyProductsReportError>({
            path: `/v1/report/products/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning">С 30 сентября 2022 года метод будет отключён. Для получения информации о транзакциях используйте метод <a href="#operation/FinanceAPI_FinanceTransactionListV3">/v3/finance/transaction/list</a>.</aside> Отчёт по транзакциям с информацией о начислениях за выбранный период: - дата и тип начисления, - идентификатор отправления или услуги, - детали по отправлению или услуге, - сумма, полученная за продажу или удержанная за возврат, - комиссия за продажу, - сумма, удержанная за обработку и доставку, - сумма, удержанная за возврат и отмену, - общая сумма.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyTransactionsReport
     * @summary Отчёт по транзакциям
     * @request POST:/v1/report/transactions/create
     * @response `200` `ReportApiCreateCompanyTransactionsReportData` Отчёт по транзакциям
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyTransactionsReport = (
        data: ReportCreateCompanyTransactionsReportRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<ReportApiCreateCompanyTransactionsReportData, ReportApiCreateCompanyTransactionsReportError>({
            path: `/v1/report/transactions/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning">С 30 сентября 2022 года метод будет отключён. Для получения информации о ценах используйте метод <a href="#operation/ProductAPI_GetProductInfoPricesV4">/v4/product/info/prices</a>.</aside> Отчёт по товарам, который содержит: - цены, - комиссии, - информацию о скидках, - рыночную цену на товар, - информацию об участии в акциях.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyProductsPricesReport
     * @summary Отчёт по ценам
     * @request POST:/v1/report/products/prices/create
     * @response `200` `ReportApiCreateCompanyProductsPricesReportData` Отчёт по ценам
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyProductsPricesReport = (
        data: ReportCreateCompanyProductsPricesReportRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            ReportApiCreateCompanyProductsPricesReportData,
            ReportApiCreateCompanyProductsPricesReportError
        >({
            path: `/v1/report/products/prices/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отчёт с информацией о количестве доступных и зарезервированных единиц товара на складе.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyStockReport
     * @summary Отчёт об остатках
     * @request POST:/v1/report/stock/create
     * @response `200` `ReportApiCreateCompanyStockReportData` Отчёт об остатках
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyStockReport = (data: ReportCreateCompanyStockReportRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiCreateCompanyStockReportData, ReportApiCreateCompanyStockReportError>({
            path: `/v1/report/stock/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отчёт с полной информацией по товарам, а также количество единиц товара со статусами: - товары с браком или на инвентаризации, - товары в перемещении между фулфилмент-центрами, - товары в доставке, - товары, подлежащие реализации.
     *
     * @tags ReportAPI
     * @name ReportApiCreateProductsMovementReport
     * @summary Отчёт о перемещении товаров
     * @request POST:/v1/report/products/movement/create
     * @response `200` `ReportApiCreateProductsMovementReportData` Отчёт о перемещении товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateProductsMovementReport = (
        data: ReportCreateProductsMovementReportRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<ReportApiCreateProductsMovementReportData, ReportApiCreateProductsMovementReportError>({
            path: `/v1/report/products/movement/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отчёт содержит информацию о возвращённых товарах, которые приняты от покупателя, готовы к получению или переданы продавцу. Метод подходит только для заказов, которые отправлены со склада продавца. Пояснения к некоторым полям в отчёте: - __ID товара в возврате__ — идентификатор товара в возврате. - __ID отправления__ — идентификатор отправления в нашей системе. - __Статус__ — статус возврата. - __Артикул товара__ — ваш артикул товара. - __Ozon ID__ — идентификатор товара в нашей системе. - __Причина возврата__ — почему заказ пришлось вернуть или почему от него отказался покупатель. - __Стоимость размещения__ — стоимость размещения возврата в пункте выдачи. - __Переход в «Готов к получению»__ — дата, с которой возврат находится в пункте выдачи. - __Последний день бесплатного размещения__ — последний день, когда возврат размещается в пункте выдачи бесплатно. Со следующего дня размещение становится платным. Подробнее о стоимости размещения в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/prices/fees/kak-schitat-stoimost-razmechenia.html). - __Дата возврата продавцу__ — когда возврат передали вам. - __Местоположение__ — название пункта выдачи, в котором находится возврат. - __Отправление вскрыто__ — если до возвращения заказа покупатель вскрыл его упаковку, в строке будет указано «Да». - __Процент комиссии__ — ставка комиссии за продажу товара в процентах. Фиксируется в момент создания заказа покупателем. Подробнее о комиссиях в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/prices/fees/comissions-tariffs.html#комиссии-за-продажу). - __Комиссия (руб.)__ — комиссия Ozon за продажу товара в рублях, рассчитывается от цены товара. - __Цена без комиссии (руб.)__ — стоимость товара за вычетом комиссии: Цена без комиссии = Стоимость товара − Комиссия. Статусы возвратов: - __В пути__ — покупатель передал нам возврат с товарами, которые ему не подошли. - __В пункте выдачи__ — возврат прибыл в пункт выдачи, откуда вы можете его забрать. Пункт выдачи указан в столбце «Местоположение». - __Получен__ — возврат передали вам.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyReturnsReport
     * @summary Отчёт о возвратах
     * @request POST:/v1/report/returns/create
     * @response `200` `ReportApiCreateCompanyReturnsReportData` Отчёт о возвратах
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyReturnsReport = (data: ReportCreateCompanyReturnsReportRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiCreateCompanyReturnsReportData, ReportApiCreateCompanyReturnsReportError>({
            path: `/v1/report/returns/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отчёт об отправлениях с информацией по заказам: - статусы заказов, - дата начала обработки, - номера заказов, - номера отправлений, - стоимость отправлений, - содержимое отправлений.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyPostingsReport
     * @summary Отчёт об отправлениях
     * @request POST:/v1/report/postings/create
     * @response `200` `ReportApiCreateCompanyPostingsReportData` Отчёт об отправлениях
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyPostingsReport = (
        data: ReportCreateCompanyPostingsReportRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<ReportApiCreateCompanyPostingsReportData, ReportApiCreateCompanyPostingsReportError>({
            path: `/v1/report/postings/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning">С 30 сентября 2022 года метод будет отключён. Для получения информации о финансах используйте метод <a href="#operation/FinanceAPI_FinanceCashFlowStatementList">/v1/finance/cash-flow-statement/list</a>.</aside> Отчёт по финансам за выбранный период с информацией о балансе на начало и конец периода. Отчёт содержит: -	сумма, полученная за доставленные заказы; -	сумма комиссии за доставленные заказы; -	сумма за возвращённые товары; -	сумма, возвращённая за возвраты; -	сумма оплаты за услуги.
     *
     * @tags ReportAPI
     * @name ReportApiCreateCompanyFinanceReport
     * @summary Отчёт о финансах
     * @request POST:/v1/report/finance/create
     * @response `200` `ReportApiCreateCompanyFinanceReportData` Отчёт о финансах
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateCompanyFinanceReport = (data: ReportCreateCompanyFinanceReportRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiCreateCompanyFinanceReportData, ReportApiCreateCompanyFinanceReportError>({
            path: `/v1/report/finance/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags ReportAPI
     * @name FinanceApiFinanceCashFlowStatementList
     * @summary Финансовый отчёт
     * @request POST:/v1/finance/cash-flow-statement/list
     * @response `200` `FinanceApiFinanceCashFlowStatementListData` Финансовый отчёт
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    financeApiFinanceCashFlowStatementList = (
        data: V3FinanceCashFlowStatementListRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<FinanceApiFinanceCashFlowStatementListData, FinanceApiFinanceCashFlowStatementListError>({
            path: `/v1/finance/cash-flow-statement/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Запускает генерацию отчёта по уценённым товарам на складе Ozon. Ozon может сам уценить товар, например, при повреждении. В результате запроса будет не сам отчёт, а его уникальный идентификатор. Чтобы получить отчёт, отправьте идентификатор в запросе метода [/v1/report/discounted/info](#operation/ReportAPI_DiscountedReportInfo).
     *
     * @tags ReportAPI
     * @name ReportApiCreateDiscountedReport
     * @summary Выпуск отчёта об уценённых товарах
     * @request POST:/v1/report/discounted/create
     * @response `200` `ReportApiCreateDiscountedReportData` Результат запроса
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiCreateDiscountedReport = (data: ReportCreateDiscountedRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiCreateDiscountedReportData, ReportApiCreateDiscountedReportError>({
            path: `/v1/report/discounted/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает информацию о созданном ранее отчёте по его идентификатору.
     *
     * @tags ReportAPI
     * @name ReportApiDiscountedReportInfo
     * @summary Отчёт об уценённых товарах
     * @request POST:/v1/report/discounted/info
     * @response `200` `ReportApiDiscountedReportInfoData` Результат запроса
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiDiscountedReportInfo = (data: ReportDiscountedInfoRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiDiscountedReportInfoData, ReportApiDiscountedReportInfoError>({
            path: `/v1/report/discounted/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список отчётов, которые были сформированы раньше.
     *
     * @tags ReportAPI
     * @name ReportApiDiscountedReportList
     * @summary Список отчётов об уценённых товарах
     * @request POST:/v1/report/discounted/list
     * @response `200` `ReportApiDiscountedReportListData` Результат запроса
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiDiscountedReportList = (data: ReportDiscountedListRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiDiscountedReportListData, ReportApiDiscountedReportListError>({
            path: `/v1/report/discounted/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Уĸажите период и метриĸи, ĸоторые нужно посчитать — в ответе будет аналитиĸа, сгруппированная по параметру `dimensions`.
     *
     * @tags AnalyticsAPI
     * @name AnalyticsApiAnalyticsGetData
     * @summary Данные аналитики
     * @request POST:/v1/analytics/data
     * @response `200` `AnalyticsApiAnalyticsGetDataData` Данные аналитики
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    analyticsApiAnalyticsGetData = (data: AnalyticsAnalyticsGetDataRequest, params: RequestParams = {}) =>
        this.http.request<AnalyticsApiAnalyticsGetDataData, AnalyticsApiAnalyticsGetDataError>({
            path: `/v1/analytics/data`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> 1 апреля 2023 года мы отключим этот метод. Переключитесь на метод <a href="#operation/AnalyticsAPI_AnalyticsGetStockOnWarehousesV2">/v2/analytics/stock_on_warehouses</a>. Чтобы получить отчёт, запросите его в <a href="https://seller.ozon.ru/app/analytics/fulfillment-reports/stocks-and-movement-products-to-ozon-warehouses">личном кабинете</a>. </aside> Отчёт по остаткам и товарам в перемещении по складам Ozon.
     *
     * @tags AnalyticsAPI
     * @name AnalyticsApiAnalyticsGetStockOnWarehouses
     * @summary Отчёт по остаткам и товарам
     * @request POST:/v1/analytics/stock_on_warehouses
     * @response `200` `AnalyticsApiAnalyticsGetStockOnWarehousesData` Отчёт по остаткам и товарам
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    analyticsApiAnalyticsGetStockOnWarehouses = (
        data: AnalyticsAnalyticsGetStockOnWarehousesRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<
            AnalyticsApiAnalyticsGetStockOnWarehousesData,
            AnalyticsApiAnalyticsGetStockOnWarehousesError
        >({
            path: `/v1/analytics/stock_on_warehouses`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> 1 апреля 2023 года мы отключим этот метод. Новый метод в разработке — следите за обновлениями. Чтобы получить отчёт, запросите его в <a href="https://seller.ozon.ru/app/analytics/fulfillment-reports/turnover">личном кабинете</a>. </aside> Метод для получения отчёта по оборачиваемости (FBO) по категориям за 15 дней.
     *
     * @tags AnalyticsAPI
     * @name AnalyticsApiAnalyticsItemTurnoverDataV3
     * @summary Отчёт по оборачиваемости (FBO)
     * @request POST:/v1/analytics/item_turnover
     * @response `200` `AnalyticsApiAnalyticsItemTurnoverDataV3Data` Отчёт по оборачиваемости
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    analyticsApiAnalyticsItemTurnoverDataV3 = (
        data: V1AnalyticsItemTurnoverDataV3Request,
        params: RequestParams = {},
    ) =>
        this.http.request<AnalyticsApiAnalyticsItemTurnoverDataV3Data, AnalyticsApiAnalyticsItemTurnoverDataV3Error>({
            path: `/v1/analytics/item_turnover`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Отчёт о реализации доставленных и возвращённых товаров за месяц. Отмены и невыкупы не включаются. Отчёт придёт не позднее 5-го числа следующего месяца. [Подробнее об отчёте в Базе знаний продавца](https://seller-edu.ozon.ru/docs/finances-documents/calculations-documents/otchet-o-realizacii-tovarov.html)
     *
     * @tags FinanceAPI
     * @name FinanceApiGetRealizationReport
     * @summary Отчёт о реализации товаров
     * @request POST:/v1/finance/realization
     * @response `200` `FinanceApiGetRealizationReportData` Отчёт о реализации
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    financeApiGetRealizationReport = (data: FinanceGetRealizationReportRequest, params: RequestParams = {}) =>
        this.http.request<FinanceApiGetRealizationReportData, FinanceApiGetRealizationReportError>({
            path: `/v1/finance/realization`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags SellerRating
     * @name RatingApiRatingSummaryV1
     * @summary Получить информацию о текущих рейтингах продавца
     * @request POST:/v1/rating/summary
     * @response `200` `RatingApiRatingSummaryV1Data` Информация о рейтингах
     * @response `default` `RpcStatus` Ошибка
     */
    ratingApiRatingSummaryV1 = (data: V1Empty, params: RequestParams = {}) =>
        this.http.request<RatingApiRatingSummaryV1Data, RatingApiRatingSummaryV1Error>({
            path: `/v1/rating/summary`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags SellerRating
     * @name RatingApiRatingHistoryV1
     * @summary Получить информацию о рейтингах продавца за период
     * @request POST:/v1/rating/history
     * @response `200` `RatingApiRatingHistoryV1Data` Информация о рейтингах
     * @response `default` `RpcStatus` Ошибка
     */
    ratingApiRatingHistoryV1 = (data: V1RatingHistoryV1Request, params: RequestParams = {}) =>
        this.http.request<RatingApiRatingHistoryV1Data, RatingApiRatingHistoryV1Error>({
            path: `/v1/rating/history`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}
