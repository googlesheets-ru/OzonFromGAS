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
namespace Ozon_ {
    export namespace Types {
        /**
         * Language
         * <br>Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский,
         *   - `TR` — турецкий,
         *   - `ZH_HANS` — китайский.
         *
         * По умолчанию используется русский язык.
         * @default "DEFAULT"
         */
        export enum CategoryLanguage {
            DEFAULT = 'DEFAULT',
            RU = 'RU',
            EN = 'EN',
            TR = 'TR',
            ZH_HANS = 'ZH_HANS',
        }

        /** GetCategoryTree */
        export interface CategoryGetCategoryTreeRequest {
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /**
             * <br>Язык в ответе:
             *   - `EN` — английский,
             *   - `RU` — русский,
             *   - `TR` — турецкий,
             *   - `ZH_HANS` — китайский.
             *
             * По умолчанию используется русский язык.
             */
            language?: CategoryLanguage;
        }

        export interface GetCategoryTreeResponseItem {
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /** Дерево подкатегорий. */
            children?: GetCategoryTreeResponseItem[];
            /** Название категории. */
            title?: string;
        }

        export interface CategoryGetCategoryTreeResponse {
            /** Список категорий. */
            result?: GetCategoryTreeResponseItem[];
        }

        export interface ProtobufAny {
            /** Тип протокола передачи данных. */
            typeUrl?: string;
            /**
             * Значение ошибки.
             * @format byte
             */
            value?: string;
        }

        export interface RpcStatus {
            /**
             * Код ошибки.
             * @format int32
             */
            code?: number;
            /** Дополнительная информация об ошибке. */
            details?: ProtobufAny[];
            /** Описание ошибки. */
            message?: string;
        }

        /**
         * Фильтр по характеристикам:
         *   - `ALL` — все характеристики,
         *   - `REQUIRED` — обязательные,
         *   - `OPTIONAL` — дополнительные.
         * @default "ALL"
         */
        export enum CategoryAttributesRequestAttributeType {
            ALL = 'ALL',
            REQUIRED = 'REQUIRED',
            OPTIONAL = 'OPTIONAL',
        }

        /**
         * Language
         * Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский,
         *   - `TR` — турецкий.
         *
         * По умолчанию используется русский язык.
         * @default "DEFAULT"
         */
        export enum Categoryv3Language {
            DEFAULT = 'DEFAULT',
            RU = 'RU',
            EN = 'EN',
            TR = 'TR',
        }

        export interface Categoryv3CategoryAttributesRequest {
            /**
             * Фильтр по характеристикам:
             *   - `REQUIRED` — обязательная,
             *   - `OPTIONAL` — дополнительная.
             */
            attribute_type?: CategoryAttributesRequestAttributeType;
            /** Идентификатор категории. */
            category_id?: number[];
            /**
             * Язык в ответе:
             *   - `EN` — английский,
             *   - `RU` — русский,
             *   - `TR` — турецкий.
             *
             * По умолчанию используется русский язык.
             */
            language?: Categoryv3Language;
        }

        export interface CategoryAttributesResponseAttribute {
            /**
             * Признак, что значения словарного атрибута зависят от категории:
             * - `true` — у атрибута разные значения для каждой категории.
             * - `false` — у атрибута одинаковые значения для всех категорий.
             */
            category_dependent?: boolean;
            /** Описание характеристики. */
            description?: string;
            /**
             * Идентификатор справочника.
             * @format int64
             */
            dictionary_id?: number;
            /**
             * Идентификатор группы характеристик.
             * @format int64
             */
            group_id?: number;
            /** Название группы характеристик. */
            group_name?: string;
            /**
             * Номер задания на формирование документов.
             * @format int64
             */
            id?: number;
            /**
             * Признак аспектного атрибута. Аспектный атрибут — характеристика, по которой отличаются товары одной модели.
             *
             * Например, у одежды и обуви одной модели могут быть разные расцветки и размеры. То есть цвет и размер — это аспектные атрибуты.
             *
             * Значения поля:
             *   - `true` — атрибут аспектный и его нельзя изменить после поставки товара на склад или продажи со своего склада.
             *   - `false` — атрибут не аспектный, можно изменить в любое время.
             */
            is_aspect?: boolean;
            /**
             * Признак, что характеристика — набор значений:
             *   - `true` — характеристика — набор значений,
             *   - `false` — характеристика состоит из одного значения.
             */
            is_collection?: boolean;
            /**
             * Признак обязательной характеристики:
             *   - `true` — обязательная характеристика,
             *   - `false` — характеристику можно не указывать.
             */
            is_required?: boolean;
            /** Название. */
            name?: string;
            /** Тип характеристики. */
            type?: string;
        }

        export interface CategoryAttributesResponseCategoryAttributes {
            /** Массив характеристик товара. */
            attributes?: CategoryAttributesResponseAttribute[];
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
        }

        export interface Categoryv3CategoryAttributesResponse {
            /** Результат запроса. */
            result?: CategoryAttributesResponseCategoryAttributes[];
        }

        /**
         * Language
         * <br>Язык в ответе:
         *   - `EN` — английский,
         *   - `RU` — русский.
         *
         * По умолчанию используется русский язык.
         * @default "DEFAULT"
         */
        export enum Categoryv2Language {
            DEFAULT = 'DEFAULT',
            RU = 'RU',
            EN = 'EN',
        }

        export interface Categoryv2DictionaryValueBatchRequest {
            /**
             * Идентификатор характеристики.
             * @format int64
             */
            attribute_id?: number;
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /**
             * Язык в ответе:
             *   - `EN` — английский,
             *   - `RU` — русский.
             * По умолчанию используется русский язык.
             */
            language?: Categoryv2Language;
            /**
             * Идентификатор справочника, с которого нужно начать ответ. Если `last_value_id` — 10, то в ответе будут справочники, начиная с одиннадцатого.
             * @format int64
             */
            last_value_id?: number;
            /**
             * Количество значений в ответе:
             *   - максимум — 5000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
        }

        export interface Categoryv2DictionaryValueBatchResponseDictionaryValue {
            /** @format int64 */
            id?: number;
            info?: string;
            picture?: string;
            /** Значение характеристики товара. */
            value?: string;
        }

        export interface Categoryv2DictionaryValueBatchResponse {
            has_next?: boolean;
            result?: Categoryv2DictionaryValueBatchResponseDictionaryValue[];
        }

        export interface Productv2ImportProductsRequestDictionaryValue {
            /**
             * Идентификатор справочника.
             * @format int64
             */
            dictionary_value_id?: number;
            /** Значение из справочника. */
            value?: string;
        }

        export interface Productv2ImportProductsRequestAttribute {
            /**
             * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель», «L2 Cache» и другие. У каждой из вложенных характеристик может быть несколько вариантов значений.
             * @format int64
             */
            complex_id?: number;
            /**
             * Идентификатор характеристики.
             * @format int64
             */
            id?: number;
            /** Массив вложенных значений характеристики. */
            values?: Productv2ImportProductsRequestDictionaryValue[];
        }

        export interface Productv2ImportProductsRequestComplexAttribute {
            /** Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через [API](https://docs.ozon.ru/api/seller/). */
            attributes?: Productv2ImportProductsRequestAttribute[];
        }

        /**
         * Тип сервиса. Передайте одно из значений в верхнем регистре:
         *   - `IS_CODE_SERVICE`,
         *   - `IS_NO_CODE_SERVICE`.
         * @default "IS_CODE_SERVICE"
         */
        export type V2ServiceType = string;

        export interface ImportProductsRequestPdfList {
            /**
             * Индекс документа в хранилище, который задаёт порядок.
             * @format int64
             */
            index?: number;
            /** Название файла. */
            name?: string;
            /** Адрес файла. */
            src_url?: string;
        }

        export interface Productv2ImportProductsRequestItem {
            /** Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через [API](https://docs.ozon.ru/api/seller/). */
            attributes: Productv2ImportProductsRequestAttribute[];
            /** Штрихкод товара. */
            barcode?: string;
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id: number;
            /**
             * Маркетинговый цвет.
             *
             * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.
             */
            color_image?: string;
            /** Массив характеристик, у которых есть вложенные атрибуты. */
            complex_attributes?: Productv2ImportProductsRequestComplexAttribute[];
            /**
             * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
             *
             * Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /**
             * Глубина упаковки.
             * @format int32
             */
            depth: number;
            /**
             * Единица измерения габаритов:
             *   - `mm` — миллиметры,
             *   - `cm` — сантиметры,
             *   - `in` — дюймы.
             */
            dimension_unit: string;
            /** Геоограничения. Передайте список, состоящий из `name`, полученных в ответе метода [/v1/products/geo-restrictions-catalog-by-filter](#operations/ProductAPI_GetGeoRestrictionsV1). */
            geo_names?: string[];
            /**
             * Высота упаковки.
             * @format int32
             */
            height: number;
            /**
             * Массив изображений. До 15 штук. Изображения показываются на сайте в таком же порядке, как в массиве.
             *
             * Если не передать значение `primary_image`, первое изображение в массиве будет главным для товара.
             *
             * Если вы передали значение `primary_image`, передайте до 14 изображений.
             * Если параметр `primary_image` пустой, передайте до 15 изображений.
             *
             * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.
             */
            images: string[];
            /** Ссылка на главное изображение товара. */
            primary_image?: string;
            /**
             * Тип сервиса. Передайте одно из значений в верхнем регистре:
             *   - `IS_CODE_SERVICE`,
             *   - `IS_NO_CODE_SERVICE`.
             */
            service_type?: V2ServiceType;
            /**
             * Массив изображений 360. До 70 штук.
             *
             * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.
             */
            images360?: string[];
            /** Название товара. До 500 символов. */
            name: string;
            /**
             * Идентификатор товара в системе продавца — артикул.
             *
             * Максимальная длина строки — 50 символов.
             */
            offer_id: string;
            /**
             * Цена до скидок (будет зачёркнута на карточке товара). Указывается в рублях. Разделитель дробной
             * части — точка, до двух знаков после точки.
             *
             * Если вы раньше передавали `old_price`, то при обновлении `price` также обновите `old_price`.
             */
            old_price?: string;
            /** Список PDF-файлов. */
            pdf_list?: ImportProductsRequestPdfList[];
            /** Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/). */
            premium_price?: string;
            /**
             * Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите
             * значение `old_price` в этом параметре.
             */
            price: string;
            /**
             * Ставка НДС для товара:
             *   - `0` — не облагается НДС,
             *   - `0.1` — 10%,
             *   - `0.2` — 20%.
             */
            vat: string;
            /**
             * Вес товара в упаковке. Предельное значение — 1000 килограммов или конвертированная величина в других
             * единицах измерения.
             * @format int32
             */
            weight: number;
            /**
             * Единица измерения веса:
             *   - `g` — граммы,
             *   - `kg` — килограммы,
             *   - `lb` — фунты.
             */
            weight_unit: string;
            /**
             * Ширина упаковки.
             * @format int32
             */
            width: number;
        }

        export interface Productv2ImportProductsRequest {
            /** Массив данных. */
            items?: Productv2ImportProductsRequestItem[];
        }

        /** Результаты запроса. */
        export interface Productv2ImportProductsResponseResult {
            /**
             * Номер задания на загрузку товаров.
             * @format int64
             */
            task_id?: number;
        }

        export interface Productv2ImportProductsResponse {
            /** Результаты запроса. */
            result?: Productv2ImportProductsResponseResult;
        }

        export interface ProductGetImportProductsInfoRequest {
            /**
             * Код задачи на импорт товаров.
             * @format int64
             */
            task_id?: number;
        }

        export interface V1ItemError {
            /** Код ошибки. */
            code?: string;
            /** Техническое описание ошибки. */
            message?: string;
            /** Состояние товара, в котором произошла ошибка. */
            state?: string;
            /** Уровень ошибки. */
            level?: string;
            /** Описание ошибки. */
            description?: string;
            /** Поле, в котором произошла ошибка. */
            field?: string;
            /**
             * Атрибут, в котором произошла ошибка.
             * @format int64
             */
            attribute_id?: number;
            /** Название атрибута, в котором произошла ошибка. */
            attribute_name?: string;
            /** Дополнительные поля для описания ошибки. */
            optional_description_elements?: Record<string, string>;
        }

        export interface GetImportProductsInfoResponseResultItem {
            /**
             * Идентификатор товара в системе продавца — артикул.
             *
             * Максимальная длина строки в значении поля — 50 символов.
             */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Статус создания товара. Информация о товаре обрабатывается очередями.
             * Возможные значения параметра:
             * - `pending` — товар в очереди на обработку;
             * - `imported` — товар успешно загружен;
             * - `failed` — товар загружен с ошибками.
             */
            status?: string;
            /** Массив ошибок. */
            errors?: V1ItemError[];
        }

        export interface ProductGetImportProductsInfoResponseResult {
            /** Информация о товарах. */
            items?: GetImportProductsInfoResponseResultItem[];
            /**
             * Идентификатор товара в системе продавца.
             * @format int32
             */
            total?: number;
        }

        export interface ProductGetImportProductsInfoResponse {
            result?: ProductGetImportProductsInfoResponseResult;
        }

        export interface ProductImportProductsBySKURequestItem {
            /** Название товара. До 500 символов. */
            name?: string;
            /**
             * Идентификатор товара в системе продавца — артикул.
             *
             * Максимальная длина строки — 50 символов.
             */
            offer_id?: string;
            /** Цена до скидок (будет зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки. */
            old_price?: string;
            /** Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/). */
            premium_price?: string;
            /** Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение `old_price` в этом параметре. */
            price?: string;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /**
             * Ставка НДС для товара:
             *   - `0` — не облагается НДС,
             *   - `0.1` — 10%,
             *   - `0.2` — 20%.
             */
            vat?: string;
            /**
             * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
             *
             * Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
        }

        export interface ProductImportProductsBySKURequest {
            /** Информация о товарах. */
            items?: ProductImportProductsBySKURequestItem[];
        }

        export interface ProductImportProductsBySKUResponseResult {
            /**
             * Код задачи на импорт товаров.
             * @format int64
             */
            task_id?: number;
            /** Список идентификаторов товаров. */
            unmatched_sku_list?: number[];
        }

        export interface ProductImportProductsBySKUResponse {
            result?: ProductImportProductsBySKUResponseResult;
        }

        export interface Productv1ProductImportPicturesRequest {
            /** Маркетинговый цвет. */
            color_image?: string;
            /**
             * Массив ссылок на изображения.
             * Изображения в массиве расположены в порядке их расположения на сайте.
             * Первое изображение в массиве будет главным.
             */
            images?: string[];
            /**
             * Массив изображений 360. До 70 штук.
             *
             * Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.
             */
            images360?: string[];
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface ProductProductInfoPicturesResponsePicture {
            /** Признак, что картинка — изображение 360. */
            is_360?: boolean;
            /** Признак, что картинка — образец цвета. */
            is_color?: boolean;
            /** Признак, что картинка — главное изображение. */
            is_primary?: boolean;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Статус загрузки изображения.
             *
             * Если вызывали метод [/v1/product/pictures/import](#operation/ProductAPI_ProductImportPictures), то в ответе метода всегда будет `imported` — картинка не обработана.
             * Чтобы посмотреть финальный статус, примерно через 10 секунд вызовите метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures).
             *
             * Если вызывали метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures), вы увидите один из статусов:
             * - `uploaded` — изображение загружено;
             * - `failed` — не получилось загрузить изображение.
             */
            state?: string;
            /** Адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. */
            url?: string;
        }

        /** Результат работы метода. */
        export interface Productv1ProductInfoPicturesResponseResult {
            pictures?: ProductProductInfoPicturesResponsePicture[];
        }

        export interface Productv1ProductInfoPicturesResponse {
            /** Результат работы метода. */
            result?: Productv1ProductInfoPicturesResponseResult;
        }

        export interface Productv1ProductInfoPicturesRequest {
            /** Список идентификаторов товаров. */
            product_id?: string[];
        }

        /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         *   - `ARCHIVED` — товары в архиве.
         *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
         *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
         *   - `IMAGE_ABSENT` — товары без изображений.
         *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
         * @default "ALL"
         */
        export enum Productv2GetProductListRequestFilterFilterVisibility {
            ALL = 'ALL',
            VISIBLE = 'VISIBLE',
            INVISIBLE = 'INVISIBLE',
            EMPTY_STOCK = 'EMPTY_STOCK',
            NOT_MODERATED = 'NOT_MODERATED',
            MODERATED = 'MODERATED',
            DISABLED = 'DISABLED',
            STATE_FAILED = 'STATE_FAILED',
            READY_TO_SUPPLY = 'READY_TO_SUPPLY',
            VALIDATION_STATE_PENDING = 'VALIDATION_STATE_PENDING',
            VALIDATION_STATE_FAIL = 'VALIDATION_STATE_FAIL',
            VALIDATION_STATE_SUCCESS = 'VALIDATION_STATE_SUCCESS',
            TO_SUPPLY = 'TO_SUPPLY',
            IN_SALE = 'IN_SALE',
            REMOVED_FROM_SALE = 'REMOVED_FROM_SALE',
            BANNED = 'BANNED',
            OVERPRICED = 'OVERPRICED',
            CRITICALLY_OVERPRICED = 'CRITICALLY_OVERPRICED',
            EMPTY_BARCODE = 'EMPTY_BARCODE',
            BARCODE_EXISTS = 'BARCODE_EXISTS',
            QUARANTINE = 'QUARANTINE',
            ARCHIVED = 'ARCHIVED',
            OVERPRICED_WITH_STOCK = 'OVERPRICED_WITH_STOCK',
            PARTIAL_APPROVED = 'PARTIAL_APPROVED',
            IMAGE_ABSENT = 'IMAGE_ABSENT',
            MODERATION_BLOCK = 'MODERATION_BLOCK',
        }

        /** Фильтр по товарам. */
        export interface Productv2GetProductListRequestFilter {
            /** Фильтр по параметру `offer_id`. Можно передавать список значений. */
            offer_id?: string[];
            /** Фильтр по параметру `product_id`. Можно передавать список значений. */
            product_id?: string[];
            /**
             * Фильтр по видимости товара:
             *   - `ALL` — все товары, кроме архивных.
             *   - `VISIBLE` — товары, которые видны покупателям.
             *   - `INVISIBLE` — товары, которые не видны покупателям.
             *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
             *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
             *   - `MODERATED` — товары, которые прошли модерацию.
             *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
             *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
             *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
             *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
             *   - `TO_SUPPLY` — товары, готовые к продаже.
             *   - `IN_SALE` — товары в продаже.
             *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
             *   - `BANNED` — заблокированные товары.
             *   - `OVERPRICED` — товары с завышенной ценой.
             *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
             *   - `EMPTY_BARCODE` — товары без штрихкода.
             *   - `BARCODE_EXISTS` — товары со штрихкодом.
             *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
             *   - `ARCHIVED` — товары в архиве.
             *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
             *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
             *   - `IMAGE_ABSENT` — товары без изображений.
             *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
             */
            visibility?: Productv2GetProductListRequestFilterFilterVisibility;
        }

        export interface Productv2GetProductListRequest {
            /** Фильтр по товарам. */
            filter?: Productv2GetProductListRequestFilter;
            /**
             * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
             *
             * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
             */
            last_id?: string;
            /**
             * Количество значений на странице. Минимум — 1, максимум — 1000.
             * @format int64
             */
            limit?: number;
        }

        export interface Productv2GetProductListResponseItem_ {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        /** Результат. */
        export interface Productv3GetProductListResponseResult {
            /** Список товаров. */
            items?: Ozon_.Types.Productv3GetProductListResponseItem[];
            /**
             * Идентификатор последнего значения на странице.
             *
             * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
             */
            last_id?: string;
            /**
             * Всего товаров.
             * @format int32
             */
            total?: number;
        }
        /** Результат. */
        export interface Productv2GetProductListResponseResult {
            /** Список товаров. */
            items?: Ozon_.Types.Productv2GetProductListResponseItem[];
            /**
             * Идентификатор последнего значения на странице.
             *
             * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
             */
            last_id?: string;
            /**
             * Всего товаров.
             * @format int32
             */
            total?: number;
        }

        export interface Productv2GetProductListResponse {
            /** Результат. */
            result?: Productv2GetProductListResponseResult;
        }

        export interface Productv3GetProductListResponse {
            /** Результат. */
            result?: Productv3GetProductListResponseResult;
        }

        export interface Productv3GetProductInfoRequest {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        export interface Productv2GetProductInfoResponseCommissions {
            /**
             * Стоимость доставки.
             * @format double
             */
            deliveryAmount?: number;
            /**
             * Минимальная комиссия.
             * @format double
             */
            minValue?: number;
            /**
             * Процент комиссии.
             * @format double
             */
            percent?: number;
            /**
             * Стоимость возврата.
             * @format double
             */
            returnAmount?: number;
            /** Схема продажи. */
            saleSchema?: string;
            /**
             * Сумма комиссии.
             * @format double
             */
            value?: number;
        }

        /** Остатки уценённого товара на складе Ozon. */
        export interface Productv2GetProductInfoDiscountedStocks {
            /**
             * Количество товара, ожидаемого при поставке.
             * @format int32
             */
            coming?: number;
            /**
             * Количество товара на складе.
             * @format int32
             */
            present?: number;
            /**
             * Количество зарезервированного товара.
             * @format int32
             */
            reserved?: number;
        }

        /** Цена товара у конкурентов на других площадках. */
        export interface PriceIndexesIndexDataExternal {
            /** Минимальная цена товара у конкурентов на другой площадке. */
            minimal_price?: string;
            /** Валюта цены. */
            minimal_price_currency?: string;
            /**
             * Значение индекса цены.
             * @format double
             */
            price_index_value?: number;
        }

        /** Цена товара у конкурентов на Ozon. */
        export interface PriceIndexesIndexDataOzon {
            /** Минимальная цена товара у конкурентов на Ozon. */
            minimal_price?: string;
            /** Валюта цены. */
            minimal_price_currency?: string;
            /**
             * Значение индекса цены.
             * @format double
             */
            price_index_value?: number;
        }

        /** Цена вашего товара на других площадках. */
        export interface PriceIndexesIndexDataSelf {
            /** Минимальная цена вашего товара на других площадках. */
            minimal_price?: string;
            /** Валюта цены. */
            minimal_price_currency?: string;
            /**
             * Значение индекса цены.
             * @format double
             */
            price_index_value?: number;
        }

        /**
         * Ценовые индексы товара.
         *
         * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
         */
        export interface CommonPriceIndexes {
            /** Цена товара у конкурентов на других площадках. */
            external_index_data?: PriceIndexesIndexDataExternal;
            /** Цена товара у конкурентов на Ozon. */
            ozon_index_data?: PriceIndexesIndexDataOzon;
            /**
             * Итоговый ценовой индекс товара:
             * - `WITHOUT_INDEX` — без индекса,
             * - `PROFIT` — выгодный,
             * - `AVG_PROFIT` — умеренный,
             * - `NON_PROFIT` — невыгодный.
             */
            price_index?: 'WITHOUT_INDEX' | 'PROFIT' | 'AVG_PROFIT' | 'NON_PROFIT';
            /** Цена вашего товара на других площадках. */
            self_marketplaces_index_data?: PriceIndexesIndexDataSelf;
        }

        export interface V2ItemError {
            /** Код ошибки. */
            code?: string;
            /** Состояние товара, в котором произошла ошибка. */
            state?: string;
            /** Уровень ошибки. */
            level?: string;
            /** Описание ошибки. */
            description?: string;
            /** Поле, в котором произошла ошибка. */
            field?: string;
            /**
             * Атрибут, в котором произошла ошибка.
             * @format int64
             */
            attribute_id?: number;
            /** Название атрибута, в котором произошла ошибка. */
            attribute_name?: string;
            /** Дополнительные поля для описания ошибки. */
            optional_description_elements?: Record<string, string>;
        }

        /** Описание состояния товара. */
        export interface Productv2Status {
            /** Состояние товара. */
            state?: string;
            /** Состояние товара, на переходе в которое произошла ошибка. */
            state_failed?: string;
            /** Статус модерации. */
            moderate_status?: string;
            /** Причины отклонения товара. */
            decline_reasons?: string[];
            /** Статус валидации. */
            validation_state?: string;
            /** Название состояния товара. */
            state_name?: string;
            /** Описание состояния товара. */
            state_description?: string;
            /** Признак, что при создании товара возникли ошибки. */
            is_failed?: boolean;
            /** Признак, что товар создан. */
            is_created?: boolean;
            /** Подсказки для текущего состояния товара. */
            state_tooltip?: string;
            /** Ошибки при загрузке товаров. */
            item_errors?: V2ItemError[];
            /**
             * Время последнего изменения состояния товара.
             * @format date-time
             */
            state_updated_at?: string;
        }

        export interface Productv2GetProductInfoResponseSource {
            /** Признак, что источник учитывается при расчете рыночного значения. */
            is_enabled?: boolean;
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
            /** Ссылка на источник. */
            source?: string;
        }

        /** Информация об остатках товара. */
        export interface Productv2GetProductInfoResponseStock {
            /**
             * Ожидается поставка.
             * @format int32
             */
            coming?: number;
            /**
             * Сейчас на складе.
             * @format int32
             */
            present?: number;
            /**
             * Зарезервировано.
             * @format int32
             */
            reserved?: number;
        }

        /** Настройки видимости товара. */
        export interface Productv2GetProductInfoResponseVisibilityDetails {
            /** Если активный товар — `true`. */
            active_product?: boolean;
            /** Если установлена цена — `true`. */
            has_price?: boolean;
            /** Если есть остаток на складах — `true`. */
            has_stock?: boolean;
        }

        /** Результаты запроса. */
        export interface Productv2GetProductInfoResponseResult {
            /** Штрихкод. */
            barcode?: string;
            /** Все штрихкоды товара. */
            barcodes?: string[];
            /**
             * Цена главного предложения на Ozon.
             *
             * Устаревший параметр, больше не используется. Всегда возвращает пустую строку `""`.
             */
            buybox_price?: string;
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /** Маркетинговый цвет. */
            color_image?: string;
            /** Информация о комиссиях. */
            commissions?: Productv2GetProductInfoResponseCommissions[];
            /**
             * Дата и время создания товара.
             * @format date-time
             */
            created_at?: string;
            /**
             * SKU товара, который продаётся со склада Ozon (FBO).
             * @format int64
             */
            fbo_sku?: number;
            /**
             * SKU товара, который продаётся со склада продавца (FBS и rFBS).
             * @format int64
             */
            fbs_sku?: number;
            /**
             * Номер задания на формирование документов.
             * @format int64
             */
            id?: number;
            /** Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр `primary_image` не указан, первое изображение в массиве главное для товара. */
            images?: string[];
            /** Главное изображение товара. */
            primary_image?: string;
            /** Массив изображений 360. */
            images360?: string[];
            /** Признак, что у товара есть уценённые аналоги на складе Ozon. */
            has_discounted_item?: boolean;
            /**
             * Признак, является ли товар уценённым:
             *   - Если товар создавался продавцом как уценённый — `true`.
             *   - Если товар не уценённый или был уценён Ozon — `false`.
             */
            is_discounted?: boolean;
            /** Остатки уценённого товара на складе Ozon. */
            discounted_stocks?: Productv2GetProductInfoDiscountedStocks;
            /** Признак крупногабаритного товара. */
            is_kgt?: boolean;
            /**
             * Флаг обязательной предоплаты для товара:
             *   `true` — чтобы купить товар, нужно внести предоплату.
             *   `false` — предоплата необязательна.
             */
            is_prepayment?: boolean;
            /** Если возможна предоплата — `true`. */
            is_prepayment_allowed?: boolean;
            /**
             * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /** Цена на товар с учетом всех акций. Это значение будет указано на витрине Ozon. */
            marketing_price?: string;
            /**
             * Минимальная цена на аналогичный товар на Ozon.
             *
             * Устаревший параметр, больше не используется. Всегда возвращает пустую строку `""`.
             */
            min_ozon_price?: string;
            /** Минимальная цена товара после применения акций. */
            min_price?: string;
            /** Название. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена до учёта скидок. На карточке товара отображается зачёркнутой. */
            old_price?: string;
            /** Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/). */
            premium_price?: string;
            /** Цена товара с учётом скидок — это значение показывается на карточке товара. */
            price?: string;
            /**
             * Параметр неактуален и будет удалён 1 мая 2023 года.
             *
             * Ценовой индекс.
             */
            price_index?: string;
            /**
             * Ценовые индексы товара.
             *
             * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
             */
            price_indexes?: CommonPriceIndexes;
            /** Цена на товар, рекомендованная системой на основании схожих предложений. */
            recommended_price?: string;
            /** Описание состояния товара. */
            status?: Productv2Status;
            /** Информация об источниках схожих предложений. Подробнее в [Базе знаний продавца](https://seller-edu.ozon.ru/docs/prices/market-prices.html#если-рыночная-цена-на-комплект-отображается-неверно). */
            sources?: Productv2GetProductInfoResponseSource[];
            /** Информация об остатках товара. */
            stocks?: Productv2GetProductInfoResponseStock;
            /**
             * Дата последнего обновления товара.
             * @format date-time
             */
            updated_at?: string;
            /** Ставка НДС для товара. */
            vat?: string;
            /** Настройки видимости товара. */
            visibility_details?: Productv2GetProductInfoResponseVisibilityDetails;
            /** Если товар выставлен на продажу — `true`. */
            visible?: boolean;
            /**
             * Объёмный вес товара.
             * @format double
             */
            volume_weight?: number;
        }

        export interface Productv2GetProductInfoResponse {
            /** Результаты запроса. */
            result?: Productv2GetProductInfoResponseResult;
        }

        export interface V1GetProductRatingBySkuRequest {
            /** Список SKU товаров, для которых нужно вернуть контент-рейтинг. */
            skus?: string[];
        }

        export interface GetProductRatingBySkuResponseRatingCondition {
            /**
             * Количество баллов контент-рейтинга, которое даёт выполнение условия.
             * @format float
             */
            cost?: number;
            /** Описание условия. */
            description?: string;
            /** Признак, что условие выполнено. */
            fulfilled?: boolean;
            /** Идентификатор условия. */
            key?: string;
        }

        export interface GetProductRatingBySkuResponseRatingImproveAttribute {
            /**
             * Идентификатор атрибута.
             * @format int64
             */
            id?: number;
            /** Название атрибута. */
            name?: string;
        }

        export interface GetProductRatingBySkuResponseRatingGroup {
            /** Список условий, увеличивающих контент-рейтинг товара. */
            conditions?: GetProductRatingBySkuResponseRatingCondition[];
            /** Количество атрибутов, которые нужно заполнить для получения максимального балла в этой группе характеристик. */
            improve_at_least?: number;
            /** Cписок атрибутов, заполнение которых может увеличить контент-рейтинг товара. */
            improve_attributes?: GetProductRatingBySkuResponseRatingImproveAttribute[];
            /** Идентификатор группы. */
            key?: string;
            /** Название группы. */
            name?: string;
            /**
             * Рейтинг в группе.
             * @format float
             */
            rating?: number;
            /**
             * Процент влияния характеристик группы на контент-рейтинг.
             * @format float
             */
            weight?: number;
        }

        export interface GetProductRatingBySkuResponseProductRating {
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
            /**
             * Контент-рейтинг товара: от 0 до 100.
             * @format float
             */
            rating?: number;
            /** Группы характеристик, из которых складывается контент-рейтинг. */
            groups?: GetProductRatingBySkuResponseRatingGroup[];
        }

        export interface V1GetProductRatingBySkuResponse {
            /** Контент-рейтинг товаров. */
            products?: GetProductRatingBySkuResponseProductRating[];
        }

        export interface Productv2GetProductInfoListRequest {
            /** Идентификатор товара в системе продавца — артикул. Максимальное количество товаров — 1000. */
            offer_id?: string[];
            /** Идентификатор товара. */
            product_id?: number[];
            /** Идентификатор товара в системе Ozon — SKU. */
            sku?: number[];
        }

        export interface Productv2GetProductInfoListResponseSource {
            /** Флаг, что источник учитывается при расчете рыночного значения. */
            is_enabled?: boolean;
            /**
             * Идентификатор товара на Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /** Ссылка на источник. */
            source?: string;
        }

        /** Информация об остатках товара. */
        export interface Productv2GetProductInfoListResponseStock {
            /**
             * Ожидается поставка.
             * @format int32
             */
            coming?: number;
            /**
             * Сейчас на складе.
             * @format int32
             */
            present?: number;
            /**
             * Зарезервировано.
             * @format int32
             */
            reserved?: number;
        }

        export interface GetProductInfoListResponseReason {
            /** Описание причины. */
            description?: string;
            /**
             * Идентификатор причины.
             * @format int64
             */
            id?: number;
        }

        export interface GetProductInfoListResponseReasons {
            /** Причины скрытия товара. */
            reasons?: GetProductInfoListResponseReason[];
        }

        /** Настройки видимости товара. */
        export interface Productv2GetProductInfoListResponseVisibilityDetails {
            /** Если активный товар — `true`. */
            active_product?: boolean;
            /** Если установлена цена — `true`. */
            has_price?: boolean;
            /** Если есть остаток на складах — `true`. */
            has_stock?: boolean;
            /** Причина, почему товар скрыт. */
            reasons?: Record<string, GetProductInfoListResponseReasons>;
        }

        /**
         * Информация о комиссиях, связанных с товаром.
         */
        interface Commission {
            /**
             * Стоимость доставки.
             */
            delivery_amount: number;

            /**
             * Процент комиссии.
             */
            percent: number;

            /**
             * Стоимость возврата.
             */
            return_amount: number;

            /**
             * Схема продажи.
             */
            sale_schema: string;

            /**
             * Сумма комиссии.
             */
            value: number;
        }

        /**
 * Ошибка, возникшая при создании или валидации товара.
 */
        interface Error {
            /**
             * Идентификатор характеристики, связанной с ошибкой.
             */
            attribute_id: number;

            /**
             * Код ошибки.
             */
            code: string;

            /**
             * Поле, в котором найдена ошибка.
             */
            field: string;

            /**
             * Уровень ошибки.
             */
            level: ErrorLevel;

            /**
             * Статус товара, в котором произошла ошибка.
             */
            state: string;

            /**
             * Описание ошибок.
             */
            texts: ErrorTexts;

            /**
             * Название атрибута, в котором произошла ошибка.
             */
            attribute_name: string;

            /**
             * Описание ошибки.
             */
            description: string;

            /**
             * Код ошибки в системе Ozon.
             */
            hint_code: string;

            /**
             * Текст ошибки.
             */
            message: string;

            /**
             * Параметры, связанные с ошибкой.
             */
            params: ErrorParam[];

            /**
             * Краткое описание ошибки.
             */
            short_description: string;
        }

        /**
         * Уровень ошибки.
         */
        type ErrorLevel =
            | "ERROR_LEVEL_UNSPECIFIED" // Уровень ошибки не определён
            | "ERROR_LEVEL_ERROR"       // Некритичная ошибка
            | "ERROR_LEVEL_WARNING"     // Критичная ошибка, но товар можно продавать
            | "ERROR_LEVEL_INTERNAL";   // Критичная ошибка, товар нельзя продавать

        /**
 * Описание ошибок.
 */
        interface ErrorTexts {
            /**
             * Название атрибута, в котором произошла ошибка.
             */
            attribute_name: string;

            /**
             * Описание ошибки.
             */
            description: string;

            /**
             * Код ошибки в системе Ozon.
             */
            hint_code: string;

            /**
             * Текст ошибки.
             */
            message: string;
        }

        /**
 * Параметр, связанный с ошибкой.
 */
        interface ErrorParam {
            /**
             * Название параметра.
             */
            name: string;

            /**
             * Значение параметра.
             */
            value: string;
        }
        /**
         * Информация о модели товара.
         */
        interface ModelInfo {
            /**
             * Количество товаров в ответе.
             */
            count: number;

            /**
             * Идентификатор модели товара.
             */
            model_id: number;

            /**
             * Название модели.
             */
            name: string;
        }

        /**
         * Ценовые индексы товара.
         */
        interface PriceIndexes {
            /**
             * Индекс цвета, указывающий на выгодность цены.
             */
            color_index: ColorIndex;

            /**
             * Данные о цене товара у конкурентов на других площадках.
             */
            external_index_data: IndexData;

            /**
             * Данные о цене товара у конкурентов на Ozon.
             */
            ozon_index_data: IndexData;

            /**
             * Данные о цене вашего товара на других площадках.
             */
            self_marketplaces_index_data: IndexData;
        }

        /**
         * Индекс цвета, указывающий на выгодность цены.
         */
        type ColorIndex =
            | "COLOR_INDEX_UNSPECIFIED"   // Индекс не определён
            | "COLOR_INDEX_WITHOUT_INDEX" // Индекс отсутствует
            | "COLOR_INDEX_GREEN"         // Выгодный индекс
            | "COLOR_INDEX_YELLOW"        // Умеренный индекс
            | "COLOR_INDEX_RED";          // Невыгодный индекс

        /**
         * Данные о цене товара.
         */
        interface IndexData {
            /**
             * Минимальная цена товара.
             */
            minimal_price: string;

            /**
             * Валюта цены.
             */
            minimal_price_currency: string;

            /**
             * Значение индекса цены.
             */
            price_index_value: number;
        }

        /**
         * Информация об источнике создания товара.
         */
        interface Source {
            /**
             * Дата и время создания товара в формате ISO 8601.
             */
            created_at: string;

            /**
             * Список квантов с товарами.
             */
            quant_code: string;

            /**
             * Тип упаковки товара.
             */
            shipment_type: ShipmentType;
        }

        /**
         * Тип упаковки товара.
         */
        type ShipmentType =
            | "SHIPMENT_TYPE_UNSPECIFIED" // Тип упаковки не указан
            | "SHIPMENT_TYPE_GENERAL"     // Обычный товар
            | "SHIPMENT_TYPE_BOX"         // Коробка
            | "SHIPMENT_TYPE_PALLET";     // Палета

        /**
         * Информация о статусах товара.
         */
        interface Statuses {
            /**
             * Признак, что товар создан корректно.
             */
            is_created: boolean;

            /**
             * Статус модерации товара.
             */
            moderate_status: string;

            /**
             * Статус товара.
             */
            status: string;

            /**
             * Описание статуса товара.
             */
            status_description: string;

            /**
             * Статус товара, в котором возникла ошибка.
             */
            status_failed: string;

            /**
             * Название статуса товара.
             */
            status_name: string;

            /**
             * Описание статуса товара.
             */
            status_tooltip: string;

            /**
             * Дата и время последнего изменения статуса в формате ISO 8601.
             */
            status_updated_at: string;

            /**
             * Статус валидации товара.
             */
            validation_status: string;
        }

        /**
         * Информация об остатках товара на складах.
         */
        interface Stocks {
            /**
             * Признак наличия остатков на складах.
             */
            has_stock: boolean;

            /**
             * Массив остатков товара.
             */
            stocks: Stock[];
        }

        /**
         * Остаток товара на складе.
         */
        interface Stock {
            /**
             * Количество товара на складе.
             */
            present: number;

            /**
             * Количество зарезервированного товара.
             */
            reserved: number;

            /**
             * Идентификатор товара в системе Ozon (SKU).
             */
            sku: number;

            /**
             * Схема продажи.
             */
            source: string;
        }

        /**
         * Настройки видимости товара.
         */
        interface VisibilityDetails {
            /**
             * Признак, что для товара установлена цена.
             */
            has_price: boolean;

            /**
             * Признак, что у товара есть остатки на складах.
             */
            has_stock: boolean;
        }

        /**
        * Основной интерфейс, описывающий товар.
        */
        export interface Productv3GetProductInfoListResponseItem {
            /**
             * Штрихкоды товара.
             */
            barcodes: string[];

            /**
             * Изображения, представляющие цвет товара.
             */
            color_image: string[];

            /**
             * Информация о комиссиях, связанных с товаром.
             */
            commissions: Commission[];

            /**
             * Дата и время создания товара в формате ISO 8601.
             */
            created_at: string;

            /**
             * Код валюты, в которой указаны цены товара (например, "RUB").
             */
            currency_code: string;

            /**
             * Идентификатор категории товара.
             */
            description_category_id: number;

            /**
             * Количество уценённого товара на складе Ozon.
             */
            discounted_fbo_stocks: number;

            /**
             * Ошибки, возникшие при создании или валидации товара.
             */
            errors: Error[];

            /**
             * Признак наличия уценённого товара на складе Ozon.
             */
            has_discounted_fbo_item: boolean;

            /**
             * Уникальный идентификатор товара.
             */
            id: number;

            /**
             * Массив ссылок на изображения товара.
             */
            images: string[];

            /**
             * Массив ссылок на изображения товара в формате 360 градусов.
             */
            images360: string[];

            /**
             * Признак, что товар архивирован вручную.
             */
            is_archived: boolean;

            /**
             * Признак, что товар архивирован автоматически.
             */
            is_autoarchived: boolean;

            /**
             * Признак, что товар является уценённым.
             */
            is_discounted: boolean;

            /**
             * Признак, что товар является крупногабаритным.
             */
            is_kgt: boolean;

            /**
             * Признак, что для товара возможна предоплата.
             */
            is_prepayment_allowed: boolean;

            /**
             * Признак, что товар является "супер-товаром".
             */
            is_super: boolean;

            /**
             * Цена товара с учётом всех акций. Отображается на витрине Ozon.
             */
            marketing_price: string;

            /**
             * Минимальная цена товара после применения акций.
             */
            min_price: string;

            /**
             * Информация о модели товара.
             */
            model_info: ModelInfo;

            /**
             * Идентификатор товара в системе продавца (артикул).
             */
            offer_id: string;

            /**
             * Цена товара до учёта скидок. Отображается зачёркнутой на карточке товара.
             */
            old_price: string;

            /**
             * Цена товара с учётом скидок. Отображается на карточке товара.
             */
            price: string;

            /**
             * Ценовые индексы товара.
             */
            price_indexes: PriceIndexes;

            /**
             * Массив ссылок на главное изображение товара.
             */
            primary_image: string[];

            /**
             * Информация об источниках создания товара.
             */
            sources: Source[];

            /**
             * Идентификатор товара на Ozon (SKU).
             */
            sku: number;

            /**
             * Информация о статусах товара.
             */
            statuses: Statuses;

            /**
             * Информация об остатках товара на складах.
             */
            stocks: Stocks;

            /**
             * Идентификатор типа товара.
             */
            type_id: number;

            /**
             * Дата и время последнего обновления товара в формате ISO 8601.
             */
            updated_at: string;

            /**
             * Ставка НДС для товара.
             */
            vat: string;

            /**
             * Настройки видимости товара.
             */
            visibility_details: VisibilityDetails;

            /**
             * Объёмный вес товара.
             */
            volume_weight: number;
        }


        export interface Productv2GetProductInfoListResponseItem {
            /** Штрихкод. */
            barcode?: string;
            /** Все штрихкоды товара. */
            barcodes?: string[];
            /** Цена главного предложения на Ozon. */
            buybox_price?: string;
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /** Маркетинговый цвет. */
            color_image?: string;
            /**
             * Дата и время создания товара.
             * @format date-time
             */
            created_at?: string;
            /**
             * SKU товара, который продаётся со склада Ozon (FBO).
             * @format int64
             */
            fbo_sku?: number;
            /**
             * SKU товара, который продаётся со склада продавца (FBS и rFBS).
             * @format int64
             */
            fbs_sku?: number;
            /**
             * Номер задания на формирование документов.
             * @format int64
             */
            id?: number;
            /**
             * Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр
             * `primary_image` не указан, первое изображение в массиве главное для товара.
             */
            images?: string[];
            /** Главное изображение товара. */
            primary_image?: string;
            /** Массив изображений 360. */
            images360?: string[];
            /** Признак, что у товара есть уценённые аналоги на складе Ozon. */
            has_discounted_item?: boolean;
            /**
             * Признак, является ли товар уценённым:
             *   - Если товар создавался продавцом как уценённый — `true`.
             *   - Если товар не уценённый или был уценён Ozon — `false`.
             */
            is_discounted?: boolean;
            /** Остатки уценённого товара на складе Ozon. */
            discounted_stocks?: Productv2GetProductInfoDiscountedStocks;
            /** Признак крупногабаритного товара. */
            is_kgt?: boolean;
            /**
             * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /** Цена на товар с учётом всех акций. Это значение будет указано на витрине Ozon. */
            marketing_price?: string;
            /** Минимальная цена на аналогичный товар на Ozon. */
            min_ozon_price?: string;
            /** Минимальная цена товара после применения акций. */
            min_price?: string;
            /** Название. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена до учёта скидок. На карточке товара отображается зачёркнутой. */
            old_price?: string;
            /** Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/). */
            premium_price?: string;
            /** Цена товара с учётом скидок — это значение показывается на карточке товара. */
            price?: string;
            /**
             * Параметр неактуален и будет удалён 1 мая 2023 года.
             *
             * Ценовой индекс.
             */
            price_index?: string;
            /**
             * Ценовые индексы товара.
             *
             * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
             */
            price_indexes?: CommonPriceIndexes;
            /** Цена на товар, рекомендованная системой на основании схожих предложений. */
            recommended_price?: string;
            /** Описание состояния товара. */
            status?: Productv2Status;
            /** Информация об источниках схожих предложений. */
            sources?: Productv2GetProductInfoListResponseSource[];
            /** Информация об остатках товара. */
            stocks?: Productv2GetProductInfoListResponseStock;
            /**
             * Дата последнего обновления товара.
             * @format date-time
             */
            updated_at?: string;
            /** Ставка НДС для товара. */
            vat?: string;
            /** Настройки видимости товара. */
            visibility_details?: Productv2GetProductInfoListResponseVisibilityDetails;
            /** Если товар выставлен на продажу — `true`. */
            visible?: boolean;
        }

        /** Результаты запроса. */
        export interface Productv2GetProductInfoListResponseResult {
            /** Массив данных. */
            items?: Productv2GetProductInfoListResponseItem[];
        }

        /** Результаты запроса. */
        export interface Productv3GetProductInfoListResponseResult {
            /** Массив данных. */
            items?: Productv3GetProductInfoListResponseItem[];
        }

        export interface Productv2GetProductInfoListResponse {
            /** Результаты запроса. */
            result?: Productv2GetProductInfoListResponseResult;
        }

        export interface Productv3GetProductInfoListResponse {
            /** Результаты запроса. */
            result?: Productv3GetProductInfoListResponseResult;
        }

        /** Фильтр по товарам. */
        export interface Productv3Filter {
            /** Фильтр по параметру `offer_id`. Можно передавать список значений. */
            offer_id?: string[];
            /** Фильтр по параметру `product_id`. Можно передавать список значений. */
            product_id?: string[];
            /**
             * Фильтр по видимости товара:
             *   - `ALL` — все товары, кроме архивных.
             *   - `VISIBLE` — товары, которые видны покупателям.
             *   - `INVISIBLE` — товары, которые не видны покупателям.
             *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
             *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
             *   - `MODERATED` — товары, которые прошли модерацию.
             *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
             *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
             *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
             *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
             *   - `TO_SUPPLY` — товары, готовые к продаже.
             *   - `IN_SALE` — товары в продаже.
             *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
             *   - `BANNED` — заблокированные товары.
             *   - `OVERPRICED` — товары с завышенной ценой.
             *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
             *   - `EMPTY_BARCODE` — товары без штрихкода.
             *   - `BARCODE_EXISTS` — товары со штрихкодом.
             *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
             *   - `ARCHIVED` — товары в архиве.
             *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
             *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
             *   - `IMAGE_ABSENT` — товары без изображений.
             *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
             */
            visibility?: Productv2GetProductListRequestFilterFilterVisibility;
        }

        export interface Productv3GetProductAttributesV3Request {
            /** Фильтр по товарам. */
            filter?: Productv3Filter;
            /**
             * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
             *
             * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
             */
            last_id?: string;
            /**
             * Количество значений на странице. Минимум — 1, максимум — 1000.
             * @format int64
             */
            limit?: number;
            /** Параметр, по которому товары будут отсортированы. */
            sort_by?: string;
            /** Направление сортировки. */
            sort_dir?: string;
        }

        export interface ProductGetProductAttributesV3ResponseDictionaryValue {
            /**
             * Идентификатор характеристики в словаре.
             * @format int64
             */
            dictionary_value_id?: number;
            /** Значение характеристики товара. */
            value?: string;
        }

        export interface ProductGetProductAttributesV3ResponseAttribute {
            /**
             * Идентификатор характеристики.
             * @format int64
             */
            attribute_id?: number;
            /**
             * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель» и «L2 Cache». У каждой из вложенных характеристик может быть несколько вариантов значений.
             * @format int64
             */
            complex_id?: number;
            /** Массив значений характеристик. */
            values?: ProductGetProductAttributesV3ResponseDictionaryValue[];
        }

        export interface GetProductAttributesV3ResponseDictionaryValue {
            /**
             * Идентификатор характеристики в словаре.
             * @format int64
             */
            dictionaryValueId?: number;
            /** Значение характеристики товара. */
            value?: string;
        }

        export interface GetProductAttributesV3ResponseAttribute {
            /**
             * Идентификатор характеристики.
             * @format int64
             */
            attribute_id?: number;
            /**
             * Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель» и «L2 Cache». У каждой из вложенных характеристик может быть несколько вариантов значений.
             * @format int64
             */
            complex_id?: number;
            /** Массив значений характеристик. */
            values?: GetProductAttributesV3ResponseDictionaryValue[];
        }

        export interface ProductGetProductAttributesV3ResponseComplexAttribute {
            /** Массив характеристик товара. */
            attributes?: GetProductAttributesV3ResponseAttribute[];
        }

        export interface GetProductAttributesResponseImage {
            default?: boolean;
            file_name?: string;
            /** @format int64 */
            index?: number;
        }

        export interface GetProductAttributesResponseImage360 {
            file_name?: string;
            /** @format int64 */
            index?: number;
        }

        export interface GetProductAttributesResponsePdf {
            /** Путь к PDF-файлу. */
            file_name?: string;
            /**
             * Индекс документа в хранилище, который задаёт порядок.
             * @format int64
             */
            index?: number;
            /** Название файла. */
            name?: string;
        }

        export interface Productv3GetProductAttributesV3ResponseResult {
            /** Массив характеристик товара. */
            attributes?: ProductGetProductAttributesV3ResponseAttribute[];
            /** Штрихкод. */
            barcode?: string;
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /** Маркетинговый цвет. */
            color_image?: string;
            /** Массив вложенных характеристик. */
            complex_attributes?: ProductGetProductAttributesV3ResponseComplexAttribute[];
            /**
             * Глубина.
             * @format int32
             */
            depth?: number;
            /**
             * Единица измерения габаритов:
             *   - `mm` — миллиметры,
             *   - `cm` — сантиметры,
             *   - `in` — дюймы.
             */
            dimension_unit?: string;
            /**
             * Высота упаковки.
             * @format int32
             */
            height?: number;
            /**
             * Идентификатор характеристики товара.
             * @format int64
             */
            id?: number;
            /** Идентификатор для последующей пакетной загрузки изображений. */
            image_group_id?: string;
            /** Массив ссылок на изображения товара. */
            images?: GetProductAttributesResponseImage[];
            /** Массив изображений 360. */
            images360?: GetProductAttributesResponseImage360[];
            /** Название товара. До 500 символов. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Массив PDF-файлов. */
            pdf_list?: GetProductAttributesResponsePdf[];
            /**
             * Вес товара в упаковке.
             * @format int32
             */
            weight?: number;
            /** Единица измерения веса. */
            weight_unit?: string;
            /**
             * Ширина упаковки.
             * @format int32
             */
            width?: number;
        }

        export interface Productv3GetProductAttributesV3Response {
            /** Результаты запроса. */
            result?: Productv3GetProductAttributesV3ResponseResult[];
            /**
             * Идентификатор последнего значения на странице.
             *
             * Чтобы получить следующие значения, укажите полученное значение в следующем запросе в параметре `last_id`.
             */
            last_id?: string;
            /**
             * Количество товаров в списке.
             * @format int32
             */
            total?: string;
        }

        export interface ProductGetProductInfoDescriptionRequest {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface ProductGetProductInfoDescriptionResponseProduct {
            /** Описание. */
            description?: string;
            /**
             * Идентификатор.
             * @format int64
             */
            id?: number;
            /** Название. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
        }

        export interface ProductGetProductInfoDescriptionResponse {
            result?: ProductGetProductInfoDescriptionResponseProduct;
        }

        export type Productv2GetProductInfoLimitV2Request = object;

        export interface Productv2GetProductInfoLimitV2ResponseResult {
            /**
             * Сколько изменений можно внести до сброса счётчика за текущие сутки.
             * @format int64
             */
            remaining?: number;
            /**
             * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
             * @format date-time
             */
            reset_at?: string;
            /**
             * Значение лимита на загрузку и обновление товаров.
             * @format int64
             */
            value?: number;
        }

        export interface Productv2GetProductInfoLimitV2Response {
            result?: Productv2GetProductInfoLimitV2ResponseResult;
        }

        export type V1Empty = object;

        /** Суточные лимиты. */
        export interface GetProductInfoLimitResponseDailyQuota {
            /**
             * Общий суточный лимит на создание и обновление товаров.
             * @format int64
             */
            all_quota_value?: number;
            /**
             * Сколько осталось от общего суточного лимита на создание и обновление товаров до конца суток.
             * @format int64
             */
            all_remaining_value?: number;
            /**
             * Суточный лимит на создание товаров.
             * @format int64
             */
            create_quota_value?: number;
            /**
             * Сколько осталось от суточного лимита на создание товаров до конца суток.
             * @format int64
             */
            create_remaining_value?: number;
            /**
             * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
             * @format date-time
             */
            reset_at?: string;
        }

        /** Лимиты на ассортимент. */
        export interface GetProductInfoLimitResponseTotalQuota {
            /**
             * Сколько всего товаров можно создать. Если значение `-1`, ограничений нет.
             * @format int64
             */
            item_quota_value?: number;
            /**
             * Сколько ещё товаров можно создать. Если значение `-1`, ограничений нет.
             * @format int64
             */
            remaining_value?: number;
        }

        /** Результат работы метода. */
        export interface V3GetProductInfoLimitResponseResult {
            /** Суточные лимиты. */
            daily_quota?: GetProductInfoLimitResponseDailyQuota;
            /** Лимиты на ассортимент. */
            total_quota?: GetProductInfoLimitResponseTotalQuota;
        }

        export interface V3GetProductInfoLimitResponse {
            /** Результат работы метода. */
            result?: V3GetProductInfoLimitResponseResult;
        }

        /** Суточный лимит на создание товаров. */
        export interface GetUploadQuotaResponseDailyCreate {
            /**
             * Сколько всего товаров можно создать в сутки.
             * @format int64
             */
            limit?: number;
            /**
             * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
             * @format date-time
             */
            reset_at?: string;
            /**
             * Сколько товаров создано за текущие сутки.
             * @format int64
             */
            usage?: number;
        }

        /** Суточный лимит на обновление товаров. */
        export interface GetUploadQuotaResponseDailyUpdate {
            /**
             * Сколько всего товаров можно обновить в сутки.
             * @format int64
             */
            limit?: number;
            /**
             * Время в формате UTC, когда сбросится значение счётчика за текущие сутки.
             * @format date-time
             */
            reset_at?: string;
            /**
             * Сколько товаров обновлено за текущие сутки.
             * @format int64
             */
            usage?: number;
        }

        /** Лимит на ассортимент. */
        export interface GetUploadQuotaResponseTotal {
            /**
             * Сколько всего товаров можно создать в личном кабинете.
             * @format int64
             */
            limit?: number;
            /**
             * Сколько товаров уже создано.
             * @format int64
             */
            usage?: number;
        }

        export interface V4GetUploadQuotaResponse {
            /** Суточный лимит на создание товаров. */
            daily_create?: GetUploadQuotaResponseDailyCreate;
            /** Суточный лимит на обновление товаров. */
            daily_update?: GetUploadQuotaResponseDailyUpdate;
            /** Лимит на ассортимент. */
            total?: GetUploadQuotaResponseTotal;
        }

        export interface ProductUpdateOfferIdRequestUpdateOfferId {
            /**
             * Новый артикул.
             *
             * Максимальная длина строки — 50 символов.
             */
            new_offer_id?: string;
            /** Старый артикул. */
            offer_id?: string;
        }

        export interface V1ProductUpdateOfferIdRequest {
            /** Список пар с новыми и старыми значениями артикулов. */
            update_offer_id?: ProductUpdateOfferIdRequestUpdateOfferId[];
        }

        export interface V1ProductUpdateOfferIdResponseError {
            /** Сообщение об ошибке. */
            message?: string;
            /** Артикул товара, который не получилось изменить. */
            offer_id?: string;
        }

        export interface V1ProductUpdateOfferIdResponse {
            /** Список ошибок. */
            errors?: V1ProductUpdateOfferIdResponseError[];
        }

        export interface ProductProductArchiveRequest {
            /** Идентификатор товара. */
            product_id?: number[];
        }

        export interface ProductBooleanResponse {
            /** Результат обработки запроса. `true`, если запрос выполнен без ошибок. */
            result?: boolean;
        }

        export interface ProductProductUnarchiveRequest {
            /** Идентификатор товара. */
            product_id?: number[];
        }

        export interface DeleteProductsRequestProduct {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
        }

        export interface Productv2DeleteProductsRequest {
            /** Идентификатор товара. */
            products?: DeleteProductsRequestProduct[];
        }

        export interface DeleteProductsResponseDeleteStatus {
            /** Причина ошибки, которая возникла при обработке запроса. */
            error?: string;
            /** Если запрос выполнен без ошибок и товары удалены — `true`. */
            is_deleted?: boolean;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
        }

        export interface Productv2DeleteProductsResponse {
            /** Статус обработки запроса. */
            status?: DeleteProductsResponseDeleteStatus[];
        }

        /** Фильтр. Чтобы посмотреть все геоограничения, оставьте `names` пустым, а в `only_visible` передайте `true`. */
        export interface V2GetGeoRestrictionsByFilterRequestFilter {
            /** Список с названиями городов. */
            names?: string[];
            /** Видимость значения. Рекомендуем всегда передавать `true` в этом параметре. */
            only_visible?: boolean;
        }

        export interface Productv2GetGeoRestrictionsByFilterRequest {
            /** Фильтр. Чтобы посмотреть все геоограничения, оставьте `names` пустым, а в `only_visible` передайте `true`. */
            filter?: V2GetGeoRestrictionsByFilterRequestFilter;
            /**
             * Порядок геоограничения, с которого выводим данные в ответе.
             *
             * Если указать `23`, то на выходе у первого элемента списка `restrictions` будет `order_number = 24`. Если вы хотите получить все геоограничения, укажите `0` в этом параметре.
             * @format int64
             */
            last_order_number?: number;
            /**
             * Количество результатов в ответе.
             * @format int64
             */
            limit?: number;
        }

        /** Список геоограничений. */
        export interface GetGeoRestrictionsByFilterResponseGeoRestriction {
            /** Идентификатор геоограничения. */
            id?: string;
            /** Видимость элемента. */
            is_visible?: boolean;
            /** Название города. */
            name?: string;
            /**
             * Порядковый номер геоограничения.
             *
             * Если на вход в параметре `last_order_number` указать `23`, то у первого элемента списка `restrictions` будет `order_number = 24`.
             * @format int64
             */
            order_number?: number;
        }

        export interface Productv2GetGeoRestrictionsByFilterResponse {
            restrictions?: GetGeoRestrictionsByFilterResponseGeoRestriction[];
        }

        export interface V1ProductUploadDigitalCodesRequest {
            /** Цифровые коды активации. */
            digital_codes?: string[];
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface V1ProductUploadDigitalCodesResponseResult {
            /**
             * Код задачи на загрузку кодов.
             * @format int64
             */
            task_id?: number;
        }

        export interface V1ProductUploadDigitalCodesResponse {
            result?: V1ProductUploadDigitalCodesResponseResult;
        }

        export interface V1ProductUploadDigitalCodesRequestInfo {
            /**
             * Идентификатор задачи на загрузку кодов активации, полученный в ответе метода [/v1/product/upload_digital_codes](#operation/ProductAPI_UploadDigitalCode).
             * @format int64
             */
            task_id?: number;
        }

        export interface V1ProductUploadDigitalCodesResponseInfoResult {
            /**
             * Статус загрузки:
             *   - `pending` — товар в очереди на обработку.
             *   - `imported` — товар успешно загружен.
             *   - `failed` — товар загружен с ошибками.
             */
            status?: string;
        }

        export interface V1ProductUploadDigitalCodesResponseInfo {
            result?: V1ProductUploadDigitalCodesResponseInfoResult;
        }

        export interface V1GetProductInfoSubscriptionRequest {
            /** Список SKU, идентификаторов товара в системе Ozon. */
            skus?: string[];
        }

        export interface V1GetProductInfoSubscriptionResponseResult {
            /**
             * Количество подписавшихся пользователей.
             * @format int64
             */
            count?: number;
            /**
             * Идентификатор товара в системе Ozon, SKU.
             * @format int64
             */
            sku?: number;
        }

        export interface V1GetProductInfoSubscriptionResponse {
            /** Результат работы метода. */
            result?: V1GetProductInfoSubscriptionResponseResult[];
        }

        export interface ProductImportProductsStocksRequestStock {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество товара в наличии.
             * @format int64
             */
            stock?: number;
        }

        export interface ProductImportProductsStocksV2RequestStock {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество товара в наличии.
             * @format int64
             */
            stock: number;
            /**
             * Используйте параметр, если у обычного и эконом-товара совпадает артикул — offer_id = quant_id. Чтобы обновить количество:
             * обычного товара — передайте значение 1;
             * эконом-товара — передайте размер его кванта.
             * Если у обычного и эконом-товара разные артикулы, не передавайте параметр.
             */
            quant_size?: number;
            warehouse_id: number
        }

        export interface ProductImportProductsStocksRequest {
            /** Информация о товарах на складах. */
            stocks?: ProductImportProductsStocksRequestStock[];
        }
        export interface ProductImportProductsStocksV2Request {
            /** Информация о товарах на складах. */
            stocks?: ProductImportProductsStocksV2RequestStock[];
        }

        export interface ProductImportProductsStocksResponseError {
            /**
             * Код ошибки:
             * - `OVER_MAX_OVH_KGT` — вес или габариты товара больше максимальных. Обновить количество не получится. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/logistics-settings/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков).
             * - `OVER_MAX_OVH_NON_KGT` — вы не можете продавать крупногабаритные товары с этого склада. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков).
             * - `NON_KGT_ON_KGT_WAREHOUSE` — все ваши товары продаются как крупногабаритные, а вы хотите продавать обычный. Он попадёт под условия продажи крупногабаритных. [Информация в Базе знаний продавца](https://seller-edu.ozon.ru/docs/fbs/upravlenie-ostatkami.html#какие-типы-ошибок-могут-возникнуть-при-обновлении-остатков).
             * - `STOCK_TOO_BIG` — указано слишком большое количество, попробуйте уменьшить его.
             * - `INVALID_STATE` — товар не прошёл все этапы создания, проверьте его статус.
             * - `CANNOT_CREATE_FBS_SKU` — произошла внутренняя ошибка при обновлении наличия, попробуйте ещё раз.
             * - `NOT_FOUND` — не удалось найти указанный товар.
             * - `PRODUCT_HAS_NOT_BEEN_TAGGED_YET` — товар ещё не пометили тегами «КГТ» или «неКГТ», так как не указаны габариты товара или система для расстановки тегов ещё не обработала его.
             */
            code?: string;
            /** Причина ошибки. */
            message?: string;
        }

        export interface ProductImportProductsStocksResponseProcessResult {
            /** Массив ошибок, которые возникли при обработке запроса. */
            errors?: ProductImportProductsStocksResponseError[];
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Если информации о товаре успешно обновлена — `true`. */
            updated?: boolean;
        }

        export interface ProductImportProductsStocksResponse {
            /** Результаты запроса. */
            result?: ProductImportProductsStocksResponseProcessResult[];
        }

        export interface Productv2ProductsStocksRequestStock {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество.
             * @format int64
             */
            stock?: number;
            /**
             * Идентификатор склада, полученный из метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
             * @format int64
             */
            warehouse_id?: number;
        }

        export interface Productv2ProductsStocksRequest {
            /** Информация о товарах на складах. */
            stocks?: Productv2ProductsStocksRequestStock[];
        }

        export interface Productv2ProductsStocksResponseError {
            /**
             * Код ошибки:
             *   - `SKU STOCK NOT CHANGED` — количество товара на складе не изменилось, так как вы передаёте тот же остаток.
             *   - `PRODUCT_HAS_NOT_BEEN_TAGGED_YET` — товар ещё не пометили тегами «КГТ» или «неКГТ», так как не указаны габариты товара или система для расстановки тегов ещё не обработала его.
             *   - `NON_KGT_ON_KGT_WAREHOUSE` — попытка установить или обновить остаток некрупногабаритного товара на КГТ складе.
             */
            code?: string;
            /** Причина ошибки. */
            message?: string;
        }

        export interface Productv2ProductsStocksResponseResult {
            /** Массив ошибок, которые возникли при обработке запроса. */
            errors?: Productv2ProductsStocksResponseError[];
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Если запрос выполнен успешно и остатки обновлены — `true`. */
            updated?: boolean;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
            /**
             * Показывает, количество товара какого типа вы обновляете:
             * 1 — если обновляете остатки обычного товара;
             * размер кванта — если обновляете остатки эконом-товара.
             */
            quant_size?: number
        }

        /** Результаты запроса. */
        export interface Productv2ProductsStocksResponse {
            result?: Productv2ProductsStocksResponseResult[];
        }

        export interface Productv3GetProductInfoStocksV3Request {
            /** Фильтр по товарам. */
            filter?: Productv3Filter;
            /**
             * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
             *
             * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
             */
            last_id?: string;
            /**
             * Количество значений на странице. Минимум — 1, максимум — 1000.
             * @format int64
             */
            limit?: number;
        }

        /** Остатки. */
        export interface GetProductInfoStocksV3ResponseStock {
            /**
             * Сейчас на складе.
             * @format int32
             */
            present?: number;
            /**
             * Зарезервировано.
             * @format int32
             */
            reserved?: number;
            /** Тип склада. */
            type?: string;
        }

        export interface Productv3GetProductInfoStocksV3ResponseItem {
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Информация об остатках. */
            stocks?: GetProductInfoStocksV3ResponseStock[];
        }

        /** Результаты запроса. */
        export interface Productv3GetProductInfoStocksV3ResponseResult {
            /** Информация о товарах. */
            items?: Productv3GetProductInfoStocksV3ResponseItem[];
            /**
             * Идентификатор последнего значения на странице.
             *
             * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
             */
            last_id?: string;
            /**
             * Количество уникальных товаров, для которых выводится информация об остатках.
             * @format int32
             */
            total?: number;
        }

        export interface Productv3GetProductInfoStocksV3Response {
            /** Результаты запроса. */
            result?: Productv3GetProductInfoStocksV3ResponseResult;
        }

        export interface Productsv1GetProductInfoStocksByWarehouseFbsRequest {
            /**
             * SKU товара, который продаётся со склада продавца (схемы FBS и rFBS).
             *
             * Получите `fbs_sku` в ответе методов [/v2/product/info](#operation/ProductAPI_GetProductInfoV2) и [/v2/product/info/list](#operation/ProductAPI_GetProductInfoListV2).
             *
             * Максимальное количестов SKU в одном запросе — 500.
             */
            fbs_sku?: string[];
        }

        export interface Productsv1GetProductInfoStocksByWarehouseFbsResponseResult {
            /**
             * SKU товара, который продаётся со склада продавца (схемы FBS и rFBS).
             * @format int64
             */
            fbs_sku?: number;
            /**
             * Общее количество товара на складе.
             * @format int64
             */
            present?: number;
            /**
             * Идентификатор товара в системе продавца.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество зарезервированных товаров на складе.
             * @format int64
             */
            reserved?: number;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
            /** Название склада. */
            warehouse_name?: string;
        }

        export interface Productsv1GetProductInfoStocksByWarehouseFbsResponse {
            /** Результат работы метода. */
            result?: Productsv1GetProductInfoStocksByWarehouseFbsResponseResult[];
        }

        export interface ProductImportProductsPricesRequestPrice {
            /**
             * Атрибут для включения и выключения автоприменения акций:
             * - `ENABLED` — включить автоприменение акций;
             * - `DISABLED` — выключить автоприменение акций;
             * - `UNKNOWN` — ничего не менять, передаётся по умолчанию.
             *
             * Например, если ранее вы включили автоприменение акций и не хотите выключать его, передавайте `UNKNOWN`.
             *
             * Если вы передаёте `ENABLED` в этом параметре, установите значение минимальной цены в параметре `min_price`.
             * @default "UNKNOWN"
             */
            auto_action_enabled?: 'UNKNOWN' | 'ENABLED' | 'DISABLED';
            /**
             * Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
             *
             * Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение `CNY`, иначе вернётся ошибка.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /** Минимальная цена товара после применения акций. */
            min_price?: string;
            /** Идентификатор товара в системе продавца. */
            offer_id?: string;
            /**
             * Цена до скидок (зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.
             *
             * Если на товар нет скидок, укажите значение `0` в этом поле, а текущую цену передайте в поле `price`.
             */
            old_price?: string;
            /**
             * Цена товара с учётом скидок, отображается на карточке товара.
             *
             * Если текущая цена товара от 400 до 10 000 рублей включительно, разница между значениями `price` и `old_price` должна быть больше 5%, но не менее 20 рублей.
             */
            price?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface ProductImportProductsPricesRequest {
            /** Информация о ценах товаров. */
            prices?: ProductImportProductsPricesRequestPrice[];
        }

        export interface ProductImportProductsPricesResponseError {
            /** Код ошибки. */
            code?: string;
            /** Причина ошибки. */
            message?: string;
        }

        export interface ProductImportProductsPricesResponseProcessResult {
            /** Массив ошибок, которые возникли при обработке запроса. */
            errors?: ProductImportProductsPricesResponseError[];
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Если информации о товаре успешно обновлена — `true`. */
            updated?: boolean;
        }

        export interface ProductImportProductsPricesResponse {
            /** Результаты запроса. */
            result?: ProductImportProductsPricesResponseProcessResult[];
        }

        /** Фильтр по товарам. */
        export interface Productv4Filter {
            /** Фильтр по параметру `offer_id`. Можно передавать список значений. */
            offer_id?: string[];
            /** Фильтр по параметру `product_id`. Можно передавать до 1000 значений. */
            product_id?: string[];
            /**
             * Фильтр по видимости товара:
             *   - `ALL` — все товары, кроме архивных.
             *   - `VISIBLE` — товары, которые видны покупателям.
             *   - `INVISIBLE` — товары, которые не видны покупателям.
             *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
             *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
             *   - `MODERATED` — товары, которые прошли модерацию.
             *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
             *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
             *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
             *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
             *   - `TO_SUPPLY` — товары, готовые к продаже.
             *   - `IN_SALE` — товары в продаже.
             *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
             *   - `BANNED` — заблокированные товары.
             *   - `OVERPRICED` — товары с завышенной ценой.
             *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
             *   - `EMPTY_BARCODE` — товары без штрихкода.
             *   - `BARCODE_EXISTS` — товары со штрихкодом.
             *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
             *   - `ARCHIVED` — товары в архиве.
             *   - `OVERPRICED_WITH_STOCK` — товары в продаже со стоимостью выше, чем у конкурентов.
             *   - `PARTIAL_APPROVED` — товары в продаже с пустым или неполным описанием.
             *   - `IMAGE_ABSENT` — товары без изображений.
             *   - `MODERATION_BLOCK` — товары, для которых заблокирована модерация.
             */
            visibility?: Productv2GetProductListRequestFilterFilterVisibility;
        }

        export interface Productv4GetProductInfoPricesV4Request {
            /** Фильтр по товарам. */
            filter?: Productv4Filter;
            /**
             * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
             *
             * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
             */
            last_id?: string;
            /**
             * Количество значений на странице. Минимум — 1, максимум — 1000.
             * @format int32
             */
            limit?: number;
        }

        export interface GetProductInfoPricesRequest {
            /** Фильтр по товарам. */
            filter?: Productv4Filter;
            /**
             * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
             *
             * Чтобы получить следующие значения, укажите `cursor` из ответа предыдущего запроса.
             */
            cursor?: string;
            /**
             * Количество значений на странице. Минимум — 1, максимум — 1000.
             * @format int32
             */
            limit?: number;
        }

        /** Информация о комиссиях. */
        export interface ItemCommissions {
            /**
             * Последняя миля (FBO).
             * @format double
             */
            fbo_deliv_to_customer_amount?: number;
            /**
             * Магистраль до (FBO).
             * @format double
             */
            fbo_direct_flow_trans_max_amount?: number;
            /**
             * Магистраль от (FBO).
             * @format double
             */
            fbo_direct_flow_trans_min_amount?: number;
            /**
             * Комиссия за сборку заказа (FBO).
             * @format double
             */
            fbo_fulfillment_amount?: number;
            /**
             * Комиссия за возврат и отмену (FBO).
             * @format double
             */
            fbo_return_flow_amount?: number;
            /**
             * Комиссия за обратную логистику от (FBO).
             * @format double
             */
            fbo_return_flow_trans_min_amount?: number;
            /**
             * Комиссия за обратную логистику до (FBO).
             * @format double
             */
            fbo_return_flow_trans_max_amount?: number;
            /**
             * Последняя миля (FBS).
             * @format double
             */
            fbs_deliv_to_customer_amount?: number;
            /**
             * Магистраль до (FBS).
             * @format double
             */
            fbs_direct_flow_trans_max_amount?: number;
            /**
             * Магистраль от (FBS).
             * @format double
             */
            fbs_direct_flow_trans_min_amount?: number;
            /**
             * Комиссия за обработку отправления от (FBS).
             * @format double
             */
            fbs_first_mile_min_amount?: number;
            /**
             * Комиссия за обработку отправления до (FBS).
             * @format double
             */
            fbs_first_mile_max_amount?: number;
            /**
             * Комиссия за возврат и отмену, обработка отправления (FBS).
             * @format double
             */
            fbs_return_flow_amount?: number;
            /**
             * Комиссия за возврат и отмену, магистраль до (FBS).
             * @format double
             */
            fbs_return_flow_trans_max_amount?: number;
            /**
             * Комиссия за возврат и отмену, магистраль от (FBS).
             * @format double
             */
            fbs_return_flow_trans_min_amount?: number;
            /**
             * Процент комиссии за продажу (FBO и FBS).
             * @format double
             */
            sales_percent?: number;
        }

        export interface MarketingActionsMarketingAction {
            /**
             * Дата и время начала акции продавца.
             * @format date-time
             */
            date_from?: string;
            /**
             * Дата и время окончания акции продавца.
             * @format date-time
             */
            date_to?: string;
            /** Скидка по акции продавца. */
            discount_value?: string;
            /** Название акции продавца. */
            title?: string;
        }

        export interface ItemMarketingActions {
            /** Маркетинговые акции продавца. Параметры `date_from`, `date_to`, `discount_value` и `title` указываются для каждой акции продавца. */
            actions?: MarketingActionsMarketingAction[];
            /**
             * Дата и время начала текущего периода по всем действующим акциям.
             * @format date-time
             */
            current_period_from?: string;
            /**
             * Дата и время окончания текущего периода по всем действующим акциям.
             * @format date-time
             */
            current_period_to?: string;
            /** Если к товару может быть применена акция за счёт Ozon — `true`. */
            ozon_actions_exist?: boolean;
        }

        /** Цена товара. */
        export interface ItemPrice {
            /** Если автоприменение акций у товара включено — `true`. */
            auto_action_enabled?: boolean;
            /**
             * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /** Цена на товар с учетом всех акций. Это значение будет указано на витрине Ozon. */
            marketing_price?: string;
            /** Цена на товар с учетом акций продавца. */
            marketing_seller_price?: string;
            /** Минимальная цена на аналогичный товар на Ozon. */
            min_ozon_price?: string;
            /** Минимальная цена товара после применения всех скидок. */
            min_price?: string;
            /** Цена до учёта скидок. На карточке товара отображается зачёркнутой. */
            old_price?: string;
            /** Цена для клиентов с подпиской [Ozon Premium](https://docs.ozon.ru/common/ozon-premium/). */
            premium_price?: string;
            /** Цена товара с учётом скидок — это значение показывается на карточке товара. */
            price?: string;
            /** Цена на товар, рекомендованная системой на основании схожих предложений. */
            recommended_price?: string;
            /** Цена поставщика. */
            retail_price?: string;
            /** Ставка НДС для товара. */
            vat?: string;
        }

        export interface ProductGetProductInfoPricesResponseItem {
            /** Информация о комиссиях. */
            commissions?: ItemCommissions;
            marketing_actions?: ItemMarketingActions;
            /** Идентификатор товара в системе продавца. */
            offer_id?: string;
            /** Цена товара. */
            price?: ItemPrice;
            /**
             * Параметр неактуален и будет удалён 1 мая 2023 года.
             *
             * Ценовой индекс.
             */
            price_index?: string;
            /**
             * Ценовые индексы товара.
             *
             * Подробнее в [Базе знаний продавца](https://docs.ozon.ru/global/launch/quality-assurance/rating).
             */
            price_indexes?: CommonPriceIndexes;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Объёмный вес товара.
             * @format double
             */
            volume_weight?: number;
        }

        /** Результаты запроса. */
        export interface ProductGetProductInfoPricesV4ResponseResult {
            /** Список товаров. */
            items?: ProductGetProductInfoPricesResponseItem[];
            /**
             * Идентификатор последнего значения на странице.
             *
             * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `last_id`.
             */
            last_id?: string;
            /**
             * Количество товаров в списке.
             * @format int32
             */
            total?: number;
        }

        /** Результаты запроса. */
        export interface ProductInfoPricesResponseResult {
            /** Список товаров. */
            items?: ProductGetProductInfoPricesResponseItem[];
            /**
             * Идентификатор последнего значения на странице.
             *
             * Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре `cursor`.
             */
            cursor?: string;
            /**
             * Количество товаров в списке.
             * @format int32
             */
            total?: number;
        }

        export interface Productv4GetProductInfoPricesV4Response {
            /** Результаты запроса. */
            result?: ProductGetProductInfoPricesV4ResponseResult;
        }

        export interface V1GetProductInfoDiscountedRequest {
            /** Список SKU уценённых товаров. */
            discounted_skus?: string[];
        }

        export interface V1GetProductInfoDiscountedResponseItem {
            /** Комментарий к причине повреждения. */
            comment_reason_damaged?: string;
            /** Состояние товара — новый или Б/У. */
            condition?: string;
            /**
             * Состояние товара по шкале от 1 до 7:
             * - 1 — удовлетворительное,
             * - 2 — хорошее,
             * - 3 — очень хорошее,
             * - 4 — отличное,
             * - 5–7 — как новый.
             */
            condition_estimation?: string;
            /** Дефекты товара. */
            defects?: string;
            /**
             * SKU уценённого товара.
             * @format int64
             */
            discounted_sku?: number;
            /** Описание механического повреждения. */
            mechanical_damage?: string;
            /** Описание повреждения упаковки. */
            package_damage?: string;
            /** Признак нарушения целостности упаковки. */
            packaging_violation?: string;
            /** Причина повреждения. */
            reason_damaged?: string;
            /** Признак, что товар отремонтирован. */
            repair?: string;
            /** Признак, что товар некомплектный. */
            shortage?: string;
            /**
             * SKU основного товара.
             * @format int64
             */
            sku?: number;
            /** Наличие у товара действующей гарантии. */
            warranty_type?: string;
        }

        export interface V1GetProductInfoDiscountedResponse {
            /** Информация об уценке и основном товаре. */
            items?: V1GetProductInfoDiscountedResponseItem[];
        }

        export interface V1ProductUpdateDiscountRequest {
            /**
             * Размер скидки: от 3 до 99 процентов.
             * @format int32
             */
            discount?: number;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface V1ProductUpdateDiscountResponse {
            /** Результат работы метода. `true`, если запрос выполнен без ошибок. */
            result?: boolean;
        }

        export interface GetSellerActionsV1ResponseAction {
            /**
             * Идентификатор акции.
             * @format double
             */
            id?: number;
            /** Название акции. */
            title?: string;
            /** Тип акции. */
            action_type?: string;
            /** Описание акции. */
            description?: string;
            /** Дата начала акции. */
            date_start?: string;
            /** Дата окончания акции. */
            date_end?: string;
            /**
             * Дата приостановки акции.
             *
             * Если поле заполнено, продавец не может повышать цены, изменять список товаров и уменьшать количество единиц товаров в акции.
             *
             * Продавец может понижать цены и увеличивать количество единиц товара в акции.
             */
            freeze_date?: string;
            /**
             * Количество товаров, доступных для акции.
             * @format double
             */
            potential_products_count?: number;
            /**
             * Количество товаров, которые участвуют в акции.
             * @format double
             */
            participating_products_count?: number;
            /** Участвуете вы в этой акции или нет. */
            is_participating?: boolean;
            /** Признак, что для участия в акции покупателям нужен промокод. */
            is_voucher_action?: boolean;
            /**
             * Количество заблокированных товаров.
             * @format double
             */
            banned_products_count?: number;
            /** Признак, что акция с целевой аудиторией. */
            with_targeting?: boolean;
            /**
             * Сумма заказа.
             * @format double
             */
            order_amount?: number;
            /** Тип скидки. */
            discount_type?: string;
            /**
             * Размер скидки.
             * @format double
             */
            discount_value?: number;
        }

        export interface SellerApiGetSellerActionsV1Response {
            /** Результаты запроса. */
            result?: GetSellerActionsV1ResponseAction[];
        }

        /** Список товаров. */
        export interface SellerApiGetSellerProductV1Request {
            /**
             * Идентификатор акции.
             * @format double
             */
            action_id?: number;
            /**
             * Количество ответов на странице. По умолчанию — 100.
             * @format double
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset=10`, ответ начнётся с 11-го найденного элемента.
             * @format double
             */
            offset?: number;
        }

        export interface SellerApiProduct {
            /**
             * Идентификатор товара.
             * @format double
             */
            id?: number;
            /**
             * Текущая цена товара без скидки.
             * @format double
             */
            price?: number;
            /**
             * Цена товара по акции.
             * @format double
             */
            action_price?: number;
            /**
             * Максимально возможная цена товара по акции.
             * @format double
             */
            max_action_price?: number;
            /** Тип добавления товара в акцию: автоматически или вручную продавцом. */
            add_mode?: string;
            /**
             * Минимальное число единиц товара в акции типа «Скидка на сток».
             * @format double
             */
            min_stock?: number;
            /**
             * Число единиц товара в акции типа «Скидка на сток».
             * @format double
             */
            stock?: number;
        }

        /** Результаты запроса. */
        export interface SellerApiGetSellerProductV1ResponseResult {
            /** Список товаров. */
            products?: SellerApiProduct[];
            /**
             * Общее количество товаров, которое доступно для акции.
             * @format double
             */
            total?: number;
        }

        export interface SellerApiGetSellerProductV1Response {
            /** Результаты запроса. */
            result?: SellerApiGetSellerProductV1ResponseResult;
        }

        export interface SellerApiProductPrice {
            /**
             * Идентификатор товара.
             * @format double
             */
            product_id?: number;
            /**
             * Цена товара по акции.
             * @format double
             */
            action_price?: number;
            /**
             * Количество единиц товара в акции типа «Скидка на сток».
             * @format double
             */
            stock?: number;
        }

        export interface SellerApiActivateProductV1Request {
            /**
             * Идентификатор акции.
             * @format double
             */
            action_id?: number;
            /** Список товаров. */
            products?: SellerApiProductPrice[];
        }

        export interface SellerApiProductV1ResponseProduct {
            /**
             * Идентификатор товара.
             * @format double
             */
            product_id?: number;
            /** Причина, почему товар не добавлен в акцию. */
            reason?: string;
        }

        /** Результаты запроса. */
        export interface SellerApiProductV1ResponseResult {
            /** Список идентификаторов товаров, которые добавлены в акцию. */
            product_ids?: number[];
            /** Список товаров, которые не удалось добавить в акцию. */
            rejected?: SellerApiProductV1ResponseProduct[];
        }

        export interface SellerApiProductV1Response {
            /** Результаты запроса. */
            result?: SellerApiProductV1ResponseResult;
        }

        export interface SellerApiProductIDsV1Request {
            /**
             * Идентификатор акции.
             * @format double
             */
            action_id?: number;
            /** Список идентификаторов товаров. */
            product_ids?: number[];
        }

        export interface SellerApiProductV1ResponseProductDeactivate {
            /**
             * Идентификатор товара.
             * @format double
             */
            product_id?: number;
            /** Причина, почему товар не удалён из акции. */
            reason?: string;
        }

        /** Результаты запроса. */
        export interface SellerApiProductV1ResponseResultDeactivate {
            /** Список идентификаторов товаров, которые удалены из акции. */
            product_ids?: number[];
            /** Список товаров, которые не удалось удалить из акции. */
            rejected?: SellerApiProductV1ResponseProductDeactivate[];
        }

        export interface SellerApiProductV1ResponseDeactivate {
            /** Результаты запроса. */
            result?: SellerApiProductV1ResponseResultDeactivate;
        }

        export type V1GetHotSalesListRequest = object;

        export interface GetHotSalesListResponseHotSale {
            /** Дата окончания акции. */
            date_end?: string;
            /** Дата начала акции. */
            date_start?: string;
            /** Описание акции. */
            description?: string;
            /**
             * Дата приостановки акции.
             *
             * Если поле заполнено, продавец не может повышать цены, изменять список товаров и уменьшать количество единиц товаров в акции.
             *
             * Продавец может понижать цены и увеличивать количество единиц товара в акции.
             */
            freeze_date?: string;
            /**
             * Идентификатор акции Hot Sale.
             * @format double
             */
            hotsale_id?: number;
            /** Признак, что вы участвуете в этой акции. */
            is_participating?: boolean;
            /** Название акции. */
            title?: string;
        }

        export interface V1GetHotSalesListResponse {
            /** Результат работы метода. */
            result?: GetHotSalesListResponseHotSale[];
        }

        export interface V1GetHotSalesProductsRequest {
            /**
             * Идентификатор акции Hot Sale.
             * @format double
             */
            hotsale_id?: number;
            /**
             * Количество элементов в ответе. По умолчанию — 100.
             * @format double
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format double
             */
            offset?: number;
        }

        export interface V1HotSaleProduct {
            /**
             * Цена товара по акции.
             * @format double
             */
            action_price?: number;
            /** Дата участия товара в акции в формате `YYYY-MM-DD`. */
            date_day_promo?: string;
            /**
             * Идентификатор товара.
             * @format double
             */
            id?: number;
            /** Признак участия товара в акции. */
            is_active?: boolean;
            /**
             * Максимально возможная цена товара по акции.
             * @format double
             */
            max_action_price?: number;
            /**
             * Минимальное число единиц товара в акции типа «Скидка на сток».
             * @format double
             */
            min_stock?: number;
            /**
             * Число единиц товара в акции типа «Скидка на сток».
             * @format double
             */
            stock?: number;
        }

        /** Результат работы метода. */
        export interface V1GetHotSalesProductsResponseResult {
            /** Список товаров. */
            products?: V1HotSaleProduct[];
            /**
             * Общее количество товаров, которое доступно для акции.
             * @format double
             */
            total?: number;
        }

        export interface V1GetHotSalesProductsResponse {
            /** Результат работы метода. */
            result?: V1GetHotSalesProductsResponseResult;
        }

        export interface V1ActivateHotSalesProductsRequestActivateProduct {
            /**
             * Цена товара по акции.
             * @format double
             */
            action_price?: number;
            /**
             * Идентификатор товара.
             * @format double
             */
            product_id?: number;
            /**
             * Число единиц товара в акции типа «Скидка на сток».
             * @format double
             */
            stock?: number;
        }

        export interface V1ActivateHotSalesProductsRequest {
            /**
             * Идентификатор акции Hot Sale.
             * @format double
             */
            hotsale_id?: number;
            /** Товары, которые нужно добавить в акцию. Максимальное количество в одном запросе — 100. */
            products?: V1ActivateHotSalesProductsRequestActivateProduct[];
        }

        /** Товары, которые не получилось добавить в акцию. */
        export interface V1SetActivateHotSaleProductsResultProduct {
            /**
             * Идентификатор товара.
             * @format double
             */
            product_id?: number;
            /** Причина, почему товар не добавлен в акцию. */
            reason?: string;
        }

        /** Результат работы метода. */
        export interface V1SetActivateHotSaleProductsResultResult {
            /** Список товаров, которые не удалось добавить в акцию. */
            rejected?: V1SetActivateHotSaleProductsResultProduct[];
        }

        export interface V1SetActivateHotSaleProductsResult {
            /** Результат работы метода. */
            result?: V1SetActivateHotSaleProductsResultResult;
        }

        export interface V1DeactivateHotSalesProductsRequest {
            /**
             * Идентификатор акции Hot Sale.
             * @format double
             */
            hotsale_id?: number;
            /** Список идентификаторов товаров. Максимальное количество в одном запросе — 100. */
            product_ids?: number[];
        }

        /** Товары, которые не получилось удалить из акции. */
        export interface V1SetDeactivateHotSaleProductsResultProduct {
            /**
             * Идентификатор товара.
             * @format double
             */
            product_id?: number;
            /** Причина, почему товар не удалён из акции. */
            reason?: string;
        }

        /** Результат работы метода. */
        export interface V1SetDeactivateHotSaleProductsResultResult {
            /** Список товаров, которые не удалось удалить из акции. */
            rejected?: V1SetDeactivateHotSaleProductsResultProduct[];
        }

        export interface V1SetDeactivateHotSaleProductsResult {
            /** Результат работы метода. */
            result?: V1SetDeactivateHotSaleProductsResultResult;
        }

        /**
         * Статус заявки на скидку:
         * - `NEW` — новая,
         * - `SEEN` — просмотренная,
         * - `APPROVED` — одобренная,
         * - `PARTLY_APPROVED` — одобренная частично,
         * - `DECLINED` — отклонённая,
         * - `AUTO_DECLINED` — отклонена автоматически,
         * - `DECLINED_BY_USER` — отклонена покупателем,
         * - `COUPON` — скидка по купону,
         * - `PURCHASED` — купленная.
         * @default "UNKNOWN"
         */
        export enum V1DiscountTaskStatus {
            NEW = 'NEW',
            SEEN = 'SEEN',
            APPROVED = 'APPROVED',
            PARTLY_APPROVED = 'PARTLY_APPROVED',
            DECLINED = 'DECLINED',
            AUTO_DECLINED = 'AUTO_DECLINED',
            DECLINED_BY_USER = 'DECLINED_BY_USER',
            COUPON = 'COUPON',
            PURCHASED = 'PURCHASED',
        }

        export interface V1GetDiscountTaskListRequest {
            /**
             * Статус заявки на скидку:
             * - `NEW` — новая,
             * - `SEEN` — просмотренная,
             * - `APPROVED` — одобренная,
             * - `PARTLY_APPROVED` — одобренная частично,
             * - `DECLINED` — отклонённая,
             * - `AUTO_DECLINED` — отклонена автоматически,
             * - `DECLINED_BY_USER` — отклонена покупателем,
             * - `COUPON` — скидка по купону,
             * - `PURCHASED` — купленная.
             */
            status?: V1DiscountTaskStatus;
            /**
             * Страница, с которой нужно выгрузить список заявок на скидку.
             * @format uint64
             */
            page?: number;
            /**
             * Максимальное количество заявок на странице.
             * @format uint64
             */
            limit?: number;
        }

        export interface V1GetDiscountTaskListResponseTask {
            /**
             * Идентификатор заявки.
             * @format uint64
             */
            id?: number;
            /**
             * Дата создания заявки.
             * @format date-time
             */
            created_at?: string;
            /**
             * Время окончания действия заявки.
             * @format date-time
             */
            end_at?: string;
            /**
             * Время для изменения решения.
             * @format date-time
             */
            edited_till?: string;
            /** Статус заявки. */
            status?: string;
            /** Имя покупателя. */
            customer_name?: string;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format uint64
             */
            sku?: number;
            /** Комментарий покупателя к заявке. */
            user_comment?: string;
            /** Комментарий продавца к заявке. */
            seller_comment?: string;
            /**
             * Цена по заявке.
             * @format double
             */
            requested_price?: number;
            /**
             * Одобренная цена.
             * @format double
             */
            approved_price?: number;
            /**
             * Цена товара до всех скидок.
             * @format double
             */
            original_price?: number;
            /**
             * Скидка в рублях.
             * @format double
             */
            discount?: number;
            /**
             * Скидка в процентах.
             * @format double
             */
            discount_percent?: number;
            /**
             * Базовая цена, по которой товар продаётся на Ozon, если не участвует в акции.
             * @format double
             */
            base_price?: number;
            /**
             * Минимальное значение цены после автоприменения скидок и акций.
             * @format double
             */
            min_auto_price?: number;
            /**
             * Идентификатор предыдущей заявки от покупателя по этому товару.
             * @format uint64
             */
            prev_task_id?: number;
            /** Является ли товар уценённым. `true`, если уценённый. */
            is_damaged?: boolean;
            /**
             * Дата модерации: просмотра, одобрения или отклонения заявки.
             * @format date-time
             */
            moderated_at?: string;
            /**
             * Скидка в рублях, которую одобрил продавец. Передайте значение `0`, если продавец не одобрял заявку.
             * @format double
             */
            approved_discount?: number;
            /**
             * Скидка в процентах, которую одобрил продавец. Передайте значение `0`, если продавец не одобрял заявку.
             * @format double
             */
            approved_discount_percent?: number;
            /** Покупал ли пользователь товар. `true`, если покупал. */
            is_purchased?: boolean;
            /** Была ли заявка промодерирована автоматически. `true`, если модерация была автоматической. */
            is_auto_moderated?: boolean;
            /** Артикул товара. */
            offer_id?: string;
            /** Электронный адрес сотрудника продавца, который обработал заявку. */
            email?: string;
            /** Фамилия сотрудника продавца, который обработал заявку. */
            last_name?: string;
            /** Имя сотрудника продавца, который обработал заявку. */
            first_name?: string;
            /** Отчество сотрудника продавца, который обработал заявку. */
            patronymic?: string;
            /**
             * Минимальное одобренное количество товаров.
             * @format uint64
             */
            approved_quantity_min?: number;
            /**
             * Максимальное одобренное количество товаров.
             * @format uint64
             */
            approved_quantity_max?: number;
            /**
             * Запрошенное минимальное количество товаров.
             * @format uint64
             */
            requested_quantity_min?: number;
            /**
             * Запрошенное максимальное количество товаров.
             * @format uint64
             */
            requested_quantity_max?: number;
            /**
             * Цена по заявке c региональной наценкой.
             * @format double
             */
            requested_price_with_fee?: number;
            /**
             * Одобренная цена с региональной наценкой.
             * @format double
             */
            approved_price_with_fee?: number;
            /**
             * Региональная наценка в процентах.
             * @format double
             */
            approved_price_fee_percent?: number;
        }

        export interface V1GetDiscountTaskListResponse {
            /** Список заявок. */
            result?: V1GetDiscountTaskListResponseTask[];
        }

        export interface V1ApproveDiscountTasksRequestTask {
            /**
             * Идентификатор заявки.
             * @format uint64
             */
            id?: number;
            /**
             * Согласованная цена.
             * @format double
             */
            approved_price?: number;
            /** Комментарий продавца к заявке. */
            seller_comment?: string;
            /**
             * Одобренное минимальное количество товаров.
             * @format uint64
             */
            approved_quantity_min?: number;
            /**
             * Одобренное максимальное количество товаров.
             * @format uint64
             */
            approved_quantity_max?: number;
        }

        export interface V1ApproveDiscountTasksRequest {
            /** Список заявок. */
            tasks?: V1ApproveDiscountTasksRequestTask[];
        }

        export interface ApproveDeclineDiscountTasksResponseFailDetail {
            /**
             * Идентификатор заявки.
             * @format uint64
             */
            task_id?: number;
            /** Текст ошибки. */
            error_for_user?: string;
        }

        /** Результат работы метода. */
        export interface V1ApproveDeclineDiscountTasksResponseResult {
            /** Ошибки при создании заявки. */
            fail_details?: ApproveDeclineDiscountTasksResponseFailDetail[];
            /**
             * Количество заявок с успешной сменой статуса.
             * @format int32
             */
            success_count?: number;
            /**
             * Количество заявок, у которых не удалось сменить статус.
             * @format int32
             */
            fail_count?: number;
        }

        export interface V1ApproveDeclineDiscountTasksResponse {
            /** Результат работы метода. */
            result?: V1ApproveDeclineDiscountTasksResponseResult;
        }

        export interface V1DeclineDiscountTasksRequestTask {
            /**
             * Идентификатор заявки.
             * @format uint64
             */
            id?: number;
            /** Комментарий продавца к заявке. */
            seller_comment?: string;
        }

        export interface V1DeclineDiscountTasksRequest {
            /** Список заявок. */
            tasks?: V1DeclineDiscountTasksRequestTask[];
        }

        export interface V1GetCompetitorsRequest {
            /**
             * Страница списка, с которой нужно выгрузить конкурентов. Минимальное значение — `1`.
             * @format int64
             */
            page?: number;
            /**
             * Максимальное количество конкурентов на странице. Допустимы значения от `1` до `50`.
             * @format int64
             */
            limit?: number;
        }

        export interface GetCompetitorsResponseCompetitorInfo {
            /** Название конкурента. */
            name?: string;
            /**
             * Идентификатор конкурента.
             * @format int64
             */
            id?: number;
        }

        export interface V1GetCompetitorsResponse {
            /** Список конкурентов. */
            competitor?: GetCompetitorsResponseCompetitorInfo[];
            /**
             * Общее количество конкурентов.
             * @format int32
             */
            total?: number;
        }

        export interface V1GetStrategyListRequest {
            /**
             * Страница списка, с которой нужно выгрузить стратегии. Минимальное значение — `1`.
             * @format int64
             */
            page?: number;
            /**
             * Максимальное количество стратегий на странице. Допустимые значения — от `1` до `50`.
             * @format int64
             */
            limit?: number;
        }

        export interface GetStrategyListResponseStrategy {
            /** Идентификатор стратегии */
            id?: string;
            /** Название стратегии. */
            name?: string;
            /**
             * Тип стратегии:
             * - `MIN_EXT_PRICE` — системная,
             * - `COMP_PRICE` — пользовательская.
             */
            type?: string;
            /**
             * Тип последнего изменения стратегии:
             * - `strategyEnabled` — возобновлена,
             * - `strategyDisabled` — остановлена,
             * - `strategyChanged` — обновлена,
             * - `strategyCreated` — создана,
             * - `strategyItemsListChanged` — изменён набор товаров в стратегии.
             */
            update_type?: string;
            /** Дата последнего изменения. */
            updated_at?: string;
            /**
             * Количество товаров в стратегии.
             * @format int64
             */
            products_count?: number;
            /**
             * Количество выбранных конкурентов.
             * @format int64
             */
            competitors_count?: number;
            /**
             * Статус стратегии:
             * - `true` — включена,
             * - `false` — отключена.
             */
            enabled?: boolean;
        }

        export interface V1GetStrategyListResponse {
            /** Список стратегий. */
            strategies?: GetStrategyListResponseStrategy[];
            /**
             * Общее количество стратегий.
             * @format int32
             */
            total?: number;
        }

        export interface V1Competitor {
            /**
             * Коэффициент, на который будет умножаться минимальная цена среди конкурентов. Допустимый диапазон — от `0.5` до `1.2`.
             * @format float
             */
            coefficient?: number;
            /**
             * Идентификатор конкурента.
             * @format int64
             */
            competitor_id?: number;
        }

        export interface V1CreatePricingStrategyRequest {
            /** Список конкурентов. */
            competitors?: V1Competitor[];
            /** Название стратегии. */
            strategy_name?: string;
        }

        /** Результат работы метода. */
        export interface V1CreatePricingStrategyResponseResult {
            /** Идентификатор стратегии. */
            strategy_id?: string;
        }

        export interface V1CreatePricingStrategyResponse {
            /** Результат работы метода. */
            result?: V1CreatePricingStrategyResponseResult;
        }

        export interface V1StrategyRequest {
            /** Идентификатор стратегии. */
            strategy_id?: string;
        }

        /** Результат работы метода. */
        export interface V1GetStrategyResponseResult {
            /** Список конкурентов. */
            competitors?: V1Competitor[];
            /**
             * Статус стратегии:
             * - `true` — включена,
             * - `false` — отключена.
             */
            enabled?: boolean;
            /** Название стратегии. */
            name?: string;
            /**
             * Тип стратегии:
             * - `MIN_EXT_PRICE` — системная стратегия,
             * - `COMP_PRICE` — пользовательская стратегия.
             */
            type?: string;
            /**
             * Тип последнего изменения стратегии:
             *   - `strategyEnabled` — возобновлена,
             *   - `strategyDisabled` — остановлена,
             *   - `strategyChanged` — обновлена,
             *   - `strategyCreated` — создана,
             *   - `strategyItemsListChanged` — изменён набор товаров в стратегии.
             */
            update_type?: string;
        }

        export interface V1GetStrategyResponse {
            /** Результат работы метода. */
            result?: V1GetStrategyResponseResult;
        }

        export interface V1UpdatePricingStrategyRequest {
            /** Список конкурентов. */
            competitors?: V1Competitor[];
            /** Идентификатор стратегии. */
            strategy_id?: string;
            /** Название стратегии. */
            strategy_name?: string;
        }

        export interface V1AddStrategyItemsRequest {
            /** Список идентификаторов товаров. Максимальное количество — 50. */
            product_id?: string[];
            /** Идентификатор стратегии. */
            strategy_id?: string;
        }

        export interface AddStrategyItemsResponseError {
            /** Код ошибки. */
            code?: string;
            /** Текст ошибки. */
            error?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        /** Результат работы метода. */
        export interface V1AddStrategyItemsResponseResult {
            /** Товары с ошибками. */
            errors?: AddStrategyItemsResponseError[];
            /**
             * Количество товаров с ошибками.
             * @format int32
             */
            failed_product_count?: number;
        }

        export interface V1AddStrategyItemsResponse {
            /** Результат работы метода. */
            result?: V1AddStrategyItemsResponseResult;
        }

        export interface V1ItemIDsRequest {
            /** Список идентификаторов товаров. Максимальное количество — 50. */
            product_id?: string[];
        }

        export interface GetStrategyIDsByItemIDsResponseProductInfo {
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Идентификатор стратегии, в которую добавлен товар. */
            strategy_id?: string;
        }

        /** Результат работы метода. */
        export interface V1GetStrategyIDsByItemIDsResponseResult {
            /** Информация о товаре. */
            products_info?: GetStrategyIDsByItemIDsResponseProductInfo[];
        }

        export interface V1GetStrategyIDsByItemIDsResponse {
            /** Результат работы метода. */
            result?: V1GetStrategyIDsByItemIDsResponseResult;
        }

        /** Список товаров. */
        export interface V1GetStrategyItemsResponseResult {
            /** Идентификатор товара. */
            product_id?: string[];
        }

        export interface V1GetStrategyItemsResponse {
            /** Список товаров. */
            result?: V1GetStrategyItemsResponseResult;
        }

        export interface V1GetStrategyItemInfoRequest {
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        /** Результат работы метода. */
        export interface V1GetStrategyItemInfoResponseResult {
            /** Идентификатор стратегии. */
            strategy_id?: string;
            /** `true`, если товар участвует в стратегии ценообразования. */
            is_enabled?: boolean;
            /**
             * Цена по стратегии.
             * @format int32
             */
            strategy_product_price?: number;
            /** Дата установки цены по стратегии. */
            price_downloaded_at?: string;
            /**
             * Идентификатор конкурента.
             * @format int64
             */
            strategy_competitor_id?: number;
            /** Ссылка на товар конкурента. */
            strategy_competitor_product_url?: string;
        }

        export interface V1GetStrategyItemInfoResponse {
            /** Результат работы метода. */
            result?: V1GetStrategyItemInfoResponseResult;
        }

        /** Результат работы метода. */
        export interface V1DeleteStrategyItemsResponseResult {
            /**
             * Количество товаров с ошибками.
             * @format int32
             */
            failed_product_count?: number;
        }

        export interface V1DeleteStrategyItemsResponse {
            /** Результат работы метода. */
            result?: V1DeleteStrategyItemsResponseResult;
        }

        export interface V1UpdateStatusStrategyRequest {
            /**
             * Статус стратегии:
             * - `true` — включена,
             * - `false` — отключена.
             */
            enabled?: boolean;
            /** Идентификатор стратегии. */
            strategy_id?: string;
        }

        export interface BrandBrandCompanyCertificationListRequest {
            /**
             * Номер страницы, возвращаемой в запросе.
             * @format int32
             */
            page?: number;
            /**
             * Количество элементов на странице.
             * @format int32
             */
            page_size?: number;
        }

        export interface BrandCompanyCertificationListResponseBrandCertification {
            /** Название бренда. */
            brand_name?: string;
            /**
             * Признак, что требуется сертификат:
             * - `true` — требуется сертификат;
             * - `false` — сертификат не нужен.
             */
            has_certificate?: boolean;
        }

        /** Результат запроса. */
        export interface BrandCompanyCertificationListResponseBrandCertificationResult {
            /** Информация о сертифицируемых брендах. */
            brand_certification?: BrandCompanyCertificationListResponseBrandCertification[];
            /**
             * Общее количество брендов.
             * @format int64
             */
            total?: number;
        }

        export interface BrandBrandCompanyCertificationListResponse {
            /** Результат запроса. */
            result?: BrandCompanyCertificationListResponseBrandCertificationResult;
        }

        export interface ProductProductCertificateAccordanceTypesResponseType {
            /** Название документа. */
            name?: string;
            /** Значение справочника. */
            value?: string;
        }

        export interface ProductProductCertificateAccordanceTypesResponse {
            /** Список типов и названий сертификатов. */
            result?: ProductProductCertificateAccordanceTypesResponseType[];
        }

        export interface GooglerpcStatus {
            /**
             * Код ошибки.
             * @format int32
             */
            code?: number;
            /** Дополнительная информация об ошибке. */
            details?: ProtobufAny[];
            /** Описание ошибки. */
            message?: string;
        }

        export interface V2ProductCertificateAccordanceTypesResponseType {
            /** Код типа соответствия требованиям. */
            code?: string;
            /** Описание типа соответствия требованиям. */
            title?: string;
        }

        /** Список типов соответствия требованиям. */
        export interface V2ProductCertificateAccordanceTypesResponseResult {
            /** Основные типы соответствия требованиям. */
            base?: V2ProductCertificateAccordanceTypesResponseType[];
            /** Типов соответствия требованиям, относящиеся к опасным товарам. */
            hazard?: V2ProductCertificateAccordanceTypesResponseType[];
        }

        export interface V2ProductCertificateAccordanceTypesResponse {
            /** Список типов соответствия требованиям. */
            result?: V2ProductCertificateAccordanceTypesResponseResult;
        }

        export interface ProductProductCertificateTypesResponseType {
            /** Название документа. */
            name?: string;
            /** Значение справочника. */
            value?: string;
        }

        export interface ProductProductCertificateTypesResponse {
            /** Список типов и названий сертификатов. */
            result?: ProductProductCertificateTypesResponseType[];
        }

        export interface ProductProductCertificationListRequest {
            /**
             * Номер страницы, возвращаемой в запросе.
             * @format int32
             */
            page?: number;
            /**
             * Количество элементов на странице.
             * @format int32
             */
            page_size?: number;
        }

        export interface ProductCertificationListResponseCertification {
            /** Название сертифицируемой категории. */
            category_name?: string;
            /** Признак обязательной характеристики. */
            is_required?: boolean;
        }

        /** Результат запроса. */
        export interface ProductCertificationListResponseCertificationResult {
            /** Информация о сертифицируемых категориях. */
            certification?: ProductCertificationListResponseCertification[];
            /**
             * Всего категорий.
             * @format int64
             */
            total?: number;
        }

        export interface ProductProductCertificationListResponse {
            /** Результат запроса. */
            result?: ProductCertificationListResponseCertificationResult;
        }

        export interface ProductProductCertificateBindRequest {
            /**
             * Идентификатор сертификата, который был присвоен при его загрузке.
             * @format int64
             */
            certificate_id?: number;
            /** Массив идентификаторов товаров, к которым относится этот сертификат. */
            product_id?: number[];
        }

        export interface V1ProductCertificateDeleteRequest {
            /**
             * Идентификатор сертификата.
             * @format int32
             */
            certificate_id: number;
        }

        /** Результат удаления сертификата. */
        export interface V1ProductCertificateDeleteResponseResult {
            /**
             * Удалён ли сертификат:
             * - `true` — удалён,
             * - `false` — не удалён.
             */
            is_delete?: boolean;
            /** Описание ошибок при удалении сертификата. */
            error_message?: string;
        }

        export interface V1ProductCertificateDeleteResponse {
            /** Результат удаления сертификата. */
            result?: V1ProductCertificateDeleteResponseResult;
        }

        export interface V1ProductCertificateInfoRequest {
            /** Идентификатор сертификата. */
            certificate_number: string;
        }

        /** Информация о сертификате. */
        export interface V1Certificate {
            /**
             * Идентификатор.
             * @format int32
             */
            certificate_id?: number;
            /** Номер. */
            certificate_number?: string;
            /** Название. */
            certificate_name?: string;
            /** Тип. */
            type_code?: string;
            /** Статус. */
            status_code?: string;
            /** Тип соответствия требованиям. */
            accordance_type_code?: string;
            /** Причина отклонения сертификата. */
            rejection_reason_code?: string;
            /** Комментарий модератора. */
            verification_comment?: string;
            /**
             * Дата создания.
             * @format date-time
             */
            issue_date?: string;
            /**
             * Дата окончания действия.
             * @format date-time
             */
            expire_date?: string;
            /**
             * Количество товаров, привязанных к сертификату.
             * @format int32
             */
            products_count?: number;
        }

        export interface V1ProductCertificateInfoResponse {
            /** Информация о сертификате. */
            result?: V1Certificate;
        }

        export interface V1ProductCertificateListRequest {
            /** Артикул товара, привязанного к сертификату. Передайте параметр, если нужны сертификаты, к которым привязаны определённые товары. */
            offer_id?: string;
            /** Статус сертификата. Передайте параметр, если нужны сертификаты с определённым статусом. */
            status?: string;
            /** Тип сертификата. Передайте параметр, если нужны сертификаты с определённым типом. */
            type?: string;
            /**
             * Страница, с которой следует выводить список. Минимальное значение — 1.
             * @format int32
             */
            page: number;
            /**
             * Количество объектов на странице. Значение — от 1 до 1000.
             * @format int32
             */
            page_size: number;
        }

        /** Список сертификатов. */
        export interface V1ProductCertificateListResponseResult {
            /** Информация о сертификате. */
            certificates?: V1Certificate[];
            /**
             * Количество страниц.
             * @format int32
             */
            page_count?: number;
        }

        export interface V1ProductCertificateListResponse {
            /** Список сертификатов. */
            result?: V1ProductCertificateListResponseResult;
        }

        export type V1ProductCertificateProductStatusListRequest = object;

        export interface V1StatusCodeNamePair {
            /** Код статуса товара при привязке к сертификату. */
            code?: string;
            /** Описание статуса. */
            name?: string;
        }

        export interface V1ProductCertificateProductStatusListResponse {
            /** Список статусов товаров. */
            result?: V1StatusCodeNamePair[];
        }

        export interface V1ProductCertificateProductsListRequest {
            /**
             * Идентификатор сертификата.
             * @format int32
             */
            certificate_id: number;
            /** Статус проверки товара при привязке к сертификату. */
            product_status_code?: string;
            /**
             * Номер страницы, с которой выводить список. Минимальное значение — 1.
             * @format int32
             */
            page: number;
            /**
             * Количество объектов на странице. Значение — от 1 до 1000.
             * @format int32
             */
            page_size: number;
        }

        export interface ProductCertificateProductsListResponseProduct {
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Статус обработки товара при привязке к сертификату. */
            product_status_code?: string;
        }

        /** Товары, привязанные к сертификату. */
        export interface V1ProductCertificateProductsListResponseResult {
            /** Список товаров. */
            items?: ProductCertificateProductsListResponseProduct[];
            /**
             * Количество найденных товаров.
             * @format int64
             */
            count?: number;
        }

        export interface V1ProductCertificateProductsListResponse {
            /** Товары, привязанные к сертификату. */
            result?: V1ProductCertificateProductsListResponseResult;
        }

        export interface V1ProductCertificateUnbindRequest {
            /**
             * Идентификатор сертификата.
             * @format int32
             */
            certificate_id: number;
            /** Список идентификаторов товара, которые нужно отвязать от сертификата. */
            product_id: string[];
        }

        export interface ProductCertificateUnbindResponseItem {
            /** Сообщение об ошибке при отвязывании товара. */
            error?: string;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Был ли отвязан товар от сертификата:
             * - `true` — отвязан,
             * - `false` — не отвязан.
             */
            updated?: boolean;
        }

        export interface V1ProductCertificateUnbindResponse {
            /** Результат работы метода. */
            result?: ProductCertificateUnbindResponseItem[];
        }

        export type V1ProductCertificateRejectionReasonsListRequest = object;

        export interface V1StatusCodeNamePairRejection {
            /** Код причины отклонения сертификата. */
            code?: string;
            /** Описание причины отклонения сертификата. */
            name?: string;
        }

        export interface V1ProductCertificateRejectionReasonsListResponse {
            /** Причины отклонения сертификата. */
            result?: V1StatusCodeNamePairRejection[];
        }

        export type V1ProductCertificateStatusListRequest = object;

        export interface V1StatusCodeNamePairStatuses {
            /** Код статуса сертификата. */
            code?: string;
            /** Описание статуса. */
            name?: string;
        }

        export interface V1ProductCertificateStatusListResponse {
            /** Список возможных статусов сертификатов. */
            result?: V1StatusCodeNamePairStatuses[];
        }

        /** Первая миля FBS. */
        export interface WarehouseFirstMileType {
            /** Идентификатор DropOff-точки. */
            dropoff_point_id?: string;
            /**
             * Идентификатор временного слота для DropOff.
             * @format int64
             */
            dropoff_timeslot_id?: number;
            /** Признак, что настройки склада обновляются. */
            first_mile_is_changing?: boolean;
            /** Тип первой мили — `DropOff` или `Pickup`. */
            first_mile_type?: 'DropOff' | 'Pickup';
        }

        export interface WarehouseListResponseWarehouse {
            /** Признак доверительной приёмки. `true`, если доверительная приёмка включена на складе. */
            has_entrusted_acceptance?: boolean;
            /**
             * Признак работы склада по схеме rFBS:
             * - `true` — склад работает по схеме rFBS;
             * - `false` — не работает по схеме rFBS.
             */
            is_rfbs?: boolean;
            /** Название склада. */
            name?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
            /** Возможность печати акта приёма-передачи заранее. `true`, если печатать заранее возможно. */
            can_print_act_in_advance?: boolean;
            /** Первая миля FBS. */
            first_mile_type?: WarehouseFirstMileType;
            /** Признак наличия лимита минимального количества заказов. `true`, если лимит есть. */
            has_postings_limit?: boolean;
            /** Признак, что склад не работает из-за карантина. */
            is_karantin?: boolean;
            /** Признак, что склад принимает крупногабаритные товары. */
            is_kgt?: boolean;
            /** Признак, что можно менять расписание работы складов. */
            is_timetable_editable?: boolean;
            /**
             * Минимальное значение лимита — количество заказов, которые можно привезти в одной поставке.
             * @format int32
             */
            min_postings_limit?: number;
            /**
             * Значение лимита. `-1`, если лимита нет.
             * @format int32
             */
            postings_limit?: number;
            /**
             * Количество рабочих дней склада.
             * @format int64
             */
            min_working_days?: number;
            /**
             * Статус склада.
             *
             * Соответствие статусов склада со статусами с личном кабинете:
             *
             * | Статус Seller&nbsp;API | Статус в личном кабинете |
             * |---|---|
             * | `new` | Активируется |
             * | `created` | Активный |
             * | `disabled` | В архиве |
             * | `blocked` | Заблокирован |
             * | `disabled_due_to_limit` | На паузе |
             * | `error` | Ошибка |
             */
            status?: string;
            /** Рабочие дни склада. */
            working_days?: ('1' | '2' | '3' | '4' | '5' | '6' | '7')[];
        }

        export interface WarehouseWarehouseListResponse {
            /** Список складов. */
            result?: WarehouseListResponseWarehouse[];
        }

        /** Фильтр для поиска методов доставки. */
        export interface DeliveryMethodListRequestFilter {
            /**
             * Идентификатор службы доставки.
             * @format int64
             */
            provider_id?: number;
            /**
             * Статус метода доставки:
             *   - `NEW` — создан,
             *   - `EDITED` — редактируется,
             *   - `ACTIVE` — активный,
             *   - `DISABLED` — неактивный.
             */
            status?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        export interface WarehouseDeliveryMethodListRequest {
            /** Фильтр для поиска методов доставки. */
            filter?: DeliveryMethodListRequestFilter;
            /**
             * Количество элементов в ответе. Максимум — 50, минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
        }

        export interface DeliveryMethodListResponseDeliveryMethod {
            /**
             * Идентификатор продавца.
             * @format int64
             */
            company_id?: number;
            /**
             * Дата и время создания метода доставки.
             * @format date-time
             */
            created_at?: string;
            /** Время до которого продавцу нужно собрать заказ. */
            cutoff?: string;
            /**
             * Идентификатор метода доставки.
             * @format int64
             */
            id?: number;
            /** Название метода доставки. */
            name?: string;
            /**
             * Идентификатор службы доставки.
             * @format int64
             */
            provider_id?: number;
            /**
             * Статус метода доставки:
             *   - `NEW` — создан,
             *   - `EDITED` — редактируется,
             *   - `ACTIVE` — активный,
             *   - `DISABLED` — неактивный.
             */
            status?: string;
            /**
             * Идентификатор услуги по доставке заказа.
             * @format int64
             */
            template_id?: number;
            /**
             * Дата и время последнего обновления метода метода доставки.
             * @format date-time
             */
            updated_at?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        export interface WarehouseDeliveryMethodListResponse {
            /**
             * Признак, что в запросе вернулась только часть методов доставки:
             * - `true` — сделайте повторный запрос с новым параметром `offset` для получения остальных методов;
             * - `false` — ответ содержит все методы доставки по запросу.
             */
            has_next?: boolean;
            /** Результат запроса. */
            result?: DeliveryMethodListResponseDeliveryMethod[];
        }

        export interface Polygonv1PolygonCreateRequest {
            /** Координаты полигона доставки в формате `[[[lat long]]]`. */
            coordinates?: string;
        }

        export interface Polygonv1PolygonCreateResponse {
            /**
             * Идентификатор полигона.
             * @format int64
             */
            polygon_id?: number;
        }

        export interface RpcStatusV1PolygonCreate {
            /**
             * Код ошибки.
             * @format int32
             */
            code?: number;
            /** Информация об ошибке. */
            details?: ProtobufAny[];
            /**
             * Сообщение об ошибке:
             *
             *   - `coordinates not provided` — координаты не переданы;
             *   - `invalid coordinates, must have two points in coordinate` — в какой-то точке передана только широта или долгота, нужно передать две точки;
             *   - `the first and last points in loop must be same` — первая и последняя точка не совпадают (по стандартным правилам geojson точки должны совпадать);
             *   - `non-full loops must have at least 4 unique vertices for polygons` — для полигона передано менее четырех точек.
             */
            message?: string;
        }

        export interface PolygonBindRequestpolygon {
            /**
             * Идентификатор полигона.
             * @format int64
             */
            polygon_id?: number;
            /**
             * Время в минутах, за которое доставят товар в этом полигоне.
             * @format int64
             */
            time?: number;
        }

        /** Расположение склада. */
        export interface PolygonBindRequestwhLocation {
            /** Географическая широта расположения склада. */
            lat?: string;
            /** Географическая долгота расположения склада. */
            lon?: string;
        }

        export interface Polygonv1PolygonBindRequest {
            /**
             * Идентификатор метода доставки.
             * @format int32
             */
            delivery_method_id?: number;
            /** Список полигонов. */
            polygons?: PolygonBindRequestpolygon[];
            /** Расположение склада. */
            warehouse_location?: PolygonBindRequestwhLocation;
        }

        export type Polygonv1Empty = object;

        export interface RpcStatusV1PolygonBind {
            /** @format int32 */
            code?: number;
            details?: ProtobufAny[];
            /**
             * Сообщение об ошибке:
             *
             *   - **delivery target polygons not provided** — полигоны не переданы;
             *   - **no delivery method id provided** — delivery_method_id не передан;
             *   - **no warehouse points provided** — не передана координата склада;
             *   - **polygon id .... not found** — переданы ID полигонов, которые не найдены в базе данных;
             *   - **not found polygon for warehouse point** — точка склада не принадлежит ни одному переданному полигону.
             */
            message?: string;
        }

        export interface Polygonv1PolygonDeleteRequest {
            /** Список идентификаторов полигонов. */
            polygon_ids?: string[];
        }

        /** Фильтр для поиска отправлений. */
        export interface PostingGetFboPostingListRequestFilter {
            /**
             * Начало периода в формате YYYY-MM-DD.
             * @format date-time
             */
            since?: string;
            /**
             * Статус отправления.
             * - `awaiting_packaging` — ожидает упаковки,
             * - `awaiting_deliver` — ожидает отгрузки,
             * - `delivering` — доставляется,
             * - `delivered` — доставлено,
             * - `cancelled` — отменено.
             */
            status?: string;
            /**
             * Конец периода в формате YYYY-MM-DD.
             * @format date-time
             */
            to?: string;
        }

        /** Дополнительные поля, которые нужно добавить в ответ. */
        export interface PostingFboPostingWithParams {
            /** Передайте `true`, чтобы добавить в ответ данные аналитики. */
            analytics_data?: boolean;
            /** Передайте `true`, чтобы добавить в ответ финансовые данные. */
            financial_data?: boolean;
        }

        export interface PostingGetFboPostingListRequest {
            /**
             * Направление сортировки:
             *   - `asc` — по возрастанию,
             *   - `desc` — по убыванию.
             */
            dir?: string;
            /** Фильтр для поиска отправлений. */
            filter?: PostingGetFboPostingListRequestFilter;
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
            /** Если включена транслитерация адреса из кириллицы в латиницу — `true`. */
            translit?: boolean;
            /** Дополнительные поля, которые нужно добавить в ответ. */
            with?: PostingFboPostingWithParams;
        }

        /** Дополнительная информация. */
        export interface V2AdditionalDataItem {
            key?: string;
            value?: string;
        }

        /** Данные аналитики. */
        export interface FboPostingFboPostingAnalyticsData {
            /** Город доставки. */
            city?: string;
            /** Способ доставки. */
            delivery_type?: string;
            /**
             * Получатель юридическое лицо:
             *   - `true` — юридическое лицо,
             *   - `false` — физическое лицо.
             */
            is_legal?: boolean;
            /** Наличие подписки Premium. */
            is_premium?: boolean;
            /** Способ оплаты. */
            payment_type_group_name?: string;
            /** Регион доставки. */
            region?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
            /** Название склада отправки заказа. */
            warehouse_name?: string;
        }

        /** Услуги. */
        export interface PostingFinancialDataServices {
            /**
             * Последняя миля.
             * @format double
             */
            marketplace_service_item_deliv_to_customer?: number;
            /**
             * Магистраль.
             * @format double
             */
            marketplace_service_item_direct_flow_trans?: number;
            /**
             * Обработка отправления на фулфилмент складе (ФФ).
             * @format double
             */
            marketplace_service_item_dropoff_ff?: number;
            /**
             * Обработка отправления в ПВЗ.
             * @format double
             */
            marketplace_service_item_dropoff_pvz?: number;
            /**
             * Обработка отправления в сортировочном центре.
             * @format double
             */
            marketplace_service_item_dropoff_sc?: number;
            /**
             * Сборка заказа.
             * @format double
             */
            marketplace_service_item_fulfillment?: number;
            /**
             * Выезд транспортного средства по адресу продавца для забора отправлений (Pick-up).
             * @format double
             */
            marketplace_service_item_pickup?: number;
            /**
             * Обработка возврата.
             * @format double
             */
            marketplace_service_item_return_after_deliv_to_customer?: number;
            /**
             * Обратная магистраль.
             * @format double
             */
            marketplace_service_item_return_flow_trans?: number;
            /**
             * Обработка отмен.
             * @format double
             */
            marketplace_service_item_return_not_deliv_to_customer?: number;
            /**
             * Обработка невыкупа.
             * @format double
             */
            marketplace_service_item_return_part_goods_customer?: number;
        }

        /**
         * Информация о доставке.
         *
         * Всегда возвращает `null`.
         */
        export interface ProductPicking {
            /**
             * Стоимость доставки.
             * @format double
             */
            amount?: number;
            /**
             * Дата и время доставки.
             * @format date-time
             */
            moment?: string;
            /** Крупногабаритный товар или нет. */
            tag?: string;
        }

        export interface PostingFinancialDataProduct {
            /** Действия. */
            actions?: string[];
            /**
             * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /** Цена для клиента. */
            client_price?: string;
            /**
             * Размер комиссии за товар.
             * @format double
             */
            commission_amount?: number;
            /**
             * Процент комиссии.
             * @format int64
             */
            commission_percent?: number;
            /** Код валюты, в которой рассчитывались комиссии. */
            commissions_currency_code?: string;
            /** Услуги. */
            item_services?: PostingFinancialDataServices;
            /**
             * Цена до учёта скидок. На карточке товара отображается зачёркнутой.
             * @format double
             */
            old_price?: number;
            /**
             * Выплата продавцу.
             * @format double
             */
            payout?: number;
            /**
             * Информация о доставке.
             *
             * Всегда возвращает `null`.
             */
            picking?: ProductPicking;
            /**
             * Цена товара с учётом скидок — это значение показывается на карточке товара.
             * @format double
             */
            price?: number;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество товара в отправлении.
             * @format int64
             */
            quantity?: number;
            /**
             * Процент скидки.
             * @format double
             */
            total_discount_percent?: number;
            /**
             * Сумма скидки.
             * @format double
             */
            total_discount_value?: number;
        }

        /** Финансовые данные. */
        export interface V2PostingFinancialData {
            /** Услуги. */
            posting_services?: PostingFinancialDataServices;
            /** Код региона, откуда отправляется заказ. */
            cluster_from?: string;
            /** Код региона, куда доставляется заказ. */
            cluster_to?: string;
            /** Список товаров в заказе. */
            products?: PostingFinancialDataProduct[];
        }

        export interface V2PostingProduct {
            /** Коды активации для услуг и цифровых товаров. */
            digital_codes?: string[];
            /** Название товара. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /**
             * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /** Цена товара. */
            price?: string;
            /**
             * Количество товара в отправлении.
             * @format int64
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        /** Результат запроса. */
        export interface V2FboPosting {
            additional_data?: V2AdditionalDataItem[];
            /** Данные аналитики. */
            analytics_data?: FboPostingFboPostingAnalyticsData;
            /**
             * Идентификатор причины отмены отправления.
             * @format int64
             */
            cancel_reason_id?: number;
            /**
             * Дата и время создания отправления.
             * @format date-time
             */
            created_at?: string;
            /** Финансовые данные. */
            financial_data?: V2PostingFinancialData;
            /**
             * Дата и время начала обработки отправления.
             * @format date-time
             */
            in_process_at?: string;
            /**
             * Идентификатор заказа, к которому относится отправление.
             * @format int64
             */
            order_id?: number;
            /** Номер заказа, к которому относится отправление. */
            order_number?: string;
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров в отправлении. */
            products?: V2PostingProduct[];
            /**
             * Статус отправления:
             *   - `awaiting_packaging` — ожидает упаковки,
             *   - `awaiting_deliver` — ожидает отгрузки,
             *   - `delivering` — доставляется,
             *   - `delivered` — доставлено,
             *   - `cancelled` — отменено.
             */
            status?: string;
        }

        export interface V2FboPostingListResponse {
            /** Массив отправлений. */
            result?: V2FboPosting[];
        }

        export interface PostingGetFboPostingRequest {
            /** Номер отправления. */
            posting_number?: string;
            /** Если включена транслитерация адреса из кириллицы в латиницу — `true`. */
            translit?: boolean;
            /** Дополнительные поля, которые нужно добавить в ответ. */
            with?: PostingFboPostingWithParams;
        }

        export interface V2FboPostingResponse {
            /** Результат запроса. */
            result?: V2FboPosting;
        }

        export interface V1GetSupplyOrdersListRequest {
            /**
             * Номер страницы, возвращаемой в запросе.
             * @format int32
             */
            page: number;
            /**
             * Количество элементов на странице.
             * @format int32
             */
            page_size: number;
            /**
             * Фильтр по статусу поставки по заявке:
             * - `DRAFT` — черновик заявки. Только для заявок с вРЦ.
             * - `SUPPLY_VARIANTS_ARRANGING` — подбор вариантов отгрузки. Только для заявок с вРЦ.
             * - `HAS_NO_SUPPLY_VARIANTS_ARCHIVE` — нет вариантов отгрузки. Заявка в архиве. Только для заявок с вРЦ.
             * - `HAS_NO_SUPPLY_VARIANTS_NEW` — нет вариантов отгрузки. Только для заявок с вРЦ.
             * - `SUPPLY_VARIANT_CONFIRMATION` — согласование отгрузки. Только для заявок с вРЦ.
             * - `TIMESLOT_BOOKING` — бронирование времени.
             * - `DATA_FILLING` — заполнение данных.
             * - `READY_TO_SUPPLY` — готова к отгрузке.
             * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки.
             * - `IN_TRANSIT` — в пути.
             * - `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе.
             * - `REPORTS_CONFIRMATION_AWAITING` — согласование актов.
             * - `REPORT_REJECTED` — спор.
             * - `COMPLETED` — завершена.
             * - `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке.
             * - `CANCELLED` — отменена.
             * - `OVERDUE` — просрочена.
             */
            states?: string[];
        }

        /** Интервал поставки по местному времени. */
        export interface V1Timeslot {
            /** Начало интервала. */
            from?: string;
            /** Конец интервала. */
            to?: string;
        }

        /** Склад поставки. */
        export interface V1Warehouse {
            /** Адрес склада. */
            address?: string;
            /** Название склада. */
            name?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        export interface GetSupplyOrdersListResponseSupplyOrder {
            /** Дата создания заявки на поставку. */
            created_at?: string;
            /** Интервал поставки по местному времени. */
            local_timeslot?: V1Timeslot;
            /** Дата, с которой вы хотите привезти поставку на склад. Только для заявок с вРЦ. */
            preferred_supply_date_from?: string;
            /** Дата, до которой вы хотите привезти поставку на склад. Только для заявок с вРЦ. */
            preferred_supply_date_to?: string;
            /**
             * Статус поставки по заявке:
             * - `DRAFT` — черновик заявки. Только для заявок с вРЦ.
             * - `SUPPLY_VARIANTS_ARRANGING` — подбор вариантов отгрузки. Только для заявок с вРЦ.
             * - `HAS_NO_SUPPLY_VARIANTS_ARCHIVE` — нет вариантов отгрузки. Заявка в архиве.
             * - `HAS_NO_SUPPLY_VARIANTS_NEW` — нет вариантов отгрузки.
             * - `SUPPLY_VARIANT_CONFIRMATION` — согласование отгрузки. Только для заявок с вРЦ.
             * - `TIMESLOT_BOOKING` — бронирование времени.
             * - `DATA_FILLING` — заполнение данных.
             * - `READY_TO_SUPPLY` — готова к отгрузке.
             * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки.
             * - `IN_TRANSIT` — в пути.
             * - `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе.
             * - `REPORTS_CONFIRMATION_AWAITING` — согласование актов.
             * - `REPORT_REJECTED` — спор.
             * - `COMPLETED` — завершена.
             * - `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке.
             * - `CANCELLED` — отменена.
             * - `OVERDUE` — просрочена.
             */
            state?: string;
            /**
             * Идентификатор заявки на поставку.
             * @format int64
             */
            supply_order_id?: number;
            /** Номер заявки. */
            supply_order_number?: string;
            /** Склад поставки. */
            supply_warehouse?: V1Warehouse;
            /**
             * Время в секундах, оставшееся на заполнение данных по поставке. Только для заявок с вРЦ.
             * @format int64
             */
            time_left_to_prepare_supply?: number;
            /**
             * Время в секундах, оставшееся на выбор варианта отгрузки. Только для заявок с вРЦ.
             * @format int64
             */
            time_left_to_select_supply_variant?: number;
            /**
             * Общее количество товаров в заявке.
             * @format int32
             */
            total_items_count?: number;
            /**
             * Общее количество единиц товара в заявке.
             * @format int32
             */
            total_quantity?: number;
        }

        export interface V1GetSupplyOrdersListResponse {
            /**
             * Признак, ответ содержит не все заявки по запросу:
             * - `true` — сделайте повторный запрос с новыми значениями параметров `page` и `page_size` для получения информации об остальных заявках;
             * - `false` — ответ содержит все заявки по запросу.
             */
            has_next?: boolean;
            /** Список заявок на поставку. */
            supply_orders?: GetSupplyOrdersListResponseSupplyOrder[];
            /**
             * Общее количество заявок.
             * @format int32
             */
            total_supply_orders_count?: number;
        }

        export interface V1GetSupplyOrderRequest {
            /**
             * Идентификатор заявки на поставку.
             * @format int64
             */
            supply_order_id: number;
        }

        /** Ваш собственный склад, с которого вы повезёте товары на склад поставки. Только для заявок с вРЦ. */
        export interface V1SellerWarehouse {
            /** Адрес склада. */
            address?: string;
            /** Название склада. */
            name?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        /** Информация о водителе и автомобиле. */
        export interface V1VehicleInfo {
            /** Имя водителя. */
            driver_name?: string;
            /** Телефон водителя. */
            driver_phone?: string;
            /** Модель автомобиля. */
            vehicle_model?: string;
            /** Номер автомобиля. */
            vehicle_number?: string;
        }

        export interface V1GetSupplyOrderResponse {
            /** Дата создания заявки на поставку. */
            created_at?: string;
            /** Интервал поставки по местному времени. */
            local_timeslot?: V1Timeslot;
            /** Дата, с которой вы хотите привезти поставку на склад. Только для заявок с вРЦ. */
            preferred_supply_date_from?: string;
            /** Дата, до которой вы хотите привезти поставку на склад. Только для заявок с вРЦ. */
            preferred_supply_date_to?: string;
            /** Ваш собственный склад, с которого вы повезёте товары на склад поставки. Только для заявок с вРЦ. */
            seller_warehouse?: V1SellerWarehouse;
            /**
             * Статус поставки по заявке:
             * - `DRAFT` — черновик заявки. Только для заявок с вРЦ.
             * - `SUPPLY_VARIANTS_ARRANGING` — подбор вариантов отгрузки. Только для заявок с вРЦ.
             * - `HAS_NO_SUPPLY_VARIANTS_ARCHIVE` — нет вариантов отгрузки. Заявка в архиве.
             * - `HAS_NO_SUPPLY_VARIANTS_NEW` — нет вариантов отгрузки.
             * - `SUPPLY_VARIANT_CONFIRMATION` — согласование отгрузки. Только для заявок с вРЦ.
             * - `TIMESLOT_BOOKING` — бронирование времени.
             * - `DATA_FILLING` — заполнение данных.
             * - `READY_TO_SUPPLY` — готова к отгрузке.
             * - `ACCEPTED_AT_SUPPLY_WAREHOUSE` — принята на точке отгрузки.
             * - `IN_TRANSIT` — в пути.
             * - `ACCEPTANCE_AT_STORAGE_WAREHOUSE` — приёмка на складе.
             * - `REPORTS_CONFIRMATION_AWAITING` — согласование актов.
             * - `REPORT_REJECTED` — спор.
             * - `COMPLETED` — завершена.
             * - `REJECTED_AT_SUPPLY_WAREHOUSE` — отказано в приёмке.
             * - `CANCELLED` — отменена.
             * - `OVERDUE` — просрочена.
             */
            state?: string;
            /**
             * Идентификатор заявки на поставку.
             * @format int64
             */
            supply_order_id?: number;
            /** Номер заявки на поставку. */
            supply_order_number?: string;
            /** Склад поставки. */
            supply_warehouse?: V1Warehouse;
            /**
             * Время в секундах, оставшееся на заполнение данных по поставке. Только для заявок с вРЦ.
             * @format int64
             */
            time_left_to_prepare_supply?: number;
            /**
             * Время в секундах, оставшееся на выбор варианта отгрузки. Только для заявок с вРЦ.
             * @format int64
             */
            time_left_to_select_supply_variant?: number;
            /**
             * Количество товаров в заявке.
             * @format int32
             */
            total_items_count?: number;
            /**
             * Общее количеств единиц товара в заявке.
             * @format int32
             */
            total_quantity?: number;
            /** Информация о водителе и автомобиле. */
            vehicle_info?: V1VehicleInfo;
        }

        export interface V1GetSupplyOrderItemsRequest {
            /**
             * Номер страницы, возвращаемой в запросе.
             * @format int32
             */
            page: number;
            /**
             * Количество элементов на странице.
             * @format int32
             */
            page_size: number;
            /**
             * Идентификатор заявки на поставку.
             * @format int64
             */
            supply_order_id: number;
        }

        export interface GetSupplyOrderItemsResponseItem {
            /** Ссылка на изображение товара. */
            icon_path?: string;
            /** Название товара. */
            name?: string;
            /** Артикул товара. */
            offer_id?: string;
            /**
             * Количество товара.
             * @format int64
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        export interface V1GetSupplyOrderItemsResponse {
            /**
             * Признак, ответ содержит не все товары из заявки:
             * - `true` — сделайте повторный запрос с новыми значениями параметров `page` и `page_size` для получения информации об остальных товаров;
             * - `false` — ответ содержит все товары по запросу.
             */
            has_next?: boolean;
            /** Список товаров. */
            items?: GetSupplyOrderItemsResponseItem[];
            /**
             * Общее количество товаров в заявке.
             * @format int32
             */
            total_items_count?: number;
        }

        export interface Postingv4FbsPostingProductExemplarValidateRequestProductExemplar {
            /** Номер грузовой таможенной декларации (ГТД). */
            gtd?: string;
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string;
            /** Регистрационный номер партии товара (РНПТ). */
            rnpt?: string;
        }

        export interface Postingv4FbsPostingProductExemplarValidateRequestProduct {
            /** Информация об экземплярах. */
            exemplars?: Postingv4FbsPostingProductExemplarValidateRequestProductExemplar[];
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface Postingv4FbsPostingProductExemplarValidateRequest {
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров. */
            products?: Postingv4FbsPostingProductExemplarValidateRequestProduct[];
        }

        export interface FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResultProductExemplar {
            /** Ошибки валидации экземпляра. */
            errors?: string[];
            /** Номер грузовой таможенной декларации (ГТД). */
            gtd?: string;
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string;
            /** Результат прохождения проверки. `true`, если код экземпляра соответствует требованиям. */
            valid?: boolean;
            /** Регистрационный номер партии товара (РНПТ). */
            rnpt?: string;
        }

        export interface FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResultProduct {
            /** Код ошибки. */
            error?: string;
            /** Информация об экземплярах. */
            exemplars?: FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResultProductExemplar[];
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Результат прохождения проверки. `true`, если коды всех экземпляров соответствуют требованиям. */
            valid?: boolean;
        }

        /** Результат работы метода. */
        export interface FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResult {
            /** Список товаров. */
            products?: FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResultProduct[];
        }

        export interface Postingv4FbsPostingProductExemplarValidateResponse {
            /** Результат работы метода. */
            result?: FbsPostingProductExemplarValidateResponseFbsPostingProductExemplarValidateResult;
        }

        export interface Fbsv4SetProductExemplarRequestProductExemplar {
            /** Номер грузовой таможенной декларации (ГТД). */
            gtd?: string;
            /** Признак того, что не указан номер таможенной декларации. */
            is_gtd_absent?: boolean;
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string;
            /** Регистрационный номер партии товара (РНПТ). */
            rnpt?: string;
            /** Признак того, что не указан регистрационный номер партии товара (РНПТ). */
            is_rnpt_absent?: boolean;
        }

        export interface Fbsv4SetProductExemplarRequestProduct {
            /** Информация об экземплярах. */
            exemplars?: Fbsv4SetProductExemplarRequestProductExemplar[];
            /**
             * Идентификатор FBS товара в системе Ozon — SKU.
             * @format int64
             */
            product_id?: number;
        }

        export interface Fbsv4SetProductExemplarRequest {
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров. */
            products?: Fbsv4SetProductExemplarRequestProduct[];
        }

        export interface Fbsv4SetProductExemplarResponse {
            /** Результат обработки запроса. `true`, если запрос обработан успешно. */
            result?: boolean;
        }

        export interface Fbsv4GetProductExemplarStatusRequest {
            /** Номер отправления. */
            posting_number?: string;
        }

        export interface Fbsv4GetProductExemplarStatusResponseProductExemplar {
            /** Номер грузовой таможенной декларации (ГТД). */
            gtd?: string;
            /** Статус проверки грузовой таможенной декларации. */
            gtd_check_status?: string;
            /** Коды ошибок при проверке грузовой таможенной декларации. */
            gtd_error_codes?: string[];
            /** Признак того, что не указан номер таможенной декларации. */
            is_gtd_absent?: boolean;
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string;
            /**
             * Статус проверки маркировки «Честный ЗНАК»:
             * - `processing` — маркировка обрабатывается.
             * - `passed` — проверка пройдена.
             * - `failed` — проверка не пройдена.
             */
            mandatory_mark_check_status?: string;
            /** Коды ошибок при проверке маркировки «Честный ЗНАК». */
            mandatory_mark_error_codes?: string[];
            /** Регистрационный номер партии товара (РНПТ). */
            rnpt?: string;
            /** Статус проверки регистрационного номера партии товара. */
            rnpt_check_status?: string;
            /** Коды ошибок при проверке регистрационного номера партии товара. */
            rnpt_error_codes?: string[];
            /** Признак того, что не указан регистрационный номер партии товара (РНПТ). */
            is_rnpt_absent?: boolean;
        }

        export interface Fbsv4GetProductExemplarStatusResponseProduct {
            /** Информация об экземплярах. */
            exemplars?: Fbsv4GetProductExemplarStatusResponseProductExemplar[];
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
        }

        export interface Fbsv4GetProductExemplarStatusResponse {
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров. */
            products?: Fbsv4GetProductExemplarStatusResponseProduct[];
            /**
             * Статус проверки всех экземпляров и доступности сборки:
             * - `ship_available` — сборка доступна,
             * - `ship_not_available` — сборка недоступна,
             * - `validation_in_process` — экземпляры на проверке.
             */
            status?: string;
        }

        export interface FbsPostingShipV4RequestPackageProduct {
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество экземпляров.
             * @format int32
             */
            quantity?: number;
        }

        export interface FbsPostingShipV4RequestPackage {
            /** Список товаров в отправлении. */
            products?: FbsPostingShipV4RequestPackageProduct[];
        }

        /** Дополнительная информация. */
        export interface FbsPostingShipV4RequestWith {
            /** Чтобы получить дополнительную информацию, передайте `true`. */
            additional_data?: boolean;
        }

        export interface Fbsv4FbsPostingShipV4Request {
            /** Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ. */
            packages?: FbsPostingShipV4RequestPackage[];
            /** Номер отправления. */
            posting_number?: string;
            /** Дополнительная информация. */
            with?: FbsPostingShipV4RequestWith;
        }

        export interface Fbsv4PostingProductDetailWithoutDimensions {
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string[];
            /** Название товара. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена. */
            price?: string;
            /**
             * Количество товара в отправлении.
             * @format int32
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /**
             * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
        }

        export interface FbsPostingShipV4ResponseShipAdditionalData {
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров в отправлении. */
            products?: Fbsv4PostingProductDetailWithoutDimensions[];
        }

        export interface Fbsv4FbsPostingShipV4Response {
            /** Дополнительная информация об отправлениях. */
            additional_data?: FbsPostingShipV4ResponseShipAdditionalData[];
            /** Результат сборки отправлений. */
            result?: string[];
        }

        /**
         * Фильтр запроса.
         *
         * Используйте фильтр либо по времени сборки — `cutoff`, либо по дате передачи отправления в доставку — `delivering_date`.
         * Если использовать их вместе, в ответе вернётся ошибка.
         *
         * Чтобы использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`.
         *
         * Чтобы использовать фильтр по дате передачи отправления в доставку, заполните поля `delivering_date_from` и `delivering_date_to`.
         */
        export interface Postingv3GetFbsPostingUnfulfilledListRequestFilter {
            /**
             * Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода.
             *
             * Формат: YYYY-MM-DDThh:mm:ss.mcsZ.
             * Пример: 2020-03-18T07:34:50.359Z.
             * @format date-time
             */
            cutoff_from?: string;
            /**
             * Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода.
             *
             * Формат: YYYY-MM-DDThh:mm:ss.mcsZ.
             * Пример: 2020-03-18T07:34:50.359Z.
             * @format date-time
             */
            cutoff_to?: string;
            /**
             * Минимальная дата передачи отправления в доставку.
             * @format date-time
             */
            delivering_date_from?: string;
            /**
             * Максимальная дата передачи отправления в доставку.
             * @format date-time
             */
            delivering_date_to?: string;
            /** Идентификатор способа доставки. */
            delivery_method_id?: number[];
            /** Идентификатор службы доставки. */
            provider_id?: number[];
            /**
             * Статус отправления:
             * - `acceptance_in_progress` — идёт приёмка,
             * - `awaiting_approve` — ожидает подтверждения,
             * - `awaiting_packaging` — ожидает упаковки,
             * - `awaiting_registration` — ожидает регистрации,
             * - `awaiting_deliver` — ожидает отгрузки,
             * - `arbitration` — арбитраж,
             * - `client_arbitration` — клиентский арбитраж доставки,
             * - `delivering` — доставляется,
             * - `driver_pickup` — у водителя,
             * - `not_accepted` — не принят на сортировочном центре.
             */
            status?: string;
            /** Идентификатор склада. */
            warehouse_id?: number[];
        }

        /** Дополнительные поля, которые нужно добавить в ответ. */
        export interface Postingv3FbsPostingWithParams {
            /** Добавить в ответ данные аналитики. */
            analytics_data?: boolean;
            /** Добавить в ответ штрихкоды отправления. */
            barcodes?: boolean;
            /** Добавить в ответ финансовые данные. */
            financial_data?: boolean;
            /** Выполнить транслитерацию возвращаемых значений. */
            translit?: boolean;
        }

        export interface Postingv3GetFbsPostingUnfulfilledListRequest {
            /**
             * Направление сортировки:
             *   - `asc` — по возрастанию,
             *   - `desc` — по убыванию.
             */
            dir?: string;
            /**
             * Фильтр запроса.
             *
             * Используйте фильтр либо по времени сборки — `cutoff`, либо по дате передачи отправления в доставку — `delivering_date`.
             * Если использовать их вместе, в ответе вернётся ошибка.
             *
             * Чтобы использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`.
             *
             * Чтобы использовать фильтр по дате передачи отправления в доставку, заполните поля `delivering_date_from` и `delivering_date_to`.
             */
            filter?: Postingv3GetFbsPostingUnfulfilledListRequestFilter;
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
            /** Дополнительные поля, которые нужно добавить в ответ. */
            with?: Postingv3FbsPostingWithParams;
        }

        /** Контактные данные получателя. */
        export interface V3AddresseeFbsLists {
            /** Имя покупателя. */
            name?: string;
            /**
             * Контактный телефон.
             *
             * Всегда возвращает пустую строку `""`.
             */
            phone?: string;
        }

        /** Данные аналитики. */
        export interface V3FbsPostingAnalyticsData {
            /** Город доставки. */
            city?: string;
            /**
             * Дата и время начала доставки.
             * @format date-time
             */
            delivery_date_begin?: string;
            /**
             * Дата и время конца доставки.
             * @format date-time
             */
            delivery_date_end?: string;
            /** Способ доставки. */
            delivery_type?: string;
            /**
             * Признак, что получатель юридическое лицо:
             *   - `true` — юридическое лицо,
             *   - `false` — физическое лицо.
             */
            is_legal?: boolean;
            /** Наличие подписки Premium. */
            is_premium?: boolean;
            /** Способ оплаты. */
            payment_type_group_name?: string;
            /** Регион доставки. */
            region?: string;
            /** Служба доставки. */
            tpl_provider?: string;
            /**
             * Идентификатор службы доставки.
             * @format int64
             */
            tpl_provider_id?: number;
            /** Название склада отправки заказа. */
            warehouse?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        /** Штрихкоды отправления. */
        export interface V3Barcodes {
            /** Нижний штрихкод на маркировке отправления. */
            lower_barcode?: string;
            /** Верхний штрихкод на маркировке отправления. */
            upper_barcode?: string;
        }

        /** Информация об отмене. */
        export interface V3Cancellation {
            /** Если отмена влияет на рейтинг продавца — `true`. */
            affect_cancellation_rating?: boolean;
            /** Причина отмены. */
            cancel_reason?: string;
            /**
             * Идентификатор причины отмены отправления.
             * @format int64
             */
            cancel_reason_id?: number;
            /**
             * Инициатор отмены отправления:
             * - `Клиент`,
             * - `Ozon`,
             * - `Продавец`.
             */
            cancellation_initiator?: string;
            /**
             * Тип отмены отправления:
             * - `client` — клиентская.
             * - `ozon` — отменено Ozon.
             * - `seller` — отменено продавцом.
             */
            cancellation_type?: string;
            /** Если отмена произошла после сборки отправления — `true`. */
            cancelled_after_ship?: boolean;
        }

        /** Информация об адресе доставки. */
        export interface V3Address {
            /** Адрес в текстовом формате. */
            address_tail?: string;
            /** Город доставки. */
            city?: string;
            /** Комментарий к заказу. */
            comment?: string;
            /** Страна доставки. */
            country?: string;
            /** Район доставки. */
            district?: string;
            /**
             * Широта.
             * @format double
             */
            latitude?: number;
            /**
             * Долгота.
             * @format double
             */
            longitude?: number;
            /** Код пункта выдачи заказов 3PL провайдера. */
            provider_pvz_code?: string;
            /**
             * Код пункта выдачи заказов.
             * @format int64
             */
            pvz_code?: number;
            /** Регион доставки. */
            region?: string;
            /** Почтовый индекс получателя. */
            zip_code?: string;
        }

        /** Данные о покупателе. */
        export interface V3CustomerFbsLists {
            /** Информация об адресе доставки. */
            address?: V3Address;
            /** Email покупателя. */
            customer_email?: string;
            /**
             * Идентификатор покупателя.
             * @format int64
             */
            customer_id?: number;
            /** Имя покупателя. */
            name?: string;
            /**
             * Контактный телефон.
             *
             * Всегда возвращает пустую строку `""`.
             */
            phone?: string;
        }

        /** Метод доставки. */
        export interface V3DeliveryMethod {
            /**
             * Идентификатор способа доставки.
             * @format int64
             */
            id?: number;
            /** Название способа доставки. */
            name?: string;
            /** Служба доставки. */
            tpl_provider?: string;
            /**
             * Идентификатор службы доставки.
             * @format int64
             */
            tpl_provider_id?: number;
            /** Название склада. */
            warehouse?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        /** Данные о стоимости товара, размере скидки, выплате и комиссии. */
        export interface V3PostingFinancialData {
            /** Код региона, откуда отправляется заказ. */
            cluster_from?: string;
            /** Код региона, куда доставляется заказ. */
            cluster_to?: string;
            /** Услуги. */
            posting_services?: PostingFinancialDataServices;
            /** Список товаров в заказе. */
            products?: PostingFinancialDataProduct[];
        }

        export interface V3FbsPostingProduct {
            /** Обязательная маркировка товара. */
            mandatory_mark?: string[];
            /** Название товара. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена товара. */
            price?: string;
            /**
             * Количество товара в отправлении.
             * @format int32
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /**
             * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
        }

        /** Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ) или маркировку «Честный ЗНАК», чтобы перевести отправление в следующий статус. */
        export interface V3FbsPostingRequirementsV3 {
            /**
             * Список идентификаторов товаров (SKU), для которых нужно передать номера таможенной декларации (ГТД).
             *
             * Для сборки отправления передайте для всех перечисленных товаров номер таможенной декларации или информацию о том,
             * что номера нет, с помощью метода [/v3/posting/fbs/ship/package](#operation/PostingAPI_PackageShipFbsPostingV3)
             * или [/v3/posting/fbs/ship](#operation/PostingAPI_ShipFbsPostingV3).
             */
            products_requiring_gtd?: string[];
            /**
             * Список идентификаторов товаров (SKU), для которых нужно передать информацию о стране-изготовителе.
             *
             * Для сборки отправления передайте информацию о стране-изготовителе для всех перечисленных товаров с помощью метода [/v2/posting/fbs/product/country/set](#operation/PostingAPI_SetCountryProductFbsPostingV2).
             */
            products_requiring_country?: string[];
            /** Список идентификаторов товаров (SKU), для которых нужно передать маркировку «Честный ЗНАК». */
            products_requiring_mandatory_mark?: string[];
            /** Список идентификаторов товаров (SKU), для которых нужно передать регистрационный номер партии товара (РНПТ). */
            products_requiring_rnpt?: string[];
        }

        export interface V3FbsPosting {
            /** Контактные данные получателя. */
            addressee?: V3AddresseeFbsLists;
            /** Данные аналитики. */
            analytics_data?: V3FbsPostingAnalyticsData;
            /** Штрихкоды отправления. */
            barcodes?: V3Barcodes;
            /** Информация об отмене. */
            cancellation?: V3Cancellation;
            /** Данные о покупателе. */
            customer?: V3CustomerFbsLists;
            /**
             * Дата передачи отправления в доставку.
             * @format date-time
             */
            delivering_date?: string;
            /** Метод доставки. */
            delivery_method?: V3DeliveryMethod;
            /** Данные о стоимости товара, размере скидки, выплате и комиссии. */
            financial_data?: V3PostingFinancialData;
            /**
             * Дата и время начала обработки отправления.
             * @format date-time
             */
            in_process_at?: string;
            /** Если использовалась быстрая доставка Ozon Express — `true`. */
            is_express?: boolean;
            /**
             * Признак, что в отправлении есть многокоробочный товар и нужно передать количество коробок для него:
             *
             * - `true` — до сборки передайте количество коробок через метод [/v3/posting/multiboxqty/set](#operation/PostingAPI_PostingMultiBoxQtySetV3).
             * - `false` — отправление собрано с указанием количества коробок в параметре `multi_box_qty` или в отправлении нет многокоробочного товара.
             */
            is_multibox?: boolean;
            /**
             * Количество коробок, в которые упакован товар.
             * @format int32
             */
            multi_box_qty?: number;
            /**
             * Идентификатор заказа, к которому относится отправление.
             * @format int64
             */
            order_id?: number;
            /** Номер заказа, к которому относится отправление. */
            order_number?: string;
            /** Номер родительского отправления, в результате разделения которого появилось текущее. */
            parent_posting_number?: string;
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров в отправлении. */
            products?: V3FbsPostingProduct[];
            /** Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ) или маркировку «Честный ЗНАК», чтобы перевести отправление в следующий статус. */
            requirements?: V3FbsPostingRequirementsV3;
            /**
             * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
             * @format date-time
             */
            shipment_date?: string;
            /**
             * Статус отправления:
             * - `acceptance_in_progress` — идёт приёмка,
             * - `arbitration` — арбитраж,
             * - `awaiting_approve` — ожидает подтверждения,
             * - `awaiting_deliver` — ожидает отгрузки,
             * - `awaiting_packaging` — ожидает упаковки,
             * - `awaiting_registration` — ожидает регистрации,
             * - `awaiting_verification` — создано,
             * - `cancelled` — отменено,
             * - `cancelled_from_split_pending` — отменено,
             * - `client_arbitration` — клиентский арбитраж доставки,
             * - `delivered` — доставлено,
             * - `delivering` — доставляется,
             * - `driver_pickup` — у водителя,
             * - `not_accepted` — не принят на сортировочном центре,
             * - `sent_by_seller` – отправлено продавцом.
             */
            status?: string;
            /**
             * Подстатус отправления:
             * - `posting_acceptance_in_progress`— идёт приёмка,
             * - `posting_in_arbitration` — арбитраж,
             * - `posting_created` — создано,
             * - `posting_in_carriage` — в перевозке,
             * - `posting_not_in_carriage` — не добавлено в перевозку,
             * - `posting_registered` — зарегистрировано,
             * - `posting_transferring_to_delivery` — передаётся в доставку,
             * - `posting_awaiting_passport_data` — ожидает паспортных данных,
             * - `posting_created` — создано,
             * - `posting_awaiting_registration` — ожидает регистрации,
             * - `posting_registration_error` — ошибка регистрации,
             * - `posting_transferring_to_delivery` — передаётся курьеру,
             * - `posting_split_pending` — создано,
             * - `posting_canceled` — отменено,
             * - `posting_in_client_arbitration` — клиентский арбитраж доставки,
             * - `posting_delivered` — доставлено,
             * - `posting_received` — получено,
             * - `posting_conditionally_delivered` — условно доставлено,
             * - `posting_in_courier_service` — курьер в пути,
             * - `posting_in_pickup_point` — в пункте выдачи
             * - `posting_on_way_to_city` — в пути в ваш город,
             * - `posting_on_way_to_pickup_point` — в пути в пункт выдачи,
             * - `posting_returned_to_warehouse` — возвращено на склад,
             * - `posting_transferred_to_courier_service` — передаётся в службу доставки,
             * - posting_driver_pick_up` — у водителя,
             * - `posting_not_in_sort_center` — не принято на сортировочном центре,
             * - `sent_by_seller` — отправлено продавцом.
             */
            substatus?: string;
            /**
             * Тип интеграции со службой доставки:
             *   - `ozon` — доставка службой Ozon.
             *   - `3pl_tracking` — доставка интегрированной службой.
             *   - `non_integrated` — доставка сторонней службой.
             *   - `aggregator` — доставка через партнёрскую доставку Ozon.
             */
            tpl_integration_type?: string;
            /** Трек-номер отправления. */
            tracking_number?: string;
        }

        /** Результат запроса. */
        export interface Postingv3GetFbsPostingUnfulfilledListResponseResult {
            /**
             * Счётчик элементов в ответе.
             * @format int64
             */
            count?: number;
            /** Список отправлений и подробная информация по каждому. */
            postings?: V3FbsPosting[];
        }

        export interface Postingv3GetFbsPostingUnfulfilledListResponse {
            /** Результат запроса. */
            result?: Postingv3GetFbsPostingUnfulfilledListResponseResult;
        }

        /** Фильтр. */
        export interface Postingv3GetFbsPostingListRequestFilter {
            /** Идентификатор способа доставки. */
            delivery_method_id?: number[];
            /**
             * Идентификатор заказа.
             * @format int64
             */
            order_id?: number;
            /** Идентификатор службы доставки. */
            provider_id?: number[];
            /**
             * Дата начала периода, за который нужно получить список отправлений.
             *
             * Формат UTC: ГГГГ-ММ-ДДTЧЧ:ММ:ССZ.
             *
             * Пример: 2019-08-24T14:15:22Z.
             * @format date-time
             */
            since?: string;
            /**
             * Дата конца периода, за который нужно получить список отправлений.
             *
             * Формат UTC: ГГГГ-ММ-ДДTЧЧ:ММ:ССZ.
             *
             * Пример: 2019-08-24T14:15:22Z.
             * @format date-time
             */
            to?: string;
            /**
             * Статус отправления:
             * - `awaiting_registration` — ожидает регистрации,
             * - `acceptance_in_progress` — идёт приёмка,
             * - `awaiting_approve` — ожидает подтверждения,
             * - `awaiting_packaging` — ожидает упаковки,
             * - `awaiting_deliver` — ожидает отгрузки,
             * - `arbitration` — арбитраж,
             * - `client_arbitration` — клиентский арбитраж доставки,
             * - `delivering` — доставляется,
             * - `driver_pickup` — у водителя,
             * - `delivered` — доставлено,
             * - `cancelled` — отменено,
             * - `not_accepted` — не принят на сортировочном центре,
             * - `sent_by_seller` – отправлено продавцом.
             */
            status?: string;
            /** Идентификатор склада. */
            warehouse_id?: number[];
        }

        export interface Postingv3GetFbsPostingListRequest {
            /**
             * Направление сортировки:
             *   - `asc` — по возрастанию,
             *   - `desc` — по убыванию.
             */
            dir?: string;
            /** Фильтр. */
            filter?: Postingv3GetFbsPostingListRequestFilter;
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
            /** Дополнительные поля, которые нужно добавить в ответ. */
            with?: Postingv3FbsPostingWithParams;
        }

        /** Массив отправлений. */
        export interface V3GetFbsPostingListResponseV3Result {
            /**
             * Признак, что в ответе вернули не весь массив отправлений:
             * - `true` — необходимо сделать новый запрос с другим значением `offset`, чтобы получить информацию об остальных отправлениях;
             * - `false` — в ответе вернули весь массив отправлений для фильтра, который был задан в запросе.
             */
            has_next?: boolean;
            /** Информация об отправлении. */
            postings?: V3FbsPosting[];
        }

        export interface V3GetFbsPostingListResponseV3 {
            /** Массив отправлений. */
            result?: V3GetFbsPostingListResponseV3Result;
        }

        /** Дополнительные поля, которые нужно добавить в ответ. */
        export interface Postingv3FbsPostingWithParamsExamplars {
            /** Добавить в ответ данные аналитики. */
            analytics_data?: boolean;
            /** Добавить в ответ штрихкоды отправления. */
            barcodes?: boolean;
            /** Добавить в ответ финансовые данные. */
            financial_data?: boolean;
            /** Добавить в ответ данные о продуктах и их экземплярах. */
            product_exemplars?: boolean;
            /** Добавить в ответ номера связанных отправлений. Связанные отправления — те, на которое было разделено родительское отправление при сборке. */
            related_postings?: boolean;
            /** Выполнить транслитерацию возвращаемых значений. */
            translit?: boolean;
        }

        export interface Postingv3GetFbsPostingRequest {
            /** Идентификатор отправления. */
            posting_number?: string;
            /** Дополнительные поля, которые нужно добавить в ответ. */
            with?: Postingv3FbsPostingWithParamsExamplars;
        }

        export interface V3AdditionalDataItem {
            key?: string;
            value?: string;
        }

        /** Контактные данные получателя. */
        export interface V3Addressee {
            /** Имя покупателя. */
            name?: string;
            /** Контактный телефон. */
            phone?: string;
        }

        /** Данные о курьере. */
        export interface FbsPostingDetailCourier {
            /** Модель автомобиля. */
            car_model?: string;
            /** Номер автомобиля. */
            car_number?: string;
            /** Полное имя курьера. */
            name?: string;
            /** Телефон курьера. */
            phone?: string;
        }

        /** Данные о покупателе. */
        export interface V3Customer {
            /** Информация об адресе доставки. */
            address?: V3Address;
            /** Email покупателя. */
            customer_email?: string;
            /**
             * Идентификатор покупателя.
             * @format int64
             */
            customer_id?: number;
            /** Имя покупателя. */
            name?: string;
            /** Контактный телефон. */
            phone?: string;
        }

        export interface V3FbsPostingProductExemplarInfoV3 {
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string;
            /** Номер грузовой таможенной декларации (ГТД). */
            gtd?: string;
            /** Признак того, что не указан номер таможенной декларации. */
            is_gtd_absent?: boolean;
            /** Регистрационный номер партии товара (РНПТ). */
            rnpt?: string;
            /** Признак того, что не указан регистрационный номер партии товара (РНПТ). */
            is_rnpt_absent?: boolean;
        }

        /** Список товаров и экземпляров. */
        export interface V3FbsPostingExemplarProductV3 {
            /** Информация по экземплярам. */
            exemplars?: V3FbsPostingProductExemplarInfoV3[];
            /**
             * Идентификатор продукта в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        /**
         * Информация по продуктам и их экзмеплярам.
         *
         * Ответ содержит поле `product_exemplars`, если в запросе передан признак `with.product_exemplars = true`.
         */
        export interface V3FbsPostingProductExemplarsV3 {
            products?: V3FbsPostingExemplarProductV3[];
        }

        /** Размеры товара. */
        export interface V3Dimensions {
            /** Высота упаковки. */
            height?: string;
            /** Длина товара. */
            length?: string;
            /** Вес товара в упаковке. */
            weight?: string;
            /** Ширина упаковки. */
            width?: string;
        }

        /** Размеры товара. */
        export interface V3PostingProductDetail {
            /** Размеры товара. */
            dimensions?: V3Dimensions;
            /** Обязательная маркировка товара. */
            mandatory_mark?: string[];
            /** Название. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена товара с учётом скидок — это значение показывается на карточке товара. */
            price?: string;
            /**
             * Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
            /**
             * Количество товара.
             * @format int32
             */
            quantity?: number;
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
        }

        /** Связанные отправления. */
        export interface V3FbsPostingDetailRelatedPostings {
            /** Список номеров связанных отправлений. */
            related_posting_numbers?: string[];
        }

        /** Информация об отправлении. */
        export interface V3FbsPostingDetail {
            additional_data?: V3AdditionalDataItem[];
            /** Контактные данные получателя. */
            addressee?: V3Addressee;
            /** Данные аналитики. */
            analytics_data?: V3FbsPostingAnalyticsData;
            /** Штрихкоды отправления. */
            barcodes?: V3Barcodes;
            /** Информация об отмене. */
            cancellation?: V3Cancellation;
            /** Данные о курьере. */
            courier?: FbsPostingDetailCourier;
            /** Данные о покупателе. */
            customer?: V3Customer;
            /**
             * Дата передачи отправления в доставку.
             * @format date-time
             */
            delivering_date?: string;
            /** Метод доставки. */
            delivery_method?: V3DeliveryMethod;
            /** Стоимость доставки. */
            delivery_price?: string;
            /** Данные о стоимости товара, размере скидки, выплате и комиссии. */
            financial_data?: V3PostingFinancialData;
            /**
             * Дата и время начала обработки отправления.
             * @format date-time
             */
            in_process_at?: string;
            /** Если использовалась быстрая доставка Ozon Express — `true`. */
            is_express?: boolean;
            /**
             * Признак, что в отправлении есть многокоробочный товар и нужно передать количество коробок для него:
             *
             * - `true` — до сборки передайте количество коробок через метод [/v3/posting/multiboxqty/set](#operation/PostingAPI_PostingMultiBoxQtySetV3).
             * - `false` — отправление собрано с указанием количества коробок в параметре `multi_box_qty` или в отправлении нет многокоробочного товара.
             */
            is_multibox?: boolean;
            /**
             * Количество коробок, в которые упакован товар.
             * @format int32
             */
            multi_box_qty?: number;
            /**
             * Идентификатор заказа, к которому относится отправление.
             * @format int64
             */
            order_id?: number;
            /** Номер заказа, к которому относится отправление. */
            order_number?: string;
            /** Номер родительского отправления, в результате разделения которого появилось текущее. */
            parent_posting_number?: string;
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Информация по продуктам и их экзмеплярам.
             *
             * Ответ содержит поле `product_exemplars`, если в запросе передан признак `with.product_exemplars = true`.
             */
            product_exemplars?: V3FbsPostingProductExemplarsV3;
            /** Массив товаров в отправлении. */
            products?: V3PostingProductDetail[];
            /** Статус службы доставки. */
            provider_status?: string;
            /** Связанные отправления. */
            related_postings?: V3FbsPostingDetailRelatedPostings;
            /** Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ) или маркировку «Честный ЗНАК», чтобы перевести отправление в следующий статус. */
            requirements?: V3FbsPostingRequirementsV3;
            /**
             * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
             * @format date-time
             */
            shipment_date?: string;
            /**
             * Статус отправления:
             * - `acceptance_in_progress` — идёт приёмка,
             * - `arbitration` — арбитраж,
             * - `awaiting_approve` — ожидает подтверждения,
             * - `awaiting_deliver` — ожидает отгрузки,
             * - `awaiting_packaging` — ожидает упаковки,
             * - `awaiting_registration` — ожидает регистрации,
             * - `awaiting_verification` — создано,
             * - `cancelled` — отменено,
             * - `cancelled_from_split_pending` — отменено,
             * - `client_arbitration` — клиентский арбитраж доставки,
             * - `delivered` — доставлено,
             * - `delivering` — доставляется,
             * - `driver_pickup` — у водителя,
             * - `not_accepted` — не принят на сортировочном центре,
             * - `sent_by_seller` – отправлено продавцом.
             */
            status?: string;
            /**
             * Подстатус отправления:
             * - `posting_acceptance_in_progress` — идёт приёмка,
             * - `posting_in_arbitration` — арбитраж,
             * - `posting_created` — создано,
             * - `posting_in_carriage` — в перевозке,
             * - `posting_not_in_carriage` — не добавлено в перевозку,
             * - `posting_registered` — зарегистрировано,
             * - `posting_transferring_to_delivery` — передаётся в доставку,
             * - `posting_awaiting_passport_data` — ожидает паспортных данных,
             * - `posting_created` — создано,
             * - `posting_awaiting_registration` — ожидает регистрации,
             * - `posting_registration_error` — ошибка регистрации,
             * - `posting_transferring_to_delivery` — передаётся курьеру,
             * - `posting_split_pending` — создано,
             * - `posting_canceled` — отменено,
             * - `posting_in_client_arbitration` — клиентский арбитраж доставки,
             * - `posting_delivered` — доставлено,
             * - `posting_received` — получено,
             * - `posting_conditionally_delivered` — условно доставлено,
             * - `posting_in_courier_service` — курьер в пути,
             * - `posting_in_pickup_point` — в пункте выдачи,
             * - `posting_on_way_to_city` — в пути в ваш город,
             * - `posting_on_way_to_pickup_point` — в пути в пункт выдачи,
             * - `posting_returned_to_warehouse` — возвращено на склад,
             * - `posting_transferred_to_courier_service` — передаётся в службу доставки,
             * - `posting_driver_pick_up` — у водителя,
             * - `posting_not_in_sort_center` — не принято на сортировочном центре,
             * - `sent_by_seller` — отправлено продавцом.
             */
            substatus?: string;
            /**
             * Тип интеграции со службой доставки:
             *   - `ozon` — доставка через Ozon логистику.
             *   - `aggregator` — доставка внешней службой, Ozon регистрирует заказ.
             *   - `3pl_tracking` — доставка внешней службой, продавец регистрирует заказ.
             *   - `non_integrated` — доставка силами продавца.
             */
            tpl_integration_type?: string;
            /** Трек-номер отправления. */
            tracking_number?: string;
        }

        export interface V3GetFbsPostingResponseV3 {
            /** Информация об отправлении. */
            result?: V3FbsPostingDetail;
        }

        export interface PostingGetFbsPostingByBarcodeRequest {
            /** Штрихкод отправления. */
            barcode?: string;
        }

        /** Аналитические данные. */
        export interface FbsPostingFbsPostingAnalyticsData {
            /** Город доставки. */
            city?: string;
            /** Способ доставки. */
            delivery_type?: string;
            /**
             * Признак, что получатель юридическое лицо:
             *   - `true` — юридическое лицо,
             *   - `false` — физическое лицо.
             */
            is_legal?: boolean;
            /** Наличие подписки Premium. */
            is_premium?: boolean;
            /** Способ оплаты. */
            payment_type_group_name?: string;
            /** Регион доставки. */
            region?: string;
        }

        /** Штрихкоды отправления. */
        export interface FbsPostingBarcodes {
            /** Нижний штрихкод на маркировке отправления. */
            lower_barcode?: string;
            /** Верхний штрихкод на маркировке отправления. */
            upper_barcode?: string;
        }

        export interface V2FbsPostingProduct {
            /** Обязательная маркировка товара. */
            mandatory_mark?: string[];
            /** Название товара. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена товара. */
            price?: string;
            /**
             * Количество товара в отправлении.
             * @format int64
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon.
             * @format int64
             */
            sku?: number;
        }

        /** Результаты запроса. */
        export interface V2FbsPosting {
            /** Аналитические данные. */
            analytics_data?: FbsPostingFbsPostingAnalyticsData;
            /** Штрихкоды отправления. */
            barcodes?: FbsPostingBarcodes;
            /**
             * Идентификатор причины отмены отправления.
             * @format int64
             */
            cancel_reason_id?: number;
            /**
             * Дата и время создания отправления.
             * @format date-time
             */
            created_at?: string;
            /** Финансовые данные. */
            financial_data?: V2PostingFinancialData;
            /**
             * Дата и время начала обработки отправления.
             * @format date-time
             */
            in_process_at?: string;
            /**
             * Идентификатор заказа, к которому относится отправление.
             * @format int64
             */
            order_id?: number;
            /** Номер заказа, к которому относится отправление. */
            order_number?: string;
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров в отправлении. */
            products?: V2FbsPostingProduct[];
            /**
             * Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится.
             * @format date-time
             */
            shipment_date?: string;
            /** Статус отправления. */
            status?: string;
        }

        /** Информация об отправлении. */
        export interface V2FbsPostingResponse {
            /** Результаты запроса. */
            result?: V2FbsPosting;
        }

        export interface V2FbsPostingProductCountryListRequest {
            /** Фильтрация по строке. */
            name_search?: string;
        }

        export interface V2FbsPostingProductCountryListResponseResult {
            /** Название страны на русском языке. */
            name?: string;
            /** ISO код страны. */
            country_iso_code?: string;
        }

        export interface V2FbsPostingProductCountryListResponse {
            /** Список стран-изготовителей и ISO коды. */
            result?: V2FbsPostingProductCountryListResponseResult[];
        }

        export interface V2FbsPostingProductCountrySetRequest {
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Идентификатор продукта.
             * @format int64
             */
            product_id?: number;
            /**
             * Двухбуквенный код добавляемой страны по стандарту ISO_3166-1.
             *
             * Список доступных стран-изготовителей и их ISO коды можно получить с помощью метода [/v2/posting/fbs/product/country/list](#operation/PostingAPI_ListCountryProductFbsPostingV2).
             */
            country_iso_code?: string;
        }

        export interface V2FbsPostingProductCountrySetResponse {
            /**
             * Идентификатор продукта.
             * @format int64
             */
            product_id?: number;
            /** Признак того, что необходимо передать номер грузовой таможенной декларации (ГТД) для продукта и отправления. */
            is_gtd_needed?: boolean;
        }

        export interface Postingv3PostingMultiBoxQtySetV3Request {
            /** Идентификатор многокоробочного отправления. */
            posting_number?: string;
            /**
             * Количество коробок, в которые упакован товар.
             * @format int64
             */
            multi_box_qty?: number;
        }

        /** Результат передачи количества коробок. */
        export interface Postingv3PostingMultiBoxQtySetV3ResponseResult {
            /**
             * Возможные значения:
             * - `true` — значение передано успешно.
             * - `false` — при передаче произошла ошибка. Попробуйте снова.
             */
            result?: boolean;
        }

        export interface Postingv3PostingMultiBoxQtySetV3Response {
            /** Результат передачи количества коробок. */
            result?: Postingv3PostingMultiBoxQtySetV3ResponseResult;
        }

        export interface V1GetRestrictionsRequest {
            /** Номер отправления, для которого нужно определить ограничения. */
            posting_number: string;
        }

        export interface V1Restriction {
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Ограничение по максимальному весу в граммах.
             * @format double
             */
            max_posting_weight?: number;
            /**
             * Ограничение по минимальному весу в граммах.
             * @format double
             */
            min_posting_weight?: number;
            /**
             * Ограничение по ширине в сантиметрах.
             * @format double
             */
            width?: number;
            /**
             * Ограничение по длине в сантиметрах.
             * @format double
             */
            length?: number;
            /**
             * Ограничение по высоте в сантиметрах.
             * @format double
             */
            height?: number;
            /**
             * Ограничение по максимальной стоимости отправления в рублях.
             * @format double
             */
            max_posting_price?: number;
            /**
             * Ограничение по минимальной стоимости отправления в рублях.
             * @format double
             */
            min_posting_price?: number;
        }

        export interface V1GetRestrictionsResponse {
            result?: V1Restriction;
        }

        export interface V3ExemplarInfo {
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string;
            /** Номер грузовой таможенной декларации (ГТД). */
            gtd?: string;
            /**
             * Признак того, что не указан номер грузовой таможенной декларации (ГТД).
             *
             * Если у вас нет номера таможенной декларации, передайте значение `is_gtd_absent = true`.
             */
            is_gtd_absent?: boolean;
            /** Признак того, что не указан регистрационный номер партии товара (РНПТ). */
            is_rnpt_absent?: boolean;
            /** Регистрационный номер партии товара (РНПТ). */
            rnpt?: string;
        }

        export interface V3FbsPackageProduct {
            /** Список с данными об экземплярах товара. */
            exemplar_info?: V3ExemplarInfo[];
            /**
             * Идентификатор FBS товара в системе Ozon — SKU.
             * @format int64
             */
            product_id?: number;
            /**
             * Количество экземпляров.
             * @format int32
             */
            quantity?: number;
        }

        export interface FbsPostingShipRequestPackage {
            /** Список товаров в отправлении. */
            products?: V3FbsPackageProduct[];
        }

        /** Параметр для выдачи дополнительных полей в ответе. */
        export interface FbsPostingShipRequestWith {
            /** Выдать дополнительные поля в ответе. Передайте `true`, чтобы получить дополнительную информацию об отправлении. */
            additional_data?: boolean;
        }

        export interface V3FbsPostingShipRequest {
            /** Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ. */
            packages?: FbsPostingShipRequestPackage[];
            /** Номер отправления. */
            posting_number?: string;
            /** Параметр для выдачи дополнительных полей в ответе. */
            with?: FbsPostingShipRequestWith;
        }

        export interface Fbsv3PostingProductDetailWithoutDimensions {
            /** Обязательная маркировка «Честный ЗНАК». */
            mandatory_mark?: string[];
            /** Название товара. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена. */
            price?: string;
            /**
             * Количество товара в отправлении.
             * @format int32
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /**
             * Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.
             *
             * Возможные значения:
             *   - `RUB` — российский рубль,
             *   - `BYN` — белорусский рубль,
             *   - `KZT` — тенге,
             *   - `EUR` — евро,
             *   - `USD` — доллар США,
             *   - `CNY` — юань.
             */
            currency_code?: string;
        }

        export interface FbsPostingShipV3ResponseShipAdditionalData {
            /** Номер отправления. */
            posting_number?: string;
            /** Список товаров в отправлении. */
            products?: Fbsv3PostingProductDetailWithoutDimensions[];
        }

        export interface V3FbsPostingShipResponse {
            /** Дополнительная информация об отправлениях. */
            additional_data?: FbsPostingShipV3ResponseShipAdditionalData[];
            /** Номера отправлений, которые получились после сборки. */
            result?: string[];
        }

        export interface V3FbsPostingShipByPackageRequest {
            /** Номер отправления. */
            posting_number?: string;
            /** Список продуктов в пакете. */
            products?: V3FbsPackageProduct[];
        }

        export interface PostingPostingFBSActCreateRequest {
            /**
             * Количество грузовых мест.
             *
             * Используйте параметр, если вы подключены к доверительной приёмке и отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите его.
             *
             * [Подробнее в Базе знаний продавца](https://docs.ozon.ru/partners/prodayoa-so-svoego-sklada-fbs/doveritel-naya-priemka-gruzovogo-mesta)
             * @format int32
             */
            containers_count?: number;
            /**
             * Идентификатор метода доставки.
             * @format int64
             */
            delivery_method_id?: number;
            /**
             * Дата отгрузки.
             *
             * Чтобы печать была доступна до дня отгрузки, в личном кабинете в настройках метода включите **Печать актов приёма-передачи заранее**.
             * Время на сборку отправлений — SLA на сборку — должно быть больше 13 часов. [Подробнее о печати акта приёма-передачи заранее](https://seller-edu.ozon.ru/docs/fbs/logistics-settings/pechat-aktov-zaranee.html).
             *
             * **Примеры**
             *
             * - Отгрузка на следующий день: сборка заканчивается завтра в 13:00. Если время на сборку — 15 часов, то отгрузка сформируется в 13:00 - 15 часов + 1 минута = 22:01 текущего дня. С этого времени можно печатать акт приёма-передачи.
             *
             * - Отгрузка после выходных: склад не работает в субботу и воскресенье. Сборка заканчивается в понедельник, 13:00. Если время на сборку — 15 часов, то отгрузка сформируется в 13:00 - 15 часов + 1 минута = 22:01 пятницы. С этого времени можно печатать акт приёма-передачи.<br>
             *
             * - Время на сборку отправлений менее 13 часов: сборка заканчивается завтра в 13:00. Если время на сборку — 10 часов, то отгрузка сформируется в 13:00 - 10 часов + 1 минута = 03:01 следующего дня. Отправления, полученные до 03:00, нужно передать в тот же день. Раньше 03:01 напечатать акт не получится, только в день отгрузки.
             * @format date-time
             */
            departure_date?: string;
        }

        /** Результат работы метода. */
        export interface PostingFBSActCreateResponseAct {
            /**
             * Номер задания на формирование документов.
             * @format int64
             */
            id?: number;
        }

        export interface PostingPostingFBSActCreateResponse {
            /** Результат работы метода. */
            result?: PostingFBSActCreateResponseAct;
        }

        export interface PostingPostingFBSActCheckStatusRequest {
            /**
             * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
             * @format int64
             */
            id?: number;
        }

        /** Результат работы метода. */
        export interface PostingFBSActCheckStatusResponseStatus {
            /**
             * Тип акта приёма передачи и транспортной накладной.
             *
             * Если значение `ozon_digital`, используйте методы [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus)
             *     и [/v2/posting/fbs/digital/act/get-pdf](#operation/PostingAPI_PostingFBSGetDigitalAct) для получения электронных акта приёма-передачи и транспортной накладной.
             */
            act_type?: string;
            /** Массив c номерами отправлений, которые добавлены в акт приёма-передачи. Эти отправления нужно передать сегодня. */
            added_to_act?: string[];
            /** Массив с номерами отправлений, которые не попали в акт приёма-передачи. Такие отправления нужно передавать со следующей отгрузкой. */
            removed_from_act?: string[];
            /**
             * Статус запроса:
             *  - `in_process` — документы формируются, нужно подождать.
             *  - `ready` — документы сформированы и готовы для скачивания.
             *  - `error` — произошла ошибка при формировании документов, запросите документы повторно.
             *  - `cancelled` — создание документов отменено, запросите их повторно.
             *  - `The next postings aren't ready` — произошла ошибка, отправления не включены в отгрузку. Подождите некоторое время и проверьте результат запроса. Если ошибка повторяется, обратитесь в службу поддержки.
             */
            status?: string;
            /**
             * Признак частичной перевозки. `true`, если перевозка частичная.
             *
             * Частичная перевозка значит, что отгрузка была разделена на несколько частей и по каждой из частей формируются отдельные акты.
             */
            is_partial?: boolean;
            /**
             * Признак наличия подлежащих отгрузке отправлений, которые не попали в текущую перевозку. `true`, если такие отправления есть.
             *
             * Если такие отправления есть, создайте новый акт через метод [/v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate) и проверьте его статус. Создавайте акты, пока в этом поле не вернётся `false`.
             */
            has_postings_for_next_carriage?: boolean;
            /**
             * Порядковый номер частичной перевозки.
             * @format int64
             */
            partial_num?: number;
        }

        export interface PostingPostingFBSActCheckStatusResponse {
            /** Результат работы метода. */
            result?: PostingFBSActCheckStatusResponseStatus;
        }

        export interface Postingv1GetCarriageAvailableListRequest {
            /**
             * Фильтр по методу доставки.
             * @format int64
             */
            delivery_method_id?: number;
            /**
             * Дата отгрузки. По умолчанию — текущая дата.
             * @format date-time
             */
            departure_date?: string;
        }

        export interface ResultError {
            /** Код ошибки. */
            code?: string;
            /**
             * Тип ошибки:
             * - `warning` — предупреждение;
             * - `critical` — критическая ошибка.
             */
            status?: string;
        }

        export interface GetCarriageAvailableListResponseResult {
            /**
             * Идентификатор перевозки (также номер задания на формирование документов).
             * @format int64
             */
            carriage_id?: number;
            /**
             * Количество отправлений в перевозке.
             * @format int32
             */
            carriage_postings_count?: number;
            /** Статус перевозки для запрашиваемого метода доставки и даты отгрузки. */
            carriage_status?: string;
            /**
             * Дата и время, до которых нужно собрать отправление.
             * @format date-time
             */
            cutoff_at?: string;
            /**
             * Идентификатор метода доставки.
             * @format int64
             */
            delivery_method_id?: number;
            /** Название метода доставки. */
            delivery_method_name?: string;
            /** Список ошибок. */
            errors?: ResultError[];
            /** Тип первой мили. */
            first_mile_type?: string;
            /** Признак доверительной приёмки. `true`, если доверительная приёмка включена на складе. */
            has_entrusted_acceptance?: boolean;
            /**
             * Количество отправлений, которые нужно собрать.
             * @format int32
             */
            mandatory_postings_count?: number;
            /**
             * Количество собранных отправлений.
             * @format int32
             */
            mandatory_packaged_count?: number;
            /** Ссылка на иконку службы доставки. */
            tpl_provider_icon_url?: string;
            /** Название службы доставки. */
            tpl_provider_name?: string;
            /** Город склада. */
            warehouse_city?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
            /** Название склада. */
            warehouse_name?: string;
            /** Часовой пояс, в котором находится склад. */
            warehouse_timezone?: string;
        }

        export interface Postingv1GetCarriageAvailableListResponse {
            /** Результат работы метода. */
            result?: GetCarriageAvailableListResponseResult[];
        }

        export interface PostingPostingFBSGetActRequest {
            /**
             * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
             * @format int64
             */
            id?: number;
        }

        export interface PostingPostingFBSGetActResponse {
            /**
             * Содержимое.
             * @format byte
             */
            content?: string;
            /** Название. */
            name?: string;
            /** Тип. */
            type?: string;
        }

        export interface V2PostingFBSDigitalActCheckStatusRequest {
            /**
             * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
             * @format int64
             */
            id?: number;
        }

        export interface V2PostingFBSDigitalActCheckStatusResponse {
            /**
             * Номер задания на формирование документов.
             * @format int64
             */
            id?: number;
            /**
             * Cтатус формирования документов:
             * - `FORMING` — ещё не готовы,
             * - `FORMED` — сформированы успешно,
             * - `CONFIRMED` — подписаны Ozon,
             * - `CONFIRMED_WITH_MISMATCH` — подписаны Ozon с расхождениями,
             * - `NOT_FOUND` — документы не найдены,
             * - `UNKNOWN_ERROR` — произошла ошибка.
             */
            status?: string;
        }

        export interface V2PostingFBSGetDigitalActRequest {
            /**
             * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
             * @format int64
             */
            id?: number;
            /**
             * Тип электронного документа:
             * - `act_of_acceptance` — акт приёма-передачи,
             * - `act_of_mismatch` — акт о расхождениях,
             * - `act_od_excess` — акт об излишках.
             * @format string
             */
            doc_type?: any;
        }

        export interface V2PostingFBSGetDigitalActResponse {
            /**
             * Содержание файла в бинарном формате.
             * @format byte
             */
            content?: string;
            /** Название файла. */
            name?: string;
            /** Тип файла. */
            type?: string;
        }

        export interface PostingPostingFBSPackageLabelRequest {
            /** Идентификатор отправления. */
            posting_number?: string[];
        }

        export interface PostingPostingFBSPackageLabelResponse {
            /**
             * Содержимое заказа.
             * @format byte
             */
            content?: string;
        }

        export interface V1CreateLabelBatchRequest {
            /** Номера отправлений, для которых нужны этикетки. */
            posting_number?: string[];
        }

        /** Результат работы метода. */
        export interface V1CreateLabelBatchResponseResult {
            /**
             * Идентификатор задания на формирование этикеток.
             * @format int64
             */
            task_id?: number;
        }

        export interface V1CreateLabelBatchResponse {
            /** Результат работы метода. */
            result?: V1CreateLabelBatchResponseResult;
        }

        export interface V1GetLabelBatchRequest {
            /**
             * Номер задания на формирование этикеток из ответа метода [/v1/posting/fbs/package-label/create](#operation/PostingAPI_CreateLabelBatch).
             * @format int64
             */
            task_id: number;
        }

        /** Результат работы метода. */
        export interface V1GetLabelBatchResponseResult {
            /** Код ошибки. */
            error?: string;
            /** Ссылка на файл с этикетками. */
            file_url?: string;
            /**
             * Статус формирования этикеток:
             * - `pending` — задание в очереди.
             * - `in_progress` — формируются.
             * - `completed` — файл с этикетками готов.
             * - `error` — при формировании файла произошла ошибка.
             */
            status?: string;
        }

        export interface V1GetLabelBatchResponse {
            /** Результат работы метода. */
            result?: V1GetLabelBatchResponseResult;
        }

        export interface PostingPostingFBSActGetContainerLabelsRequest {
            /**
             * Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate).
             * @format int64
             */
            id?: number;
        }

        export interface PostingPostingFBSActGetContainerLabelsResponse {
            /**
             * Содержимое.
             * @format byte
             */
            content?: string;
            /** Название. */
            name?: string;
            /** Тип. */
            type?: string;
        }

        export interface PostingMovePostingRequest {
            /** Идентификатор отправления. */
            posting_number?: string[];
        }

        export interface PostingBooleanResponse {
            /** Результат обработки запроса. `true`, если запрос выполнился без ошибок. */
            result?: boolean;
        }

        export interface PostingCancelReasonRequest {
            /** Номера отправлений. */
            related_posting_numbers?: string[];
        }

        export interface RelatedPostingCancelReasons {
            /**
             * Идентификатор причины отмены:
             * - `352` — товар закончился на складе продавца.
             * - `400` — остался только бракованный товар.
             * - `401` — продавец отклонил арбитраж.
             * - `402` — другое (вина продавца).
             * - `665` — покупатель не забрал заказ.
             * - `666` — возврат из службы доставки: нет доставки в указанный регион.
             * - `667` — заказ утерян службой доставки.
             * @format int64
             */
            id?: number;
            /** Описание причины отмены. */
            title?: string;
            /**
             * Инициатор отмены отправления:
             *   - `buyer` — покупатель,
             *   - `seller` — продавец.
             */
            type_id?: string;
        }

        export interface RelatedPostingCancelReason {
            /** Номер отправления. */
            posting_number?: string;
            /** Информация о причинах отмены. */
            reasons?: RelatedPostingCancelReasons[];
        }

        export interface PostingCancelReasonResponse {
            /** Результат запроса. */
            result?: RelatedPostingCancelReason[];
        }

        export interface PostingCancelReason {
            /**
             * Идентификатор причины отмены:
             *
             * - `352` — товар закончился на складе продавца.
             * - `400` — остался только бракованный товар.
             * - `401` — продавец отклонил арбитраж.
             * - `402` — другое (вина продавца).
             * - `665` — покупатель не забрал заказ.
             * - `666` — возврат из службы доставки: нет доставки в указанный регион.
             * - `667` — заказ утерян службой доставки.
             * @format int64
             */
            id?: number;
            /** Результат отмены отправления. `true`, если запрос доступен для отмены. */
            is_available_for_cancellation?: boolean;
            /** Название категории. */
            title?: string;
            /**
             * Инициатор отмены отправления:
             * - `buyer` — покупатель,
             * - `seller` — продавец.
             */
            type_id?: string;
        }

        export interface PostingCancelReasonListResponse {
            /** Результат работы метода. */
            result?: PostingCancelReason[];
        }

        export interface PostingCancelFbsPostingRequest {
            /**
             * Идентификатор причины отмены отправления.
             * @format int64
             */
            cancel_reason_id?: number;
            /** Дополнительная информация по отмене. Если `cancel_reason_id = 402`, параметр обязательный. */
            cancel_reason_message?: string;
            /** Идентификатор отправления. */
            posting_number?: string;
        }

        export interface PostingProductChangeRequestItem {
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /** Вес единиц товара в отправлении. */
            weightReal?: number[];
        }

        export interface PostingPostingProductChangeRequest {
            /** Информация о товарах. */
            items?: PostingProductChangeRequestItem[];
            /** Идентификатор отправления. */
            posting_number?: string;
        }

        export interface PostingPostingProductChangeResponse {
            /** Идентификатор отправления. */
            result?: string;
        }

        export interface PostingProductCancelRequestItem {
            /**
             * Количество товара в отправлении.
             * @format int32
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        export interface PostingPostingProductCancelRequest {
            /**
             * Идентификатор причины отмены отправления товара.
             * @format int64
             */
            cancel_reason_id?: number;
            /** Обязательное поле. Дополнительная информация по отмене. */
            cancel_reason_message?: string;
            /** Информация о товарах. */
            items?: PostingProductCancelRequestItem[];
            /** Идентификатор отправления. */
            posting_number?: string;
        }

        export interface PostingPostingProductCancelResponse {
            /** Номер отправления. */
            result?: string;
        }

        /** Параметры фильтра. */
        export interface V2PostingFBSActListFilter {
            /** Начальная дата создания отгрузок. */
            date_from?: string;
            /** Конечная дата создания отгрузок. */
            date_to?: string;
            /**
             * Тип интеграции со службой доставки:
             *   - `ozon` — доставка через Ozon логистику.
             *   - `aggregator` — доставка внешней службой, Ozon регистрирует заказ.
             *   - `3pl_tracking` — доставка внешней службой, продавец регистрирует заказ.
             *   - `non_integrated` — доставка силами продавца.
             */
            integration_type?: string;
            /**
             * Статусы перевозок:
             *   - `new` — новая,
             *   - `awaiting_retry` — повторная попытка создания,
             *   - `in_process` — собирается,
             *   - `success` — создана,
             *   - `error` — ошибка при создании,
             *   - `sended` — отправлена,
             *   - `received` — получена,
             *   - `formed` — собрана,
             *   - `cancelled` — отменена,
             *   - `pending` — в очереди на сборку,
             *   - `completion_enqueued` — в очереди на завершение,
             *   - `completion_processing` — в процессе завершения,
             *   - `completion_failed` — ошибка при завершении,
             *   - `cancelation_enqueued` — в очереди на отмену,
             *   - `cancelation_processing` — в процессе отмены,
             *   - `cancelation_failed` — ошибка при отмене,
             *   - `completed` — завершена.
             */
            status?: string[];
        }

        export interface V2PostingFBSActListRequest {
            /** Параметры фильтра. */
            filter?: V2PostingFBSActListFilter;
            /**
             * Максимальное количество актов в ответе.
             * @format int64
             */
            limit: number;
        }

        /** Информация про акты перевозки. */
        export interface V2PostingFBSActListRelatedDocs {
            /** Информация про акт приёма-передачи. */
            act_of_acceptance?: {
                /**
                 * Дата создания акта.
                 * @format date-time
                 */
                created_at?: string;
                /**
                 * Статус акта:
                 *   - `FORMING` — ещё не готов,
                 *   - `FORMED` — сформирован,
                 *   - `CONFIRMED` — подписан Ozon,
                 *   - `CONFIRMED_WITH_MISMATCH` — подписан Ozon с расхождениями,
                 *   - `ACCEPTED_BY_CARGO_PLACES` — принят по грузовым местам,
                 *   - `PRINTED_CARRIAGE` — электронная подпись не нужна,
                 *   - `ERROR`, `UNKNOWN_ERROR` — ошибка.
                 */
                document_status?: string;
            };
            /** Информация про акт о расхождениях. */
            act_of_mismatch?: {
                /**
                 * Дата создания акта.
                 * @format date-time
                 */
                created_at?: string;
                /**
                 * Статус акта:
                 *   - `NEED_TO_SIGN` — требуется подпись,
                 *   - `ON_CONFIRMATION` — на подписании Ozon,
                 *   - `CONFIRMED` — подписан Ozon,
                 *   - `DISPUTE_OPENED` — принят по грузовым местам,
                 *   - `PRINTED_CARRIAGE` — электронная подпись не нужна,
                 *   - `UNKNOWN_ERROR` — ошибка.
                 */
                document_status?: string;
            };
            /** Информация про акт об излишках. */
            act_of_excess?: {
                /**
                 * Дата создания акта.
                 * @format date-time
                 */
                created_at?: string;
                /**
                 * Статус акта:
                 *   - `NEED_TO_SIGN` — требуется подпись,
                 *   - `CONFIRMED` — подписан Ozon,
                 *   - `UNKNOWN_ERROR` — ошибка.
                 */
                document_status?: string;
            };
        }

        export interface V2PostingFBSActListResult {
            /**
             * Идентификатор отгрузки.
             * @format int64
             */
            id?: number;
            /**
             * Идентификатор метода доставки.
             * @format int64
             */
            delivery_method_id?: number;
            /** Название метода доставки. */
            delivery_method_name?: string;
            /**
             * Тип интеграции со службой доставки:
             *   - `ozon` — доставка через Ozon логистику.
             *   - `3pl` — доставка внешней службой, продавец регистрирует заказ.
             */
            integration_type?: string;
            /**
             * Число грузовых мест.
             * @format int32
             */
            containers_count?: number;
            /** Статус отгрузки. */
            status?: string;
            /** Дата отгрузки. */
            departure_date?: string;
            /**
             * Дата создания записи об отгрузке.
             * @format date-time
             */
            created_at?: string;
            /**
             * Дата обновления записи об отгрузке.
             * @format date-time
             */
            updated_at?: string;
            /** Тип акта приёма-передачи для FBS продавцов. */
            act_type?: string;
            /**
             * Признак частичной перевозки. `true`, если перевозка частичная.
             *
             * Частичная перевозка значит, что отгрузка была разделена на несколько частей и по каждой из частей формируются отдельные акты.
             */
            is_partial?: boolean;
            /** Признак наличия подлежащих отгрузке отправлений, которые не попали в текущую перевозку. `true`, если такие отправления есть. */
            has_postings_for_next_carriage?: boolean;
            /**
             * Порядковый номер частичной перевозки.
             * @format int64
             */
            partial_num?: number;
            /** Информация про акты перевозки. */
            related_docs?: V2PostingFBSActListRelatedDocs;
        }

        export interface V2PostingFBSActListResponse {
            /** Результат запроса. */
            result?: V2PostingFBSActListResult[];
        }

        export interface V2PostingFBSDigitalActDocumentSignRequest {
            /**
             * Идентификатор отгрузки.
             * @format int64
             */
            id?: number;
            /**
             * Тип электронного документа:
             *   - `act_of_mismatch` — акт о расхождениях,
             *   - `act_of_excess` — акт об излишках.
             */
            doc_type?: string;
        }

        export interface V2PostingFBSDigitalActDocumentSignResponse {
            /** Результат обработки. */
            result?: string;
        }

        export interface V2PostingFBSActGetPostingsRequest {
            /**
             * Идентификатор акта.
             * @format int64
             */
            id?: number;
        }

        export interface V2PostingFBSActGetProducts {
            /** Название товара. */
            name?: string;
            /** Идентификатор товара в системе продавца — артикул. */
            offer_id?: string;
            /** Цена товара. */
            price?: string;
            /**
             * Количество товара в отправлении.
             * @format int32
             */
            quantity?: number;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        export interface V2PostingFBSActGetPostingsResult {
            /**
             * Идентификатор акта.
             * @format int64
             */
            id?: number;
            /**
             * Количество коробок, в которые упакован товар.
             * @format int32
             */
            multi_box_qty?: number;
            /** Номер отправления. */
            posting_number?: string;
            /** Статус отправления. */
            status?: string;
            /** Расшифровка кода ошибки. */
            seller_error?: string;
            /**
             * Дата и время обновления записи об отправлении.
             * @format date-time
             */
            updated_at?: string;
            /**
             * Дата и время создания записи об отправлении.
             * @format date-time
             */
            created_at?: string;
            /** Список товаров в отправлении. */
            products?: V2PostingFBSActGetProducts[];
        }

        export interface V2PostingFBSActGetPostingsResponse {
            /** Информация об отправлениях. */
            result?: V2PostingFBSActGetPostingsResult[];
        }

        export interface PostingFbsPostingDeliveringRequest {
            /** Идентификатор отправления. */
            posting_number?: string[];
        }

        export interface FbsPostingMoveStatusResponseMoveStatus {
            /** Ошибка при обработке запроса. */
            error?: string;
            /** Номер отправления. */
            posting_number?: string;
            /** Если запрос выполнен без ошибок — `true`. */
            result?: boolean;
        }

        export interface PostingFbsPostingMoveStatusResponse {
            /** Результат работы метода. */
            result?: FbsPostingMoveStatusResponseMoveStatus[];
        }

        export interface FbsPostingTrackingNumberSetRequestTrackingNumber {
            /** Идентификатор отправления. */
            posting_number?: string;
            /** Трек-номер отправления. */
            tracking_number?: string;
        }

        export interface PostingFbsPostingTrackingNumberSetRequest {
            /** Массив с парами идентификатор отправления — трек-номер. */
            tracking_numbers?: FbsPostingTrackingNumberSetRequestTrackingNumber[];
        }

        export interface PostingFbsPostingLastMileRequest {
            /** Идентификатор отправления. */
            posting_number?: string[];
        }

        export interface PostingFbsPostingDeliveredRequest {
            /** Идентификатор отправления. */
            posting_number?: string[];
        }

        export interface PostingFbsPostingSentbysellerRequest {
            /** Список идентификаторов отправлений. */
            posting_number?: string[];
        }

        export interface PostingFbsPostingSentbysellerResponseItem {
            /** Ошибка. */
            error?: string;
            /** Идентификатор отправления. */
            posting_number?: string;
            result?: boolean;
        }

        export interface PostingFbsPostingSentbysellerResponse {
            /** Результат работы метода. */
            result?: PostingFbsPostingSentbysellerResponseItem[];
        }

        export interface V1PostingFbsTimeslotChangeRestrictionsRequest {
            /** Номер отправления. */
            posting_number?: string;
        }

        /** Период дат, доступных для переноса. */
        export interface V1PostingFbsTimeslotChangeRestrictionsDeliveryInterval {
            /**
             * Дата начала периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
             * @format date-time
             */
            begin?: string;
            /**
             * Дата конца периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
             * @format date-time
             */
            end?: string;
        }

        export interface V1PostingFbsTimeslotChangeRestrictionsResponse {
            /** Период дат, доступных для переноса. */
            delivery_interval?: V1PostingFbsTimeslotChangeRestrictionsDeliveryInterval;
            /**
             * Количество оставшихся переносов.
             * @format int64
             */
            remaining_changes_count?: number;
        }

        /** Новый период для даты доставки. */
        export interface V1PostingFbsTimeslotSetNewTimeslot {
            /**
             * Дата начала периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
             * @format date-time
             */
            from?: string;
            /**
             * Дата конца периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
             * @format date-time
             */
            to?: string;
        }

        export interface V1PostingFbsTimeslotSetRequest {
            /** Новый период для даты доставки. */
            new_timeslot?: V1PostingFbsTimeslotSetNewTimeslot;
            /** Номер отправления. */
            posting_number?: string;
        }

        export interface V1PostingFbsTimeslotSetResponse {
            /** `true`, если дата изменена. */
            result?: boolean;
        }

        /** Фильтр по периоду создания деклараций. */
        export interface GetEtgbRequestDate {
            /**
             * Дата начала.
             * @format date-time
             */
            from?: string;
            /**
             * Дата окончания.
             * @format date-time
             */
            to?: string;
        }

        export interface V1GetEtgbRequest {
            /** Фильтр по периоду создания деклараций. */
            date?: GetEtgbRequestDate;
        }

        /** Информация о декларации. */
        export interface GetEtgbResponseResultEtgb {
            /** Номер. */
            number?: string;
            /** Дата создания. */
            date?: string;
            /**
             * Ссылка на файл.
             *
             * Если поле пустое и вам нужен файл, обратитесь в поддержку Ozon.
             */
            url?: string;
        }

        export interface GetEtgbResponseResult {
            /** Номер отправления. */
            posting_number?: string;
            /** Информация о декларации. */
            etgb?: GetEtgbResponseResultEtgb;
        }

        export interface V1GetEtgbResponse {
            /** Результат запроса. */
            result?: GetEtgbResponseResult[];
        }

        /** Фильтр. */
        export interface ReturnsGetReturnsCompanyFboRequestFilter {
            /** Идентификатор отправления. */
            posting_number?: string;
            /**
             * Статус возврата:
             *   - `Created` — возврат создан,
             *   - `ReturnedToOzon` — возврат на складе Ozon.
             */
            status?: string[];
        }

        export interface ReturnsGetReturnsCompanyFboRequest {
            /** Фильтр. */
            filter?: ReturnsGetReturnsCompanyFboRequestFilter;
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
        }

        /** Информация о возврате. */
        export interface GetReturnsCompanyFboResponseGetReturnsCompanyItemFbo {
            /**
             * Время приёма возврата от покупателя.
             * @format date-time
             */
            accepted_from_customer_moment?: string;
            /**
             * Идентификатор продавца.
             * @format int64
             */
            company_id?: number;
            /** Текущее местонахождение возврата. */
            current_place_name?: string;
            /** Место назначения возврата. */
            dst_place_name?: string;
            /**
             * Идентификатор возврата.
             * @format int64
             */
            id?: number;
            /** Признак вскрытия упаковки. `true`, если упаковка вскрыта. */
            is_opened?: boolean;
            /** Номер отправления. */
            posting_number?: string;
            /** Причина возврата. */
            return_reason_name?: string;
            /**
             * Время доставки возврата на склад Ozon.
             * @format date-time
             */
            returned_to_ozon_moment?: string;
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
            /** Статус возврата. */
            status_name?: string;
        }

        export interface ReturnsGetReturnsCompanyFboResponse {
            /**
             * Счётчик элементов в ответе.
             * @format int64
             */
            count?: number;
            /** Информация о возвратах. */
            returns?: GetReturnsCompanyFboResponseGetReturnsCompanyItemFbo[];
        }

        /** Фильтр. */
        export interface V3ReturnsCompanyFilterFbo {
            /** Номер отправления. */
            posting_number?: string;
            status?: string[];
        }

        export interface V3GetReturnsCompanyFboV3Request {
            /** Фильтр. */
            filter?: V3ReturnsCompanyFilterFbo;
            /**
             * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.
             *
             * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
             * @format int64
             */
            last_id?: number;
            /**
             * Количество значений в ответе.
             * @format int64
             */
            limit?: number;
        }

        export interface CommonReturnsCompanyItemFbo {
            /**
             * Время приёма возврата от поĸупателя.
             * @format date-time
             */
            accepted_from_customer_moment?: string;
            /**
             * Идентификатор продавца.
             * @format int64
             */
            company_id?: number;
            /** Текущее местонахождение возврата. */
            current_place_name?: string;
            /** Место назначения возврата. */
            dst_place_name?: string;
            /**
             * Идентификатор возврата.
             * @format int64
             */
            id?: number;
            /** Признак вскрытия упаковки. `true`, если упаковка вскрыта. */
            is_opened?: boolean;
            /** Номер отправления. */
            posting_number?: string;
            /** Причина возврата. */
            return_reason_name?: string;
            /**
             * Время доставки возврата на склад Ozon.
             * @format date-time
             */
            returned_to_ozon_moment?: string;
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
            /** Статус возврата. */
            status_name?: string;
        }

        export interface V3GetReturnsCompanyFboV3Response {
            /**
             * Идентификатор последнего значения на странице.
             * @format int64
             */
            last_id?: number;
            /** Информация о возвратах. */
            returns?: CommonReturnsCompanyItemFbo[];
        }

        export interface FilterTimeRange {
            /**
             * Начало периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            time_from?: string;
            /**
             * Окончание периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            time_to?: string;
        }

        /** Фильтр. */
        export interface ReturnsGetReturnsCompanyFBSRequestFilter {
            /** Время приёма возврата от поĸупателя. */
            accepted_from_customer_moment?: FilterTimeRange[];
            /** Последний день бесплатного хранения. */
            last_free_waiting_day?: FilterTimeRange[];
            /**
             * Идентификатор заказа.
             * @format int64
             */
            order_id?: number;
            /** Идентификатор отправления. */
            posting_number?: string[];
            /** Название товара. */
            product_name?: string;
            /** Артикул товара. */
            product_offer_id?: string;
            /**
             * Статус возврата:
             *   - `returned_to_seller` — возвращён продавцу,
             *   - `waiting_for_seller` — ожидает получения продавцом,
             *   - `accepted_from_customer` — принят от покупателя,
             *   - `cancelled_with_compensation` — отменено с компенсацией,
             *   - `ready_for_shipment` — готов к отправке,
             *   - `moving` — в пути,
             *   - `disposed` — утилизирован,
             *   - `disposing` — на утилизации.
             */
            status?: string;
        }

        export interface ReturnsGetReturnsCompanyFBSRequest {
            /** Фильтр. */
            filter?: ReturnsGetReturnsCompanyFBSRequestFilter;
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
        }

        export interface ResultGetReturnsCompanyFBSItem {
            /** Время приёма возврата от покупателя. */
            accepted_from_customer_moment?: string;
            /**
             * Нижний штрихкод на этикетке товара.
             * @format int64
             */
            clearing_id?: number;
            /**
             * Комиссия.
             * @format double
             */
            commission?: number;
            /**
             * Процент комиссии.
             * @format double
             */
            commission_percent?: number;
            /**
             * Идентификатор возврата.
             * @format int64
             */
            id?: number;
            /** Если товар в пути — `true`. */
            is_moving?: boolean;
            /** Признак вскрытия упаковки. `true`, если упаковка вскрыта. */
            is_opened?: boolean;
            /** Последний день бесплатного хранения. */
            last_free_waiting_day?: string;
            /**
             * Идентификатор склада, в который везут товар.
             * @format int64
             */
            place_id?: number;
            /** Название склада, в который везут товар. */
            moving_to_place_name?: string;
            /**
             * Стоимость доставки.
             * @format double
             */
            picking_amount?: number;
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Текущая цена товара без скидки.
             * @format double
             */
            price?: number;
            /**
             * Стоимость товара без учёта комиссии.
             * @format double
             */
            price_without_commission?: number;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Наименование товара. */
            product_name?: string;
            /**
             * Количество товара.
             * @format int64
             */
            quantity?: number;
            /** Дата возврата товара. */
            return_date?: string;
            /** Причина возврата. */
            return_reason_name?: string;
            /** Дата готовности выдачи товара продавцу. */
            waiting_for_seller_date_time?: string;
            /** Дата выдачи товара продавцу. */
            returned_to_seller_date_time?: string;
            /**
             * Срок хранения возврата в днях.
             * @format int64
             */
            waiting_for_seller_days?: number;
            /**
             * Стоимость хранения возврата.
             * @format double
             */
            returns_keeping_cost?: number;
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
            /** Статус возврата. */
            status?: string;
        }

        /** Результат работы метода. */
        export interface GetReturnsCompanyFBSResponseResult {
            /**
             * Счётчик элементов в ответе.
             * @format int64
             */
            count?: number;
            /** Информация о возврате. */
            returns?: ResultGetReturnsCompanyFBSItem[];
        }

        export interface ReturnsGetReturnsCompanyFBSResponse {
            /** Результат работы метода. */
            result?: GetReturnsCompanyFBSResponseResult;
        }

        /** Время приёма возврата от поĸупателя. */
        export interface CommonTimeRangeCustomerMoment {
            /**
             * Начало периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            time_from?: string;
            /**
             * Окончание периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            time_to?: string;
        }

        /** Последний день бесплатного хранения. */
        export interface CommonTimeRangeLastDay {
            /**
             * Дата и время начала последнего дня хранения.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            time_from?: string;
            /**
             * Дата и время окончания последнего дня хранения.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            time_to?: string;
        }

        /** Фильтр. */
        export interface V3ReturnsCompanyFilterFbs {
            /** Время приёма возврата от поĸупателя. */
            accepted_from_customer_moment?: CommonTimeRangeCustomerMoment;
            /** Последний день бесплатного хранения. */
            last_free_waiting_day?: CommonTimeRangeLastDay;
            /**
             * Идентификатор заказа.
             * @format int64
             */
            order_id?: number;
            /** Идентификатор отправления. */
            posting_number?: string[];
            /** Название товара. */
            product_name?: string;
            /** Артикул товара. */
            product_offer_id?: string;
            /**
             * Статус возврата:
             *   - `returned_to_seller` — возвращён продавцу,
             *   - `waiting_for_seller` — ожидает получения продавцом,
             *   - `accepted_from_customer` — принят от покупателя,
             *   - `cancelled_with_compensation` — отменено с компенсацией,
             *   - `ready_for_shipment` — готов к отправке.
             */
            status?: string;
        }

        export interface V3GetReturnsCompanyFbsV3Request {
            /** Фильтр. */
            filter?: V3ReturnsCompanyFilterFbs;
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Идентификатор возврата, который был загружен в предыдущий раз. В ответе будут возвраты, идентификаторы которых больше значения в `last_id`.
             * @format int64
             */
            last_id?: number;
        }

        export interface CommonReturnsCompanyItemFbs {
            /** Время приёма возврата от покупателя. */
            accepted_from_customer_moment?: string;
            /**
             * Нижний штрихкод на этикетке товара.
             * @format int64
             */
            clearing_id?: number;
            /**
             * Комиссия.
             * @format double
             */
            commission?: number;
            /**
             * Процент комиссии.
             * @format double
             */
            commission_percent?: number;
            /**
             * Идентификатор возврата.
             * @format int64
             */
            id?: number;
            /** Если товар в пути — `true`. */
            is_moving?: boolean;
            /** Признак вскрытия упаковки. `true`, если упаковка вскрыта. */
            is_opened?: boolean;
            /** Последний день бесплатного хранения. */
            last_free_waiting_day?: string;
            /**
             * Идентификатор склада, в который везут товар.
             * @format int64
             */
            place_id?: number;
            /** Название склада, в который везут товар. */
            moving_to_place_name?: string;
            /**
             * Стоимость доставки.
             * @format double
             */
            picking_amount?: number;
            /** Номер отправления. */
            posting_number?: string;
            picking_tag?: string;
            /**
             * Текущая цена товара без скидки.
             * @format double
             */
            price?: number;
            /**
             * Стоимость товара без учёта комиссии.
             * @format double
             */
            price_without_commission?: number;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Наименование товара. */
            product_name?: string;
            /**
             * Количество товара.
             * @format int64
             */
            quantity?: number;
            /**
             * Штрихкод возвратного отправления.
             * @format int64
             */
            return_clearing_id?: number;
            /** Дата возврата товара. */
            return_date?: string;
            /** Причина возврата. */
            return_reason_name?: string;
            /** Дата готовности выдачи товара продавцу. */
            waiting_for_seller_date_time?: string;
            /** Дата выдачи товара продавцу. */
            returned_to_seller_date_time?: string;
            /**
             * Срок хранения возврата в днях.
             * @format int64
             */
            waiting_for_seller_days?: number;
            /**
             * Стоимость хранения возврата.
             * @format double
             */
            returns_keeping_cost?: number;
            /**
             * Идентификатор товара на Ozon.
             * @format int64
             */
            sku?: number;
            /** Статус возврата. */
            status?: string;
        }

        export interface V3GetReturnsCompanyFbsV3Response {
            /**
             * Идентификатор возврата, который был загружен в предыдущий раз. В ответе будут возвраты, идентификаторы которых больше значения в `last_id`.
             * @format int64
             */
            last_id?: number;
            /** Информация о возвратах. */
            returns?: CommonReturnsCompanyItemFbs[];
        }

        export interface V1GetConditionalCancellationRequest {
            /**
             * Идентификатор заявки на отмену.
             * @format int64
             */
            cancellation_id: number;
        }

        /** Причина отмены. */
        export interface ConditionalCancellationCancellationReason {
            /**
             * Идентификатор причины отмены.
             * @format int64
             */
            id?: number;
            /** Название причины отмены. */
            name?: string;
        }

        /** Статус заявки на отмену. */
        export interface ConditionalCancellationState {
            /**
             * Идентификатор статуса.
             * @format int64
             */
            id?: number;
            /** Название статуса. */
            name?: string;
            /**
             * Статус заявки:
             * - `ON_APPROVAL` — ожидает решения.
             * - `APPROVED` — подтверждённая.
             * - `REJECTED` — отклонённая.
             */
            state?: 'ON_APPROVAL' | 'APPROVED' | 'REJECTED';
        }

        /** Результат запроса. */
        export interface V1ConditionalCancellation {
            /**
             * Идентификатор заявки на отмену.
             * @format int64
             */
            cancellation_id?: number;
            /** Номер отправления. */
            posting_number?: string;
            /** Причина отмены. */
            cancellation_reason?: ConditionalCancellationCancellationReason;
            /**
             * Дата создания заявки на отмену.
             * @format date-time
             */
            cancelled_at?: string;
            /** Комментарий к заявке на отмену, введённый инициатором отмены вручную. */
            cancellation_reason_message?: string;
            /** Тип интеграции со службой доставки. */
            tpl_integration_type?: string;
            /** Статус заявки на отмену. */
            state?: ConditionalCancellationState;
            /**
             * Инициатор отмены:
             * - `OZON` — Ozon,
             * - `SELLER` — продавец,
             * - `CLIENT` — покупатель,
             * - `SYSTEM` — система,
             * - `DELIVERY` — служба доставки.
             */
            cancellation_initiator?: 'OZON' | 'SELLER' | 'CLIENT' | 'SYSTEM' | 'DELIVERY';
            /**
             * Дата создания заказа.
             * @format date-time
             */
            order_date?: string;
            /** Комментарий, оставленный при подтверждении или отклонении заявки на отмену. */
            approve_comment?: string;
            /**
             * Дата подтверждения или отклонения заявки на отмену.
             * @format date-time
             */
            approve_date?: string;
            /**
             * Дата, после которой заявка будет автоматически подтверждена.
             * @format date-time
             */
            auto_approve_date?: string;
        }

        export interface V1GetConditionalCancellationResponse {
            /** Результат запроса. */
            result?: V1ConditionalCancellation;
        }

        /** Фильтры. */
        export interface GetConditionalCancellationListRequestFilters {
            /**
             * Фильтр по инициатору отмены:
             * - `OZON` — Ozon,
             * - `SELLER` — продавец,
             * - `CLIENT` — покупатель,
             * - `SYSTEM` — система,
             * - `DELIVERY` — служба доставки.
             *
             * Необязательный параметр. Можно передавать несколько значений.
             */
            cancellation_initiator?: ('OZON' | 'SELLER' | 'CLIENT' | 'SYSTEM' | 'DELIVER')[];
            /**
             * Фильтр по номеру отправления.
             *
             * Необязательный параметр. Можно передавать несколько значений.
             */
            posting_number?: string;
            /**
             * Фильтр по статусу заявки на отмену:
             * - `ALL` — заявки в любом статусе,
             * - `ON_APPROVAL` — заявки на рассмотрении,
             * - `APPROVED` — подтверждённые заявки,
             * - `REJECTED` — отклонённые заявки.
             */
            state?: 'ALL' | 'ON_APPROVAL' | 'APPROVED' | 'REJECTED';
        }

        /** Дополнительная информация. */
        export interface GetConditionalCancellationListRequestWith {
            /** Признак, что в ответе нужно вывести счётчик заявок в разных статусах. */
            counters?: boolean;
        }

        export interface V1GetConditionalCancellationListRequest {
            /** Фильтры. */
            filters?: GetConditionalCancellationListRequestFilters;
            /**
             * Количество заявок в ответе.
             * @format int32
             */
            limit: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset=10`, ответ начнётся с 11-го найденного элемента.
             * @format int32
             */
            offset?: number;
            /** Дополнительная информация. */
            with?: GetConditionalCancellationListRequestWith;
        }

        /** Cчётчик заявок в разных статусах. */
        export interface GetConditionalCancellationListResponseCounters {
            /**
             * Количество заявок на рассмотрении.
             * @format int64
             */
            on_approval?: number;
            /**
             * Количество подтверждённых заявок.
             * @format int64
             */
            approved?: number;
            /**
             * Количество отклонённых заявок.
             * @format int64
             */
            rejected?: number;
        }

        export interface V1GetConditionalCancellationListResponse {
            /** Список заявок на отмену. */
            result?: V1ConditionalCancellation[];
            /**
             * Общее количество заявок по заданным фильтрам.
             * @format int32
             */
            total?: number;
            /** Cчётчик заявок в разных статусах. */
            counters?: GetConditionalCancellationListResponseCounters;
        }

        export interface V1ConditionalCancellationMoveRequest {
            /**
             * Идентификатор заявки на отмену.
             * @format int64
             */
            cancellation_id: number;
            /** Комментарий. */
            comment?: string;
        }

        /** Дополнительные поля, которые нужно добавить в ответ. */
        export interface ChatListRequestWith {
            /** Атрибут выдачи параметра `first_unread_message_id` в ответе. Если `true`, в ответе вы получите идентификатор первого непрочитанного сообщения в чате. */
            first_unread_message_id?: boolean;
            /** Атрибут выдачи параметра `unread_count` в ответе. Если `true`, в ответе вы получите количество непрочитанных сообщений в чате. */
            unread_count?: boolean;
        }

        /** ChatList */
        export interface ChatChatListRequest {
            /** Массив с идентификаторами чатов, для которых нужно вывести информацию. */
            chat_id_list?: string[];
            /**
             * Количество страниц в ответе.
             * @format int32
             */
            page?: number;
            /**
             * Количество чатов на странице. Значение по умолчанию — 100. Максимальное значение — 1000.
             * @format int32
             */
            page_size?: number;
            /** Дополнительные поля, которые нужно добавить в ответ. */
            with?: ChatListRequestWith;
        }

        /** Информация об участнике чата. */
        export interface ChatExternalUser {
            /** Идентификатор участника чата. */
            id?: string;
            /**
             * Тип участника чата:
             *   - `customer` — покупатель,
             *   - `seller` — продавец,
             *   - `crm` — системные сообщения,
             *   - `courier` — курьер.
             */
            type?: string;
        }

        /** Chat models */
        export interface ChatChat {
            /**
             * Идентификатор первого непрочитанного сообщения в чате.
             * @format uint64
             */
            first_unread_message_id?: number;
            /** Идентификатор чата. */
            id?: string;
            /**
             * Идентификатор последнего сообщения в чате.
             * @format uint64
             */
            last_message_id?: number;
            /**
             * Количество непрочитанных сообщений в чате.
             * @format int64
             */
            unread_count?: number;
            /** Cписок участников чата. */
            users?: ChatExternalUser[];
        }

        export interface ChatChatListResponse {
            result?: ChatChat[];
            /**
             * Общее количество непрочитанных сообщений.
             * @format int64
             */
            total_unread_count?: number;
        }

        /** ChatSendMessage */
        export interface ChatChatSendMessageRequest {
            /** Идентификатор чата. */
            chat_id?: string;
            /** Текст сообщения в формате plain text. */
            text?: string;
        }

        export interface ChatChatSendMessageResponse {
            /** Результат обработки запроса. */
            result?: string;
        }

        /** ChatSendFile */
        export interface ChatChatSendFileRequest {
            /** Файл в виде строки base64. */
            base64_content?: string;
            /** Идентификатор чата. */
            chat_id?: string;
            /** Название файла с расширением. */
            name?: string;
        }

        export interface ChatChatSendFileResponse {
            /** Результат обработки запроса. */
            result?: string;
        }

        /** ChatHistory */
        export interface ChatChatHistoryRequest {
            /** Идентификатор чата. */
            chat_id?: string;
            /**
             * Идентификатор сообщения, с которого начать вывод истории чата.
             * @format uint64
             */
            from_message_id?: string;
            /**
             * Количество сообщений в ответе.
             * @format int64
             */
            limit?: number;
        }

        /** Информация о товаре. */
        export interface ContextItem {
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
        }

        export interface OrderPosting {
            /**
             * Схема доставки:
             *   - `FBO`,
             *   - `FBS`,
             *   - `RFBS`,
             *   - `Crossborder`.
             */
            delivery_schema?: string;
            /** Номер отправления. */
            posting_number?: string;
            /** Список идентификаторов товаров в отправлении. */
            sku_list?: number[];
        }

        /** Информация о заказе. */
        export interface ContextOrder {
            /** Номер заказа. */
            order_number?: string;
            /** Информация об отправлении. */
            postings?: OrderPosting[];
        }

        /** Заказ или отдельный товар, о котором пользователь написал в чат. */
        export interface MessageContext {
            /** Информация о товаре. */
            item?: ContextItem;
            /** Информация о заказе. */
            order?: ContextOrder;
        }

        /** Информация о файле в чате. Отображается только для сообщений с параметром `type = file`. */
        export interface ChatFile {
            /** Тип файла. */
            mime?: string;
            /** Название файла. */
            name?: string;
            /**
             * Размер файла в байтах.
             * @format int64
             */
            size?: number;
            /** URL файла. */
            url?: string;
        }

        export interface ChatMessage {
            /** Заказ или отдельный товар, о котором пользователь написал в чат. */
            context?: MessageContext;
            /**
             * Дата и время создания.
             * @format date-time
             */
            created_at?: string;
            /** Информация о файле в чате. Отображается только для сообщений с параметром `type = file`. */
            file?: ChatFile;
            /**
             * Идентификатор файла.
             * @format uint64
             */
            id?: string;
            /** Сообщение, только для `type = text`. */
            text?: string;
            /**
             * Тип сообщения:
             *   - `text` — текст,
             *   - `file` — файл.
             */
            type?: string;
            /** Информация об участнике чата. */
            user?: ChatExternalUser;
        }

        /** Результат. */
        export interface ChatChatHistoryResponse {
            /** Результат работы метода. */
            result?: ChatMessage[];
        }

        /** ChatUpdates */
        export interface ChatChatUpdatesRequest {
            /** Идентификатор чата. */
            chat_id?: string;
            /**
             * Идентификатор сообщения.
             * @format uint64
             */
            from_message_id?: string;
            /**
             * Количество сообщений в ответе.
             * @format int64
             */
            limit?: number;
        }

        export interface ChatChatUpdatesResponse {
            /** Результат работы метода. */
            result?: ChatMessage[];
        }

        /** ChatStart */
        export interface ChatChatStartRequest {
            /** Идентификатор отправления. */
            posting_number?: string;
        }

        /** Результат работы метода. */
        export interface ChatStartResponseResult {
            /** Идентификатор чата. */
            chat_id?: string;
        }

        export interface ChatChatStartResponse {
            /** Результат работы метода. */
            result?: ChatStartResponseResult;
        }

        /** Фильтр по чатам. */
        export interface ChatListRequestFilter {
            /**
             * Фильтр по статусу чата:
             * - `All` — все чаты.
             * - `Opened` — открытые чаты.
             * - `Closed` — закрытые чаты.
             *
             * Значение по умолчанию: `All`.
             */
            chat_status?: string;
            /** Фильтр по чатам с непрочитанными сообщениями. */
            unread_only?: boolean;
        }

        export interface ChatList {
            /** Фильтр по чатам. */
            filter?: ChatListRequestFilter;
            /**
             * Количество значений в ответе. Значение по умолчанию — `30`.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset=10`, ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
        }

        /** Данные чата. */
        export interface ChatInfo {
            /** Идентификатор чата. */
            chat_id?: string;
            /**
             * Статус чата:
             * - `All` — все чаты.
             * - `Opened` — открытые чаты.
             * - `Closed` — закрытые чаты.
             */
            chat_status?: string;
            /**
             * Тип чата:
             * - `Seller_Support` — чат с поддержкой.
             * - `Buyer_Seller` — чат с покупателем.
             */
            chat_type?: string;
            /**
             * Дата создания чата.
             * @format date-time
             */
            created_at?: string;
            /**
             * Идентификатор первого непрочитанного сообщения в чате.
             * @format uint64
             */
            first_unread_message_id?: number;
            /**
             * Идентификатор последнего сообщения в чате.
             * @format uint64
             */
            last_message_id?: number;
            /**
             * Количество непрочитанных сообщений в чате.
             * @format int64
             */
            unread_count?: number;
        }

        export interface V2ChatListResponse {
            /** Данные чатов. */
            chats?: ChatInfo[];
            /**
             * Общее количество чатов.
             * @format int64
             */
            total_chats_count?: number;
            /**
             * Общее количество непрочитанных сообщений.
             * @format int64
             */
            total_unread_count?: number;
        }

        export interface ChatHistory {
            /** Идентификатор чата. */
            chat_id: string;
            /**
             * Направление сортировки сообщений:
             * - `Forward` — от старых к новым.
             * - `Backward` — от новых к старым.
             *
             * Значение по умолчанию — `Backward`. Количество сообщений можно установить в параметре `limit`.
             */
            direction?: string;
            /**
             * Идентификатор сообщения, с которого начать вывод истории чата. По умолчанию — последнее видимое сообщение.
             * @format uint64
             */
            from_message_id?: number;
            /**
             * Количество сообщений в ответе. По умолчанию — 50.
             * @format int64
             */
            limit?: number;
        }

        /** Информация об участнике чата. */
        export interface V2User {
            /** Идентификатор участника чата. */
            id?: string;
            /**
             * Тип участника чата:
             * - `customer` — покупатель,
             * - `seller` — продавец,
             * - `crm` — системные сообщения,
             * - `courier` — курьер,
             * - `support` — поддержка.
             */
            type?: string;
        }

        export interface V2ChatMessage {
            /**
             * Дата создания сообщения.
             * @format date-time
             */
            created_at?: string;
            /** Массив с содержимым сообщения в формате Markdown. */
            data?: string[];
            /** Признак, что сообщение прочитано. */
            is_read?: boolean;
            /**
             * Идентификатор сообщения.
             * @format uint64
             */
            messageId?: number;
            /** Информация об участнике чата. */
            user?: V2User;
        }

        export interface V2ChatHistoryResponse {
            /** Признак, что в ответе вернули не все сообщения. */
            has_next?: boolean;
            /** Массив сообщений, отсортированный в соответсвии с параметром `direction` из тела запроса. */
            messages?: V2ChatMessage[];
        }

        export interface ChatRead {
            /** Идентификатор чата. */
            chat_id: string;
            /**
             * Идентификатор сообщения.
             * @format uint64
             */
            from_message_id: number;
        }

        export interface V2ChatReadResponse {
            /**
             * Количество непрочитанных сообщений в чате.
             * @format int64
             */
            unread_count?: number;
        }

        export interface V1InvoiceCreateOrUpdateRequest {
            /** Номер отправления. */
            posting_number?: string;
            /** Ссылка на счёт-проформу. */
            url?: string;
        }

        export interface V1InvoiceCreateOrUpdateResponse {
            /** Результат работы метода. */
            result?: boolean;
        }

        export interface V1InvoiceGetRequest {
            /** Номер отправления. */
            posting_number?: string;
        }

        /** Результат работы метода. */
        export interface InvoiceGetResponseResult {
            /** Ссылка на счёт-проформу. */
            file_url?: string;
        }

        export interface V1InvoiceGetResponse {
            /** Результат работы метода. */
            result?: InvoiceGetResponseResult;
        }

        export interface V1InvoiceDeleteRequest {
            /** Номер отправления. */
            posting_number?: string;
        }

        export interface V1InvoiceDeleteResponse {
            /** Результат работы метода. */
            result?: boolean;
        }

        /** ReportInfo */
        export interface ReportReportInfoRequest {
            /** Уникальный идентификатор отчёта. */
            code?: string;
        }

        /**
         * Common
         * Информация об отчёте.
         */
        export interface ReportReport {
            /** Уникальный идентификатор отчёта. */
            code?: string;
            /**
             * Дата создания отчёта.
             * @format date-time
             */
            created_at?: string;
            /** Код ошибки при генерации отчёта. */
            error?: string;
            /** Ссылка на CSV-файл. */
            file?: string;
            /** Массив с фильтрами, указанными при создании отчёта продавцом. */
            params?: Record<string, string>;
            /**
             * Тип отчёта:
             *   - `SELLER_PRODUCTS` — отчёт по товарам,
             *   - `SELLER_TRANSACTIONS` — отчёт по транзакциям,
             *   - `SELLER_PRODUCT_PRICES` — отчёт по ценам товаров,
             *   - `SELLER_STOCK` — отчёт об остатках товаров,
             *   - `SELLER_PRODUCT_MOVEMENT` — отчёт о перемещении товаров,
             *   - `SELLER_RETURNS` — отчёт о возвратах,
             *   - `SELLER_POSTINGS` — отчёт об отправлениях,
             *   - `SELLER_FINANCE` — отчёт о финансах.
             */
            report_type?: string;
            /**
             * Статус генерации отчёта:
             *   - `success` — отчёт успешно создан,
             *   - `failed` — ошибка при создании отчёта.
             */
            status?: string;
        }

        export interface ReportReportInfoResponse {
            /** Информация об отчёте. */
            result?: ReportReport;
        }

        /**
         * Тип отчёта:
         *   - `ALL` — все отчёты,
         *   - `SELLER_PRODUCTS` — отчёт по товарам,
         *   - `SELLER_TRANSACTIONS` — отчёт по транзакциям,
         *   - `SELLER_PRODUCT_PRICES` — отчёт по ценам товаров,
         *   - `SELLER_STOCK` — отчёт об остатках товаров,
         *   - `SELLER_PRODUCT_MOVEMENT` — отчёт о перемещении товаров,
         *   - `SELLER_RETURNS` — отчёт о возвратах,
         *   - `SELLER_POSTINGS` — отчёт об отправлениях,
         *   - `SELLER_FINANCE` — отчёт о финансах.
         * @default "ALL"
         */
        export type ReportListRequestReportType = string;

        /** ReportList */
        export interface ReportReportListRequest {
            /**
             * Номер страницы.
             * @format int32
             */
            page?: number;
            /**
             * Количество значений на странице:
             *   - по умолчанию — 100,
             *   - маĸсимальное значение — 1000.
             * @format int32
             */
            page_size?: number;
            /**
             * Тип отчёта:
             *   - `ALL` — все отчёты,
             *   - `SELLER_PRODUCTS` — отчёт по товарам,
             *   - `SELLER_TRANSACTIONS` — отчёт по транзакциям,
             *   - `SELLER_PRODUCT_PRICES` — отчёт по ценам товаров,
             *   - `SELLER_STOCK` — отчёт об остатках товаров,
             *   - `SELLER_PRODUCT_MOVEMENT` — отчёт о перемещении товаров,
             *   - `SELLER_RETURNS` — отчёт о возвратах,
             *   - `SELLER_POSTINGS` — отчёт об отправлениях,
             *   - `SELLER_FINANCE` — отчёт о финансах.
             */
            report_type?: ReportListRequestReportType;
        }

        /** Результаты запроса. */
        export interface ReportListResponseResult {
            /** Массив со всеми сгенерированными отчётами. */
            reports?: ReportReport[];
            /**
             * Суммарное количество отчётов.
             * @format int32
             */
            total?: number;
        }

        export interface ReportReportListResponse {
            /** Результаты запроса. */
            result?: ReportListResponseResult;
        }

        /**
         * Language
         * Язык ответа:
         *   - `RU` — русский,
         *   - `EN` — английский.
         * @default "DEFAULT"
         */
        export type ReportLanguage = string;

        /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         * @default "ALL"
         */
        export type ReportCreateCompanyProductsReportRequestVisibility = string;

        /** CreateCompanyProductsReport */
        export interface ReportCreateCompanyProductsReportRequest {
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
            /** Идентификатор товара в системе продавца. */
            offer_id?: string[];
            /** Поиск по содержанию записи, проверяет наличие. */
            search?: string;
            /** Идентификатор товара в системе Ozon. */
            sku?: number[];
            /**
             * Фильтр по видимости товара:
             *   - `ALL` — все товары, кроме архивных.
             *   - `VISIBLE` — товары, которые видны покупателям.
             *   - `INVISIBLE` — товары, которые не видны покупателям.
             *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
             *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
             *   - `MODERATED` — товары, которые прошли модерацию.
             *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
             *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
             *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
             *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
             *   - `TO_SUPPLY` — товары, готовые к продаже.
             *   - `IN_SALE` — товары в продаже.
             *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
             *   - `BANNED` — заблокированные товары.
             *   - `OVERPRICED` — товары с завышенной ценой.
             *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
             *   - `EMPTY_BARCODE` — товары без штрихкода.
             *   - `BARCODE_EXISTS` — товары со штрихкодом.
             *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
             */
            visibility?: ReportCreateCompanyProductsReportRequestVisibility;
        }

        /** Результаты запроса. */
        export interface CreateReportResponseCode {
            /** Уникальный идентификатор отчёта. */
            code?: string;
        }

        export interface ReportCreateReportResponse {
            /** Результаты запроса. */
            result?: CreateReportResponseCode;
        }

        /**
         * Фильтр по типу транзакции:
         *   - `ALL` — все,
         *   - `ORDERS` — заказы,
         *   - `RETURNS` — возвраты,
         *   - `SERVICES` — сервисные сборы,
         *   - `DEPOSIT` — депозит,
         *   - `OTHER` — другие.
         * @default "ALL"
         */
        export type CreateCompanyTransactionsReportRequestTransactionType = string;

        /** CreateCompanyTransactionsReport */
        export interface ReportCreateCompanyTransactionsReportRequest {
            /** Дата, с которой рассчитывается отчёт по транзакциям. Формат UTC: ГГГГ-ММ-ДД. */
            date_from?: string;
            /** Дата, по которую рассчитывается отчёт по транзакциям. Формат UTC: ГГГГ-ММ-ДД. */
            date_to?: string;
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
            /** Поиск по содержанию записи, проверяет наличие. */
            search?: string;
            /**
             * Фильтр по типу транзакции:
             *   - `ALL` — все,
             *   - `ORDERS` — заказы,
             *   - `RETURNS` — возвраты,
             *   - `SERVICES` — сервисные сборы,
             *   - `DEPOSIT` — депозит,
             *   - `OTHER` — другие.
             */
            transaction_type?: CreateCompanyTransactionsReportRequestTransactionType;
        }

        /**
         * Фильтр по видимости товара:
         *   - `ALL` — все товары, кроме архивных.
         *   - `VISIBLE` — товары, которые видны покупателям.
         *   - `INVISIBLE` — товары, которые не видны покупателям.
         *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
         *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
         *   - `MODERATED` — товары, которые прошли модерацию.
         *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
         *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
         *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
         *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
         *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
         *   - `TO_SUPPLY` — товары, готовые к продаже.
         *   - `IN_SALE` — товары в продаже.
         *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
         *   - `BANNED` — заблокированные товары.
         *   - `OVERPRICED` — товары с завышенной ценой.
         *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
         *   - `EMPTY_BARCODE` — товары без штрихкода.
         *   - `BARCODE_EXISTS` — товары со штрихкодом.
         *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
         * @default "ALL"
         */
        export type ReportCreateCompanyProductsPricesReportRequestVisibility = string;

        export interface ReportCreateCompanyProductsPricesReportRequest {
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
            /** Идентифиĸатор товара в системе продавца — артиĸул. */
            offer_id?: string[];
            /** Поисĸ по содержанию записи, проверяет наличие. */
            search?: string;
            /** Идентифиĸатор товара в системе Ozon — SKU. */
            sku?: number[];
            /**
             * Фильтр по видимости товара:
             *   - `ALL` — все товары, кроме архивных.
             *   - `VISIBLE` — товары, которые видны покупателям.
             *   - `INVISIBLE` — товары, которые не видны покупателям.
             *   - `EMPTY_STOCK` — товары, у которых не указано наличие.
             *   - `NOT_MODERATED` — товары, которые не прошли модерацию.
             *   - `MODERATED` — товары, которые прошли модерацию.
             *   - `DISABLED` — товары, которые видны покупателям, но недоступны к покупке.
             *   - `STATE_FAILED` — товары, создание которых завершилось ошибкой.
             *   - `READY_TO_SUPPLY` — товары, готовые к поставке.
             *   - `VALIDATION_STATE_PENDING` — товары, которые проходят проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_FAIL` — товары, которые не прошли проверку валидатором на премодерации.
             *   - `VALIDATION_STATE_SUCCESS` — товары, которые прошли проверку валидатором на премодерации.
             *   - `TO_SUPPLY` — товары, готовые к продаже.
             *   - `IN_SALE` — товары в продаже.
             *   - `REMOVED_FROM_SALE` — товары, скрытые от покупателей.
             *   - `BANNED` — заблокированные товары.
             *   - `OVERPRICED` — товары с завышенной ценой.
             *   - `CRITICALLY_OVERPRICED` — товары со слишком завышенной ценой.
             *   - `EMPTY_BARCODE` — товары без штрихкода.
             *   - `BARCODE_EXISTS` — товары со штрихкодом.
             *   - `QUARANTINE` — товары на карантине после изменения цены более чем на 50%.
             */
            visibility?: ReportCreateCompanyProductsPricesReportRequestVisibility;
        }

        export interface ReportCreateCompanyStockReportRequest {
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
        }

        export interface ReportCreateProductsMovementReportRequest {
            /** Дата, с которой будут данные в отчёте. */
            date_from?: string;
            /** Дата, по которую будут данные в отчёте. */
            date_to?: string;
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
        }

        /** Фильтр. */
        export interface ReportCreateCompanyReturnsReportRequestFilter {
            /** Схема доставĸи заĸаза: `fbs` — доставка со своего склада. */
            delivery_schema?: string;
            /**
             * Идентифиĸатор заĸаза.
             * @format int64
             */
            order_id?: number;
            /** Статус заĸаза. */
            status?: string;
        }

        export interface ReportCreateCompanyReturnsReportRequest {
            /** Фильтр. */
            filter?: ReportCreateCompanyReturnsReportRequestFilter;
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
        }

        /** Фильтр. */
        export interface ReportCreateCompanyPostingsReportRequestFilter {
            /** Идентификатор причины отмены. */
            cancel_reason_id?: number[];
            /**
             * Схема работы — FBO или FBS.
             *
             * Чтобы получить отчёт по схеме FBO, передайте `fbo` в этом параметре. Для отчёта по схеме FBS передайте `fbs`.
             */
            delivery_schema?: string[];
            /** Артикул товара. */
            offer_id?: string;
            /**
             * Время, когда заказ попал в обработку.
             * @format date-time
             */
            processed_at_from?: string;
            /**
             * Время, когда заказ появился в личном кабинете.
             * @format date-time
             */
            processed_at_to?: string;
            /** Идентификатор товара в системе Ozon. */
            sku?: number[];
            /** Текст статуса. */
            status_alias?: string[];
            /** Числовой статус. */
            statuses?: number[];
            /** Название товара. */
            title?: string;
        }

        export interface ReportCreateCompanyPostingsReportRequest {
            /** Фильтр. */
            filter?: ReportCreateCompanyPostingsReportRequestFilter;
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
        }

        export interface ReportCreateCompanyFinanceReportRequest {
            /** Дата, с ĸоторой рассчитывается отчёт по финансам. Формат: YYYY-MM-DD. */
            date_from?: string;
            /** Дата, по ĸоторую рассчитывается отчёт по финансам. Формат: YYYY-MM-DD. */
            date_to?: string;
            /**
             * Язык ответа:
             *   - `RU` — русский,
             *   - `EN` — английский.
             */
            language?: ReportLanguage;
        }

        /** Период формирования отчёта. */
        export interface Financev3Period {
            /**
             * Дата, с ĸоторой рассчитывается отчёт.
             * @format date-time
             */
            from: string;
            /**
             * Дата, по ĸоторую рассчитывается отчёт.
             * @format date-time
             */
            to: string;
        }

        export interface V3FinanceCashFlowStatementListRequest {
            /** Период формирования отчёта. */
            date: Financev3Period;
            /**
             * Номер страницы, возвращаемой в запросе.
             * @format int32
             */
            page: number;
            /** `true`, если нужно добавить дополнительные параметры в ответ. */
            with_details?: boolean;
            /**
             * Количество элементов на странице.
             * @format int32
             */
            page_size: number;
        }

        /** Период. */
        export interface V3FinanceCashFlowStatementListResponsePeriod {
            /**
             * Начало периода.
             * @format date-time
             */
            begin?: string;
            /**
             * Конец периода.
             * @format date-time
             */
            end?: string;
            /**
             * Идентификатор.
             * @format int64
             */
            id?: number;
        }

        export interface FinanceCashFlowStatementListResponseCashFlow {
            /** Период. */
            period?: V3FinanceCashFlowStatementListResponsePeriod;
            /**
             * Сумма цен реализованных товаров.
             * @format double
             */
            orders_amount?: number;
            /**
             * Сумма цен возвращённых товаров.
             * @format double
             */
            returns_amount?: number;
            /**
             * Комиссия Ozon за реализацию товаров.
             * @format double
             */
            commission_amount?: number;
            /**
             * Сумма дополнительных услуг.
             * @format double
             */
            services_amount?: number;
            /**
             * Сумма услуг логистики.
             * @format double
             */
            item_delivery_and_return_amount?: number;
            /** Код валюты, в которой рассчитываются комиссии. */
            currency_code?: string;
        }

        /** Детализация. */
        export interface FinanceCashFlowStatementListResponseDeliveryService {
            /**
             * Название операции. Возможные значения:
             *  - `MarketplaceServiceItemDirectFlowLogisticSum` — логистика,
             *  - `MarketplaceServiceItemDropoff` — обработка отправления Drop-off,
             *  - `MarketplaceServiceItemDelivToCustomer` — последняя миля.
             */
            name?: string;
            /**
             * Сумма по операции.
             * @format double
             */
            price?: number;
        }

        /** Плата за обработку и доставку. */
        export interface DetailsServices {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /** Детализация. */
            items?: FinanceCashFlowStatementListResponseDeliveryService;
        }

        /** Заказы. */
        export interface DetailsDeliveryDetails {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /**
             * Сумма, на которую выкуплено товаров с учётом комиссий.
             * @format double
             */
            amount?: number;
            /** Плата за обработку и доставку. */
            delivery_services?: DetailsServices;
        }

        /** Выплачено за период. */
        export interface DetailsPayment {
            /** Валюта. */
            currency_code?: string;
            /**
             * Сумма выплаты.
             * @format double
             */
            payment?: number;
        }

        /** Детализация. */
        export interface FinanceCashFlowStatementListResponseReturnService {
            /**
             * Название операции. Возможные значения:
             *  - `MarketplaceServiceItemReturnAfterDelivToCustomer` — обработка возвратов,
             *  - `MarketplaceServiceItemReturnPartGoodsCustomer` — обработка частичного невыкупа,
             *  - `MarketplaceServiceItemReturnNotDelivToCustomer` — обработка отменённых и невостребованных товаров,
             *  - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика.
             */
            name?: string;
            /**
             * Сумма по операции.
             * @format double
             */
            price?: number;
        }

        /** Плата за возвраты и отмены. */
        export interface DetailsReturns {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /** Детализация. */
            items?: FinanceCashFlowStatementListResponseReturnService;
        }

        /** Возвраты и отмены. */
        export interface DetailsReturnDetails {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /**
             * Сумма, на которую получено возвратов с учётом комиссий.
             * @format double
             */
            amount?: number;
            /** Плата за возвраты и отмены. */
            return_services?: DetailsReturns;
        }

        /** Перечисления по схеме rFBS. */
        export interface DetailsRfbsDetails {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /**
             * Перечисления от покупателей.
             * @format double
             */
            transfer_delivery?: number;
            /**
             * Возврат перечислений покупателям.
             * @format double
             */
            transfer_delivery_return?: number;
            /**
             * Компенсация перечислений за доставку.
             * @format double
             */
            compensation_delivery_return?: number;
            /**
             * Перечисления частичных компенсаций покупателям.
             * @format double
             */
            partial_compensation?: number;
            /**
             * Возврат частичных компенсаций.
             * @format double
             */
            partial_compensation_return?: number;
        }

        /** Детализация. */
        export interface FinanceCashFlowStatementListResponseService {
            /**
             * Название операции. Возможные значения:
             *  - `MarketplaceServiceItemOtherMarketAndTechService` — иные маркетинговые и технические услуги,
             *  - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS,
             *  - `MarketplaceSaleReviewsItem` — приобретение отзывов на платформе,
             *  - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»,
             *  - `MarketplaceServiceStorageItem` — услуга размещения товаров,
             *  - `MarketplaceServiceStockDisposal` — утилизация со стока,
             *  - `MarketplaceReturnDisposalServiceFbsItem` — утилизация FBS,
             *  - `MarketplaceServiceItemFlexiblePaymentSchedule` — услуга «Гибкий график выплат»,
             *  - `MarketplaceServiceProcessingSpoilage` — обработка брака,
             *  - `MarketplaceServiceProcessingIdentifiedSurplus` — обработка опознанных излишков,
             *  - `MarketplaceServiceProcessingIdentifiedDiscrepancies` — бронирование места для размещения на складе,
             *  - `MarketplaceServiceItemInternetSiteAdvertising` — реклама на сайте Ozon,
             *  - `MarketplaceServiceItemPremiumSubscribtion` — премиум-подписка,
             *  - `MarketplaceAgencyFeeAggregator3PLGlobalItem` — агентское вознаграждение Ozon.
             */
            name?: string;
            /**
             * Сумма по операции.
             * @format double
             */
            price?: number;
        }

        /** Услуги. */
        export interface DetailsService {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /** Детализация. */
            items?: FinanceCashFlowStatementListResponseService;
        }

        /** Детализация. */
        export interface FinanceCashFlowStatementListResponseDetailsOthers {
            /**
             * Название операции. Возможные значения:
             *  - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга,
             *  - `MarketplaceSellerCompensationLossOfGoodsOperation` — компенсация за уничтоженный товар,
             *  - `MarketplaceSellerCorrectionOperation` — корректировка стоимости услуг,
             *  - `OperationCorrectionSeller` — инвентаризация взаиморасчётов,
             *  - `OperationMarketplaceWithHoldingForUndeliverableGoods` — компенсация за недовложение товаров,
             *  - `OperationClaim` — начисления по претензиям.
             */
            name?: string;
            /**
             * Сумма по операции.
             * @format double
             */
            price?: number;
        }

        /** Компенсация и прочие начисления. */
        export interface DetailsOthers {
            /**
             * Общая сумма.
             * @format double
             */
            total?: number;
            /** Детализация. */
            items?: FinanceCashFlowStatementListResponseDetailsOthers;
        }

        /** Детализированная информация. */
        export interface FinanceCashFlowStatementListResponseDetails {
            /**
             * Баланс на начало периода.
             * @format double
             */
            begin_balance_amount?: number;
            /** Результат работы метода. */
            delivery?: DetailsDeliveryDetails;
            /**
             * Сумма к выплате за период.
             * @format double
             */
            invoice_transfer?: number;
            /**
             * Перевод по договорам займа.
             * @format double
             */
            loan?: number;
            /** Выплачено в периоде. */
            payments?: DetailsPayment;
            /** Период. */
            period?: V3FinanceCashFlowStatementListResponsePeriod;
            /** Возвраты и отмены. */
            return?: DetailsReturnDetails;
            /** Перечисления по схеме rFBS. */
            rfbs?: DetailsRfbsDetails;
            /** Услуги. */
            services?: DetailsService;
            /** Компенсация и прочие начисления. */
            others?: DetailsOthers;
            /**
             * Баланс на конец периода.
             * @format double
             */
            end_balance_amount?: number;
        }

        /** Результат работы метода. */
        export interface V3FinanceCashFlowStatementListResponseResult {
            /** Список отчётов. */
            cash_flows?: FinanceCashFlowStatementListResponseCashFlow[];
            /** Детализированная информация. */
            details?: FinanceCashFlowStatementListResponseDetails;
            /**
             * Количество страниц с отчётами.
             * @format int64
             */
            page_count?: number;
        }

        export interface V3FinanceCashFlowStatementListResponse {
            /** Результат работы метода. */
            result?: V3FinanceCashFlowStatementListResponseResult;
        }

        export type ReportCreateDiscountedRequest = object;

        export interface ReportCreateDiscountedResponse {
            /** Уникальный идентификатор отчёта. */
            code?: string;
        }

        export interface ReportDiscountedInfoRequest {
            /** Уникальный идентификатор отчёта. */
            code?: string;
        }

        /** Информация об отчёте. */
        export interface ReportDiscountedInfoResponseReport {
            /**
             * Дата создания отчёта.
             * @format date-time
             */
            created_at?: string;
            /** Ссылка на файл с отчётом. */
            file?: string;
            /**
             * Статус отчёта:
             * - `success` — успешно создан,
             * - `pending` — ожидает обработки,
             * - `processing` — обрабатывается,
             * - `failed` — ошибка при создании.
             */
            status?: string;
            /** Код ошибки при создании отчёта. */
            error?: string;
        }

        export interface ReportDiscountedInfoResponse {
            /** Информация об отчёте. */
            report?: ReportDiscountedInfoResponseReport;
        }

        export type ReportDiscountedListRequest = object;

        export interface ReportDiscountedListResponse {
            /** Список отчётов и данные по ним. */
            reports?: ReportDiscountedInfoResponseReport[];
        }

        /** @default "unknownDimension" */
        export type SellerServiceanalyticsDimension = string;

        /**
         * <br>
         *
         * Операция сравнения:
         *   - `EQ` — равно,
         *   - `GT` — больше,
         *   - `GTE` — больше или равно,
         *   - `LT` — меньше,
         *   - `LTE` — меньше или равно.
         * @default "EQ"
         */
        export type FilterOp = string;

        export interface AnalyticsFilter {
            /** Параметр сортировки. Можно передать любой атрибут из параметров `dimension` и `metric`, кроме атрибута `brand`. */
            key?: string;
            /**
             * <br>
             *
             * Операция сравнения:
             *   - `EQ` — равно,
             *   - `GT` — больше,
             *   - `GTE` — больше или равно,
             *   - `LT` — меньше,
             *   - `LTE` — меньше или равно.
             */
            op?: FilterOp;
            /** Значение для сравнения. */
            value?: string;
        }

        /** @default "unknown_metric" */
        export type AnalyticsMetric = string;

        /**
         * Вид сортировки:
         *   - `ASC` — по возрастанию,
         *   - `DESC` — по убыванию.
         * @default "ASC"
         */
        export type SortingOrder = string;

        export interface AnalyticsSorting {
            /** Метрика, по которой будет отсортирован результат запроса. */
            key?: string;
            /**
             * Вид сортировки:
             *   - `ASC` — по возрастанию,
             *   - `DESC` — по убыванию.
             */
            order?: SortingOrder;
        }

        export interface AnalyticsAnalyticsGetDataRequest {
            /** Дата, с которой будут данные в отчёте. */
            date_from?: string;
            /** Дата, по которую будут данные в отчёте. */
            date_to?: string;
            /**
             * Группировка данных в отчёте:
             *   - `unknownDimension` — неизвестное измерение,
             *   - `sku` — идентификатор товара,
             *   - `spu` — идентификатор товара,
             *   - `day` — день,
             *   - `week` — неделя,
             *   - `month` — месяц,
             *   - `year` — год,
             *   - `category1` — категория первого уровня,
             *   - `category2` — категория второго уровня,
             *   - `category3` — категория третьего уровня,
             *   - `category4` — категория четвертого уровня,
             *   - `brand` — бренд,
             *   - `modelID` — модель.
             */
            dimension?: SellerServiceanalyticsDimension[];
            /** Фильтры. */
            filters?: AnalyticsFilter[];
            /**
             * Количество значений в ответе:
             *   - максимум — 1000,
             *   - минимум — 1.
             * @format int64
             */
            limit?: number;
            /**
             * Укажите до 14 метрик. Если их будет больше, вы получите ошибку с кодом `InvalidArgument`.
             *
             * Список метриĸ, по ĸоторым будет сформирован отчёт:
             *   - `unknown_metric` — неизвестная метрика,
             *   - `hits_view_search` — показы в поиске и в категории,
             *   - `hits_view_pdp` — показы на карточке товара,
             *   - `hits_view` — всего показов,
             *   - `hits_tocart_search` — в корзину из поиска или категории,
             *   - `hits_tocart_pdp` — в корзину из карточки товара,
             *   - `hits_tocart` — всего добавлено в корзину,
             *   - `session_view_search` — сессии с показом в поиске или в категории,
             *   - `session_view_pdp` — сессии с показом на карточке товара,
             *   - `session_view` — всего сессий,
             *   - `conv_tocart_search` — конверсия в корзину из поиска или категории,
             *   - `conv_tocart_pdp` — конверсия в корзину из карточки товара,
             *   - `conv_tocart` — общая конверсия в корзину,
             *   - `revenue` — заказано на сумму,
             *   - `returns` — возвращено товаров,
             *   - `cancellations` — отменено товаров,
             *   - `ordered_units` — заказано товаров,
             *   - `delivered_units` — доставлено товаров,
             *   - `adv_view_pdp` — показы на карточке товара, спонсорские товары,
             *   - `adv_view_search_category` — показы в поиске и в категории, спонсорские товары,
             *   - `adv_view_all` — показы всего, спонсорские товары,
             *   - `adv_sum_all` — всего расходов на рекламу,
             *   - `position_category` — позиция в поиске и категории,
             *   - `postings` — отправления,
             *   - `postings_premium` — отправления с подпиской Premium.
             */
            metrics?: AnalyticsMetric[];
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
            /** Настройки сортировки отчёта. */
            sort?: AnalyticsSorting[];
        }

        export interface AnalyticsDataRowDimension {
            /** Идентификатор. */
            id?: string;
            /** Наименование. */
            name?: string;
        }

        export interface AnalyticsDataRow {
            /** Группировка данных в отчёте. */
            dimensions?: AnalyticsDataRowDimension[];
            /** Список значений метрики. */
            metrics?: number[];
        }

        /** Результаты запроса. */
        export interface AnalyticsGetDataResponseResult {
            /** Массив данных. */
            data?: AnalyticsDataRow[];
            /** Итоговые и средние значения метрик. */
            totals?: number[];
        }

        export interface AnalyticsAnalyticsGetDataResponse {
            /** Результаты запроса. */
            result?: AnalyticsGetDataResponseResult;
            /** Время создания отчёта. */
            timestamp?: string;
        }

        export interface AnalyticsAnalyticsGetStockOnWarehousesRequest {
            /**
             * Количество ответов на странице. По умолчанию — 100.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
        }

        /** Информация об остатках товаров. */
        export interface AnalyticsGetStockOnWarehousesResponseTotalStock {
            /**
             * Количество товаров, которое перемещается между фулфилмент-центрами.
             * @format int64
             */
            between_warehouses?: number;
            /**
             * Количество доступных для продажи товаров.
             * @format int64
             */
            for_sale?: number;
            /**
             * Количество не найденных при подборе товаров.
             * @format int64
             */
            loss?: number;
            /**
             * Количество не подлежащих реализации товаров.
             * @format int64
             */
            not_for_sale?: number;
            /**
             * Количество товаров в доставке.
             * @format int64
             */
            shipped?: number;
        }

        export interface AnalyticsGetStockOnWarehousesResponseTotalItem {
            /** Штрихкод. */
            barcode?: string;
            /** Категория. */
            category?: string;
            /** Уценённый товар (Да/Нет). */
            discounted?: string;
            /**
             * Высота упаковки.
             * @format float
             */
            height?: number;
            /**
             * Длина товара.
             * @format float
             */
            length?: number;
            /** Идентификатор товара в системе продавца. */
            offer_id?: string;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format uint64
             */
            sku?: string;
            /** Информация об остатках товаров. */
            stock?: AnalyticsGetStockOnWarehousesResponseTotalStock;
            /** Название товара. */
            title?: string;
            /**
             * Объём товара.
             * @format float
             */
            volume?: number;
            /**
             * Вес товара в упаковке.
             * @format float
             */
            weight?: number;
            /**
             * Ширина упаковки.
             * @format float
             */
            width?: number;
        }

        /** Информация о товарах на складе. */
        export interface AnalyticsGetStockOnWarehousesResponseItemStock {
            /**
             * Количество доступных для продажи товаров.
             * @format int64
             */
            for_sale?: number;
            /**
             * Количество не найденных при подборе товаров.
             * @format int64
             */
            loss?: number;
            /**
             * Количество не подлежащих реализации товаров.
             * @format int64
             */
            not_for_sale?: number;
        }

        export interface AnalyticsGetStockOnWarehousesResponseItem {
            /** Штрихкод. */
            barcode?: string;
            /** Категория. */
            category?: string;
            /** Уценённый товар (Да/Нет). */
            discounted?: string;
            /**
             * Высота упаковки.
             * @format float
             */
            height?: number;
            /**
             * Длина товара.
             * @format float
             */
            length?: number;
            /** Идентификатор товара в системе продавца. */
            offer_id?: string;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format uint64
             */
            sku?: string;
            /** Информация о товарах на складе. */
            stock?: AnalyticsGetStockOnWarehousesResponseItemStock;
            /** Название категории. */
            title?: string;
            /**
             * Объём товара.
             * @format float
             */
            volume?: number;
            /**
             * Вес товара в упаковке.
             * @format float
             */
            weight?: number;
            /**
             * Ширина упаковки.
             * @format float
             */
            width?: number;
        }

        export interface AnalyticsGetStockOnWarehousesResponseWHItem {
            /** Идентификатор склада. */
            id?: string;
            /** Информация о товарах на складе. */
            items?: AnalyticsGetStockOnWarehousesResponseItem[];
            /** Название склада. */
            name?: string;
        }

        export interface AnalyticsAnalyticsGetStockOnWarehousesResponse {
            /** Время создания отчёта. */
            timestamp?: string;
            /** Данные по остаткам на всех складах. */
            total_items?: AnalyticsGetStockOnWarehousesResponseTotalItem[];
            /** Данные остатков по определённым складам. */
            wh_items?: AnalyticsGetStockOnWarehousesResponseWHItem[];
        }

        export interface V1AnalyticsItemTurnoverDataV3Request {
            /**
             * Дата. 1-е или 15-е число месяца в формате: 2021-05-01.
             *   - 1-е число месяца вводится для получения отчёта за первую половину месяца.
             *   - 15-е число вводится для получения отчёта за вторую половину месяца.
             */
            date_from?: string;
        }

        export interface AnalyticsItemTurnoverDataV3ResponseItemTurnover {
            /**
             * Среднесуточные продажи за определённый период. Указывается в штуках.
             * @format double
             */
            avg_sold_items?: number;
            /**
             * Среднесуточные продажи за определённый период. Измеряется в литрах.
             * @format double
             */
            avg_sold_litres?: number;
            /**
             * Среднесуточный объём товара на складе в литрах.
             * @format double
             */
            avg_stock_items?: number;
            /**
             * Сколько единиц товара можно размещать на складе бесплатно.
             * Рассчитывается по формуле: Среднесуточные продажи товара (л/дн) × Пороговая оборачиваемость (дн) ÷ Объём (л).
             * @format double
             */
            avg_stock_items_free?: number;
            /**
             * Среднесуточный остаток на складах Ozon в литрах.
             * @format double
             */
            avg_stock_litres?: number;
            /** Уценённый товар. */
            discounted?: boolean;
            /**
             * Высота товара.
             * @format double
             */
            height?: number;
            /**
             * Часть от стоимости размещения категории в рублях.
             * @format double
             */
            item_commission_part?: number;
            /**
             * Длина товара.
             * @format double
             */
            length?: number;
            /**
             * Сколько нужно продавать в день, чтобы размещение товара было бесплатным.
             * Рассчитывается по формуле: Среднесуточный остаток товара (л) ÷ Пороговая оборачиваемость (дн) ÷ Объем (л).
             * @format double
             */
            min_daily_sales?: number;
            /** Название товара. */
            name?: string;
            /** Артикул. */
            offer_id?: string;
            /** Рекомендация, что нужно сделать с товаром по данным об оборачиваемости этого товара. */
            recommendation?: string;
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /**
             * Доступно к продаже всего в штуках.
             * @format int64
             */
            stock_items_total?: number;
            /**
             * Пороговая оборачиваемость в днях.
             * @format int64
             */
            threshold_free?: number;
            /** Фактическая оборачиваемость в днях. */
            turnover?: string;
            /**
             * Объём товара.
             * @format double
             */
            volume?: number;
            /**
             * Ширина товара.
             * @format double
             */
            width?: number;
        }

        export interface AnalyticsItemTurnoverDataV3ResponseCategory {
            /**
             * Среднесуточные продажи за определённый период. Измеряется в литрах.
             * @format double
             */
            avg_sold_litres?: number;
            /**
             * Среднесуточный остаток на складах Ozon в литрах.
             * @format double
             */
            avg_stock_litres?: number;
            /**
             * Количество прошедших дней с платным размещением.
             * @format int32
             */
            billed_days?: number;
            /**
             * Идентификатор категории.
             * @format int64
             */
            category_id?: number;
            /**
             * Стоимость размещения одного литра товара в рублях.
             * @format double
             */
            commission?: number;
            /**
             * Тариф за размещение в рублях. Зависит от объёма и количества дней размещения.
             * @format double
             */
            fee?: number;
            /**
             * Пороговая оборачиваемость для бесплатного размещения. Измеряется в днях.
             * @format int64
             */
            threshold_free?: number;
            /**
             * Превышенный порог оборачиваемости, по которому определили тариф. Измеряется в днях.
             * @format int64
             */
            threshold_used?: number;
            /** Фактическая оборачиваемость в днях. */
            turnover?: string;
            /** Данные по товарам категории. */
            turnover_items?: AnalyticsItemTurnoverDataV3ResponseItemTurnover[];
        }

        export interface V1AnalyticsItemTurnoverDataV3Response {
            /** Данные по категориям. */
            categories?: AnalyticsItemTurnoverDataV3ResponseCategory[];
            /**
             * Стоимость размещения в рублях.
             * @format double
             */
            commission_total?: number;
            /** Дата выгрузки. */
            date?: string;
            /** Период отчёта. */
            period?: string;
        }

        /**
         * Фильтр по типу склада:
         *   - `EXPRESS_DARK_STORE` — склады Ozon с доставкой Fresh.
         *   - `NOT_EXPRESS_DARK_STORE` — склады Ozon без доставки Fresh.
         *   - `ALL` — все склады Ozon.
         * @default "ALL"
         */
        export enum AnalyticsGetStockOnWarehousesRequestWarehouseType {
            ALL = 'ALL',
            EXPRESS_DARK_STORE = 'EXPRESS_DARK_STORE',
            NOT_EXPRESS_DARK_STORE = 'NOT_EXPRESS_DARK_STORE',
        }

        export interface AnalyticsStockOnWarehouseRequest {
            /**
             * Количество ответов на странице. По умолчанию — 100.
             * @format int64
             */
            limit?: number;
            /**
             * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ начнётся с 11-го найденного элемента.
             * @format int64
             */
            offset?: number;
            /**
             * Фильтр по типу склада:
             *   - `EXPRESS_DARK_STORE` — склады Ozon с доставкой Fresh.
             *   - `NOT_EXPRESS_DARK_STORE` — склады Ozon без доставки Fresh.
             *   - `ALL` — все склады Ozon.
             */
            warehouse_type?: AnalyticsGetStockOnWarehousesRequestWarehouseType;
        }

        export interface AnalyticsStockOnWarehouseResultRows {
            /**
             * Идентификатор товара в системе Ozon — SKU.
             * @format int64
             */
            sku?: number;
            /** Идентификатор товара в системе продавца. */
            item_code?: string;
            /** Название товара в системе Ozon. */
            item_name?: string;
            /**
             * Количество товара, доступное к продаже на Ozon.
             * @format int64
             */
            free_to_sell_amount?: number;
            /**
             * Количество товара, указанное в подтверждённых будущих поставках.
             * @format int64
             */
            promised_amount?: number;
            /**
             * Количество товара, зарезервированное для покупки, возврата и перевозки между складами.
             * @format int64
             */
            reserved_amount?: number;
            /** Название склада, где находится товар. */
            warehouse_name?: string;
        }

        /** Результат запроса. */
        export interface AnalyticsStockOnWarehouseResponseResult {
            /** Информация о товарах и остатках. */
            rows?: AnalyticsStockOnWarehouseResultRows[];
        }

        export interface AnalyticsStockOnWarehouseResponse {
            /** Результат запроса. */
            result?: AnalyticsStockOnWarehouseResponseResult;
        }

        export interface FinanceGetRealizationReportRequest {
            /** Отчётный период в формате `YYYY-MM`. */
            date?: string;
        }

        export interface FinanceRealizationReportHeader {
            /** Номер отчёта о реализации. */
            num?: string;
            /** Дата формирования отчёта. */
            doc_date?: string;
            /** Дата заключения договора оферты. */
            contract_date?: string;
            /** Номер договора оферты. */
            contract_num?: string;
            /** Валюта ваших цен. */
            currency_code?: string;
            /**
             * Сумма к начислению.
             * @format double
             */
            doc_amount?: number;
            /**
             * Сумма к начислению с НДС.
             * @format double
             */
            vat_amount?: number;
            /** ИНН плательщика. */
            payer_inn?: string;
            /** КПП плательщика. */
            payer_kpp?: string;
            /** Название плательщика. */
            payer_name?: string;
            /** ИНН получателя. */
            rcv_inn?: string;
            /** КПП получателя. */
            rcv_kpp?: string;
            /** Название получателя. */
            rcv_name?: string;
            /** Начало периода в отчёте. */
            start_date?: string;
            /** Конец периода в отчёте. */
            stop_date?: string;
        }

        export interface FinanceRealizationReportRows {
            /**
             * Номер строки в отчёте.
             * @format int32
             */
            row_number?: number;
            /**
             * Идентификатор товара.
             * @format int64
             */
            product_id?: number;
            /** Наименование товара. */
            product_name?: string;
            /** Штрихкод товара. */
            barcode?: string;
            /** Код товара продавца — артикул. */
            offer_id?: string;
            /**
             * Комиссия за продажу по категории.
             * @format double
             */
            commission_percent?: number;
            /**
             * Цена продавца с учётом его скидки.
             * @format double
             */
            price?: number;
            /**
             * Цена реализации — цена, по которой покупатель приобрёл товар.
             *
             * Для реализованных товаров.
             * @format double
             */
            price_sale?: number;
            /**
             * Реализовано на сумму.
             *
             * Стоимость реализованного товара с учётом количества и региональных коэффициентов. Расчёт осуществляется по цене `sale_amount`.
             * @format double
             */
            sale_amount?: number;
            /**
             * Комиссия за реализованный товар с учётом скидок и наценки.
             * @format double
             */
            sale_commission?: number;
            /**
             * Доплата за счёт Ozon.
             *
             * Сумма, которую Ozon компенсирует продавцу, если скидка Ozon больше или равна комиссии за продажу.
             * @format double
             */
            sale_discount?: number;
            /**
             * Итого к начислению за реализованный товар.
             *
             * Сумма после вычета комиссии за продажу, применения скидок и установленных наценок.
             * @format double
             */
            sale_price_seller?: number;
            /**
             * Количество товара, реализованного по цене `price_sale`.
             * @format int32
             */
            sale_qty?: number;
            /**
             * Цена реализации — цена, по которой покупатель приобрёл товар.
             *
             * Для возвращённых товаров.
             * @format double
             */
            return_sale?: number;
            /**
             * Возвращено на сумму.
             *
             * Стоимость возвращённого товара с учётом количества и региональных коэффициентов. Расчёт осуществляется по цене `return_sale`.
             * @format double
             */
            return_amount?: number;
            /**
             * Комиссия с учётом количества товара, предоставленных скидок и установленных наценок. Ozon компенсирует её в случае возврата товара.
             * @format double
             */
            return_commission?: number;
            /**
             * Доплата за счёт Ozon.
             *
             * Сумма скидки за счёт Ozon по возвращённому товару, которую Ozon компенсирует продавцу, если скидка Ozon больше или равна комиссии за продажу.
             * @format double
             */
            return_discount?: number;
            /**
             * Итого возвращено.
             *
             * Сумма, начисляемая продавцу за возвращённый товар после вычета комиссии за продажу, применения скидок и установленных наценок.
             * @format double
             */
            return_price_seller?: number;
            /**
             * Количество возвращённого товара.
             * @format int32
             */
            return_qty?: number;
        }

        export interface FinanceRealizationReportResult {
            /** Титульный лист отчёта. */
            header?: FinanceRealizationReportHeader[];
            /** Таблица отчёта. */
            rows?: FinanceRealizationReportRows[];
        }

        export interface FinanceGetRealizationReportResponse {
            /** Результат запроса. */
            result?: FinanceRealizationReportResult[];
        }

        /** Фильтр по дате. */
        export interface FilterPeriod {
            /**
             * Начало периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            from?: string;
            /**
             * Конец периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            to?: string;
        }

        /** Фильтр. */
        export interface FinanceTransactionListV3RequestFilter {
            /** Фильтр по дате. */
            date?: FilterPeriod;
            /**
             * Тип операции:
             *   - `ClientReturnAgentOperation` — получение возврата, отмены, невыкупа от покупателя;
             *   - `MarketplaceMarketingActionCostOperation` — услуги продвижения товаров;
             *   - `MarketplaceSaleReviewsOperation` — приобретение отзывов на платформе;
             *   - `MarketplaceSellerCompensationOperation` — прочие компенсации;
             *   - `OperationAgentDeliveredToCustomer` — доставка покупателю;
             *   - `OperationAgentDeliveredToCustomerCanceled` — доставка покупателю — исправленное начисление;
             *   - `OperationAgentStornoDeliveredToCustomer` — доставка покупателю — отмена начисления;
             *   - `OperationClaim` — начисление по претензии;
             *   - `OperationCorrectionSeller` — инвентаризация взаиморасчетов;
             *   - `OperationDefectiveWriteOff` — компенсация за повреждённый на складе товар;
             *   - `OperationItemReturn` — доставка и обработка возврата, отмены, невыкупа;
             *   - `OperationLackWriteOff` — компенсация за утерянный на складе товар;
             *   - `OperationMarketplaceCrossDockServiceWriteOff` — доставка товаров на склад Ozon (кросс-докинг);
             *   - `OperationMarketplaceServiceStorage` — услуга размещения товаров на складе;
             *   - `OperationSetOff` — взаимозачёт с другими договорами контрагента;
             *   - `MarketplaceSellerReexposureDeliveryReturnOperation` — перечисление за доставку от покупателя;
             *   - `OperationReturnGoodsFBSofRMS` — доставка и обработка возврата, отмены, невыкупа;
             *   - `ReturnAgentOperationRFBS` — возврат перечисления за доставку покупателю;
             *   - `MarketplaceSellerShippingCompensationReturnOperation` — компенсация перечисления за доставку;
             *   - `OperationMarketplaceServicePremiumCashback` — услуга продвижения Premium;
             *   - `MarketplaceServicePremiumPromotion` — услуга продвижения Premium, фиксированная комиссия;
             *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга;
             *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS;
             *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS;
             *   - `MarketplaceServiceItemDeliveryKGT` — доставка КГТ;
             *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика;
             *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика;
             *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца»;
             *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
             */
            operation_type?: string[];
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Тип начисления:
             *   - `all` — все,
             *   - `orders` — заказы,
             *   - `returns` — возвраты и отмены,
             *   - `services` — сервисные сборы,
             *   - `compensation` — компенсация,
             *   - `transferDelivery` — стоимость доставки,
             *   - `other` — прочее.
             *
             * Некоторые операции могут быть разделены во времени. Например, при приёме возврата от покупателя списывается стоимость товара и возвращается комиссия, а когда товар возвращается на склад, взимается стоимость услуга по обработке возврата.
             */
            transaction_type?: string;
        }

        export interface Financev3FinanceTransactionListV3Request {
            /** Фильтр. */
            filter?: FinanceTransactionListV3RequestFilter;
            /**
             * Номер страницы, возвращаемой в запросе.
             * @format int64
             */
            page?: number;
            /**
             * Количество элементов на странице.
             * @format int64
             */
            page_size?: number;
        }

        export interface OperationItem {
            /** Название товара. */
            name?: string;
            /**
             * Идентификатор товара в системе Ozon.
             * @format int64
             */
            sku?: number;
        }

        /** Информация об отправлении. */
        export interface OperationPosting {
            /**
             * Схема доставки:
             *   - `FBO` — доставка со склада Ozon,
             *   - `FBS` — доставка со своего склада,
             *   - `RFBS` — доставка по выбору продавца,
             *   - `Crossborder` — доставка из-за рубежа.
             */
            delivery_schema?: string;
            /** Дата принятия отправления в обработку. */
            order_date?: string;
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Идентификатор склада.
             * @format int64
             */
            warehouse_id?: number;
        }

        export interface OperationService {
            /**
             * Название услуги:
             *   - `MarketplaceNotDeliveredCostItem` — возврат невостребованного товара от покупателя на склад.
             *   - `MarketplaceReturnAfterDeliveryCostItem` — возврат от покупателя на склад после доставки.
             *   - `MarketplaceDeliveryCostItem` — доставка товара до покупателя.
             *   - `MarketplaceSaleReviewsItem` — приобретение отзывов на платформе.
             *   - `ItemAdvertisementForSupplierLogistic` — доставка товаров на склад Ozon — кросс-докинг.
             *   - `MarketplaceServiceStorageItem` — размещения товаров.
             *   - `MarketplaceMarketingActionCostItem` — продвижение товаров.
             *   - `MarketplaceServiceItemInstallment` — продвижениe и продажа в рассрочку.
             *   - `MarketplaceServiceItemMarkingItems` — обязательная маркировка товаров.
             *   - `MarketplaceServiceItemFlexiblePaymentSchedule` — гибкий график выплат.
             *   - `MarketplaceServiceItemReturnFromStock` — комплектация товаров для вывоза продавцом.
             *   - `ItemAdvertisementForSupplierLogisticSeller` — транспортно-экспедиционные услуги.
             *   - `MarketplaceServiceItemDelivToCustomer` — последняя миля.
             *   - `MarketplaceServiceItemDirectFlowTrans` — магистраль.
             *   - `MarketplaceServiceItemDropoffFF` — обработка отправления.
             *   - `MarketplaceServiceItemDropoffPVZ` — обработка отправления.
             *   - `MarketplaceServiceItemDropoffSC` — обработка отправления.
             *   - `MarketplaceServiceItemFulfillment` — сборка заказа.
             *   - `MarketplaceServiceItemPickup` — выезд транспортного средства по адресу продавца для забора отправлений — Pick-up.
             *   - `MarketplaceServiceItemReturnAfterDelivToCustomer` — обработка возврата.
             *   - `MarketplaceServiceItemReturnFlowTrans` — обратная магистраль.
             *   - `MarketplaceServiceItemReturnNotDelivToCustomer` — обработка отмен.
             *   - `MarketplaceServiceItemReturnPartGoodsCustomer` — обработка невыкупа.
             *   - `MarketplaceRedistributionOfAcquiringOperation` — оплата эквайринга.
             *   - `MarketplaceReturnStorageServiceAtThePickupPointFbsItem` — краткосрочное размещение возврата FBS.
             *   - `MarketplaceReturnStorageServiceInTheWarehouseFbsItem` — долгосрочное размещение возврата FBS.
             *   - `MarketplaceServiceItemDeliveryKGT` — доставка крупногабаритного товара (КГТ).
             *   - `MarketplaceServiceItemDirectFlowLogistic` — логистика.
             *   - `MarketplaceServiceItemReturnFlowLogistic` — обратная логистика.
             *   - `MarketplaceServicePremiumCashbackIndividualPoints` — услуга продвижения «Бонусы продавца».
             *   - `MarketplaceServicePremiumPromotion` — услуга продвижение Premium, фиксированная комиссия.
             *   - `OperationMarketplaceWithHoldingForUndeliverableGoods` — удержание за недовложение товара.
             */
            name?: string;
            /**
             * Цена.
             * @format double
             */
            price?: number;
        }

        export interface FinanceTransactionListV3ResponseOperation {
            /**
             * Стоимость товаров с учётом скидок продавца.
             * @format double
             */
            accruals_for_sale?: number;
            /**
             * Итоговая сумма операции.
             * @format double
             */
            amount?: number;
            /**
             * Стоимость доставки для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров.
             * @format double
             */
            delivery_charge?: number;
            /** Информация о товаре. */
            items?: OperationItem[];
            /** Дата операции. */
            operation_date?: string;
            /**
             * Идентификатор операции.
             * @format int64
             */
            operation_id?: number;
            /** Тип операции. */
            operation_type?: string;
            /** Название типа операции. */
            operation_type_name?: string;
            /** Информация об отправлении. */
            posting?: OperationPosting;
            /**
             * Плата за возвраты и отмены для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров.
             * @format double
             */
            return_delivery_charge?: number;
            /**
             * Комиссия за продажу или возврат комиссии за продажу.
             * @format double
             */
            sale_commission?: number;
            /** Дополнительные услуги. */
            services?: OperationService[];
            /**
             * Тип начисления:
             * - `all` — все,
             * - `orders` — заказы,
             * - `returns` — возвраты и отмены,
             * - `services` — сервисные сборы,
             * - `compensation` — компенсация,
             * - `transferDelivery` — стоимость доставки,
             * - `other` — прочее.
             */
            type?: string;
        }

        /** Результаты запроса. */
        export interface Financev3FinanceTransactionListV3ResponseResult {
            /** Информация об операциях. */
            operations?: FinanceTransactionListV3ResponseOperation[];
            /**
             * Количество страниц.
             * @format int64
             */
            page_count?: number;
            /**
             * Количество товаров.
             * @format int64
             */
            row_count?: number;
        }

        export interface Financev3FinanceTransactionListV3Response {
            /** Результаты запроса. */
            result?: Financev3FinanceTransactionListV3ResponseResult;
        }

        /** Фильтр по дате. */
        export interface FinanceTransactionTotalsV3RequestDate {
            /**
             * Начало периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            from?: string;
            /**
             * Конец периода.
             *
             * Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.<br>
             * Пример: `2019-11-25T10:43:06.51`.
             * @format date-time
             */
            to?: string;
        }

        export interface Financev3FinanceTransactionTotalsV3Request {
            /** Фильтр по дате. */
            date?: FinanceTransactionTotalsV3RequestDate;
            /** Номер отправления. */
            posting_number?: string;
            /**
             * Тип операции:
             *  - `all` — все,
             *  - `orders` — заказы,
             *  - `returns` — возвраты и отмены,
             *  - `services` — сервисные сборы,
             *  - `compensation` — компенсация,
             *  - `transferDelivery` — стоимость доставки,
             *  - `other` — прочее.
             */
            transaction_type?: string;
        }

        /** Результаты запроса. */
        export interface Financev3FinanceTransactionTotalsV3ResponseResult {
            /**
             * Общая стоимость товаров и возвратов в заданный период.
             * @format double
             */
            accruals_for_sale?: number;
            /**
             * Компенсации.
             * @format double
             */
            compensation_amount?: number;
            /**
             * Начисления за доставку и возвраты при работе по схеме «Доставка по выбору продавца».
             * @format double
             */
            money_transfer?: number;
            /**
             * Прочие начисления.
             * @format double
             */
            others_amount?: number;
            /**
             * Стоимость услуг обработки отправлений, сборки заказов, магистрали и последней мили, а также доставки до введения новых комиссий и тарифов с 1 февраля 2021 года.
             *
             * Магистраль — доставка товаров между кластерами.
             *
             * Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.
             * @format double
             */
            processing_and_delivery?: number;
            /**
             * Стоимость обратной магистрали, обработки возвратов, отмен и невыкупа товара, а также возвратов до введения новых комиссий и тарифов с 1 февраля 2021 года.
             *
             * Магистраль — доставка товаров между кластерами.
             *
             * Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.
             * @format double
             */
            refunds_and_cancellations?: number;
            /**
             * Сумма комиссии, которая была удержана при продаже товара и возвращена при его возврате.
             * @format double
             */
            sale_commission?: number;
            /**
             * Стоимость дополнительных услуг, не связанных напрямую с доставками и возвратами товаров. Например, продвижения или размещения товаров.
             * @format double
             */
            services_amount?: number;
        }

        export interface Financev3FinanceTransactionTotalsV3Response {
            /** Результаты запроса. */
            result?: Financev3FinanceTransactionTotalsV3ResponseResult;
        }

        /** Изменение рейтинга: отношение предыдущего значения к текущему. */
        export interface RatingItemChange {
            /**
             * Как изменилось значение рейтинга:
             * - `DIRECTION_UNKNOWN` — не определено.
             * - `DIRECTION_NONE` — не изменилось.
             * - `DIRECTION_RISE` — выросло.
             * - `DIRECTION_FALL` — упало.
             */
            direction?: string;
            /**
             * Что означает изменение:
             * - `MEANING_UNKNOWN` — неизвестно.
             * - `MEANING_NONE` — нейтрально.
             * - `MEANING_GOOD` — показатель улучшается, всё хорошо.
             * - `MEANING_BAD` — показатель падает, нужно что-то сделать.
             */
            meaning?: string;
        }

        export interface V1RatingItem {
            /** Изменение рейтинга: отношение предыдущего значения к текущему. */
            change?: RatingItemChange;
            /**
             * Текущее значение рейтинга.
             * @format double
             */
            current_value?: number;
            /** Название рейтинга. */
            name?: string;
            /**
             * Предыдущее значение рейтинга.
             * @format double
             */
            past_value?: number;
            /** Название рейтинга в системе. */
            rating?: string;
            /**
             * Каким должно быть значение рейтинга, чтобы оно считалось хорошим:
             * - `UNKNOWN_DIRECTION` — не определено.
             * - `NEUTRAL` — неважно.
             * - `HIGHER_IS_BETTER` — чем выше, тем лучше.
             * - `LOWER_IS_BETTER` — чем ниже, тем лучше.
             */
            rating_direction?: string;
            /**
             * Статус рейтинга:
             * - `UNKNOWN_STATUS` — не определён.
             * - `OK` — все хорошо.
             * - `WARNING` — показатели требуют внимания.
             * - `CRITICAL` — критичный рейтинг.
             */
            status?: string;
            /**
             * Тип значения:
             * - `UNKNOWN_VALUE` — не определён.
             * - `INDEX` — индекс.
             * - `PERCENT` — процент.
             * - `TIME` — время.
             * - `RATIO` — коэффициент.
             * - `REVIEW_SCORE` — оценка.
             * - `COUNT` — счёт.
             */
            value_type?: string;
        }

        export interface RatingSummaryV1ResponseGroup {
            /** Название группы рейтингов. */
            group_name?: string;
            /** Список рейтингов. */
            items?: V1RatingItem[];
        }

        export interface V1RatingSummaryV1Response {
            /** Список с группами рейтингов. */
            groups?: RatingSummaryV1ResponseGroup[];
            /** Признак, что баланс штрафных баллов превышен. */
            penalty_score_exceeded?: boolean;
            /** Признак участия в Premium-программе. */
            premium?: boolean;
        }

        export interface V1RatingHistoryV1Request {
            /**
             * Начало периода.
             * @format date-time
             */
            date_from?: string;
            /**
             * Конец периода.
             * @format date-time
             */
            date_to?: string;
            /**
             * Фильтр по рейтингу.
             *
             * Рейтинги, по которым нужно получить значение за период:
             *
             * - `rating_on_time` — процент заказов, выполненных вовремя за последние 30 дней.
             * - `rating_review_avg_score_total` — средняя оценка всех товаров.
             * - `rating_price` — индекс цен: отношение стоимости ваших товаров к самой низкой цене на такой же товар на других площадках.
             * - `rating_order_cancellation` — процент отмен FBS-отправлений по вашей вине за последние 7 дней. Текущий и предыдущий день не учитываются.
             * - `rating_shipment_delay` — процент FBS-отправлений, которые за последние 7 дней не были переданы в доставку по вашей вине. Текущий и предыдущий день не учитываются.
             * - `rating_ssl` — оценка работы по FBO. Учитывает `rating_on_time_supply_delivery`, `rating_on_time_supply_cancellation` и `rating_order_accuracy`.
             * - `rating_on_time_supply_delivery` — процент поставок, которые вы привезли на склад в выбранный временной интервал за последние 60 дней.
             * - `rating_order_accuracy` — процент поставок без излишков, недостач, пересорта и брака за последние 60 дней.
             * - `rating_on_time_supply_cancellation` — процент заявок на поставку, которые завершились или были отменены без опоздания за последние 60 дней.
             * - `rating_reaction_time` — время, в течение которого покупатели в среднем ждали ответа на своё первое сообщение в чате за последние 30 дней.
             * - `rating_average_response_time` — время, в течение которого покупатели в среднем ждали вашего ответа за последние 30 дней.
             * - `rating_replied_dialogs_ratio` — доля диалогов хотя бы с одним вашим ответом в течение 24 часов за последние 30 дней.
             *
             * Если вы хотите получить информацию по начисленным штрафным баллам для рейтингов `rating_on_time` и `rating_review_avg_score_total`,
             * передайте значения нужных рейтингов в этом параметре и `with_premium_scores=true`.
             */
            ratings: string[];
            /** Признак, что в ответе нужно вернуть информацию о штрафных баллах в Premium-программе. */
            with_premium_scores?: boolean;
        }

        export interface PremiumScoresScore {
            /**
             * Дата, когда были начислены штрафные баллы.
             * @format date-time
             */
            date?: string;
            /**
             * Значение рейтинга, за которое были начислены штрафные баллы.
             * @format double
             */
            rating_value?: number;
            /**
             * Количество начисленных штрафных баллов.
             * @format int32
             */
            value?: number;
        }

        export interface V1PremiumScores {
            /** Название рейтинга. */
            rating?: string;
            /** Информация о штрафных баллах. */
            scores?: PremiumScoresScore[];
        }

        /** Статус рейтинга. */
        export interface V1RatingStatus {
            /** Признак, превышено ли пороговое значение рейтинга для блокировки. */
            danger?: boolean;
            /** Признак, достигнуто ли пороговое значение для участия в Premium-программе. */
            premium?: boolean;
            /** Признак наличия предупреждения о возможном превышении порогового значения для блокировки. */
            warning?: boolean;
        }

        export interface RatingValue {
            /**
             * Дата начала подсчёта рейтинга.
             * @format date-time
             */
            date_from?: string;
            /**
             * Дата конца подсчёта рейтинга.
             * @format date-time
             */
            date_to?: string;
            /** Статус рейтинга. */
            status?: V1RatingStatus;
            /**
             * Значение рейтинга.
             * @format double
             */
            value?: number;
        }

        export interface V1Rating {
            /**
             * Пороговое значение рейтинга, после которого продажи будут заблокированы.
             * @format double
             */
            danger_threshold?: number;
            /**
             * Пороговое значение рейтинга для участия в Premium-программе.
             * @format double
             */
            premium_threshold?: number;
            /** Системное название рейтинга. */
            rating?: string;
            /** Список значений рейтинга. */
            values?: RatingValue[];
            /**
             * Пороговое значение рейтинга, после которого появится предупреждение о возможной блокировке.
             * @format double
             */
            warning_threshold?: number;
        }

        export interface V1RatingHistoryV1Response {
            /** Информация о штрафных баллах в Premium-программе. */
            premium_scores?: V1PremiumScores[];
            /** Информация о рейтингах продавца. */
            ratings?: V1Rating[];
        }

        export type CategoryApiGetCategoryTreeData = CategoryGetCategoryTreeResponse;

        export type CategoryApiGetCategoryTreeError = RpcStatus;

        export type CategoryApiGetCategoryAttributesV3Data = Categoryv3CategoryAttributesResponse;

        export type CategoryApiGetCategoryAttributesV3Error = RpcStatus;

        export type CategoryApiDictionaryValueBatchData = Categoryv2DictionaryValueBatchResponse;

        export type CategoryApiDictionaryValueBatchError = RpcStatus;

        export type ProductApiImportProductsV2Data = Productv2ImportProductsResponse;

        export type ProductApiImportProductsV2Error = RpcStatus;

        export type ProductApiGetImportProductsInfoData = ProductGetImportProductsInfoResponse;

        export type ProductApiGetImportProductsInfoError = RpcStatus;

        export type ProductApiImportProductsBySkuData = ProductImportProductsBySKUResponse;

        export type ProductApiImportProductsBySkuError = RpcStatus;

        export type ProductApiProductImportPicturesData = Productv1ProductInfoPicturesResponse;

        export type ProductApiProductImportPicturesError = RpcStatus;

        export type ProductApiProductInfoPicturesData = Productv1ProductInfoPicturesResponse;

        export type ProductApiProductInfoPicturesError = RpcStatus;

        export type ProductApiGetProductListData = Productv3GetProductListResponse;

        export type ProductApiGetProductListError = RpcStatus;

        export type ProductApiGetProductInfoV3Data = Productv2GetProductInfoResponse;

        export type ProductApiGetProductInfoV2Error = RpcStatus;

        export type ProductApiGetProductRatingBySkuData = V1GetProductRatingBySkuResponse;

        export type ProductApiGetProductRatingBySkuError = RpcStatus;

        export type ProductApiGetProductInfoListV2Data = Productv2GetProductInfoListResponse;

        export type Productv3GetProductInfoListRequest = Productv2GetProductInfoListRequest;

        export type ProductApiGetProductInfoListV3Data = Productv3GetProductInfoListResponse;

        export type ProductApiGetProductInfoListV2Error = RpcStatus;

        export type ProductApiGetProductAttributesV3Data = Productv3GetProductAttributesV3Response;

        export type ProductApiGetProductAttributesV3Error = RpcStatus;

        export type ProductApiGetProductInfoDescriptionData = ProductGetProductInfoDescriptionResponse;

        export type ProductApiGetProductInfoDescriptionError = RpcStatus;

        export type ProductApiGetProductInfoLimitV2Data = Productv2GetProductInfoLimitV2Response;

        export type ProductApiGetProductInfoLimitV2Error = RpcStatus;

        export type ProductApiGetProductInfoLimitData = V3GetProductInfoLimitResponse;

        export type ProductApiGetProductInfoLimitError = RpcStatus;

        export type ProductApiGetUploadQuotaData = V4GetUploadQuotaResponse;

        export type ProductApiGetUploadQuotaError = RpcStatus;

        export type ProductApiProductUpdateOfferIdData = V1ProductUpdateOfferIdResponse;

        export type ProductApiProductUpdateOfferIdError = RpcStatus;

        export type ProductApiProductArchiveData = ProductBooleanResponse;

        export type ProductApiProductArchiveError = RpcStatus;

        export type ProductApiProductUnarchiveData = ProductBooleanResponse;

        export type ProductApiProductUnarchiveError = RpcStatus;

        export type ProductApiDeleteProductsData = Productv2DeleteProductsResponse;

        export type ProductApiDeleteProductsError = RpcStatus;

        export type ProductApiGetGeoRestrictionsV1Data = Productv2GetGeoRestrictionsByFilterResponse;

        export type ProductApiGetGeoRestrictionsV1Error = RpcStatus;

        export type ProductApiUploadDigitalCodeData = V1ProductUploadDigitalCodesResponse;

        export type ProductApiUploadDigitalCodeError = RpcStatus;

        export type ProductApiUploadDigitalCodeInfoData = V1ProductUploadDigitalCodesResponseInfo;

        export type ProductApiUploadDigitalCodeInfoError = RpcStatus;

        export type ProductApiGetProductInfoSubscriptionData = V1GetProductInfoSubscriptionResponse;

        export type ProductApiGetProductInfoSubscriptionError = RpcStatus;

        export type ProductApiImportProductsStocksData = ProductImportProductsStocksResponse;

        export type ProductApiImportProductsStocksError = RpcStatus;

        export type ProductApiProductsStocksV2Data = Productv2ProductsStocksResponse;

        export type ProductApiProductsStocksV2Error = RpcStatus;

        export type ProductApiGetProductInfoStocksV3Data = Productv3GetProductInfoStocksV3Response;

        export type ProductApiGetProductInfoStocksV3Error = RpcStatus;

        export type ProductApiProductStocksByWarehouseFbsData = Productsv1GetProductInfoStocksByWarehouseFbsResponse;

        export type ProductApiProductStocksByWarehouseFbsError = RpcStatus;

        export type ProductApiImportProductsPricesData = ProductImportProductsPricesResponse;

        export type ProductApiImportProductsPricesError = RpcStatus;

        export type ProductApiGetProductInfoPricesV4Data = Productv4GetProductInfoPricesV4Response;

        export type ProductApiGetProductInfoPricesV4Error = RpcStatus;

        export type ProductApiGetProductInfoDiscountedData = V1GetProductInfoDiscountedResponse;

        export type ProductApiGetProductInfoDiscountedError = RpcStatus;

        export type ProductApiProductUpdateDiscountData = V1ProductUpdateDiscountResponse;

        export type ProductApiProductUpdateDiscountError = RpcStatus;

        export type PromosData = SellerApiGetSellerActionsV1Response;

        export type PromosError = RpcStatus;

        export type PromosCandidatesData = SellerApiGetSellerProductV1Response;

        export type PromosCandidatesError = RpcStatus;

        export type PromosProductsData = SellerApiGetSellerProductV1Response;

        export type PromosProductsError = RpcStatus;

        export type PromosProductsActivateData = SellerApiProductV1Response;

        export type PromosProductsActivateError = RpcStatus;

        export type PromosProductsDeactivateData = SellerApiProductV1ResponseDeactivate;

        export type PromosProductsDeactivateError = RpcStatus;

        export type ActionsApiGetHotSalesListData = V1GetHotSalesListResponse;

        export type ActionsApiGetHotSalesListError = RpcStatus;

        export type ActionsApiGetHotSalesProductsData = V1GetHotSalesProductsResponse;

        export type ActionsApiGetHotSalesProductsError = RpcStatus;

        export type ActionsApiActivateHotSalesProductsData = V1SetActivateHotSaleProductsResult;

        export type ActionsApiActivateHotSalesProductsError = RpcStatus;

        export type ActionsApiDeactivateHotSalesProductsData = V1SetDeactivateHotSaleProductsResult;

        export type ActionsApiDeactivateHotSalesProductsError = RpcStatus;

        export type PromosTaskListData = V1GetDiscountTaskListResponse;

        export type PromosTaskListError = RpcStatus;

        export type PromosTaskApproveData = V1ApproveDeclineDiscountTasksResponse;

        export type PromosTaskApproveError = RpcStatus;

        export type PromosTaskDeclineData = V1ApproveDeclineDiscountTasksResponse;

        export type PromosTaskDeclineError = RpcStatus;

        export type PricingCompetitorsData = V1GetCompetitorsResponse;

        export type PricingCompetitorsError = RpcStatus;

        export type PricingListData = V1GetStrategyListResponse;

        export type PricingListError = RpcStatus;

        export type PricingCreateData = V1CreatePricingStrategyResponse;

        export type PricingCreateError = RpcStatus;

        export type PricingInfoData = V1GetStrategyResponse;

        export type PricingInfoError = RpcStatus;

        export type PricingUpdateData = V1Empty;

        export type PricingUpdateError = RpcStatus;

        export type PricingItemsAddData = V1AddStrategyItemsResponse;

        export type PricingItemsAddError = RpcStatus;

        export type PricingIdsData = V1GetStrategyIDsByItemIDsResponse;

        export type PricingIdsError = RpcStatus;

        export type PricingItemsListData = V1GetStrategyItemsResponse;

        export type PricingItemsListError = RpcStatus;

        export type PricingItemsInfoData = V1GetStrategyItemInfoResponse;

        export type PricingItemsInfoError = RpcStatus;

        export type PricingItemsDeleteData = V1DeleteStrategyItemsResponse;

        export type PricingItemsDeleteError = RpcStatus;

        export type PricingStatusData = V1Empty;

        export type PricingStatusError = RpcStatus;

        export type PricingDeleteData = V1Empty;

        export type PricingDeleteError = RpcStatus;

        export type BrandApiBrandCompanyCertificationListData = BrandBrandCompanyCertificationListResponse;

        export type BrandApiBrandCompanyCertificationListError = RpcStatus;

        export type ProductApiProductCertificateAccordanceTypesData = ProductProductCertificateAccordanceTypesResponse;

        export type ProductApiProductCertificateAccordanceTypesError = RpcStatus;

        export type CertificateAccordanceTypesData = V2ProductCertificateAccordanceTypesResponse;

        export type CertificateAccordanceTypesError = GooglerpcStatus;

        export type ProductApiProductCertificateTypesData = ProductProductCertificateTypesResponse;

        export type ProductApiProductCertificateTypesError = RpcStatus;

        export type ProductApiProductCertificationListData = ProductProductCertificationListResponse;

        export type ProductApiProductCertificationListError = RpcStatus;

        export interface ProductApiProductCertificateCreatePayload {
            /** Массив сертификатов для товара. Допустимые расширения jpg, jpeg, png, pdf. */
            files: any[];
            /** Название сертификата. Максимум 100 символов. */
            name: string;
            /** Номер сертификата. Максимум 100 символов. */
            number: string;
            /** Тип сертификата. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/types](#operation/ProductAPI_ProductCertificateTypes). */
            type_code:
            | 'certificate_of_conformity'
            | 'declaration'
            | 'certificate_of_registration'
            | 'registration_certificate'
            | 'refused_letter';
            /** Тип соответствия требованиям. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/accordance-types](#operation/ProductAPI_ProductCertificateAccordanceTypes). */
            accordance_type_code?: 'technical_regulations_rf' | 'technical_regulations_cu' | 'gost';
            /**
             * Дата начала действия сертификата.
             * @format date-time
             * @default "2021-04-30T11:31:26Z"
             */
            issue_date: string;
            /**
             * Дата окончания действия сертификата. Может быть пустым для бессрочных сертификатов.
             *
             * Формат: `2021-04-30T11:31:26Z`.
             * @format date-time
             */
            expire_date?: string;
        }

        /** @example {"id":50058} */
        export type ProductApiProductCertificateCreateData = number;

        export type ProductApiProductCertificateCreateError = RpcStatus;

        export type ProductApiProductCertificateBindData = ProductBooleanResponse;

        export type ProductApiProductCertificateBindError = RpcStatus;

        export type CertificateDeleteData = V1ProductCertificateDeleteResponse;

        export type CertificateDeleteError = RpcStatus;

        export type CertificateInfoData = V1ProductCertificateInfoResponse;

        export type CertificateInfoError = RpcStatus;

        export type CertificateListData = V1ProductCertificateListResponse;

        export type CertificateListError = RpcStatus;

        export type ProductStatusListData = V1ProductCertificateProductStatusListResponse;

        export type ProductStatusListError = RpcStatus;

        export type CertificateProductsListData = V1ProductCertificateProductsListResponse;

        export type CertificateProductsListError = RpcStatus;

        export type CertificateUnbindData = V1ProductCertificateUnbindResponse;

        export type CertificateUnbindError = RpcStatus;

        export type RejectionReasonsListData = V1ProductCertificateRejectionReasonsListResponse;

        export type RejectionReasonsListError = RpcStatus;

        export type CertificateStatusListData = V1ProductCertificateStatusListResponse;

        export type CertificateStatusListError = RpcStatus;

        export type WarehouseApiWarehouseListData = WarehouseWarehouseListResponse;

        export type WarehouseApiWarehouseListError = RpcStatus;

        export type WarehouseApiDeliveryMethodListData = WarehouseDeliveryMethodListResponse;

        export type WarehouseApiDeliveryMethodListError = RpcStatus;

        export type PolygonApiCreatePolygonData = Polygonv1PolygonCreateResponse;

        export type PolygonApiCreatePolygonError = RpcStatusV1PolygonCreate | RpcStatus;

        export type PolygonApiBindPolygonData = Polygonv1Empty;

        export type PolygonApiBindPolygonError = RpcStatusV1PolygonBind | RpcStatus;

        export type PolygonApiDeletePolygonData = Polygonv1Empty;

        export type PolygonApiDeletePolygonError = RpcStatus;

        export type PostingApiGetFboPostingListData = V2FboPostingListResponse;

        export type PostingApiGetFboPostingListError = RpcStatus;

        export type PostingApiGetFboPostingData = V2FboPostingResponse;

        export type PostingApiGetFboPostingError = RpcStatus;

        export type SupplyOrderApiGetSupplyOrdersListData = V1GetSupplyOrdersListResponse;

        export type SupplyOrderApiGetSupplyOrdersListError = RpcStatus;

        export type SupplyOrderApiGetSupplyOrderData = V1GetSupplyOrderResponse;

        export type SupplyOrderApiGetSupplyOrderError = RpcStatus;

        export type SupplyOrderApiGetSupplyOrderItemsData = V1GetSupplyOrderItemsResponse;

        export type SupplyOrderApiGetSupplyOrderItemsError = RpcStatus;

        export type PostingApiFbsPostingProductExemplarValidateData =
            Postingv4FbsPostingProductExemplarValidateResponse;

        export type PostingApiFbsPostingProductExemplarValidateError = RpcStatus;

        export type PostingApiSetProductExemplarData = Fbsv4SetProductExemplarResponse;

        export type PostingApiSetProductExemplarError = RpcStatus;

        export type PostingApiGetProductExemplarStatusData = Fbsv4GetProductExemplarStatusResponse;

        export type PostingApiGetProductExemplarStatusError = RpcStatus;

        export type PostingApiShipFbsPostingV4Data = Fbsv4FbsPostingShipV4Response;

        export type PostingApiShipFbsPostingV4Error = RpcStatus;

        export type PostingApiGetFbsPostingUnfulfilledListData = Postingv3GetFbsPostingUnfulfilledListResponse;

        export type PostingApiGetFbsPostingUnfulfilledListError = RpcStatus;

        export type PostingApiGetFbsPostingListV3Data = V3GetFbsPostingListResponseV3;

        export type PostingApiGetFbsPostingListV3Error = RpcStatus;

        export type PostingApiGetFbsPostingV3Data = V3GetFbsPostingResponseV3;

        export type PostingApiGetFbsPostingV3Error = RpcStatus;

        export type PostingApiGetFbsPostingByBarcodeData = V2FbsPostingResponse;

        export type PostingApiGetFbsPostingByBarcodeError = RpcStatus;

        export type PostingApiListCountryProductFbsPostingV2Data = V2FbsPostingProductCountryListResponse;

        export type PostingApiListCountryProductFbsPostingV2Error = GooglerpcStatus;

        export type PostingApiSetCountryProductFbsPostingV2Data = V2FbsPostingProductCountrySetResponse;

        export type PostingApiSetCountryProductFbsPostingV2Error = GooglerpcStatus;

        export type PostingApiPostingMultiBoxQtySetV3Data = Postingv3PostingMultiBoxQtySetV3Response;

        export type PostingApiPostingMultiBoxQtySetV3Error = RpcStatus;

        export type PostingApiGetRestrictionsData = V1GetRestrictionsResponse;

        export type PostingApiGetRestrictionsError = RpcStatus;

        export type PostingApiShipFbsPostingV3Data = V3FbsPostingShipResponse;

        export type PostingApiShipFbsPostingV3Error = RpcStatus;

        export type PostingApiPackageShipFbsPostingV3Data = V3FbsPostingShipResponse;

        export type PostingApiPackageShipFbsPostingV3Error = RpcStatus;

        export type PostingApiPostingFbsActCreateData = PostingPostingFBSActCreateResponse;

        export type PostingApiPostingFbsActCreateError = RpcStatus;

        export type PostingApiPostingFbsActCheckStatusData = PostingPostingFBSActCheckStatusResponse;

        export type PostingApiPostingFbsActCheckStatusError = RpcStatus;

        export type PostingApiGetCarriageAvailableListData = Postingv1GetCarriageAvailableListResponse;

        export type PostingApiGetCarriageAvailableListError = RpcStatus;

        export type PostingApiPostingFbsGetActData = PostingPostingFBSGetActResponse;

        export type PostingApiPostingFbsGetActError = RpcStatus;

        export type PostingApiPostingFbsDigitalActCheckStatusData = V2PostingFBSDigitalActCheckStatusResponse;

        export type PostingApiPostingFbsDigitalActCheckStatusError = RpcStatus;

        export type PostingApiPostingFbsGetDigitalActData = V2PostingFBSGetDigitalActResponse;

        export type PostingApiPostingFbsGetDigitalActError = RpcStatus;

        export type PostingApiPostingFbsPackageLabelData = PostingPostingFBSPackageLabelResponse;

        export type PostingApiPostingFbsPackageLabelError = RpcStatus;

        export type PostingApiCreateLabelBatchData = V1CreateLabelBatchResponse;

        export type PostingApiCreateLabelBatchError = RpcStatus;

        export type PostingApiGetLabelBatchData = V1GetLabelBatchResponse;

        export type PostingApiGetLabelBatchError = RpcStatus;

        export type PostingApiPostingFbsActGetContainerLabelsData = PostingPostingFBSActGetContainerLabelsResponse;

        export type PostingApiPostingFbsActGetContainerLabelsError = RpcStatus;

        export type PostingApiMoveFbsPostingToArbitrationData = PostingBooleanResponse;

        export type PostingApiMoveFbsPostingToArbitrationError = RpcStatus;

        export type PostingApiMoveFbsPostingToAwaitingDeliveryData = PostingBooleanResponse;

        export type PostingApiMoveFbsPostingToAwaitingDeliveryError = RpcStatus;

        export type PostingApiGetPostingFbsCancelReasonV1Data = PostingCancelReasonResponse;

        export type PostingApiGetPostingFbsCancelReasonV1Error = RpcStatus;

        export type PostingApiGetPostingFbsCancelReasonListData = PostingCancelReasonListResponse;

        export type PostingApiGetPostingFbsCancelReasonListError = RpcStatus;

        export type PostingApiCancelFbsPostingData = PostingBooleanResponse;

        export type PostingApiCancelFbsPostingError = RpcStatus;

        export type PostingApiChangeFbsPostingProductData = PostingPostingProductChangeResponse;

        export type PostingApiChangeFbsPostingProductError = RpcStatus;

        export type PostingApiCancelFbsPostingProductData = PostingPostingProductCancelResponse;

        export type PostingApiCancelFbsPostingProductError = RpcStatus;

        export type PostingApiFbsActListData = V2PostingFBSActListResponse;

        export type PostingApiFbsActListError = RpcStatus;

        export type PostingApiDigitalActDocumentSignData = V2PostingFBSDigitalActDocumentSignResponse;

        export type PostingApiDigitalActDocumentSignError = RpcStatus;

        export type PostingApiActPostingListData = V2PostingFBSActGetPostingsResponse;

        export type PostingApiActPostingListError = RpcStatus;

        export type PostingApiFbsPostingDeliveringData = PostingFbsPostingMoveStatusResponse;

        export type PostingApiFbsPostingDeliveringError = RpcStatus;

        export type PostingApiFbsPostingTrackingNumberSetData = PostingFbsPostingMoveStatusResponse;

        export type PostingApiFbsPostingTrackingNumberSetError = RpcStatus;

        export type PostingApiFbsPostingLastMileData = PostingFbsPostingMoveStatusResponse;

        export type PostingApiFbsPostingLastMileError = RpcStatus;

        export type PostingApiFbsPostingDeliveredData = PostingFbsPostingMoveStatusResponse;

        export type PostingApiFbsPostingDeliveredError = RpcStatus;

        export type PostingApiFbsPostingSentbysellerData = PostingFbsPostingSentbysellerResponse;

        export type PostingApiFbsPostingSentbysellerError = RpcStatus;

        export type PostingApiPostingTimeslotChangeRestrictionsData = V1PostingFbsTimeslotChangeRestrictionsResponse;

        export type PostingApiPostingTimeslotChangeRestrictionsError = RpcStatus;

        export type PostingApiSetPostingTimeslotData = V1PostingFbsTimeslotSetResponse;

        export type PostingApiSetPostingTimeslotError = RpcStatus;

        export type PostingApiGetEtgbData = V1GetEtgbResponse;

        export type PostingApiGetEtgbError = RpcStatus;

        export type ReturnsApiGetReturnsCompanyFboV2Data = ReturnsGetReturnsCompanyFboResponse;

        export type ReturnsApiGetReturnsCompanyFboV2Error = RpcStatus;

        export type ReturnsApiGetReturnsCompanyFboData = V3GetReturnsCompanyFboV3Response;

        export type ReturnsApiGetReturnsCompanyFboError = RpcStatus;

        export type ReturnsApiGetReturnsCompanyFbsData = ReturnsGetReturnsCompanyFBSResponse;

        export type ReturnsApiGetReturnsCompanyFbsError = RpcStatus;

        export type ReturnsApiGetReturnsCompanyFbSv3Data = V3GetReturnsCompanyFbsV3Response;

        export type ReturnsApiGetReturnsCompanyFbSv3Error = RpcStatus;

        export type CancellationApiGetConditionalCancellationData = V1GetConditionalCancellationResponse;

        export type CancellationApiGetConditionalCancellationError = RpcStatus;

        export type CancellationApiGetConditionalCancellationListData = V1GetConditionalCancellationListResponse;

        export type CancellationApiGetConditionalCancellationListError = RpcStatus;

        export type CancellationApiConditionalCancellationApproveData = V1Empty;

        export type CancellationApiConditionalCancellationApproveError = RpcStatus;

        export type CancellationApiConditionalCancellationRejectData = V1Empty;

        export type CancellationApiConditionalCancellationRejectError = RpcStatus;

        export type ChatApiChatListData = ChatChatListResponse;

        export type ChatApiChatListError = RpcStatus;

        export type ChatApiChatSendMessageData = ChatChatSendMessageResponse;

        export type ChatApiChatSendMessageError = RpcStatus;

        export type ChatApiChatSendFileData = ChatChatSendFileResponse;

        export type ChatApiChatSendFileError = RpcStatus;

        export type ChatApiChatHistoryData = ChatChatHistoryResponse;

        export type ChatApiChatHistoryError = RpcStatus;

        export type ChatApiChatUpdatesData = ChatChatUpdatesResponse;

        export type ChatApiChatUpdatesError = RpcStatus;

        export type ChatApiChatStartData = ChatChatStartResponse;

        export type ChatApiChatStartError = RpcStatus;

        export type ChatApiChatListV2Data = V2ChatListResponse;

        export type ChatApiChatListV2Error = RpcStatus;

        export type ChatApiChatHistoryV2Data = V2ChatHistoryResponse;

        export type ChatApiChatHistoryV2Error = RpcStatus;

        export type ChatApiChatReadV2Data = V2ChatReadResponse;

        export type ChatApiChatReadV2Error = RpcStatus;

        export type InvoiceCreateData = V1InvoiceCreateOrUpdateResponse;

        export type InvoiceCreateError = RpcStatus;

        export type InvoiceGetData = V1InvoiceGetResponse;

        export type InvoiceGetError = RpcStatus;

        export type InvoiceDeleteData = V1InvoiceDeleteResponse;

        export type InvoiceDeleteError = RpcStatus;

        export type ReportApiReportInfoData = ReportReportInfoResponse;

        export type ReportApiReportInfoError = RpcStatus;

        export type ReportApiReportListData = ReportReportListResponse;

        export type ReportApiReportListError = RpcStatus;

        export type ReportApiCreateCompanyProductsReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyProductsReportError = RpcStatus;

        export type ReportApiCreateCompanyTransactionsReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyTransactionsReportError = RpcStatus;

        export type ReportApiCreateCompanyProductsPricesReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyProductsPricesReportError = RpcStatus;

        export type ReportApiCreateCompanyStockReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyStockReportError = RpcStatus;

        export type ReportApiCreateProductsMovementReportData = ReportCreateReportResponse;

        export type ReportApiCreateProductsMovementReportError = RpcStatus;

        export type ReportApiCreateCompanyReturnsReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyReturnsReportError = RpcStatus;

        export type ReportApiCreateCompanyPostingsReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyPostingsReportError = RpcStatus;

        export type ReportApiCreateCompanyFinanceReportData = ReportCreateReportResponse;

        export type ReportApiCreateCompanyFinanceReportError = RpcStatus;

        export type FinanceApiFinanceCashFlowStatementListData = V3FinanceCashFlowStatementListResponse;

        export type FinanceApiFinanceCashFlowStatementListError = RpcStatus;

        export type ReportApiCreateDiscountedReportData = ReportCreateDiscountedResponse;

        export type ReportApiCreateDiscountedReportError = RpcStatus;

        export type ReportApiDiscountedReportInfoData = ReportDiscountedInfoResponse;

        export type ReportApiDiscountedReportInfoError = RpcStatus;

        export type ReportApiDiscountedReportListData = ReportDiscountedListResponse;

        export type ReportApiDiscountedReportListError = RpcStatus;

        export type AnalyticsApiAnalyticsGetDataData = AnalyticsAnalyticsGetDataResponse;

        export type AnalyticsApiAnalyticsGetDataError = RpcStatus;

        export type AnalyticsApiAnalyticsGetStockOnWarehousesData = AnalyticsAnalyticsGetStockOnWarehousesResponse;

        export type AnalyticsApiAnalyticsGetStockOnWarehousesError = RpcStatus;

        export type AnalyticsApiAnalyticsItemTurnoverDataV3Data = V1AnalyticsItemTurnoverDataV3Response;

        export type AnalyticsApiAnalyticsItemTurnoverDataV3Error = RpcStatus;

        export type AnalyticsApiAnalyticsGetStockOnWarehousesV2Data = AnalyticsStockOnWarehouseResponse;

        export type AnalyticsApiAnalyticsGetStockOnWarehousesV2Error = RpcStatus;

        export type FinanceApiGetRealizationReportData = FinanceGetRealizationReportResponse;

        export type FinanceApiGetRealizationReportError = RpcStatus;

        export type FinanceApiFinanceTransactionListV3Data = Financev3FinanceTransactionListV3Response;

        export type FinanceApiFinanceTransactionListV3Error = RpcStatus;

        export type FinanceApiFinanceTransactionTotalV3Data = Financev3FinanceTransactionTotalsV3Response;

        export type FinanceApiFinanceTransactionTotalV3Error = RpcStatus;

        export type RatingApiRatingSummaryV1Data = V1RatingSummaryV1Response;

        export type RatingApiRatingSummaryV1Error = RpcStatus;

        export type RatingApiRatingHistoryV1Data = V1RatingHistoryV1Response;

        export type RatingApiRatingHistoryV1Error = RpcStatus;
    }
}
