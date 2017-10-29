const pizzas = require('../data/pizzas.json')
function deleteOrder(id) {
    if (!id)
        throw new Error('Need orderId')
    return {}
}
module.exports = deleteOrder
