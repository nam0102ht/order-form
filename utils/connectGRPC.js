import { OrderFormClient } from '../protos/orderForm_grpc_web_pb'

let orderFormService = new OrderFormClient("http://0.0.0.0:50051")

export default orderFormService