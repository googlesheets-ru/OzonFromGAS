import { HttpClient, RequestParams } from './http-client';
export declare class V1<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
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
    productApiGetImportProductsInfo: (data: ProductGetImportProductsInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetImportProductsInfoData, ProductApiGetImportProductsInfoError>>;
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
    productApiImportProductsBySku: (data: ProductImportProductsBySKURequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiImportProductsBySkuData, ProductApiImportProductsBySkuError>>;
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
    productApiProductImportPictures: (data: Productv1ProductImportPicturesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductImportPicturesData, ProductApiProductImportPicturesError>>;
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
    productApiProductInfoPictures: (data: Productv1ProductInfoPicturesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductInfoPicturesData, ProductApiProductInfoPicturesError>>;
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
    productApiGetProductRatingBySku: (data: V1GetProductRatingBySkuRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductRatingBySkuData, ProductApiGetProductRatingBySkuError>>;
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
    productApiGetProductInfoDescription: (data: ProductGetProductInfoDescriptionRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductInfoDescriptionData, ProductApiGetProductInfoDescriptionError>>;
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
    productApiProductUpdateOfferId: (data: V1ProductUpdateOfferIdRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductUpdateOfferIdData, ProductApiProductUpdateOfferIdError>>;
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
    productApiProductArchive: (data: ProductProductArchiveRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductArchiveData, ProductApiProductArchiveError>>;
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
    productApiProductUnarchive: (data: ProductProductUnarchiveRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductUnarchiveData, ProductApiProductUnarchiveError>>;
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
    productApiGetGeoRestrictionsV1: (data: Productv2GetGeoRestrictionsByFilterRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetGeoRestrictionsV1Data, ProductApiGetGeoRestrictionsV1Error>>;
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
    productApiUploadDigitalCode: (data: V1ProductUploadDigitalCodesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiUploadDigitalCodeData, ProductApiUploadDigitalCodeError>>;
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
    productApiUploadDigitalCodeInfo: (data: V1ProductUploadDigitalCodesRequestInfo, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiUploadDigitalCodeInfoData, ProductApiUploadDigitalCodeInfoError>>;
    /**
     * @description Метод для получения количества пользователей, которые нажали **Узнать о поступлении** на странице товара. Вы можете передать несколько товаров в запросе.
     *
     * @tags ProductAPI
     * @name ProductApiGetProductInfoSubscription
     * @summary Количество подписавшихся на товар пользователей
     * @request POST:/v1/product/info/subscription
     * @response `200` `ProductApiGetProductInfoSubscriptionData` Количество подписавшихся пользователей
     * @response `default` `RpcStatus` Ошибка
     */
    productApiGetProductInfoSubscription: (data: V1GetProductInfoSubscriptionRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductInfoSubscriptionData, ProductApiGetProductInfoSubscriptionError>>;
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
    productApiImportProductsStocks: (data: ProductImportProductsStocksRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiImportProductsStocksData, ProductApiImportProductsStocksError>>;
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
    productApiProductStocksByWarehouseFbs: (data: Productsv1GetProductInfoStocksByWarehouseFbsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductStocksByWarehouseFbsData, ProductApiProductStocksByWarehouseFbsError>>;
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
    productApiImportProductsPrices: (data: ProductImportProductsPricesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiImportProductsPricesData, ProductApiImportProductsPricesError>>;
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
    productApiGetProductInfoDiscounted: (data: V1GetProductInfoDiscountedRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiGetProductInfoDiscountedData, ProductApiGetProductInfoDiscountedError>>;
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
    productApiProductUpdateDiscount: (data: V1ProductUpdateDiscountRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductUpdateDiscountData, ProductApiProductUpdateDiscountError>>;
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
    promos: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosData, PromosError>>;
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
    promosCandidates: (data: SellerApiGetSellerProductV1Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosCandidatesData, PromosCandidatesError>>;
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
    promosProducts: (data: SellerApiGetSellerProductV1Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosProductsData, PromosProductsError>>;
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
    promosProductsActivate: (data: SellerApiActivateProductV1Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosProductsActivateData, PromosProductsActivateError>>;
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
    promosProductsDeactivate: (data: SellerApiProductIDsV1Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosProductsDeactivateData, PromosProductsDeactivateError>>;
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
    actionsApiGetHotSalesList: (data: V1GetHotSalesListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ActionsApiGetHotSalesListData, ActionsApiGetHotSalesListError>>;
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
    actionsApiGetHotSalesProducts: (data: V1GetHotSalesProductsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ActionsApiGetHotSalesProductsData, ActionsApiGetHotSalesProductsError>>;
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
    actionsApiActivateHotSalesProducts: (data: V1ActivateHotSalesProductsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ActionsApiActivateHotSalesProductsData, ActionsApiActivateHotSalesProductsError>>;
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
    actionsApiDeactivateHotSalesProducts: (data: V1DeactivateHotSalesProductsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ActionsApiDeactivateHotSalesProductsData, ActionsApiDeactivateHotSalesProductsError>>;
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
    promosTaskList: (data: V1GetDiscountTaskListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosTaskListData, PromosTaskListError>>;
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
    promosTaskApprove: (data: V1ApproveDiscountTasksRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosTaskApproveData, PromosTaskApproveError>>;
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
    promosTaskDecline: (data: V1DeclineDiscountTasksRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PromosTaskDeclineData, PromosTaskDeclineError>>;
    /**
     * @description Метод для получения списка конкурентов — продавцов с похожими товарами в других интернет-магазинах и маркетплейсах.
     *
     * @tags PricingStrategyAPI
     * @name PricingCompetitors
     * @summary Список конкурентов
     * @request POST:/v1/pricing-strategy/competitors/list
     * @response `200` `PricingCompetitorsData` Список конкурентов
     * @response `default` `RpcStatus` Ошибка
     */
    pricingCompetitors: (data: V1GetCompetitorsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingCompetitorsData, PricingCompetitorsError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingList
     * @summary Список стратегий
     * @request POST:/v1/pricing-strategy/list
     * @response `200` `PricingListData` Список стратегий
     * @response `default` `RpcStatus` Ошибка
     */
    pricingList: (data: V1GetStrategyListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingListData, PricingListError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingCreate
     * @summary Создать стратегию
     * @request POST:/v1/pricing-strategy/create
     * @response `200` `PricingCreateData` Стратегия создана
     * @response `default` `RpcStatus` Ошибка
     */
    pricingCreate: (data: V1CreatePricingStrategyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingCreateData, PricingCreateError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingInfo
     * @summary Информация о стратегии
     * @request POST:/v1/pricing-strategy/info
     * @response `200` `PricingInfoData` Информация о стратегии
     * @response `default` `RpcStatus` Ошибка
     */
    pricingInfo: (data: V1StrategyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingInfoData, PricingInfoError>>;
    /**
     * @description Можно обновить все стратегии кроме системной.
     *
     * @tags PricingStrategyAPI
     * @name PricingUpdate
     * @summary Обновить стратегию
     * @request POST:/v1/pricing-strategy/update
     * @response `200` `PricingUpdateData` Стратегия обновлена
     * @response `default` `RpcStatus` Ошибка
     */
    pricingUpdate: (data: V1UpdatePricingStrategyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingUpdateData, PricingUpdateError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingItemsAdd
     * @summary Добавить товары в стратегию
     * @request POST:/v1/pricing-strategy/products/add
     * @response `200` `PricingItemsAddData` Ошибки при добавлении товаров
     * @response `default` `RpcStatus` Ошибка
     */
    pricingItemsAdd: (data: V1AddStrategyItemsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingItemsAddData, PricingItemsAddError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingIds
     * @summary Список идентификаторов стратегий
     * @request POST:/v1/pricing-strategy/strategy-ids-by-product-ids
     * @response `200` `PricingIdsData` Список идентификаторов
     * @response `default` `RpcStatus` Ошибка
     */
    pricingIds: (data: V1ItemIDsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingIdsData, PricingIdsError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingItemsList
     * @summary Список товаров в стратегии
     * @request POST:/v1/pricing-strategy/products/list
     * @response `200` `PricingItemsListData` Список товаров
     * @response `default` `RpcStatus` Ошибка
     */
    pricingItemsList: (data: V1StrategyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingItemsListData, PricingItemsListError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingItemsInfo
     * @summary Цена товара у конкурента
     * @request POST:/v1/pricing-strategy/product/info
     * @response `200` `PricingItemsInfoData` Цена товара у конкурента
     * @response `default` `RpcStatus` Ошибка
     */
    pricingItemsInfo: (data: V1GetStrategyItemInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingItemsInfoData, PricingItemsInfoError>>;
    /**
     * No description
     *
     * @tags PricingStrategyAPI
     * @name PricingItemsDelete
     * @summary Удалить товары из стратегии
     * @request POST:/v1/pricing-strategy/products/delete
     * @response `200` `PricingItemsDeleteData` Ошибки при удалении товаров
     * @response `default` `RpcStatus` Ошибка
     */
    pricingItemsDelete: (data: V1ItemIDsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingItemsDeleteData, PricingItemsDeleteError>>;
    /**
     * @description Можно изменить статус любой стратегии кроме системной.
     *
     * @tags PricingStrategyAPI
     * @name PricingStatus
     * @summary Изменить статус стратегии
     * @request POST:/v1/pricing-strategy/status
     * @response `200` `PricingStatusData` Статус стратегии изменён
     * @response `default` `RpcStatus` Ошибка
     */
    pricingStatus: (data: V1UpdateStatusStrategyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingStatusData, PricingStatusError>>;
    /**
     * @description Можно удалить любую стратегию кроме системной.
     *
     * @tags PricingStrategyAPI
     * @name PricingDelete
     * @summary Удалить стратегию
     * @request POST:/v1/pricing-strategy/delete
     * @response `200` `PricingDeleteData` Стратегия удалена
     * @response `default` `RpcStatus` Ошибка
     */
    pricingDelete: (data: V1StrategyRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PricingDeleteData, PricingDeleteError>>;
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
    brandApiBrandCompanyCertificationList: (data: BrandBrandCompanyCertificationListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<BrandApiBrandCompanyCertificationListData, BrandApiBrandCompanyCertificationListError>>;
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
    productApiProductCertificateAccordanceTypes: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductCertificateAccordanceTypesData, ProductApiProductCertificateAccordanceTypesError>>;
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
    productApiProductCertificateTypes: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductCertificateTypesData, ProductApiProductCertificateTypesError>>;
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
    productApiProductCertificationList: (data: ProductProductCertificationListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductCertificationListData, ProductApiProductCertificationListError>>;
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
    productApiProductCertificateCreate: (data: ProductApiProductCertificateCreatePayload, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductCertificateCreateData, ProductApiProductCertificateCreateError>>;
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
    productApiProductCertificateBind: (data: ProductProductCertificateBindRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductApiProductCertificateBindData, ProductApiProductCertificateBindError>>;
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
    certificateDelete: (data: V1ProductCertificateDeleteRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CertificateDeleteData, CertificateDeleteError>>;
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
    certificateInfo: (data: V1ProductCertificateInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CertificateInfoData, CertificateInfoError>>;
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
    certificateList: (data: V1ProductCertificateListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CertificateListData, CertificateListError>>;
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
    productStatusList: (data: V1ProductCertificateProductStatusListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ProductStatusListData, ProductStatusListError>>;
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
    certificateProductsList: (data: V1ProductCertificateProductsListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CertificateProductsListData, CertificateProductsListError>>;
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
    certificateUnbind: (data: V1ProductCertificateUnbindRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CertificateUnbindData, CertificateUnbindError>>;
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
    rejectionReasonsList: (data: V1ProductCertificateRejectionReasonsListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<RejectionReasonsListData, RejectionReasonsListError>>;
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
    certificateStatusList: (data: V1ProductCertificateStatusListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CertificateStatusListData, CertificateStatusListError>>;
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
    warehouseApiWarehouseList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<WarehouseApiWarehouseListData, WarehouseApiWarehouseListError>>;
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
    warehouseApiDeliveryMethodList: (data: WarehouseDeliveryMethodListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<WarehouseApiDeliveryMethodListData, WarehouseApiDeliveryMethodListError>>;
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
    polygonApiCreatePolygon: (data: Polygonv1PolygonCreateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PolygonApiCreatePolygonData, PolygonApiCreatePolygonError>>;
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
    polygonApiBindPolygon: (data: Polygonv1PolygonBindRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PolygonApiBindPolygonData, PolygonApiBindPolygonError>>;
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
    polygonApiDeletePolygon: (data: Polygonv1PolygonDeleteRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PolygonApiDeletePolygonData, PolygonApiDeletePolygonError>>;
    /**
     * @description Метод для получения списка заявок на поставку. Учитываются заявки с поставкой на конкретный склад и [через виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).
     *
     * @tags FBO
     * @name SupplyOrderApiGetSupplyOrdersList
     * @summary Список заявок на поставку на склад Ozon
     * @request POST:/v1/supply-order/list
     * @response `200` `SupplyOrderApiGetSupplyOrdersListData` Список заявок на поставку
     * @response `default` `RpcStatus` Ошибка
     */
    supplyOrderApiGetSupplyOrdersList: (data: V1GetSupplyOrdersListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<SupplyOrderApiGetSupplyOrdersListData, SupplyOrderApiGetSupplyOrdersListError>>;
    /**
     * @description Метод для получения детальной информации по заявке на поставку. Учитываются заявки с поставкой на конкретный склад и [через виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).
     *
     * @tags FBO
     * @name SupplyOrderApiGetSupplyOrder
     * @summary Информация о заявке на поставку
     * @request POST:/v1/supply-order/get
     * @response `200` `SupplyOrderApiGetSupplyOrderData` Информация о заявке
     * @response `default` `RpcStatus` Ошибка
     */
    supplyOrderApiGetSupplyOrder: (data: V1GetSupplyOrderRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<SupplyOrderApiGetSupplyOrderData, SupplyOrderApiGetSupplyOrderError>>;
    /**
     * No description
     *
     * @tags FBO
     * @name SupplyOrderApiGetSupplyOrderItems
     * @summary Список товаров в заявке на поставку
     * @request POST:/v1/supply-order/items
     * @response `200` `SupplyOrderApiGetSupplyOrderItemsData` Список товаров
     * @response `default` `RpcStatus` Ошибка
     */
    supplyOrderApiGetSupplyOrderItems: (data: V1GetSupplyOrderItemsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<SupplyOrderApiGetSupplyOrderItemsData, SupplyOrderApiGetSupplyOrderItemsError>>;
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
    postingApiGetRestrictions: (data: V1GetRestrictionsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetRestrictionsData, PostingApiGetRestrictionsError>>;
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
    postingApiGetCarriageAvailableList: (data: Postingv1GetCarriageAvailableListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetCarriageAvailableListData, PostingApiGetCarriageAvailableListError>>;
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
    postingApiCreateLabelBatch: (data: V1CreateLabelBatchRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiCreateLabelBatchData, PostingApiCreateLabelBatchError>>;
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
    postingApiGetLabelBatch: (data: V1GetLabelBatchRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetLabelBatchData, PostingApiGetLabelBatchError>>;
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
    postingApiGetPostingFbsCancelReasonV1: (data: PostingCancelReasonRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetPostingFbsCancelReasonV1Data, PostingApiGetPostingFbsCancelReasonV1Error>>;
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
    postingApiPostingTimeslotChangeRestrictions: (data: V1PostingFbsTimeslotChangeRestrictionsRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiPostingTimeslotChangeRestrictionsData, PostingApiPostingTimeslotChangeRestrictionsError>>;
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
    postingApiSetPostingTimeslot: (data: V1PostingFbsTimeslotSetRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiSetPostingTimeslotData, PostingApiSetPostingTimeslotError>>;
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
    postingApiGetEtgb: (data: V1GetEtgbRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<PostingApiGetEtgbData, PostingApiGetEtgbError>>;
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
    cancellationApiGetConditionalCancellation: (data: V1GetConditionalCancellationRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CancellationApiGetConditionalCancellationData, CancellationApiGetConditionalCancellationError>>;
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
    cancellationApiGetConditionalCancellationList: (data: V1GetConditionalCancellationListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CancellationApiGetConditionalCancellationListData, CancellationApiGetConditionalCancellationListError>>;
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
    cancellationApiConditionalCancellationApprove: (data: V1ConditionalCancellationMoveRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CancellationApiConditionalCancellationApproveData, CancellationApiConditionalCancellationApproveError>>;
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
    cancellationApiConditionalCancellationReject: (data: V1ConditionalCancellationMoveRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<CancellationApiConditionalCancellationRejectData, CancellationApiConditionalCancellationRejectError>>;
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
    chatApiChatList: (data: ChatChatListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatApiChatListData, ChatApiChatListError>>;
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
    chatApiChatSendMessage: (data: ChatChatSendMessageRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatApiChatSendMessageData, ChatApiChatSendMessageError>>;
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
    chatApiChatSendFile: (data: ChatChatSendFileRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatApiChatSendFileData, ChatApiChatSendFileError>>;
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
    chatApiChatHistory: (data: ChatChatHistoryRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatApiChatHistoryData, ChatApiChatHistoryError>>;
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
    chatApiChatUpdates: (data: ChatChatUpdatesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatApiChatUpdatesData, ChatApiChatUpdatesError>>;
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
    chatApiChatStart: (data: ChatChatStartRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ChatApiChatStartData, ChatApiChatStartError>>;
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
    invoiceCreate: (data: V1InvoiceCreateOrUpdateRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<InvoiceCreateData, InvoiceCreateError>>;
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
    invoiceGet: (data: V1InvoiceGetRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<InvoiceGetData, InvoiceGetError>>;
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
    invoiceDelete: (data: V1InvoiceDeleteRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<InvoiceDeleteData, InvoiceDeleteError>>;
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
    reportApiReportInfo: (data: ReportReportInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiReportInfoData, ReportApiReportInfoError>>;
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
    reportApiReportList: (data: ReportReportListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiReportListData, ReportApiReportListError>>;
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
    reportApiCreateCompanyProductsReport: (data: ReportCreateCompanyProductsReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyProductsReportData, ReportApiCreateCompanyProductsReportError>>;
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
    reportApiCreateCompanyTransactionsReport: (data: ReportCreateCompanyTransactionsReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyTransactionsReportData, ReportApiCreateCompanyTransactionsReportError>>;
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
    reportApiCreateCompanyProductsPricesReport: (data: ReportCreateCompanyProductsPricesReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyProductsPricesReportData, ReportApiCreateCompanyProductsPricesReportError>>;
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
    reportApiCreateCompanyStockReport: (data: ReportCreateCompanyStockReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyStockReportData, ReportApiCreateCompanyStockReportError>>;
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
    reportApiCreateProductsMovementReport: (data: ReportCreateProductsMovementReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateProductsMovementReportData, ReportApiCreateProductsMovementReportError>>;
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
    reportApiCreateCompanyReturnsReport: (data: ReportCreateCompanyReturnsReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyReturnsReportData, ReportApiCreateCompanyReturnsReportError>>;
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
    reportApiCreateCompanyPostingsReport: (data: ReportCreateCompanyPostingsReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyPostingsReportData, ReportApiCreateCompanyPostingsReportError>>;
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
    reportApiCreateCompanyFinanceReport: (data: ReportCreateCompanyFinanceReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateCompanyFinanceReportData, ReportApiCreateCompanyFinanceReportError>>;
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
    financeApiFinanceCashFlowStatementList: (data: V3FinanceCashFlowStatementListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<FinanceApiFinanceCashFlowStatementListData, FinanceApiFinanceCashFlowStatementListError>>;
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
    reportApiCreateDiscountedReport: (data: ReportCreateDiscountedRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiCreateDiscountedReportData, ReportApiCreateDiscountedReportError>>;
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
    reportApiDiscountedReportInfo: (data: ReportDiscountedInfoRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiDiscountedReportInfoData, ReportApiDiscountedReportInfoError>>;
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
    reportApiDiscountedReportList: (data: ReportDiscountedListRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ReportApiDiscountedReportListData, ReportApiDiscountedReportListError>>;
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
    analyticsApiAnalyticsGetData: (data: AnalyticsAnalyticsGetDataRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<AnalyticsApiAnalyticsGetDataData, AnalyticsApiAnalyticsGetDataError>>;
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
    analyticsApiAnalyticsGetStockOnWarehouses: (data: AnalyticsAnalyticsGetStockOnWarehousesRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<AnalyticsApiAnalyticsGetStockOnWarehousesData, AnalyticsApiAnalyticsGetStockOnWarehousesError>>;
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
    analyticsApiAnalyticsItemTurnoverDataV3: (data: V1AnalyticsItemTurnoverDataV3Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<AnalyticsApiAnalyticsItemTurnoverDataV3Data, AnalyticsApiAnalyticsItemTurnoverDataV3Error>>;
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
    financeApiGetRealizationReport: (data: FinanceGetRealizationReportRequest, params?: RequestParams) => Promise<import("./http-client").HttpResponse<FinanceApiGetRealizationReportData, FinanceApiGetRealizationReportError>>;
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
    ratingApiRatingSummaryV1: (data: V1Empty, params?: RequestParams) => Promise<import("./http-client").HttpResponse<RatingApiRatingSummaryV1Data, RatingApiRatingSummaryV1Error>>;
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
    ratingApiRatingHistoryV1: (data: V1RatingHistoryV1Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<RatingApiRatingHistoryV1Data, RatingApiRatingHistoryV1Error>>;
}
