import { AnalyticsStockOnWarehouseRequest, ChatList, ChatRead, PostingCancelFbsPostingRequest, PostingFbsPostingDeliveredRequest, PostingFbsPostingDeliveringRequest, PostingFbsPostingLastMileRequest, PostingFbsPostingTrackingNumberSetRequest, PostingGetFboPostingListRequest, PostingGetFboPostingRequest, PostingGetFbsPostingByBarcodeRequest, PostingMovePostingRequest, PostingPostingFBSActCheckStatusRequest, PostingPostingFBSActCreateRequest, PostingPostingFBSActGetContainerLabelsRequest, PostingPostingFBSGetActRequest, PostingPostingFBSPackageLabelRequest, PostingPostingProductCancelRequest, Productv2DeleteProductsRequest, Productv2ProductsStocksRequest, V1CreateLabelBatchRequest, V1DeliveryCheckoutRequest, V1InvoiceGetRequest, V1OrderCreateRequest, V2CargoesCreateInfoV2Request, V2CarriageDeliveryListV2Request, V2ConditionalCancellationMoveV2Request, V2DeliveryMethodListV2Request, V2DraftCreateInfoRequest, V2DraftSupplyCreateRequest, V2DraftSupplyCreateStatusRequest, V2DraftTimeslotInfoRequest, V2FbsPostingProductCountryListRequest, V2FbsPostingProductCountrySetRequest, V2GetConditionalCancellationListV2Request, V2GetDiscountTaskListV2Request, V2GetProductInfoStocksByWarehouseFbsRequestV2, V2GetRealizationReportRequestV2, V2InvoiceCreateOrUpdateV2Request, V2MovePostingToAwaitingDeliveryRequest, V2PolygonBindRequest, V2PostingFBSActGetPostingsRequest, V2PostingFBSActListRequest, V2PostingFBSDigitalActCheckStatusRequest, V2PostingFBSGetBarcodeRequest, V2PostingFBSGetDigitalActRequest, V2ProductCertificationListRequest, V2ProductInfoPicturesRequest, V2ReportReturnsCreateRequest, V2ReturnsRfbsCompensateRequest, V2ReturnsRfbsGetRequest, V2ReturnsRfbsListRequest, V2ReturnsRfbsReceiveReturnRequest, V2ReturnsRfbsRejectRequest, V2ReturnsRfbsReturnMoneyRequest, V2ReturnsRfbsVerifyRequest, V2WarehouseListV2Request } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class V2<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
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
    productApiDeleteProducts: (data: Productv2DeleteProductsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").Productv2DeleteProductsResponse, import("./data-contracts").RpcStatus>>;
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
    productApiProductInfoPicturesV2: (data: V2ProductInfoPicturesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ProductInfoPicturesResponse, import("./data-contracts").RpcStatus>>;
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
    productApiProductsStocksV2: (data: Productv2ProductsStocksRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").Productv2ProductsStocksResponse, import("./data-contracts").RpcStatus>>;
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
    productApiGetProductInfoStocksByWarehouseFbsV2: (data: V2GetProductInfoStocksByWarehouseFbsRequestV2, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2GetProductInfoStocksByWarehouseFbsResponseV2, import("./data-contracts").RpcStatus>>;
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
    certificateAccordanceTypes: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ProductCertificateAccordanceTypesResponse, import("./data-contracts").GooglerpcStatus>>;
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
    productApiProductCertificationList: (data: V2ProductCertificationListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ProductCertificationListResponse, import("./data-contracts").GooglerpcStatus>>;
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
    warehouseApiDeliveryMethodListV2: (data: V2DeliveryMethodListV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2DeliveryMethodListV2Response, import("./data-contracts").RpcStatus>>;
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
    warehouseListV2: (data: V2WarehouseListV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2WarehouseListV2Response, import("./data-contracts").RpcStatus>>;
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
    postingApiGetFboPostingList: (data: PostingGetFboPostingListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2FboPostingListResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiGetFboPosting: (data: PostingGetFboPostingRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2FboPostingResponse, import("./data-contracts").RpcStatus>>;
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
    draftCreateInfo: (data: V2DraftCreateInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2DraftCreateInfoResponse, import("./data-contracts").GooglerpcStatus>>;
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
    draftTimeslotInfo: (data: V2DraftTimeslotInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2DraftTimeslotInfoResponse, import("./data-contracts").GooglerpcStatus>>;
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
    cargoesCreateInfoV2: (data: V2CargoesCreateInfoV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2CargoesCreateInfoV2Response, import("./data-contracts").GooglerpcStatus>>;
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
    draftSupplyCreate: (data: V2DraftSupplyCreateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2DraftSupplyCreateResponse, import("./data-contracts").GooglerpcStatus>>;
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
    draftSupplyCreateStatus: (data: V2DraftSupplyCreateStatusRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2DraftSupplyCreateStatusResponse, import("./data-contracts").GooglerpcStatus>>;
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
    carriageApiCarriageDeliveryListV2: (data: V2CarriageDeliveryListV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2CarriageDeliveryListV2Response, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsActCreate: (data: PostingPostingFBSActCreateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingPostingFBSActCreateResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiActPostingList: (data: V2PostingFBSActGetPostingsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2PostingFBSActGetPostingsResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsActGetContainerLabels: (data: PostingPostingFBSActGetContainerLabelsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingPostingFBSActGetContainerLabelsResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsGetBarcode: (data: V2PostingFBSGetBarcodeRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2PostingFBSGetBarcodeResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsGetBarcodeText: (data: V2PostingFBSGetBarcodeRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2PostingFBSGetBarcodeTextResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsDigitalActCheckStatus: (data: V2PostingFBSDigitalActCheckStatusRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2PostingFBSDigitalActCheckStatusResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsGetAct: (data: PostingPostingFBSGetActRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingPostingFBSGetActResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiFbsActList: (data: V2PostingFBSActListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2PostingFBSActListResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsGetDigitalAct: (data: V2PostingFBSGetDigitalActRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2PostingFBSGetDigitalActResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiPostingFbsActCheckStatus: (data: PostingPostingFBSActCheckStatusRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingPostingFBSActCheckStatusResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiFbsPostingTrackingNumberSet: (data: PostingFbsPostingTrackingNumberSetRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingFbsPostingMoveStatusResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiFbsPostingDelivering: (data: PostingFbsPostingDeliveringRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingFbsPostingMoveStatusResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiFbsPostingLastMile: (data: PostingFbsPostingLastMileRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingFbsPostingMoveStatusResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiFbsPostingDelivered: (data: PostingFbsPostingDeliveredRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingFbsPostingMoveStatusResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiGetFbsPostingByBarcode: (data: PostingGetFbsPostingByBarcodeRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2FbsPostingResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiListCountryProductFbsPostingV2: (data: V2FbsPostingProductCountryListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2FbsPostingProductCountryListResponse, import("./data-contracts").GooglerpcStatus>>;
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
    postingApiSetCountryProductFbsPostingV2: (data: V2FbsPostingProductCountrySetRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2FbsPostingProductCountrySetResponse, import("./data-contracts").GooglerpcStatus>>;
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
    postingApiPostingFbsPackageLabel: (data: PostingPostingFBSPackageLabelRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingPostingFBSPackageLabelResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiCreateLabelBatchV2: (data: V1CreateLabelBatchRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2CreateLabelBatchResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiGetPostingFbsCancelReasonList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingCancelReasonListResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiCancelFbsPostingProduct: (data: PostingPostingProductCancelRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingPostingProductCancelResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiCancelFbsPosting: (data: PostingCancelFbsPostingRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingBooleanResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiMoveFbsPostingToArbitration: (data: PostingMovePostingRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingBooleanResponse, import("./data-contracts").RpcStatus>>;
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
    postingApiMoveFbsPostingToAwaitingDelivery: (data: V2MovePostingToAwaitingDeliveryRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").PostingBooleanResponse, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsListV2: (data: V2ReturnsRfbsListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ReturnsRfbsListResponse, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsGetV2: (data: V2ReturnsRfbsGetRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ReturnsRfbsGetResponse, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsRejectV2: (data: V2ReturnsRfbsRejectRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsCompensateV2: (data: V2ReturnsRfbsCompensateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsVerifyV2: (data: V2ReturnsRfbsVerifyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsReceiveReturnV2: (data: V2ReturnsRfbsReceiveReturnRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object, import("./data-contracts").RpcStatus>>;
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
    rfbsReturnsApiReturnsRfbsReturnMoneyV2: (data: V2ReturnsRfbsReturnMoneyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<object, import("./data-contracts").RpcStatus>>;
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
    cancellationApiGetConditionalCancellationListV2: (data: V2GetConditionalCancellationListV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2GetConditionalCancellationListV2Response, import("./data-contracts").RpcStatus>>;
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
    cancellationApiConditionalCancellationApproveV2: (data: V2ConditionalCancellationMoveV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, import("./data-contracts").RpcStatus>>;
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
    cancellationApiConditionalCancellationRejectV2: (data: V2ConditionalCancellationMoveV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, import("./data-contracts").RpcStatus>>;
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
    chatApiChatListV2: (data: ChatList, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ChatListResponse, import("./data-contracts").RpcStatus>>;
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
    invoiceApiInvoiceCreateOrUpdateV2: (data: V2InvoiceCreateOrUpdateV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2InvoiceCreateOrUpdateV2Response, import("./data-contracts").RpcStatus>>;
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
    invoiceGetV2: (data: V1InvoiceGetRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2InvoiceGetV2Response, import("./data-contracts").RpcStatus>>;
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
    reportApiReportReturnsCreate: (data: V2ReportReturnsCreateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ReportReturnsCreateResponse, import("./data-contracts").RpcStatus>>;
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
    analyticsApiAnalyticsGetStockOnWarehousesV2: (data: AnalyticsStockOnWarehouseRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").AnalyticsStockOnWarehouseResponse, import("./data-contracts").RpcStatus>>;
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
    financeApiGetRealizationReportV2: (data: V2GetRealizationReportRequestV2, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2GetRealizationReportResponseV2, import("./data-contracts").RpcStatus>>;
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
    getDiscountTaskListV2: (data: V2GetDiscountTaskListV2Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2GetDiscountTaskListV2Response, import("./data-contracts").RpcStatus>>;
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
    draftClusterList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2DraftClusterListResponse, import("./data-contracts").RpcStatus>>;
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
    polygonBind: (data: V2PolygonBindRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, import("./data-contracts").RpcStatus>>;
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
    chatApiChatReadV2: (data: ChatRead, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V2ChatReadResponse, import("./data-contracts").RpcStatus>>;
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
    deliveryCheckout: (data: V1DeliveryCheckoutRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V1DeliveryCheckoutResponse, import("./data-contracts").RpcStatus>>;
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
    orderApiOrderCreate: (data: V1OrderCreateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V1OrderCreateResponse, import("./data-contracts").RpcStatus>>;
}
