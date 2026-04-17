declare namespace Ozon_ {
    namespace Types {
        interface Keys {
            clientId: number;
            apiKey: string;
        }
        type Version = 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
        /**Фильтр по видимости товара
         * - ALL — все товары, кроме архивных.
         * - VISIBLE — товары, которые видны покупателям.
         * - INVISIBLE — товары, которые не видны покупателям.
         * - EMPTY_STOCK — товары, у которых не указано наличие.
         * - NOT_MODERATED — товары, которые не прошли модерацию.
         * - MODERATED — товары, которые прошли модерацию.
         * - DISABLED — товары, которые видны покупателям, но недоступны к покупке.
         * - STATE_FAILED — товары, создание которых завершилось ошибкой.
         * - READY_TO_SUPPLY — товары, готовые к поставке.
         * - VALIDATION_STATE_PENDING — товары, которые проходят проверку валидатором на премодерации.
         * - VALIDATION_STATE_FAIL — товары, которые не прошли проверку валидатором на премодерации.
         * - VALIDATION_STATE_SUCCESS — товары, которые прошли проверку валидатором на премодерации.
         * - TO_SUPPLY — товары, готовые к продаже.
         * - IN_SALE — товары в продаже.
         * - REMOVED_FROM_SALE — товары, скрытые от покупателей.
         * - BANNED — заблокированные товары.
         * - OVERPRICED — товары с завышенной ценой.
         * - CRITICALLY_OVERPRICED — товары со слишком завышенной ценой.
         * - EMPTY_BARCODE — товары без штрихкода.
         * - BARCODE_EXISTS — товары со штрихкодом.
         * - QUARANTINE — товары на карантине после изменения цены более чем на 50%.
         * - ARCHIVED — товары в архиве.
         * - OVERPRICED_WITH_STOCK — товары в продаже со стоимостью выше, чем у конкурентов.
         * - PARTIAL_APPROVED — товары в продаже с пустым или неполным описанием.
         * - IMAGE_ABSENT — товары без изображений.
         * - MODERATION_BLOCK — товары, для которых заблокирована модерация.
         */
        type FilterVisibility = 
        /** все товары, кроме архивных. */
        'ALL'
        /** товары, которые видны покупателям. */
         | 'VISIBLE'
        /** товары, которые не видны покупателям. */
         | 'INVISIBLE'
        /** товары, у которых не указано наличие. */
         | 'EMPTY_STOCK'
        /** товары, которые не прошли модерацию. */
         | 'NOT_MODERATED'
        /** товары, которые прошли модерацию. */
         | 'MODERATED'
        /** товары, которые видны покупателям, но недоступны к покупке. */
         | 'DISABLED'
        /** товары, создание которых завершилось ошибкой. */
         | 'STATE_FAILED'
        /** товары, готовые к поставке. */
         | 'READY_TO_SUPPLY'
        /** товары, которые проходят проверку валидатором на премодерации. */
         | 'VALIDATION_STATE_PENDING'
        /** товары, которые не прошли проверку валидатором на премодерации. */
         | 'VALIDATION_STATE_FAIL'
        /** товары, которые прошли проверку валидатором на премодерации. */
         | 'VALIDATION_STATE_SUCCESS'
        /** товары, готовые к продаже. */
         | 'TO_SUPPLY'
        /** товары в продаже. */
         | 'IN_SALE'
        /** товары, скрытые от покупателей. */
         | 'REMOVED_FROM_SALE'
        /** заблокированные товары. */
         | 'BANNED'
        /** товары с завышенной ценой. */
         | 'OVERPRICED'
        /** товары со слишком завышенной ценой. */
         | 'CRITICALLY_OVERPRICED'
        /** товары без штрихкода. */
         | 'EMPTY_BARCODE'
        /** товары со штрихкодом. */
         | 'BARCODE_EXISTS'
        /** товары на карантине после изменения цены более чем на 50 %. */
         | 'QUARANTINE'
        /** товары в архиве. */
         | 'ARCHIVED'
        /** товары в продаже со стоимостью выше, чем у конкурентов. */
         | 'OVERPRICED_WITH_STOCK'
        /** товары в продаже с пустым или неполным описанием. */
         | 'PARTIAL_APPROVED'
        /** товары без изображений. */
         | 'IMAGE_ABSENT'
        /** товары, для которых заблокирована модерация. */
         | 'MODERATION_BLOCK';
        interface Productv3GetProductListResponseItem {
            /** SKU */
            product_id: number;
            /** Артикул */
            offer_id: string;
            /** Есть остатки на складах FBO. */
            has_fbo_stocks?: boolean;
            /** Есть остатки на складах FBO. */
            has_fbs_stocks?: boolean;
            /** Товар в архиве */
            archived?: boolean;
            /** Уценённый товар. */
            is_discounted?: boolean;
            quants: {
                /** Идентификатор эконом-товара. */
                quant_code: string;
                /** Размер кванта. */
                quant_size: number;
            };
        }
        interface Productv2GetProductListResponseItem {
            product_id: number;
            offer_id: string;
            is_fbo_visible?: boolean;
            is_fbs_visible?: boolean;
            archived?: boolean;
            is_discounted?: boolean;
        }
        interface _Productv2GetProductListResponse {
            /**Список товаров */
            items: Productv2GetProductListResponseItem[];
            /**Идентификатор последнего значения на странице. */
            last_id: string;
            /**Всего товаров. */
            total: number;
        }
        /** Информация об остатках товара. */
        type StocksType = {
            /**Количество товара, ожидаемого при поставке. */
            coming: number;
            /**Количество товара на складе. */
            present: number;
            /**Количество зарезервированного товара. */
            reserved: number;
        };
        /** Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
         * Возможные значения:
         * - RUB — российский рубль,
         * - BYN — белорусский рубль,
         * - KZT — тенге,
         * - EUR — евро,
         * - USD — доллар США,
         * - CNY — юань. */
        type CurrencyCodeType = 'RUB' | 'BYN' | 'KZT' | 'EUR' | 'USD' | 'CNY';
        /**Настройки видимости товара. */
        type VisibilityDetails = {
            /**Если установлена цена — true. */
            has_price: boolean;
            /**Если есть остаток на складах — true. */
            has_stock: boolean;
            /**Если активный товар — true. */
            active_product: boolean;
            /**Причина, почему товар скрыт.  */
            reasons: {};
        };
        /** Ошибки при загрузке товаров.*/
        interface ItemError {
            /**Код ошибки. */
            code: string;
            /**Состояние товара, в котором произошла ошибка. */
            state: string;
            /**Уровень ошибки. */
            level: string;
            /**Описание ошибки */
            description: string;
            /**Поле, в котором произошла ошибка. */
            field: string;
            /**Атрибут, в котором произошла ошибка. */
            attribute_id: number;
            /**Название атрибута, в котором произошла ошибка. */
            attribute_name: string;
            /**Дополнительные поля для описания ошибки. */
            optional_description_elements: {
                [key: string]: any;
            };
        }
        /**Описание состояния товара. */
        interface ProductStatus {
            /**Состояние товара. */
            state: string;
            /** Состояние товара, на переходе в которое произошла ошибка.*/
            state_failed: string;
            /** Статус модерации. */
            moderate_status: string;
            /**Причины отклонения товара. */
            decline_reasons: string[];
            /**Статус валидации. */
            validation_state: string;
            /**Название состояния товара. */
            state_name: string;
            /**Описание состояния товара. */
            state_description: string;
            /** Признак, что при создании товара возникли ошибки.*/
            is_failed: boolean;
            /**Признак, что товар создан. */
            is_created: boolean;
            /** Подсказки для текущего состояния товара. */
            state_tooltip: string;
            /** Ошибки при загрузке товаров.*/
            item_errors: ItemError[];
            /** Время последнего изменения состояния товара. */
            state_updated_at: Date;
        }
        /**Информация об источниках схожих предложений. */
        interface ProductSource {
            /**Флаг, что источник учитывается при расчете рыночного значения. */
            is_enabled: boolean;
            /**Идентификатор товара на Ozon — SKU. */
            sku: number;
            /**Ссылка на источник. */
            source: string;
        }
        /** Информация о товаре [документация][1]
         *
         * [1]: https://docs.ozon.ru/api/seller/#operation/ProductAPI_GetProductInfoListV2  */
        interface ProductInfoItem {
            /**Номер задания на формирование документов. */
            id: number;
            /**Название */
            name: string;
            /**Идентификатор товара в системе продавца — артикул. */
            offer_id: string;
            /**Штрихкод. */
            barcode: string;
            /**Все штрихкоды товара */
            barcodes: string[];
            /**Цена главного предложения на Ozon */
            buybox_price: string;
            /**Идентификатор категории. */
            category_id: number;
            /**Дата и время создания товара */
            created_at: Date;
            /**Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр primary_image не указан, первое изображение в массиве главное для товара. */
            images: string[];
            /**Главное изображение товара. */
            primary_image: string;
            /**Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета */
            currency_code: CurrencyCodeType;
            /**Цена на товар с учётом всех акций. Это значение будет указано на витрине Ozon*/
            marketing_price: string;
            /**Минимальная цена товара после применения акций. */
            min_price: string;
            /**Цена до учёта скидок. На карточке товара отображается зачёркнутой. */
            old_price: string;
            /**Минимальная цена на аналогичный товар на Ozon. */
            min_ozon_price?: string;
            /**Цена для клиентов с подпиской Ozon Premium. */
            premium_price: string;
            /**Цена товара с учётом скидок — это значение показывается на карточке товара. */
            price: string;
            /**Цена на товар, рекомендованная системой на основании схожих предложений. */
            recommended_price: string;
            /**Информация об источниках схожих предложений. */
            sources: ProductSource[];
            /**Признак, что у товара есть уценённые аналоги на складе Ozon. */
            has_discounted_item: boolean;
            /**Признак, является ли товар уценённым:
             * - Если товар создавался продавцом как уценённый — true.
             * - Если товар не уценённый или был уценён Ozon — false */
            is_discounted: boolean;
            /**Остатки уценённого товара на складе Ozon. */
            discounted_stocks: StocksType;
            /**Не описан в документации */
            state: '';
            /**Информация об остатках товара. */
            stocks: StocksType;
            /**Свойство не описано в документации */
            errors: [];
            /**Дата последнего обновления товара. */
            updated_at: Date;
            /**Ставка НДС для товара. */
            vat: string;
            /**Если товар выставлен на продажу — true. */
            visible: boolean;
            visibility_details: VisibilityDetails;
            /**Ценовой индекс. Подробнее в [Базе знаний продавца][1]
             *
             *  [1]: https://seller-edu.ozon.ru/docs/kontrol-kachestva/kak-my-kontroliruem-kachestvo-raboty-partnera.html#%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%86%D0%B5%D0%BD/
             */
            price_index: string;
            /**Массив изображений 360. */
            images360: string[];
            /**Признак крупногабаритного товара. */
            is_kgt: boolean;
            /**Маркетинговый цвет. */
            color_image: string;
            /**Описание состояния товара. */
            status: ProductStatus;
        }
        interface V2GetProductInfoStocksByWarehouseFbsRequest {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** Количество значений в ответе. Максимум 1000. */
            limit: number;
            /** Идентификаторы товаров в системе продавца -- артикул. Максимум 1000. */
            offer_id?: string[];
            /** Идентификаторы товаров в системе Ozon -- SKU. Максимум 1000. */
            sku?: string[];
        }
        interface V2GetProductInfoStocksByWarehouseFbsResponseProduct {
            /** Количество доступных для продажи товаров. */
            free_stock?: number;
            /** Идентификатор товара в системе продавца -- артикул. */
            offer_id?: string;
            /** Общее количество товара на складе. */
            present?: number;
            /** Идентификатор товара. */
            product_id?: number;
            /** Количество зарезервированных товаров на складе. */
            reserved?: number;
            /** Идентификатор товара в системе Ozon -- SKU. */
            sku?: number;
            /** Идентификатор склада. */
            warehouse_id?: number;
            /** Название склада. */
            warehouse_name?: string;
        }
        interface ProductApiGetProductInfoStocksByWarehouseFbsV2Data {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** true, если в ответе вернули не все товары. */
            has_next?: boolean;
            /** Остатки товаров. */
            products?: V2GetProductInfoStocksByWarehouseFbsResponseProduct[];
        }
        interface V2WarehouseListRequest {
            /** Количество значений в ответе. Максимум 200. */
            limit: number;
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** Идентификаторы складов. Максимум 200. */
            warehouse_ids?: string[];
        }
        /** Информация о расположении склада. */
        interface WarehouseAddressInfo {
            /** Адрес склада. */
            address?: string;
            /** Широта. */
            latitude?: number;
            /** Долгота. */
            longitude?: number;
            /** Часовой пояс. */
            utc?: string;
        }
        interface WarehouseListV2ResponseWarehouse {
            /** Информация о расположении склада. */
            address_info?: WarehouseAddressInfo;
            /** Тип этикетки: UNSPECIFIED, BIG, SMALL. */
            carriage_label_type?: string;
            /** Комментарий для курьера. */
            courier_comment?: string;
            /** Номера телефонов для связи с курьером. */
            courier_phones?: string[];
            /** Дата и время создания склада. */
            created_at?: string;
            /** Время на отгрузку в минутах. */
            cut_in_time?: number;
            /** Первая миля. */
            first_mile?: {
                [key: string]: any;
            };
            /** Признак подключения доверительной приемки. */
            has_entrusted_acceptance?: boolean;
            /** Признак наличия лимита минимального количества заказов. */
            has_postings_limit?: boolean;
            /** Признак включённой автосборки. */
            is_auto_assembly?: boolean;
            /** Признак доставки comfort. */
            is_comfort?: boolean;
            /** Признак доставки express. */
            is_express?: boolean;
            /** Склад принимает крупногабаритные товары. */
            is_kgt?: boolean;
            /** Склад работает по схеме rFBS. */
            is_rfbs?: boolean;
            /** Печать транспортной накладной включена. */
            is_waybill_enabled?: boolean;
            /** Минимальное количество заказов в одной поставке. */
            min_postings_limit?: number;
            /** Название склада. */
            name?: string;
            /** Дата постановки склада на паузу (rFBS). */
            pause_at?: string;
            /** Номер телефона склада. */
            phone?: string;
            /** Лимит заказов (-1 если лимита нет). */
            postings_limit?: number;
            /** Идентификатор склада. */
            warehouse_id?: number;
        }
        interface WarehouseListV2Data {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** Список складов. */
            warehouses?: WarehouseListV2ResponseWarehouse[];
            /** true, если в ответе вернулись не все значения. */
            has_next?: boolean;
        }
        interface DeliveryMethodListV2RequestFilter {
            /** Идентификаторы методов доставки. */
            delivery_method_ids?: string[];
            /** Идентификаторы служб доставки. */
            provider_ids?: string[];
            /** Статус метода доставки. */
            status?: string[];
            /** Идентификаторы складов. */
            warehouse_ids?: string[];
        }
        interface V2DeliveryMethodListRequest {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** Фильтр для поиска методов доставки. */
            filter?: DeliveryMethodListV2RequestFilter;
            /** Количество значений в ответе. Минимум 1, максимум 100. */
            limit: number;
            /** Направление сортировки. */
            sort_dir?: 'ASC' | 'DESC';
        }
        interface DeliveryMethodListV2ResponseDeliveryMethod {
            /** Дата создания метода доставки. */
            created_at?: string;
            /** Время, до которого продавцу нужно собрать заказ. */
            cutoff?: string;
            /** Идентификатор метода доставки. */
            id?: number;
            /** Доступна быстрая доставка Ozon Express. */
            is_express?: boolean;
            /** Название метода доставки. */
            name?: string;
            /** Идентификатор службы доставки. */
            provider_id?: number;
            /** Минимальное время на сборку заказа в минутах. */
            sla_cut_in?: number;
            /** Статус: NEW, EDITED, ACTIVE, DISABLED, WAITING, BROKEN. */
            status?: string;
            /** Идентификатор услуги по доставке заказа. */
            template_id?: number;
            /** Тип интеграции со службой доставки: aggregator, 3pl_tracking, non_integrated, hybrid. */
            tpl_integration_type?: string;
            /** Дата и время последнего обновления. */
            updated_at?: string;
            /** Идентификатор склада. */
            warehouse_id?: number;
        }
        interface WarehouseApiDeliveryMethodListV2Data {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** true, если в ответе вернули не все методы доставки. */
            has_next?: boolean;
            /** Методы доставки. */
            delivery_methods?: DeliveryMethodListV2ResponseDeliveryMethod[];
        }
        interface CarriageDeliveryListV2RequestFilter {
            /** Идентификатор метода доставки. */
            delivery_method_id?: number;
            /** Дата отгрузки (YYYY-MM-DD). По умолчанию -- текущая дата. */
            departure_date?: string;
        }
        interface V2CarriageDeliveryListRequest {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** Фильтр для поиска методов доставки и отгрузок. */
            filter?: CarriageDeliveryListV2RequestFilter;
            /** Количество значений на странице. Максимум 1000. */
            limit: number;
        }
        /** Стоимость отгрузки pick-up. */
        interface CarriagePickupFee {
            /** Код валюты. */
            currency_code?: string;
            /** Предварительная стоимость отгрузки курьеру Ozon. */
            value?: number;
        }
        interface DeliveryMethodCarriage {
            /** В отгрузке есть товары для которых нужны документы в Беларусь. */
            all_blr_traceable?: boolean;
            /** Доступные действия с отгрузкой. */
            available_actions?: string[];
            /** Объём отгрузки в литрах. */
            carriage_volume?: number;
            /** Идентификатор отгрузки. 0 -- отгрузка, которую можно создать. */
            id?: number;
            /** Стоимость отгрузки pick-up. */
            pickup_fee?: CarriagePickupFee;
            /** Количество отправлений в отгрузке. */
            postings_count?: number;
            /** Количество квантов в отгрузке. */
            quantum_count?: number;
            /** Статус отгрузки для запрашиваемых метода и даты. */
            status?: string;
        }
        interface DeliveryMethodError {
            /** Код ошибки. */
            code?: string;
            /** Описание ошибки. */
            description?: string;
            /** Статус ошибки. */
            status?: string;
        }
        interface CarriageDeliveryListV2ResponseDeliveryMethod {
            /** Количество отправлений во всех отгрузках. */
            carriage_postings_count?: number;
            /** Список отгрузок. */
            carriages?: DeliveryMethodCarriage[];
            /** Время начала сборки и часовой пояс времени склада. */
            cut_in?: string;
            /** Дата и время, до которых нужно собрать отправление. */
            cutoff_at?: string;
            /** Идентификатор метода доставки. */
            delivery_method_id?: number;
            /** Название метода доставки. */
            delivery_method_name?: string;
            /** Статус метода доставки. */
            delivery_method_status?: string;
            /** Дата отгрузки. */
            departure_date?: string;
            /** Адрес точки отгрузки. */
            dropoff_address?: string;
            /** Статус возможности смены точки отгрузки. */
            dropoff_change_availability?: string;
            /** Идентификатор точки отгрузки. */
            dropoff_point_id?: number;
            /** Способ отгрузки. */
            dropoff_point_type?: string;
            /** Список ошибок. */
            errors?: DeliveryMethodError[];
            /** Точка отгрузки изменилась. */
            first_mile_changing?: boolean;
            /** Тип первой мили. */
            first_mile_type?: string;
            /** На складе включена доверительная приёмка. */
            has_entrusted_acceptance?: boolean;
            /** Тип интеграции со службой доставки. */
            integration_type?: string;
            /** Отгрузка не обязательна. */
            is_optional_carriage?: boolean;
            /** Отгрузка с предсортировкой. */
            is_presort?: boolean;
            /** Склад работает по схеме rFBS. */
            is_rfbs?: boolean;
            /** Количество собранных обязательных отправлений. */
            mandatory_packaged_count?: number;
            /** Количество отправлений, которые нужно собрать. */
            mandatory_postings_count?: number;
            /** Количество собранных необязательных отправлений. */
            optional_packaged_count?: number;
            /** Рекомендуемое местное время отгрузки. */
            recommended_time_local?: string;
            /** Смещение часового пояса рекомендуемого времени от UTC-0 в минутах. */
            recommended_time_utc_offset_in_minutes?: number;
            /** Начало таймслота в точке отгрузки. */
            timeslot_from?: string;
            /** Окончание таймслота в точке отгрузки. */
            timeslot_to?: string;
            /** Ссылка на иконку службы доставки. */
            tpl_provider_icon_url?: string;
            /** Название службы доставки. */
            tpl_provider_name?: string;
            /** Город склада. */
            warehouse_city?: string;
            /** Идентификатор склада. */
            warehouse_id?: number;
            /** Название склада. */
            warehouse_name?: string;
        }
        interface CarriageApiCarriageDeliveryListV2Data {
            /** Указатель для выборки следующих данных. */
            cursor?: string;
            /** true, если в ответе вернулись не все методы доставки. */
            has_next?: boolean;
            /** Список методов доставки. */
            methods?: CarriageDeliveryListV2ResponseDeliveryMethod[];
        }
        interface PostingFBSActCheckStatusRequest {
            /**
             * Номер задания на формирование документов (идентификатор перевозки).
             * В Swagger тип int64. Передавайте как строку, если значение превышает
             * `Number.MAX_SAFE_INTEGER` (2^53-1) во избежание потери точности.
             */
            id: number | string;
        }
        interface PostingFBSActCheckStatusResponseStatus {
            /** Тип документов. */
            act_type?: string;
            /** Номера отправлений, добавленных в перевозку. */
            added_to_act?: string[];
            /** Номера отправлений, не попавших в перевозку. */
            removed_from_act?: string[];
            /** Статус: in_process, ready, error, cancelled, или "The next postings aren't ready". */
            status?: 'in_process' | 'ready' | 'error' | 'cancelled' | "The next postings aren't ready";
            /** Признак частичной перевозки. */
            is_partial?: boolean;
        }
        interface PostingApiPostingFbsActCheckStatusData {
            /** Результат работы метода. */
            result?: PostingFBSActCheckStatusResponseStatus;
        }
        interface PostingFBSGetActRequest {
            /**
             * Номер задания на формирование документов (идентификатор перевозки).
             * В Swagger тип int64. Передавайте как строку, если значение превышает
             * `Number.MAX_SAFE_INTEGER` (2^53-1) во избежание потери точности.
             */
            id: number | string;
        }
        interface PostingApiPostingFbsGetActData {
            /**
             * Содержимое файла в base64.
             * Для записи в Drive/Blob декодируйте через `Utilities.base64Decode(file_content)`.
             */
            file_content?: string;
            /** Название файла. */
            file_name?: string;
            /** Тип файла (например, application/pdf). */
            content_type?: string;
        }
    }
}
