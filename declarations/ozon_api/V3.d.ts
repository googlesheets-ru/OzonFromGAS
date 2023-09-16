import { HttpClient, RequestParams } from './http-client';
export declare class V3<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * @description Получение характеристик для указанной категории товаров. Передавайте не более 20 идентификаторов категорий в списке `category_id`. Узнать, есть ли у атрибута вложенный справочник, можно по параметру `dictionary_id`. Если значение `0` — справочника нет. Если значение другое, то справочники есть. Их нужно запрашивать методом [/v2/category/attribute/values](#operation/CategoryAPI_DictionaryValueBatch).
     *
     * @tags CategoryAPI
     * @name CategoryApiGetCategoryAttributesV3
     * @summary Список характеристик категории
     * @request POST:/v3/category/attribute
     * @response `200` `CategoryApiGetCategoryAttributesV3Data` Список характеристик категории
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    categoryApiGetCategoryAttributesV3: (data: Categoryv3CategoryAttributesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CategoryApiGetCategoryAttributesV3Data, CategoryApiGetCategoryAttributesV3Error>>;
    /**
     * @description Возвращает описание характеристик товара по его идентификатору. Товар можно искать по `offer_id` или `product_id`.
     *
     * @tags ProductAPI
     * @name ProductApiGetProductAttributesV3
     * @summary Получить описание характеристик товара
     * @request POST:/v3/products/info/attributes
     * @response `200` `ProductApiGetProductAttributesV3Data` Описание характеристик товара
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductAttributesV3: (data: Productv3GetProductAttributesV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductAttributesV3Data, ProductApiGetProductAttributesV3Error>>;
    /**
     * @description <aside class="warning"> 1 апреля 2023 года мы отключим этот метод. Переключитесь на метод <a href="#operation/ProductAPI_GetUploadQuota">/v4/product/info/limit</a>. </aside> Метод для получения информации: - Об общем лимите — сколько всего товаров можно отредактировать и создать в сутки. - О лимите на создание товаров — сколько товаров можно создать в сутки в рамках общего лимита. Общий лимит можно полностью потратить на редактирование товаров. Создавать товары можно, если вы ещё не израсходовали лимит на создание товаров и общий лимит. [Подробнее о лимитах в Базе знаний продавца](https://seller-edu.ozon.ru/work-with-goods/zagruzka-tovarov/creating-goods/limit/)
     *
     * @tags ProductAPI
     * @name ProductApiGetProductInfoLimit
     * @summary Получить информацию о лимитах на загрузку и обновление товаров
     * @request POST:/v3/product/info/limit
     * @response `200` `ProductApiGetProductInfoLimitData` Информация о лимитах на загрузку и обновление товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoLimit: (data: V1Empty, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductInfoLimitData, ProductApiGetProductInfoLimitError>>;
    /**
     * @description Возвращает информацию о ĸоличестве товаров на сĸладах: - сĸольĸо единиц есть в наличии, - сĸольĸо зарезервировано поĸупателями.
     *
     * @tags Prices&StocksAPI
     * @name ProductApiGetProductInfoStocksV3
     * @summary Информация о количестве товаров
     * @request POST:/v3/product/info/stocks
     * @response `200` `ProductApiGetProductInfoStocksV3Data` Количество товара
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoStocksV3: (data: Productv3GetProductInfoStocksV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductInfoStocksV3Data, ProductApiGetProductInfoStocksV3Error>>;
    /**
     * @description Возвращает список необработанных отправлений за указанный период времени — он должен быть не больше одного года. Возможные статусы отправлений: - `awaiting_registration` — ожидает регистрации, - `acceptance_in_progress` — идёт приёмка, - `awaiting_approve` — ожидает подтверждения, - `awaiting_packaging` — ожидает упаковки, - `awaiting_deliver` — ожидает отгрузки, - `arbitration` — арбитраж, - `client_arbitration` — клиентский арбитраж доставки, - `delivering` — доставляется, - `driver_pickup` — у водителя, - `delivered` — доставлено, - `cancelled` — отменено, - `not_accepted` — не принят на сортировочном центре, - `sent_by_seller` — отправлено продавцом.
     *
     * @tags FBS
     * @name PostingApiGetFbsPostingUnfulfilledList
     * @summary Список необработанных отправлений (версия 3)
     * @request POST:/v3/posting/fbs/unfulfilled/list
     * @response `200` `PostingApiGetFbsPostingUnfulfilledListData` Список необработанных отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFbsPostingUnfulfilledList: (data: Postingv3GetFbsPostingUnfulfilledListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetFbsPostingUnfulfilledListData, PostingApiGetFbsPostingUnfulfilledListError>>;
    /**
     * @description Возвращает список отправлений за указанный период времени — он должен быть не больше одного года. Дополнительно можно отфильтровать отправления по их статусу — список доступных для выдачи статусов указан в описании параметра `filter.status`. `has_next = true` в ответе может значить, что вернули не весь массив отправлений. Чтобы получить информацию об остальных отправлениях, сделайте новый запрос с другим значением `offset`.
     *
     * @tags FBS
     * @name PostingApiGetFbsPostingListV3
     * @summary Список отправлений (версия 3)
     * @request POST:/v3/posting/fbs/list
     * @response `200` `PostingApiGetFbsPostingListV3Data` Список отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFbsPostingListV3: (data: Postingv3GetFbsPostingListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetFbsPostingListV3Data, PostingApiGetFbsPostingListV3Error>>;
    /**
     * No description
     *
     * @tags FBS
     * @name PostingApiGetFbsPostingV3
     * @summary Получить информацию об отправлении по идентификатору
     * @request POST:/v3/posting/fbs/get
     * @response `200` `PostingApiGetFbsPostingV3Data` Информация об отправлении
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFbsPostingV3: (data: Postingv3GetFbsPostingRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetFbsPostingV3Data, PostingApiGetFbsPostingV3Error>>;
    /**
     * @description Метод для передачи количества коробок для отправлений, в которых есть многокоробочные товары. Используйте метод при работе по схеме rFBS Агрегатор — c доставкой партнёрами Ozon.
     *
     * @tags FBS
     * @name PostingApiPostingMultiBoxQtySetV3
     * @summary Указать количество коробок для многокоробочных отправлений
     * @request POST:/v3/posting/multiboxqty/set
     * @response `200` `PostingApiPostingMultiBoxQtySetV3Data` Количество коробок указано
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiPostingMultiBoxQtySetV3: (data: Postingv3PostingMultiBoxQtySetV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiPostingMultiBoxQtySetV3Data, PostingApiPostingMultiBoxQtySetV3Error>>;
    /**
     * @description Делит заказ на отправления и переводит его в статус `awaiting_deliver`. Каждый элемент в `packages` может содержать несколько элементов `products` или отправлений. Каждый элемент в `products` — это товар, включённый в данное отправление. Разделить заказ нужно, если: - товары не помещаются в одну упаковку, - товары нельзя сложить в одну упаковку. Отличается от [/v2/posting/fbs/ship](#operation/PostingAPI_ShipFbsPosting) наличием в запросе параметра `exemplar_info`. При необходимости укажите номер грузовой таможенной декларации в параметре `gtd`. Если его нет, передайте значение `is_gtd_absent = true`.
     *
     * @tags FBS
     * @name PostingApiShipFbsPostingV3
     * @summary Собрать заказ (версия 3)
     * @request POST:/v3/posting/fbs/ship
     * @response `200` `PostingApiShipFbsPostingV3Data` Заказ собран
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiShipFbsPostingV3: (data: V3FbsPostingShipRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiShipFbsPostingV3Data, PostingApiShipFbsPostingV3Error>>;
    /**
     * @description Если в запросе передать часть продуктов из отправления, то в результате обработки запроса первичное отправление разделится на две части. В первичном несобранном отправлении останется часть продуктов, которую не передали в запросе. Статус изначального отправления изменится только после изменения статуса отправлений, на которые он разделился.
     *
     * @tags FBS
     * @name PostingApiPackageShipFbsPostingV3
     * @summary Частичная сборка отправления
     * @request POST:/v3/posting/fbs/ship/package
     * @response `200` `PostingApiPackageShipFbsPostingV3Data` Отправление собрано
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiPackageShipFbsPostingV3: (data: V3FbsPostingShipByPackageRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiPackageShipFbsPostingV3Data, PostingApiPackageShipFbsPostingV3Error>>;
    /**
     * @description Метод для получения информации о возвращённых товарах, которые продаются со склада Ozon.
     *
     * @tags ReturnsAPI
     * @name ReturnsApiGetReturnsCompanyFbo
     * @summary Получить информацию о возвратах FBO (версия 3)
     * @request POST:/v3/returns/company/fbo
     * @response `200` `ReturnsApiGetReturnsCompanyFboData` Информация о возвратах FBO
     * @response `default` `RpcStatus` Ошибка
     */
    returnsApiGetReturnsCompanyFbo: (data: V3GetReturnsCompanyFboV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReturnsApiGetReturnsCompanyFboData, ReturnsApiGetReturnsCompanyFboError>>;
    /**
     * @description Метод для получения информации о возвращённых товарах, которые продаются со склада продавца.
     *
     * @tags ReturnsAPI
     * @name ReturnsApiGetReturnsCompanyFbSv3
     * @summary Получить информацию о возвратах FBS (версия 3)
     * @request POST:/v3/returns/company/fbs
     * @response `200` `ReturnsApiGetReturnsCompanyFbSv3Data` Информация о возвратах
     * @response `default` `RpcStatus` Ошибка
     */
    returnsApiGetReturnsCompanyFbSv3: (data: V3GetReturnsCompanyFbsV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReturnsApiGetReturnsCompanyFbSv3Data, ReturnsApiGetReturnsCompanyFbSv3Error>>;
    /**
     * @description Возвращает подробную информацию по всем начислениям. Максимальный период, за который можно получить информацию в одном запросе — 1 месяц. Если в запросе не указывать `posting_number`, то в ответе будут все отправления за указанный период или отправления определённого типа.
     *
     * @tags FinanceAPI
     * @name FinanceApiFinanceTransactionListV3
     * @summary Список транзакций (версия 3)
     * @request POST:/v3/finance/transaction/list
     * @response `200` `FinanceApiFinanceTransactionListV3Data` Список транзакций
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    financeApiFinanceTransactionListV3: (data: Financev3FinanceTransactionListV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<FinanceApiFinanceTransactionListV3Data, FinanceApiFinanceTransactionListV3Error>>;
    /**
     * @description Возвращает итоговые суммы по транзакциям за указанный период.
     *
     * @tags FinanceAPI
     * @name FinanceApiFinanceTransactionTotalV3
     * @summary Суммы транзакций
     * @request POST:/v3/finance/transaction/totals
     * @response `200` `FinanceApiFinanceTransactionTotalV3Data` Суммы транзакций
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    financeApiFinanceTransactionTotalV3: (data: Financev3FinanceTransactionTotalsV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<FinanceApiFinanceTransactionTotalV3Data, FinanceApiFinanceTransactionTotalV3Error>>;
}
