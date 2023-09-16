declare namespace Ozon_ {
    namespace Types {
        interface Keys {
            clientId: number;
            apiKey: string;
        }
        type Version = 'v1' | 'v2' | 'v3' | 'v4';
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
            | 'ALL'
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
    }
}
