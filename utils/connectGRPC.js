const { OrderFormClient } = require('../src/pb/orderForm_grpc_web_pb')

let orderFormService = new OrderFormClient("http://0.0.0.0:5000")


export default orderFormService