function updateOrder(id,order) {
    if (!id || !order || !order.pizzaId || !order.address)
        throw new Error('To order pizza please provide pizza type and address where pizza should be delivered')
    return {
        message: `Order ${id} was successfully updated`
    }
}
module.exports = updateOrder
