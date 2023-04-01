/**
 *
 *@description Инициализирует клиент
 * @param {Object} keys - data for auth
 * @param {number} keys.clientId - Client-Id
 * @param {string} keys.apiKey - Api-Key
 * @returns {api client}
 */
function client({ clientId, apiKey }: Ozon_.Types.Keys) {
    return new Ozon_.Api({ clientId, apiKey });
}
