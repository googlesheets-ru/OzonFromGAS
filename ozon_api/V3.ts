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
    ChatApiChatHistoryV3Data,
    ChatApiChatHistoryV3Error,
    ChatApiChatListV3Data,
    ChatApiChatListV3Error,
    FinanceApiFinanceTransactionListV3Data,
    FinanceApiFinanceTransactionListV3Error,
    FinanceApiFinanceTransactionTotalV3Data,
    FinanceApiFinanceTransactionTotalV3Error,
    Financev3FinanceTransactionListV3Request,
    Financev3FinanceTransactionTotalsV3Request,
    PostingApiGetFbsPostingListV3Data,
    PostingApiGetFbsPostingListV3Error,
    PostingApiGetFbsPostingUnfulfilledListData,
    PostingApiGetFbsPostingUnfulfilledListError,
    PostingApiGetFbsPostingV3Data,
    PostingApiGetFbsPostingV3Error,
    PostingApiPostingMultiBoxQtySetV3Data,
    PostingApiPostingMultiBoxQtySetV3Error,
    Postingv3GetFbsPostingListRequest,
    Postingv3GetFbsPostingRequest,
    Postingv3GetFbsPostingUnfulfilledListRequest,
    Postingv3PostingMultiBoxQtySetV3Request,
    ProductApiGetProductInfoListData,
    ProductApiGetProductInfoListError,
    ProductApiGetProductListData,
    ProductApiGetProductListError,
    ProductApiImportProductsV3Data,
    ProductApiImportProductsV3Error,
    Productv3GetProductListRequest,
    SupplyOrderGetData,
    SupplyOrderGetError,
    SupplyOrderListData,
    SupplyOrderListError,
    V3ChatHistoryRequest,
    V3ChatList,
    V3GetProductInfoListRequest,
    V3ImportProductsRequest,
    V3SupplyOrderGetRequest,
    V3SupplyOrderListRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V3<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;

    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

    /**
     * @description Метод для создания товаров и обновления информации о них. В сутки можно создать или обновить определённое количество товаров. Чтобы узнать лимит, используйте [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota). Если количество загрузок и обновлений товаров превысит лимит, появится ошибка `item_limit_exceeded`. У метода есть лимит на количество операций c товарами в минуту. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками: - `Item-Retry-After` — время в минутах до обновления лимита. Для суточного лимита — время до 03:00 по московскому времени. - `Item-Rate-Limit-Remaining` — остаток операций до следующего сброса лимита. В одном запросе можно передать до 100 товаров. Каждый товар — это отдельный элемент в массиве `items`. Укажите всю информацию о товаре: его характеристики, штрихкод, изображения, габариты, цену и валюту цены. При обновлении товара передайте в запросе всю информацию о нём. Указанная валюта должна совпадать с той, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль. Например, если у вас установлена валюта юань, передавайте значение `CNY`, иначе вернётся ошибка. Товар не будет создан или обновлён, если вы заполните неправильно или не укажете: - **Обязательные характеристики**: характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://docs.ozon.ru/global/products/requirements/product-info/product-characteristics/#обязательные-характеристики) или получить методом [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes). - **Реальные объёмно-весовые характеристики**: `depth`, `width`, `height`, `dimension_unit`, `weight`, `weight_unit`. Не пропускайте эти параметры в запросе и не указывайте 0. Для некоторых характеристик можно использовать HTML-теги. После модерации товар появится в вашем личном кабинете, но не будет виден пользователям, пока вы не выставите его на продажу. Каждый товар в запросе — отдельный элемент массива `items`. Чтобы объединить две карточки, для каждой передайте `9048` в массиве `attributes`. Все атрибуты в этих карточках, кроме размера или цвета, должны совпадать. ## Загрузка изображений Для загрузки передайте в запросе ссылки на изображения в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Для загрузки главного изображения товара используйте параметр `primary_image`. Если не передать значение `primary_image`, главным будет первое изображение в массиве `images`. Чтобы загрузить главное изображение для Ozon Селект: 1. Проверьте, что в ответе метода [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes) возвращается характеристика с `result.id = 23500`. 2. Передайте ссылку на изображение в параметре `items.attributes.values.value` с `id = 23500`. Для каждого товара вы можете загрузить до 30 изображений, включая главное. Если передать значение `primary_image`, максимальное количество изображений в `images` — 29. Если параметр `primary_image` пустой, то в `images` можно передать до 30 изображений. Для загрузки изображений 360 используйте поле `images360`, для загрузки маркетингового цвета — `color_image`. Если вы хотите изменить состав или порядок изображений, получите информацию с помощью метода [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList) — в нём отображается текущий порядок и состав изображений. Скопируйте данные полей `images`, `images360`, `color_image`, измените и дополните состав или порядок в соответствии с необходимостью. ## Загрузка видео Для загрузки передайте в запросе ссылки на видео. Для этого в параметре `complex_attributes` передайте объект. В нём в массиве `attributes` передайте 2 объекта с `complex_id = 100001`: - В первом передайте укажите `id = 21841` и в массиве `values` передайте объект с ссылкой на видео. __Пример__: ``` { "complex_id": 100001, "id": 21841, "values": [ { "value": "https://www.youtube.com/watch?v=ZwM0iBn03dY" } ] } ``` - Во втором укажите значение `id = 21837` и в массиве `values` передайте объект с названием видео. __Пример__: ``` { "complex_id": 100001, "id": 21837, "values": [ { "value": "videoName_1" } ] } ``` Если вы хотите загрузить несколько видео, передавайте значения для каждого видео в разных объектах массива `values`. __Пример__: ``` { "complex_id": 100001, "id": 21837, "values": [ { "value": "videoName_1" }, { "value": "videoName_2" } ] }, { "complex_id": 100001, "id": 21841, "values": [ { "value": "https://www.youtube.com/watch?v=ZwM0iBn03dY" }, { "value": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" } ] } ``` ## Загрузка таблицы размеров Вы можете добавить в карточку товара таблицу размеров, созданную с помощью [конструктора](https://table-constructor.ozon.ru/visual-editor). Передайте её в массиве `attributes` в формате JSON как Rich-контент `id = 13164`. <br><br> [Конструктор в формате JSON](https://table-constructor.ozon.ru/schema.json)<br> [Подробнее о конструкторе в Базе знаний продавца](https://docs.ozon.ru/global/products/requirements/size-table-constructor/) ## Загрузка видеообложки Вы можете загрузить видеообложку через `complex_attributes`. __Пример__: ``` "complex_attributes": [ { "attributes": [ { "id": 21845, "complex_id": 100002, "values": [ { "dictionary_value_id": 0, "value": "https://v.ozone.ru/vod/video-10/01GFATWQVCDE7G5B721421P1231Q7/asset_1.mp4" } ] } ] } ] ```
     *
     * @tags ProductAPI
     * @name ProductApiImportProductsV3
     * @summary Создать или обновить товар
     * @request POST:/v3/product/import
     * @response `200` `ProductApiImportProductsV3Data` Создан новый товар / Информация о товаре обновлена
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `429` `RpcStatus` Слишком много запросов
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiImportProductsV3 = (data: V3ImportProductsRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiImportProductsV3Data, ProductApiImportProductsV3Error>({
            path: `/v3/product/import`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения списка всех товаров. Если вы используете фильтр по идентификатору `offer_id` или `product_id`, остальные параметры заполнять не обязательно. За один раз вы можете использовать только одну группу идентификаторов, не больше 1000 товаров. Если вы не используете для отображения идентификаторы, укажите `limit` и `last_id` в следующих запросах.
     *
     * @tags ProductAPI
     * @name ProductApiGetProductList
     * @summary Список товаров
     * @request POST:/v3/product/list
     * @response `200` `ProductApiGetProductListData` Список товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductList = (data: Productv3GetProductListRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductListData, ProductApiGetProductListError>({
            path: `/v3/product/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Метод для получения информации о товарах по их идентификаторам. В теле запроса должен быть массив однотипных идентификаторов, в ответе будет массив `items`. В одном запросе вы можете передать не больше 1000 товаров по параметрам `offer_id`, `product_id` и `sku` в сумме.
     *
     * @tags ProductAPI
     * @name ProductApiGetProductInfoList
     * @summary Получить информацию о товарах по идентификаторам
     * @request POST:/v3/product/info/list
     * @response `200` `ProductApiGetProductInfoListData` Список товаров
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    productApiGetProductInfoList = (data: V3GetProductInfoListRequest, params: RequestParams = {}) =>
        this.http.request<ProductApiGetProductInfoListData, ProductApiGetProductInfoListError>({
            path: `/v3/product/info/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).
     *
     * @tags FBO
     * @name SupplyOrderList
     * @summary Список заявок на поставку на склад Ozon
     * @request POST:/v3/supply-order/list
     * @response `200` `SupplyOrderListData` Список заявок на поставку
     * @response `default` `RpcStatus` Ошибка
     */
    supplyOrderList = (data: V3SupplyOrderListRequest, params: RequestParams = {}) =>
        this.http.request<SupplyOrderListData, SupplyOrderListError>({
            path: `/v3/supply-order/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).
     *
     * @tags FBO
     * @name SupplyOrderGet
     * @summary Информация о заявке на поставку
     * @request POST:/v3/supply-order/get
     * @response `200` `SupplyOrderGetData` Информация о заявке
     * @response `default` `RpcStatus` Ошибка
     */
    supplyOrderGet = (data: V3SupplyOrderGetRequest, params: RequestParams = {}) =>
        this.http.request<SupplyOrderGetData, SupplyOrderGetError>({
            path: `/v3/supply-order/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список необработанных отправлений за указанный период времени — он должен быть не больше одного года. Возможные статусы отправлений: - `awaiting_registration` — ожидает регистрации, - `acceptance_in_progress` — идёт приёмка, - `awaiting_approve` — ожидает подтверждения, - `awaiting_packaging` — ожидает упаковки, - `awaiting_deliver` — ожидает отгрузки, - `arbitration` — арбитраж, - `client_arbitration` — клиентский арбитраж доставки, - `delivering` — доставляется, - `driver_pickup` — у водителя, - `cancelled` — отменено, - `not_accepted` — не принят на сортировочном центре. Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).
     *
     * @tags FBS
     * @name PostingApiGetFbsPostingUnfulfilledList
     * @summary Список необработанных отправлений
     * @request POST:/v3/posting/fbs/unfulfilled/list
     * @response `200` `PostingApiGetFbsPostingUnfulfilledListData` Список необработанных отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFbsPostingUnfulfilledList = (
        data: Postingv3GetFbsPostingUnfulfilledListRequest,
        params: RequestParams = {},
    ) =>
        this.http.request<PostingApiGetFbsPostingUnfulfilledListData, PostingApiGetFbsPostingUnfulfilledListError>({
            path: `/v3/posting/fbs/unfulfilled/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает список отправлений за указанный период времени — он должен быть не больше одного года. Дополнительно можно отфильтровать отправления по их статусу — список доступных для выдачи статусов указан в описании параметра `filter.status`. `has_next = true` в ответе может значить, что вернули не весь массив отправлений. Чтобы получить информацию об остальных отправлениях, сделайте новый запрос с другим значением `offset`. Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).
     *
     * @tags FBS
     * @name PostingApiGetFbsPostingListV3
     * @summary Список отправлений
     * @request POST:/v3/posting/fbs/list
     * @response `200` `PostingApiGetFbsPostingListV3Data` Список отправлений
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    postingApiGetFbsPostingListV3 = (data: Postingv3GetFbsPostingListRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetFbsPostingListV3Data, PostingApiGetFbsPostingListV3Error>({
            path: `/v3/posting/fbs/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).
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
    postingApiGetFbsPostingV3 = (data: Postingv3GetFbsPostingRequest, params: RequestParams = {}) =>
        this.http.request<PostingApiGetFbsPostingV3Data, PostingApiGetFbsPostingV3Error>({
            path: `/v3/posting/fbs/get`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
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
    postingApiPostingMultiBoxQtySetV3 = (data: Postingv3PostingMultiBoxQtySetV3Request, params: RequestParams = {}) =>
        this.http.request<PostingApiPostingMultiBoxQtySetV3Data, PostingApiPostingMultiBoxQtySetV3Error>({
            path: `/v3/posting/multiboxqty/set`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает информацию о чатах по указанным фильтрам.
     *
     * @tags ChatAPI
     * @name ChatApiChatListV3
     * @summary Список чатов
     * @request POST:/v3/chat/list
     * @response `200` `ChatApiChatListV3Data` Список чатов
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatListV3 = (data: V3ChatList, params: RequestParams = {}) =>
        this.http.request<ChatApiChatListV3Data, ChatApiChatListV3Error>({
            path: `/v3/chat/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description Возвращает историю сообщений чата. По умолчанию от самого нового сообщения к старым. <br><br> Получите список чатов с покупателем `chats.chat.chat_type="Buyer_Seller"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3).
     *
     * @tags ChatAPI
     * @name ChatApiChatHistoryV3
     * @summary История чата
     * @request POST:/v3/chat/history
     * @response `200` `ChatApiChatHistoryV3Data` История чата
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    chatApiChatHistoryV3 = (data: V3ChatHistoryRequest, params: RequestParams = {}) =>
        this.http.request<ChatApiChatHistoryV3Data, ChatApiChatHistoryV3Error>({
            path: `/v3/chat/history`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Используйте метод с последовательной отправкой запросов.<br> Данные могут не соответствовать информации в личном кабинете. </aside> Возвращает подробную информацию по всем начислениям. Максимальный период, за который можно получить информацию в одном запросе — 1 месяц. Если в запросе не указывать `posting_number`, то в ответе будут все отправления за указанный период или отправления определённого типа.
     *
     * @tags FinanceAPI
     * @name FinanceApiFinanceTransactionListV3
     * @summary Список транзакций
     * @request POST:/v3/finance/transaction/list
     * @response `200` `FinanceApiFinanceTransactionListV3Data` Список транзакций
     * @response `400` `RpcStatus` Неверный параметр
     * @response `403` `RpcStatus` Доступ запрещён
     * @response `404` `RpcStatus` Ответ не найден
     * @response `409` `RpcStatus` Конфликт запроса
     * @response `500` `RpcStatus` Внутренняя ошибка сервера
     */
    financeApiFinanceTransactionListV3 = (data: Financev3FinanceTransactionListV3Request, params: RequestParams = {}) =>
        this.http.request<FinanceApiFinanceTransactionListV3Data, FinanceApiFinanceTransactionListV3Error>({
            path: `/v3/finance/transaction/list`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * @description <aside class="warning"> Данные могут не соответствовать информации в личном кабинете. </aside> Возвращает итоговые суммы по транзакциям за указанный период. Если вы неправильно заполните номера отправлений, в ответе вернутся нулевые значения.
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
    financeApiFinanceTransactionTotalV3 = (
        data: Financev3FinanceTransactionTotalsV3Request,
        params: RequestParams = {},
    ) =>
        this.http.request<FinanceApiFinanceTransactionTotalV3Data, FinanceApiFinanceTransactionTotalV3Error>({
            path: `/v3/finance/transaction/totals`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}
