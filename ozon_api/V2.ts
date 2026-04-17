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
    CancellationApiConditionalCancellationApproveV2Data,
    CancellationApiConditionalCancellationApproveV2Error,
    CancellationApiConditionalCancellationRejectV2Data,
    CancellationApiConditionalCancellationRejectV2Error,
    CancellationApiGetConditionalCancellationListV2Data,
    CancellationApiGetConditionalCancellationListV2Error,
    CargoesCreateInfoV2Data,
    CargoesCreateInfoV2Error,
    CarriageApiCarriageDeliveryListV2Data,
    CarriageApiCarriageDeliveryListV2Error,
    CertificateAccordanceTypesData,
    CertificateAccordanceTypesError,
    ChatApiChatListV2Data,
    ChatApiChatListV2Error,
    ChatApiChatReadV2Data,
    ChatApiChatReadV2Error,
    ChatList,
    ChatRead,
    DeliveryCheckoutData,
    DeliveryCheckoutError,
    DraftClusterListData,
    DraftClusterListError,
    DraftCreateInfoData,
    DraftCreateInfoError,
    DraftSupplyCreateData,
    DraftSupplyCreateError,
    DraftSupplyCreateStatusData,
    DraftSupplyCreateStatusError,
    DraftTimeslotInfoData,
    DraftTimeslotInfoError,
    FinanceApiGetRealizationReportV2Data,
    FinanceApiGetRealizationReportV2Error,
    GetDiscountTaskListV2Data,
    GetDiscountTaskListV2Error,
    InvoiceApiInvoiceCreateOrUpdateV2Data,
    InvoiceApiInvoiceCreateOrUpdateV2Error,
    InvoiceGetV2Data,
    InvoiceGetV2Error,
    OrderApiOrderCreateData,
    OrderApiOrderCreateError,
    PolygonBindData,
    PolygonBindError,
    PostingApiActPostingListData,
    PostingApiActPostingListError,
    PostingApiCancelFbsPostingData,
    PostingApiCancelFbsPostingError,
    PostingApiCancelFbsPostingProductData,
    PostingApiCancelFbsPostingProductError,
    PostingApiCreateLabelBatchV2Data,
    PostingApiCreateLabelBatchV2Error,
    PostingApiFbsActListData,
    PostingApiFbsActListError,
    PostingApiFbsPostingDeliveredData,
    PostingApiFbsPostingDeliveredError,
    PostingApiFbsPostingDeliveringData,
    PostingApiFbsPostingDeliveringError,
    PostingApiFbsPostingLastMileData,
    PostingApiFbsPostingLastMileError,
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
    PostingApiPostingFbsGetBarcodeData,
    PostingApiPostingFbsGetBarcodeError,
    PostingApiPostingFbsGetBarcodeTextData,
    PostingApiPostingFbsGetBarcodeTextError,
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
    ProductApiDeleteProductsData,
    ProductApiDeleteProductsError,
    ProductApiGetProductInfoStocksByWarehouseFbsV2Data,
    ProductApiGetProductInfoStocksByWarehouseFbsV2Error,
    ProductApiProductCertificationListData,
    ProductApiProductCertificationListError,
    ProductApiProductInfoPicturesV2Data,
    ProductApiProductInfoPicturesV2Error,
    ProductApiProductsStocksV2Data,
    ProductApiProductsStocksV2Error,
    Productv2DeleteProductsRequest,
    Productv2ProductsStocksRequest,
    ReportApiReportReturnsCreateData,
    ReportApiReportReturnsCreateError,
    RfbsReturnsApiReturnsRfbsCompensateV2Data,
    RfbsReturnsApiReturnsRfbsCompensateV2Error,
    RfbsReturnsApiReturnsRfbsGetV2Data,
    RfbsReturnsApiReturnsRfbsGetV2Error,
    RfbsReturnsApiReturnsRfbsListV2Data,
    RfbsReturnsApiReturnsRfbsListV2Error,
    RfbsReturnsApiReturnsRfbsReceiveReturnV2Data,
    RfbsReturnsApiReturnsRfbsReceiveReturnV2Error,
    RfbsReturnsApiReturnsRfbsRejectV2Data,
    RfbsReturnsApiReturnsRfbsRejectV2Error,
    RfbsReturnsApiReturnsRfbsReturnMoneyV2Data,
    RfbsReturnsApiReturnsRfbsReturnMoneyV2Error,
    RfbsReturnsApiReturnsRfbsVerifyV2Data,
    RfbsReturnsApiReturnsRfbsVerifyV2Error,
    V1CreateLabelBatchRequest,
    V1DeliveryCheckoutRequest,
    V1InvoiceGetRequest,
    V1OrderCreateRequest,
    V2CargoesCreateInfoV2Request,
    V2CarriageDeliveryListV2Request,
    V2ConditionalCancellationMoveV2Request,
    V2DeliveryMethodListV2Request,
    V2DraftCreateInfoRequest,
    V2DraftSupplyCreateRequest,
    V2DraftSupplyCreateStatusRequest,
    V2DraftTimeslotInfoRequest,
    V2FbsPostingProductCountryListRequest,
    V2FbsPostingProductCountrySetRequest,
    V2GetConditionalCancellationListV2Request,
    V2GetDiscountTaskListV2Request,
    V2GetProductInfoStocksByWarehouseFbsRequestV2,
    V2GetRealizationReportRequestV2,
    V2InvoiceCreateOrUpdateV2Request,
    V2MovePostingToAwaitingDeliveryRequest,
    V2PolygonBindRequest,
    V2PostingFBSActGetPostingsRequest,
    V2PostingFBSActListRequest,
    V2PostingFBSDigitalActCheckStatusRequest,
    V2PostingFBSGetBarcodeRequest,
    V2PostingFBSGetDigitalActRequest,
    V2ProductCertificationListRequest,
    V2ProductInfoPicturesRequest,
    V2ReportReturnsCreateRequest,
    V2ReturnsRfbsCompensateRequest,
    V2ReturnsRfbsGetRequest,
    V2ReturnsRfbsListRequest,
    V2ReturnsRfbsReceiveReturnRequest,
    V2ReturnsRfbsRejectRequest,
    V2ReturnsRfbsReturnMoneyRequest,
    V2ReturnsRfbsVerifyRequest,
    V2WarehouseListV2Request,
    WarehouseApiDeliveryMethodListV2Data,
    WarehouseApiDeliveryMethodListV2Error,
    WarehouseListV2Data,
    WarehouseListV2Error,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V2<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

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
     * No description
     *
     * @tags ProductAPI
     * @name ProductApiProductInfoPicturesV2
     * @summary Получить изображения товаров
     * @request POST:/v2/product/pictures/info
     * @response `200` `ProductApiProductInfoPicturesV2Data` Изображения товаров
     * @response `default` `RpcStatus` Ошибка
     */
    productApiProductInfoPicturesV2 = (data: V2ProductInfoPicturesRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductInfoPicturesV2Data, ProductApiProductInfoPicturesV2Error>({
            path: `/v2/product/pictures/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Позволяет изменить информацию о количестве товара в наличии. <aside class="warning"> Переданный остаток — количество товара в наличии без учёта зарезервированных товаров. Перед обновлением остатков проверьте количество зарезервированных товаров с помощью метода <a href="#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2">/v2/product/info/stocks-by-warehouse/fbs</a>. </aside> За один запрос можно изменить наличие для 100 пар товар-склад. С одного аккаунта продавца можно отправить до 80 запросов в минуту. <aside class="warning">Обновлять остатки у одной пары товар-склад можно только 1 раз в 30 секунд, иначе в параметре <code>result.errors</code> в ответе будет ошибка <code>TOO_MANY_REQUESTS</code>.</aside> Вы можете задать наличие товара только после того, как его статус сменится на `price_sent`. Остатки крупногабаритных товаров можно обновлять только на предназначенных для них складах. Если запрос содержит оба параметра — `offer_id` и `product_id`, изменения применятся к товару с `offer_id`. Для избежания неоднозначности используйте только один из параметров. <aside class="warning"> 26 июня 2025 параметры <tt>stocks.quant_size</tt> в запросе метода и <tt>result.quant_size</tt> в ответе метода будут отключены. </aside>
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
    productApiGetProductInfoStocksByWarehouseFbsV2 = (
        data: V2GetProductInfoStocksByWarehouseFbsRequestV2,
        params: RequestParams = {},
    ) =>
        this.http.request<
            ProductApiGetProductInfoStocksByWarehouseFbsV2Data,
            ProductApiGetProductInfoStocksByWarehouseFbsV2Error
        >({
            path: `/v2/product/info/stocks-by-warehouse/fbs`,
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
     * No description
     *
     * @tags CertificationAPI
     * @name ProductApiProductCertificationList
     * @summary Список сертифицируемых категорий
     * @request POST:/v2/product/certification/list
     * @response `200` `ProductApiProductCertificationListData` Список сертифицируемых категорий
     * @response `default` `GooglerpcStatus` Ошибка
     */
    productApiProductCertificationList = (data: V2ProductCertificationListRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiProductCertificationListData, ProductApiProductCertificationListError>({
            path: `/v2/product/certification/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
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
    warehouseApiDeliveryMethodListV2 = (data: V2DeliveryMethodListV2Request, params: RequestParams = {}) =>
        this.http.request<WarehouseApiDeliveryMethodListV2Data, WarehouseApiDeliveryMethodListV2Error>({
            path: `/v2/delivery-method/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод возвращает список складов FBS и rFBS. Чтобы получить список складов FBO, используйте метод [/v1/warehouse/fbo/list](#operation/SupplyDraftAPI_DraftGetWarehouseFboList).
     *
     * @tags WarehouseAPI
     * @name WarehouseListV2
     * @summary Список складов
     * @request POST:/v2/warehouse/list
     * @response `200` `WarehouseListV2Data` Список складов
     * @response `default` `RpcStatus` Ошибка
     */
    warehouseListV2 = (data: V2WarehouseListV2Request, params: RequestParams = {}) =>
        this.http.request<WarehouseListV2Data, WarehouseListV2Error>({
            path: `/v2/warehouse/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список отправлений за указанный период времени. Если период больше года, вернётся ошибка `PERIOD_IS_TOO_LONG`. Дополнительно можно отфильтровать отправления по их статусу.
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
     * @description Вы можете создавать черновики заявки на поставку 2 раза в минуту и 50 раз в час. Если превысите лимит, вернётся ошибка 429.
     *
     * @tags FboSupplyRequest
     * @name DraftCreateInfo
     * @summary Получить информацию о черновике заявки на поставку
     * @request POST:/v2/draft/create/info
     * @response `200` `DraftCreateInfoData` Информация о черновике
     * @response `default` `GooglerpcStatus` Ошибка
     */
    draftCreateInfo = (data: V2DraftCreateInfoRequest, params: RequestParams = {}) =>
        this.http.request<DraftCreateInfoData, DraftCreateInfoError>({
            path: `/v2/draft/create/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Не используйте в запросе <code>draft_id</code> из метода <a href ="#operation/SupplyDraftAPI_DraftCreateInfo">/v1/draft/create/info</a>, иначе вернётся ошибка. </aside>
     *
     * @tags FboSupplyRequest
     * @name DraftTimeslotInfo
     * @summary Получить список доступных таймслотов
     * @request POST:/v2/draft/timeslot/info
     * @response `200` `DraftTimeslotInfoData` Список таймслотов
     * @response `default` `GooglerpcStatus` Ошибка
     */
    draftTimeslotInfo = (data: V2DraftTimeslotInfoRequest, params: RequestParams = {}) =>
        this.http.request<DraftTimeslotInfoData, DraftTimeslotInfoError>({
            path: `/v2/draft/timeslot/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1721-Novyi-metod-dlia-peredachi-offer-id-pri-ustanovke-GM) в сообществе разработчиков Ozon for dev.
     *
     * @tags FboSupplyRequest
     * @name CargoesCreateInfoV2
     * @summary Получить информацию по установке грузомест
     * @request POST:/v2/cargoes/create/info
     * @response `200` `CargoesCreateInfoV2Data` Результат запроса
     * @response `default` `GooglerpcStatus` Ошибка
     */
    cargoesCreateInfoV2 = (data: V2CargoesCreateInfoV2Request, params: RequestParams = {}) =>
        this.http.request<CargoesCreateInfoV2Data, CargoesCreateInfoV2Error>({
            path: `/v2/cargoes/create/info`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags FboSupplyRequest
     * @name DraftSupplyCreate
     * @summary Создать заявку на поставку по черновику
     * @request POST:/v2/draft/supply/create
     * @response `200` `DraftSupplyCreateData` Заявка создана
     * @response `default` `GooglerpcStatus` Ошибка
     */
    draftSupplyCreate = (data: V2DraftSupplyCreateRequest, params: RequestParams = {}) =>
        this.http.request<DraftSupplyCreateData, DraftSupplyCreateError>({
            path: `/v2/draft/supply/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags FboSupplyRequest
     * @name DraftSupplyCreateStatus
     * @summary Получить информацию о создании заявки на поставку
     * @request POST:/v2/draft/supply/create/status
     * @response `200` `DraftSupplyCreateStatusData` Информация о создании заявки на поставку
     * @response `default` `GooglerpcStatus` Ошибка
     */
    draftSupplyCreateStatus = (data: V2DraftSupplyCreateStatusRequest, params: RequestParams = {}) =>
        this.http.request<DraftSupplyCreateStatusData, DraftSupplyCreateStatusError>({
            path: `/v2/draft/supply/create/status`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Метод не возвращает информацию по методам доставки, у которых нет отправлений. </aside>
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
    carriageApiCarriageDeliveryListV2 = (data: V2CarriageDeliveryListV2Request, params: RequestParams = {}) =>
        this.http.request<CarriageApiCarriageDeliveryListV2Data, CarriageApiCarriageDeliveryListV2Error>({
            path: `/v2/carriage/delivery/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Подтверждает отгрузку и запускает формирование транспортной накладной и штрихкода для отгрузки. Для продавцов из России также запускается формирование листа отгрузки, а для продавцов из СНГ — акта приёма-передачи. Чтобы сформировать и получить документы, переведите отправление в статус `awaiting_deliver`.
     *
     * @tags DeliveryFBS
     * @name PostingApiPostingFbsActCreate
     * @summary Подтвердить отгрузку и создать документы
     * @request POST:/v2/posting/fbs/act/create
     * @response `200` `PostingApiPostingFbsActCreateData` Отгрузка подтверждена
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
     * @description Возвращает список отправлений в акте по его идентификатору.
     *
     * @tags DeliveryFBS
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
     * @description Метод создает этикетки для грузового места.
     *
     * @tags DeliveryFBS
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
     * @description Метод для получения штрихкода, который нужно показать в пункте выдачи или сортировочном центре при отгрузке отправления.
     *
     * @tags DeliveryFBS
     * @name PostingApiPostingFbsGetBarcode
     * @summary Штрихкод для отгрузки отправления
     * @request POST:/v2/posting/fbs/act/get-barcode
     * @response `200` `PostingApiPostingFbsGetBarcodeData` Штрихкод для отправления
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingFbsGetBarcode = (data: V2PostingFBSGetBarcodeRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsGetBarcodeData, PostingApiPostingFbsGetBarcodeError>({
            path: `/v2/posting/fbs/act/get-barcode`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Используйте этот метод, чтобы получить штрихкод из ответа [/v2/posting/fbs/act/get-barcode](#operation/PostingAPI_PostingFBSGetBarcode) в текстовом виде.
     *
     * @tags DeliveryFBS
     * @name PostingApiPostingFbsGetBarcodeText
     * @summary Значение штрихкода для отгрузки отправления
     * @request POST:/v2/posting/fbs/act/get-barcode/text
     * @response `200` `PostingApiPostingFbsGetBarcodeTextData` Значение штрихкода
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiPostingFbsGetBarcodeText = (data: V2PostingFBSGetBarcodeRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsGetBarcodeTextData, PostingApiPostingFbsGetBarcodeTextError>({
            path: `/v2/posting/fbs/act/get-barcode/text`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Метод устаревает и будет отключён 22 марта 2026 года. Переключитесь на <a href="#operation/PostingAPI_PostingFBSActCheckStatus">/v2/posting/fbs/act/check-status</a>. </aside>
     *
     * @tags DeliveryFBS
     * @name PostingApiPostingFbsDigitalActCheckStatus
     * @summary Статус формирования накладной
     * @request POST:/v2/posting/fbs/digital/act/check-status
     * @deprecated
     * @response `200` `PostingApiPostingFbsDigitalActCheckStatusData` Статус формирования накладной
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
     * @description С помощью метода можно получить: - продацам из России — лист отгрузки и транспортную накладную; - продавцам из СНГ — акт и транспортную накладную. Получите список доступных документов для отгрузки в параметре `available_actions` метода [/v1/carriage/get](#operation/CarriageGet).
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
    postingApiPostingFbsGetAct = (data: PostingPostingFBSGetActRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsGetActData, PostingApiPostingFbsGetActError>({
            path: `/v2/posting/fbs/act/get-pdf`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список актов по отгрузкам с возможностью отфильтровать отгрузки по периоду, статусу и типу интеграции.
     *
     * @tags DeliveryFBS
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
     * @description <aside class="warning"> Метод устаревает и будет отключён 22 марта 2026 года. Переключитесь на <a href="#operation/PostingAPI_PostingFBSGetAct">/v2/posting/fbs/act/get-pdf</a>. </aside> Вы можете получить документы, если в ответе метода [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus) был один из статусов: - `FORMED` — перевозка сформирована успешно, - `CONFIRMED` — перевозка подтверждена Ozon, - `CONFIRMED_WITH_MISMATCH` — перевозка принята Ozon с расхождениями.
     *
     * @tags DeliveryFBS
     * @name PostingApiPostingFbsGetDigitalAct
     * @summary Получить лист отгрузки по перевозке
     * @request POST:/v2/posting/fbs/digital/act/get-pdf
     * @deprecated
     * @response `200` `PostingApiPostingFbsGetDigitalActData` Файл с документом
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
     * @description Возвращает статус формирования штрихкода для отгрузки и документов: - для продавцов из России — транспортной накладной и листа отгрузки; - для продавцов из СНГ — транспортной накладной и акта приёма-передачи.
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
    postingApiPostingFbsActCheckStatus = (data: PostingPostingFBSActCheckStatusRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingFbsActCheckStatusData, PostingApiPostingFbsActCheckStatusError>({
            path: `/v2/posting/fbs/act/check-status`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Добавить трек-номера к отправлениям. Вы можете передать до 20 трек-номеров за раз.
     *
     * @tags DeliveryrFBS
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
     * @description <aside class="warning">Перед изменением статуса проверьте текущий статус отправления методом <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside> Перевести отправление в статус «Доставляется», если используется сторонняя служба доставки.
     *
     * @tags DeliveryrFBS
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
     * @description <aside class="warning">Перед изменением статуса проверьте текущий статус отправления методом <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside> Перевести отправление в статус «Последняя миля», если используется сторонняя служба доставки.
     *
     * @tags DeliveryrFBS
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
     * @description <aside class="warning">Перед изменением статуса проверьте текущий статус отправления методом <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside> Перевести отправление в статус «Доставлено», если используется сторонняя служба доставки.
     *
     * @tags DeliveryrFBS
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
     * @description <aside class="warning"> Если вы работаете по схеме rFBS или rFBS Express, изучите процесс печати этикетки в <a href="https://seller-edu.ozon.ru/rfbs/scheme-of-work">Базе знаний продавца</a>. </aside> Генерирует PDF-файл с этикетками для указанных отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`. В одном запросе можно передать не больше 20 идентификаторов. Если хотя бы для одного отправления возникнет ошибка, этикетки не будут подготовлены для всех отправлений в запросе. Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа. Ошибка `The next postings aren't ready` означает, что этикетки ещё не готовы, повторите запрос позднее.
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
     * @description <aside class="warning"> Если вы работаете по схеме rFBS или rFBS Express, изучите процесс печати этикетки в <a href="https://seller-edu.ozon.ru/rfbs/scheme-of-work">Базе знаний продавца</a>. </aside> Метод для создания задания на асинхронное формирование этикеток для отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`. Метод может вернуть несколько заданий: на формирование маленькой и большой этикетки. Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа. Чтобы получить созданные этикетки, используйте [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch).
     *
     * @tags FBS
     * @name PostingApiCreateLabelBatchV2
     * @summary Создать задание на формирование этикеток
     * @request POST:/v2/posting/fbs/package-label/create
     * @response `200` `PostingApiCreateLabelBatchV2Data` Задания на формирование этикеток
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiCreateLabelBatchV2 = (data: V1CreateLabelBatchRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiCreateLabelBatchV2Data, PostingApiCreateLabelBatchV2Error>({
            path: `/v2/posting/fbs/package-label/create`,
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
     * @description Используйте метод, если вы не можете отправить часть продуктов из отправления. Чтобы получить идентификаторы причин отмены `cancel_reason_id` при работе по схемам FBS или rFBS, используйте метод [/v2/posting/fbs/cancel-reason/list](#operation/PostingAPI_GetPostingFbsCancelReasonList). Условно-доставленные отправления отменить нельзя.
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
     * @description Меняет статус отправления на `cancelled`. Перед началом работы проверьте причины отмены для конкретного отправления методом [/v1/posting/fbs/cancel-reason](#operation/PostingAPI_GetPostingFbsCancelReasonV1). Условно-доставленные отправления отменить нельзя. Если значение параметра `cancel_reason_id` — 402, заполните поле `cancel_reason_message`.
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
    postingApiMoveFbsPostingToAwaitingDelivery = (
        data: V2MovePostingToAwaitingDeliveryRequest,
        params: RequestParams = {},
    ) =>
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
     * No description
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsListV2
     * @summary Список заявок на возврат
     * @request POST:/v2/returns/rfbs/list
     * @response `200` `RfbsReturnsApiReturnsRfbsListV2Data` Список заявок на возврат
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsListV2 = (data: V2ReturnsRfbsListRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsListV2Data, RfbsReturnsApiReturnsRfbsListV2Error>({
            path: `/v2/returns/rfbs/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsGetV2
     * @summary Информация о заявке на возврат
     * @request POST:/v2/returns/rfbs/get
     * @response `200` `RfbsReturnsApiReturnsRfbsGetV2Data` Информация о заявке
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsGetV2 = (data: V2ReturnsRfbsGetRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsGetV2Data, RfbsReturnsApiReturnsRfbsGetV2Error>({
            path: `/v2/returns/rfbs/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> В будущем метод будет отключён. Переключитесь на <a href="#operation/ReturnsAPI_ReturnsRfbsActionSet">/v1/returns/rfbs/action/set</a>. </aside> Метод позволяет отклонить заявку на возврат rFBS-заказа. Вы можете объяснить своё решение в параметре `comment`.
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsRejectV2
     * @summary Отклонить заявку на возврат
     * @request POST:/v2/returns/rfbs/reject
     * @response `200` `RfbsReturnsApiReturnsRfbsRejectV2Data` Заявка отклонена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsRejectV2 = (data: V2ReturnsRfbsRejectRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsRejectV2Data, RfbsReturnsApiReturnsRfbsRejectV2Error>({
            path: `/v2/returns/rfbs/reject`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> В будущем метод будет отключён. Переключитесь на <a href="#operation/ReturnsAPI_ReturnsRfbsActionSet">/v1/returns/rfbs/action/set</a>. </aside> Метод для частичной компенсации стоимости товара: вы возвращаете часть денег покупателю, товар остаётся у него.
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsCompensateV2
     * @summary Вернуть часть стоимости товара
     * @request POST:/v2/returns/rfbs/compensate
     * @response `200` `RfbsReturnsApiReturnsRfbsCompensateV2Data` Частичная компенсация подтверждена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsCompensateV2 = (data: V2ReturnsRfbsCompensateRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsCompensateV2Data, RfbsReturnsApiReturnsRfbsCompensateV2Error>({
            path: `/v2/returns/rfbs/compensate`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> В будущем метод будет отключён. Переключитесь на <a href="#operation/ReturnsAPI_ReturnsRfbsActionSet">/v1/returns/rfbs/action/set</a>. </aside> Метод позволяет одобрить заявку и согласиться на получение товара для проверки. Подтвердите получение товара с помощью метода [/v2/returns/rfbs/receive-return](#operation/RFBSReturnsAPI_ReturnsRfbsReceiveReturnV2).
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsVerifyV2
     * @summary Одобрить заявку на возврат
     * @request POST:/v2/returns/rfbs/verify
     * @response `200` `RfbsReturnsApiReturnsRfbsVerifyV2Data` Заявка одобрена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsVerifyV2 = (data: V2ReturnsRfbsVerifyRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsVerifyV2Data, RfbsReturnsApiReturnsRfbsVerifyV2Error>({
            path: `/v2/returns/rfbs/verify`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> В будущем метод будет отключён. Переключитесь на <a href="#operation/ReturnsAPI_ReturnsRfbsActionSet">/v1/returns/rfbs/action/set</a>. </aside>
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsReceiveReturnV2
     * @summary Подтвердить получение товара на проверку
     * @request POST:/v2/returns/rfbs/receive-return
     * @response `200` `RfbsReturnsApiReturnsRfbsReceiveReturnV2Data` Получение подтверждено
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsReceiveReturnV2 = (data: V2ReturnsRfbsReceiveReturnRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsReceiveReturnV2Data, RfbsReturnsApiReturnsRfbsReceiveReturnV2Error>({
            path: `/v2/returns/rfbs/receive-return`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> В будущем метод будет отключён. Переключитесь на <a href="#operation/ReturnsAPI_ReturnsRfbsActionSet">/v1/returns/rfbs/action/set</a>. </aside> Метод подтверждает возврат полной стоимости товара. Используйте метод, если согласны: - сразу вернуть стоимость товара и оставить его покупателю; - вернуть стоимость после получения и проверки товара. Если товар оказался ненадлежащего качества или с браком, вы возмещаете покупателю стоимость пересылки товара.
     *
     * @tags RFBSReturnsAPI
     * @name RfbsReturnsApiReturnsRfbsReturnMoneyV2
     * @summary Вернуть деньги покупателю
     * @request POST:/v2/returns/rfbs/return-money
     * @response `200` `RfbsReturnsApiReturnsRfbsReturnMoneyV2Data` Возврат денег подтверждён
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    rfbsReturnsApiReturnsRfbsReturnMoneyV2 = (data: V2ReturnsRfbsReturnMoneyRequest, params: RequestParams = {}) =>
        this.http.request<RfbsReturnsApiReturnsRfbsReturnMoneyV2Data, RfbsReturnsApiReturnsRfbsReturnMoneyV2Error>({
            path: `/v2/returns/rfbs/return-money`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка заявок на отмену rFBS-заказов.
     *
     * @tags CancellationAPI
     * @name CancellationApiGetConditionalCancellationListV2
     * @summary Получить список заявок на отмену rFBS
     * @request POST:/v2/conditional-cancellation/list
     * @response `200` `CancellationApiGetConditionalCancellationListV2Data` Список заявок на отмену
     * @response `default` `RpcStatus` Ошибка
     */
    cancellationApiGetConditionalCancellationListV2 = (
        data: V2GetConditionalCancellationListV2Request,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiGetConditionalCancellationListV2Data,
            CancellationApiGetConditionalCancellationListV2Error
        >({
            path: `/v2/conditional-cancellation/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод позволяет согласовать заявку на отмену в статусе `ON_APPROVAL`. Заказ будет отменён, а деньги вернутся покупателю.
     *
     * @tags CancellationAPI
     * @name CancellationApiConditionalCancellationApproveV2
     * @summary Подтвердить заявку на отмену rFBS
     * @request POST:/v2/conditional-cancellation/approve
     * @response `200` `CancellationApiConditionalCancellationApproveV2Data` Заявка подтверждена
     * @response `default` `RpcStatus` Ошибка
     */
    cancellationApiConditionalCancellationApproveV2 = (
        data: V2ConditionalCancellationMoveV2Request,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiConditionalCancellationApproveV2Data,
            CancellationApiConditionalCancellationApproveV2Error
        >({
            path: `/v2/conditional-cancellation/approve`,
            method: 'POST',
            body: data,
            ...params,
        });
    /**
     * @description Метод позволяет отклонить заявку на отмену в статусе `ON_APPROVAL`. В параметре `comment` опишите причину. Заказ останется в том же статусе, и его нужно будет доставить покупателю.
     *
     * @tags CancellationAPI
     * @name CancellationApiConditionalCancellationRejectV2
     * @summary Отклонить заявку на отмену rFBS
     * @request POST:/v2/conditional-cancellation/reject
     * @response `200` `CancellationApiConditionalCancellationRejectV2Data` Заявка отклонена
     * @response `default` `RpcStatus` Ошибка
     */
    cancellationApiConditionalCancellationRejectV2 = (
        data: V2ConditionalCancellationMoveV2Request,
        params: RequestParams = {},
    ) =>
        this.http.request<
            CancellationApiConditionalCancellationRejectV2Data,
            CancellationApiConditionalCancellationRejectV2Error
        >({
            path: `/v2/conditional-cancellation/reject`,
            method: 'POST',
            body: data,
            ...params,
        });
    /**
     * @description <aside class="warning"> Метод устаревает и будет отключён в будущем. Переключитесь на новую версию <a href="#operation/ChatAPI_ChatListV3">/v3/chat/list</a>. </aside> Возвращает информацию о чатах по указанным фильтрам.
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
     * @description Создание или изменение таможенного счёта-фактуры для возврата НДС продавцам из Турции.
     *
     * @tags SupplierAPI
     * @name InvoiceApiInvoiceCreateOrUpdateV2
     * @summary Создать или изменить счёт-фактуру
     * @request POST:/v2/invoice/create-or-update
     * @response `200` `InvoiceApiInvoiceCreateOrUpdateV2Data` Счёт-фактура создана или изменена
     * @response `default` `RpcStatus` Ошибка
     */
    invoiceApiInvoiceCreateOrUpdateV2 = (data: V2InvoiceCreateOrUpdateV2Request, params: RequestParams = {}) =>
        this.http.request<InvoiceApiInvoiceCreateOrUpdateV2Data, InvoiceApiInvoiceCreateOrUpdateV2Error>({
            path: `/v2/invoice/create-or-update`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags SupplierAPI
     * @name InvoiceGetV2
     * @summary Получить информацию о счёте-фактуре
     * @request POST:/v2/invoice/get
     * @response `200` `InvoiceGetV2Data` Информация о счёте-фактуре
     * @response `default` `RpcStatus` Ошибка
     */
    invoiceGetV2 = (data: V1InvoiceGetRequest, params: RequestParams = {}) =>
        this.http.request<InvoiceGetV2Data, InvoiceGetV2Error>({
            path: `/v2/invoice/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения отчёта о возвратах FBO и FBS.
     *
     * @tags ReportAPI
     * @name ReportApiReportReturnsCreate
     * @summary Отчёт о возвратах
     * @request POST:/v2/report/returns/create
     * @response `200` `ReportApiReportReturnsCreateData` Отчёт о возвратах FBO и FBS
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    reportApiReportReturnsCreate = (data: V2ReportReturnsCreateRequest, params: RequestParams = {}) =>
        this.http.request<ReportApiReportReturnsCreateData, ReportApiReportReturnsCreateError>({
            path: `/v2/report/returns/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> В будущем метод будет отключён. Переключитесь на <a href="#operation/AnalyticsAPI_AnalyticsStocks">/v1/analytics/stocks</a>. </aside> Метод для получения отчёта по остаткам и товарам в перемещении по складам Ozon. <aside class="warning"> Отличается от отчёта в разделе <b>Аналитика → Отчёты → Отчёт по остаткам и товарам в пути на склады Ozon</b> в личном кабинете. </aside>
     *
     * @tags AnalyticsAPI
     * @name AnalyticsApiAnalyticsGetStockOnWarehousesV2
     * @summary Отчёт по остаткам и товарам
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
    /**
     * @description <aside class="warning"> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан». </aside> Отчёт о реализации доставленных и возвращённых товаров за месяц. Отмены и невыкупы не включаются. Соответствует разделу **Финансы → Документы → Отчёты о реализации → Отчёт о реализации товара** в личном кабинете. Отчёт придёт не позднее 5-го числа следующего месяца. [Подробнее об отчёте в Базе знаний продавца](https://seller-edu.ozon.ru/docs/finances-documents/calculations-documents/otchet-o-realizacii-tovarov.html)
     *
     * @tags FinanceAPI
     * @name FinanceApiGetRealizationReportV2
     * @summary Отчёт о реализации товаров (версия 2)
     * @request POST:/v2/finance/realization
     * @response `200` `FinanceApiGetRealizationReportV2Data` Отчёт о реализации
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    financeApiGetRealizationReportV2 = (data: V2GetRealizationReportRequestV2, params: RequestParams = {}) =>
        this.http.request<FinanceApiGetRealizationReportV2Data, FinanceApiGetRealizationReportV2Error>({
            path: `/v2/finance/realization`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список товаров, которые покупатели хотят купить со скидкой. Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1856-Novye-metody-dlia-raboty-s-polucheniem-Spiska-zaiavok-na-skidku/) в сообществе разработчиков Ozon for dev.
     *
     * @tags BetaMethod
     * @name GetDiscountTaskListV2
     * @summary Получить список заявок на скидку
     * @request POST:/v2/actions/discounts-task/list
     * @response `200` `GetDiscountTaskListV2Data` Список заявок
     * @response `default` `RpcStatus` Ошибка
     */
    getDiscountTaskListV2 = (data: V2GetDiscountTaskListV2Request, params: RequestParams = {}) =>
        this.http.request<GetDiscountTaskListV2Data, GetDiscountTaskListV2Error>({
            path: `/v2/actions/discounts-task/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1873-Novyi-metod-polucheniia-makrolokalnykh-klasterov/) в сообществе разработчиков Ozon for dev.
     *
     * @tags BetaMethod
     * @name DraftClusterList
     * @summary Получить информацию о макролокальных кластерах
     * @request POST:/v2/cluster/list
     * @response `200` `DraftClusterListData` Макролокальные кластеры
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    draftClusterList = (params: RequestParams = {}) =>
        this.http.request<DraftClusterListData, DraftClusterListError>({
            path: `/v2/cluster/list`,
            method: 'POST',
            ...params,
        });
    /**
     * No description
     *
     * @tags PolygonAPI
     * @name PolygonBind
     * @summary Связать метод доставки с полигоном
     * @request POST:/v2/polygon/bind
     * @response `200` `PolygonBindData` Успешно
     * @response `default` `RpcStatus` Ошибка
     */
    polygonBind = (data: V2PolygonBindRequest, params: RequestParams = {}) =>
        this.http.request<PolygonBindData, PolygonBindError>({
            path: `/v2/polygon/bind`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). Метод для отметки выбранного сообщения и сообщений до него прочитанными. <br><br> Получите список чатов с покупателем `chats.chat.chat_type="Buyer_Seller"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3).
     *
     * @tags Premium
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
     * @description Проверяет доступность доставки товаров на указанный адрес или в точку выдачи и отображает сроки доставки. Проверяйте наличие товаров и маршруты во время оформления заказа, чтобы точно рассчитать сроки доставки.
     *
     * @tags DeliveryAPI
     * @name DeliveryCheckout
     * @summary Получить доступные варианты доставки
     * @request POST:/v2/delivery/checkout
     * @response `200` `DeliveryCheckoutData` Успешно
     * @response `default` `RpcStatus` Ошибка
     */
    deliveryCheckout = (data: V1DeliveryCheckoutRequest, params: RequestParams = {}) =>
        this.http.request<DeliveryCheckoutData, DeliveryCheckoutError>({
            path: `/v2/delivery/checkout`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Создаёт заказ для покупателя и получателя в системе Ozon. Передайте вариант доставки из ответа метода [/v2/delivery/checkout](#operation/DeliveryCheckout). В ответе могут быть не все отправления. Получите список всех отправлений по номеру заказа `order_number` методом: - [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList) — для схемы FBO; - [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) — для схемы FBS.
     *
     * @tags OrderAPI
     * @name OrderApiOrderCreate
     * @summary Создать заказ
     * @request POST:/v2/order/create
     * @response `200` `OrderApiOrderCreateData` Заказ создан
     * @response `default` `RpcStatus` Ошибка
     */
    orderApiOrderCreate = (data: V1OrderCreateRequest, params: RequestParams = {}) =>
        this.http.request<OrderApiOrderCreateData, OrderApiOrderCreateError>({
            path: `/v2/order/create`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}
