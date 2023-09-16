/**
 *
 *@description Инициализирует клиент
 * @param {Object} keys - data for auth
 * @param {number} keys.clientId - Client-Id
 * @param {string} keys.apiKey - Api-Key
 * @returns {api client}
 */
declare function client({ clientId, apiKey }: Ozon_.Types.Keys): any;
