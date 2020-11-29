/**
 * @fileoverview gRPC-Web generated client stub for orderForm
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.orderForm = require('./orderForm_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.orderForm.OrderFormClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.orderForm.OrderFormPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.orderForm.EmptyMessage,
 *   !proto.orderForm.Response>}
 */
const methodDescriptor_OrderForm_ListProduct = new grpc.web.MethodDescriptor(
  '/orderForm.OrderForm/ListProduct',
  grpc.web.MethodType.UNARY,
  proto.orderForm.EmptyMessage,
  proto.orderForm.Response,
  /**
   * @param {!proto.orderForm.EmptyMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.orderForm.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.orderForm.EmptyMessage,
 *   !proto.orderForm.Response>}
 */
const methodInfo_OrderForm_ListProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.orderForm.Response,
  /**
   * @param {!proto.orderForm.EmptyMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.orderForm.Response.deserializeBinary
);


/**
 * @param {!proto.orderForm.EmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.orderForm.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.orderForm.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.orderForm.OrderFormClient.prototype.listProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/orderForm.OrderForm/ListProduct',
      request,
      metadata || {},
      methodDescriptor_OrderForm_ListProduct,
      callback);
};


/**
 * @param {!proto.orderForm.EmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.orderForm.Response>}
 *     Promise that resolves to the response
 */
proto.orderForm.OrderFormPromiseClient.prototype.listProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/orderForm.OrderForm/ListProduct',
      request,
      metadata || {},
      methodDescriptor_OrderForm_ListProduct);
};


module.exports = proto.orderForm;

