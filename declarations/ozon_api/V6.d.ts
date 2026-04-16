import { V6FbsPostingProductExemplarCreateOrGetV6Request, V6FbsPostingProductExemplarSetV6Request } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class V6<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * @description Асинхронный метод: - для проверки наличия экземпляров в обороте в системе «Честный ЗНАК»; - для сохранения данных экземпляров. Чтобы получить результаты проверок, используйте метод [/v5/fbs/posting/product/exemplar/status](#operation/PostingAPI_FbsPostingProductExemplarStatusV5). Для получения данных о созданных экземплярах, используйте метод [/v6/fbs/posting/product/exemplar/create-or-get](#operation/PostingAPI_FbsPostingProductExemplarCreateOrGetV6). Если у вас несколько одинаковых товаров в отправлении, укажите один `product_id` и массив `exemplars` для каждого товара из отправления. Всегда передавайте полный набор данных по экземплярам и продуктам. Например, в вашей системе 10 экземпляров. Вы передали их для проверки и сохранения. Потом добавили в своей системе ещё 60 экземпляров. При повторной передаче экземпляров для проверки и сохранения укажите все экземпляры: и старые, и только что добавленные. Код ответа 200 не гарантирует, что данные об экземплярах приняты. Он указывает, что создана задача для добавления информации. Чтобы проверить статус задачи, используйте метод [/v5/fbs/posting/product/exemplar/status](#operation/PostingAPI_FbsPostingProductExemplarStatusV5).
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiFbsPostingProductExemplarSetV6
     * @summary Проверить и сохранить данные экземпляров
     * @request POST:/v6/fbs/posting/product/exemplar/set
     * @response `200` `PostingApiFbsPostingProductExemplarSetV6Data` Запрос обработан
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiFbsPostingProductExemplarSetV6: (data: V6FbsPostingProductExemplarSetV6Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, import("./data-contracts").RpcStatus>>;
    /**
     * @description Метод для получения информации по экземплярам товаров из отправления, переданных в методе [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6). Используйте метод для получения `exemplar_id`.
     *
     * @tags FBS&rFBSMarks
     * @name PostingApiFbsPostingProductExemplarCreateOrGetV6
     * @summary Получить данные созданных экземпляров
     * @request POST:/v6/fbs/posting/product/exemplar/create-or-get
     * @response `200` `PostingApiFbsPostingProductExemplarCreateOrGetV6Data` Данные экземпляров
     * @response `default` `RpcStatus` Ошибка
     */
    postingApiFbsPostingProductExemplarCreateOrGetV6: (data: V6FbsPostingProductExemplarCreateOrGetV6Request, params?: RequestParams) => Promise<import("./http-client").HttpResponse<import("./data-contracts").V6FbsPostingProductExemplarCreateOrGetV6Response, import("./data-contracts").RpcStatus>>;
}
