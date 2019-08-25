/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.api = (function() {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    var api = {};

    api.TagDataSenderService = (function() {

        /**
         * Constructs a new TagDataSenderService service.
         * @memberof api
         * @classdesc Represents a TagDataSenderService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TagDataSenderService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TagDataSenderService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TagDataSenderService;

        /**
         * Creates new TagDataSenderService service using the specified rpc implementation.
         * @function create
         * @memberof api.TagDataSenderService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TagDataSenderService} RPC service. Useful where requests and/or responses are streamed.
         */
        TagDataSenderService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link api.TagDataSenderService#send}.
         * @memberof api.TagDataSenderService
         * @typedef SendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rfid.Response} [response] Response
         */

        /**
         * Calls Send.
         * @function send
         * @memberof api.TagDataSenderService
         * @instance
         * @param {rfid.ITagList} request TagList message or plain object
         * @param {api.TagDataSenderService.SendCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TagDataSenderService.prototype.send = function send(request, callback) {
            return this.rpcCall(send, $root.rfid.TagList, $root.rfid.Response, request, callback);
        }, "name", { value: "Send" });

        /**
         * Calls Send.
         * @function send
         * @memberof api.TagDataSenderService
         * @instance
         * @param {rfid.ITagList} request TagList message or plain object
         * @returns {Promise<rfid.Response>} Promise
         * @variation 2
         */

        return TagDataSenderService;
    })();

    api.TestService = (function() {

        /**
         * Constructs a new TestService service.
         * @memberof api
         * @classdesc Represents a TestService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TestService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TestService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TestService;

        /**
         * Creates new TestService service using the specified rpc implementation.
         * @function create
         * @memberof api.TestService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TestService} RPC service. Useful where requests and/or responses are streamed.
         */
        TestService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link api.TestService#send}.
         * @memberof api.TestService
         * @typedef SendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {test.Response} [response] Response
         */

        /**
         * Calls Send.
         * @function send
         * @memberof api.TestService
         * @instance
         * @param {test.IRequest} request Request message or plain object
         * @param {api.TestService.SendCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestService.prototype.send = function send(request, callback) {
            return this.rpcCall(send, $root.test.Request, $root.test.Response, request, callback);
        }, "name", { value: "Send" });

        /**
         * Calls Send.
         * @function send
         * @memberof api.TestService
         * @instance
         * @param {test.IRequest} request Request message or plain object
         * @returns {Promise<test.Response>} Promise
         * @variation 2
         */

        return TestService;
    })();

    return api;
})();

$root.rfid = (function() {

    /**
     * Namespace rfid.
     * @exports rfid
     * @namespace
     */
    var rfid = {};

    rfid.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof rfid
         * @interface IResponse
         * @property {number|null} [statusCode] Response statusCode
         * @property {string|null} [message] Response message
         */

        /**
         * Constructs a new Response.
         * @memberof rfid
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {rfid.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response statusCode.
         * @member {number} statusCode
         * @memberof rfid.Response
         * @instance
         */
        Response.prototype.statusCode = 0;

        /**
         * Response message.
         * @member {string} message
         * @memberof rfid.Response
         * @instance
         */
        Response.prototype.message = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof rfid.Response
         * @static
         * @param {rfid.IResponse=} [properties] Properties to set
         * @returns {rfid.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link rfid.Response.verify|verify} messages.
         * @function encode
         * @memberof rfid.Response
         * @static
         * @param {rfid.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.statusCode);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link rfid.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rfid.Response
         * @static
         * @param {rfid.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof rfid.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rfid.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rfid.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.statusCode = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rfid.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rfid.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof rfid.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rfid.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rfid.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.rfid.Response)
                return object;
            var message = new $root.rfid.Response();
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rfid.Response
         * @static
         * @param {rfid.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.statusCode = 0;
                object.message = "";
            }
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof rfid.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    rfid.Tag = (function() {

        /**
         * Properties of a Tag.
         * @memberof rfid
         * @interface ITag
         * @property {string|null} [tagId] Tag tagId
         * @property {number|null} [antennaNo] Tag antennaNo
         * @property {number|null} [rssi] Tag rssi
         * @property {number|null} [frequency] Tag frequency
         * @property {number|null} [phase] Tag phase
         * @property {number|null} [doppler] Tag doppler
         */

        /**
         * Constructs a new Tag.
         * @memberof rfid
         * @classdesc Represents a Tag.
         * @implements ITag
         * @constructor
         * @param {rfid.ITag=} [properties] Properties to set
         */
        function Tag(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tag tagId.
         * @member {string} tagId
         * @memberof rfid.Tag
         * @instance
         */
        Tag.prototype.tagId = "";

        /**
         * Tag antennaNo.
         * @member {number} antennaNo
         * @memberof rfid.Tag
         * @instance
         */
        Tag.prototype.antennaNo = 0;

        /**
         * Tag rssi.
         * @member {number} rssi
         * @memberof rfid.Tag
         * @instance
         */
        Tag.prototype.rssi = 0;

        /**
         * Tag frequency.
         * @member {number} frequency
         * @memberof rfid.Tag
         * @instance
         */
        Tag.prototype.frequency = 0;

        /**
         * Tag phase.
         * @member {number} phase
         * @memberof rfid.Tag
         * @instance
         */
        Tag.prototype.phase = 0;

        /**
         * Tag doppler.
         * @member {number} doppler
         * @memberof rfid.Tag
         * @instance
         */
        Tag.prototype.doppler = 0;

        /**
         * Creates a new Tag instance using the specified properties.
         * @function create
         * @memberof rfid.Tag
         * @static
         * @param {rfid.ITag=} [properties] Properties to set
         * @returns {rfid.Tag} Tag instance
         */
        Tag.create = function create(properties) {
            return new Tag(properties);
        };

        /**
         * Encodes the specified Tag message. Does not implicitly {@link rfid.Tag.verify|verify} messages.
         * @function encode
         * @memberof rfid.Tag
         * @static
         * @param {rfid.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tagId != null && message.hasOwnProperty("tagId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tagId);
            if (message.antennaNo != null && message.hasOwnProperty("antennaNo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.antennaNo);
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.rssi);
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.frequency);
            if (message.phase != null && message.hasOwnProperty("phase"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.phase);
            if (message.doppler != null && message.hasOwnProperty("doppler"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.doppler);
            return writer;
        };

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link rfid.Tag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rfid.Tag
         * @static
         * @param {rfid.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @function decode
         * @memberof rfid.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rfid.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rfid.Tag();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tagId = reader.string();
                    break;
                case 2:
                    message.antennaNo = reader.int32();
                    break;
                case 3:
                    message.rssi = reader.float();
                    break;
                case 4:
                    message.frequency = reader.float();
                    break;
                case 5:
                    message.phase = reader.float();
                    break;
                case 6:
                    message.doppler = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rfid.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rfid.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tag message.
         * @function verify
         * @memberof rfid.Tag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tagId != null && message.hasOwnProperty("tagId"))
                if (!$util.isString(message.tagId))
                    return "tagId: string expected";
            if (message.antennaNo != null && message.hasOwnProperty("antennaNo"))
                if (!$util.isInteger(message.antennaNo))
                    return "antennaNo: integer expected";
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                if (typeof message.rssi !== "number")
                    return "rssi: number expected";
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                if (typeof message.frequency !== "number")
                    return "frequency: number expected";
            if (message.phase != null && message.hasOwnProperty("phase"))
                if (typeof message.phase !== "number")
                    return "phase: number expected";
            if (message.doppler != null && message.hasOwnProperty("doppler"))
                if (typeof message.doppler !== "number")
                    return "doppler: number expected";
            return null;
        };

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rfid.Tag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rfid.Tag} Tag
         */
        Tag.fromObject = function fromObject(object) {
            if (object instanceof $root.rfid.Tag)
                return object;
            var message = new $root.rfid.Tag();
            if (object.tagId != null)
                message.tagId = String(object.tagId);
            if (object.antennaNo != null)
                message.antennaNo = object.antennaNo | 0;
            if (object.rssi != null)
                message.rssi = Number(object.rssi);
            if (object.frequency != null)
                message.frequency = Number(object.frequency);
            if (object.phase != null)
                message.phase = Number(object.phase);
            if (object.doppler != null)
                message.doppler = Number(object.doppler);
            return message;
        };

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rfid.Tag
         * @static
         * @param {rfid.Tag} message Tag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tagId = "";
                object.antennaNo = 0;
                object.rssi = 0;
                object.frequency = 0;
                object.phase = 0;
                object.doppler = 0;
            }
            if (message.tagId != null && message.hasOwnProperty("tagId"))
                object.tagId = message.tagId;
            if (message.antennaNo != null && message.hasOwnProperty("antennaNo"))
                object.antennaNo = message.antennaNo;
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                object.rssi = options.json && !isFinite(message.rssi) ? String(message.rssi) : message.rssi;
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                object.frequency = options.json && !isFinite(message.frequency) ? String(message.frequency) : message.frequency;
            if (message.phase != null && message.hasOwnProperty("phase"))
                object.phase = options.json && !isFinite(message.phase) ? String(message.phase) : message.phase;
            if (message.doppler != null && message.hasOwnProperty("doppler"))
                object.doppler = options.json && !isFinite(message.doppler) ? String(message.doppler) : message.doppler;
            return object;
        };

        /**
         * Converts this Tag to JSON.
         * @function toJSON
         * @memberof rfid.Tag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Tag;
    })();

    rfid.TagList = (function() {

        /**
         * Properties of a TagList.
         * @memberof rfid
         * @interface ITagList
         * @property {string|null} [readTime] TagList readTime
         * @property {Array.<rfid.ITag>|null} [tags] TagList tags
         */

        /**
         * Constructs a new TagList.
         * @memberof rfid
         * @classdesc Represents a TagList.
         * @implements ITagList
         * @constructor
         * @param {rfid.ITagList=} [properties] Properties to set
         */
        function TagList(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TagList readTime.
         * @member {string} readTime
         * @memberof rfid.TagList
         * @instance
         */
        TagList.prototype.readTime = "";

        /**
         * TagList tags.
         * @member {Array.<rfid.ITag>} tags
         * @memberof rfid.TagList
         * @instance
         */
        TagList.prototype.tags = $util.emptyArray;

        /**
         * Creates a new TagList instance using the specified properties.
         * @function create
         * @memberof rfid.TagList
         * @static
         * @param {rfid.ITagList=} [properties] Properties to set
         * @returns {rfid.TagList} TagList instance
         */
        TagList.create = function create(properties) {
            return new TagList(properties);
        };

        /**
         * Encodes the specified TagList message. Does not implicitly {@link rfid.TagList.verify|verify} messages.
         * @function encode
         * @memberof rfid.TagList
         * @static
         * @param {rfid.ITagList} message TagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TagList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.readTime != null && message.hasOwnProperty("readTime"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.readTime);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.rfid.Tag.encode(message.tags[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TagList message, length delimited. Does not implicitly {@link rfid.TagList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rfid.TagList
         * @static
         * @param {rfid.ITagList} message TagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TagList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TagList message from the specified reader or buffer.
         * @function decode
         * @memberof rfid.TagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rfid.TagList} TagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TagList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rfid.TagList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.readTime = reader.string();
                    break;
                case 2:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.rfid.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TagList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rfid.TagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rfid.TagList} TagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TagList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TagList message.
         * @function verify
         * @memberof rfid.TagList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TagList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.readTime != null && message.hasOwnProperty("readTime"))
                if (!$util.isString(message.readTime))
                    return "readTime: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.rfid.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TagList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rfid.TagList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rfid.TagList} TagList
         */
        TagList.fromObject = function fromObject(object) {
            if (object instanceof $root.rfid.TagList)
                return object;
            var message = new $root.rfid.TagList();
            if (object.readTime != null)
                message.readTime = String(object.readTime);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".rfid.TagList.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".rfid.TagList.tags: object expected");
                    message.tags[i] = $root.rfid.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TagList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rfid.TagList
         * @static
         * @param {rfid.TagList} message TagList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TagList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults)
                object.readTime = "";
            if (message.readTime != null && message.hasOwnProperty("readTime"))
                object.readTime = message.readTime;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.rfid.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this TagList to JSON.
         * @function toJSON
         * @memberof rfid.TagList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TagList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TagList;
    })();

    return rfid;
})();

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    /**
     * Love enum.
     * @name test.Love
     * @enum {string}
     * @property {number} SANA_SAORI=0 SANA_SAORI value
     * @property {number} KAF=1 KAF value
     * @property {number} ROA_YUZUKI=2 ROA_YUZUKI value
     */
    test.Love = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SANA_SAORI"] = 0;
        values[valuesById[1] = "KAF"] = 1;
        values[valuesById[2] = "ROA_YUZUKI"] = 2;
        return values;
    })();

    test.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof test
         * @interface IRequest
         * @property {test.Love|null} [vtuber] Request vtuber
         */

        /**
         * Constructs a new Request.
         * @memberof test
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {test.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request vtuber.
         * @member {test.Love} vtuber
         * @memberof test.Request
         * @instance
         */
        Request.prototype.vtuber = 0;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof test.Request
         * @static
         * @param {test.IRequest=} [properties] Properties to set
         * @returns {test.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link test.Request.verify|verify} messages.
         * @function encode
         * @memberof test.Request
         * @static
         * @param {test.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vtuber != null && message.hasOwnProperty("vtuber"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vtuber);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link test.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.Request
         * @static
         * @param {test.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof test.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.vtuber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof test.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vtuber != null && message.hasOwnProperty("vtuber"))
                switch (message.vtuber) {
                default:
                    return "vtuber: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.test.Request)
                return object;
            var message = new $root.test.Request();
            switch (object.vtuber) {
            case "SANA_SAORI":
            case 0:
                message.vtuber = 0;
                break;
            case "KAF":
            case 1:
                message.vtuber = 1;
                break;
            case "ROA_YUZUKI":
            case 2:
                message.vtuber = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.Request
         * @static
         * @param {test.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.vtuber = options.enums === String ? "SANA_SAORI" : 0;
            if (message.vtuber != null && message.hasOwnProperty("vtuber"))
                object.vtuber = options.enums === String ? $root.test.Love[message.vtuber] : message.vtuber;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof test.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    test.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof test
         * @interface IResponse
         * @property {string|null} [vtuber] Response vtuber
         */

        /**
         * Constructs a new Response.
         * @memberof test
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {test.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response vtuber.
         * @member {string} vtuber
         * @memberof test.Response
         * @instance
         */
        Response.prototype.vtuber = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof test.Response
         * @static
         * @param {test.IResponse=} [properties] Properties to set
         * @returns {test.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link test.Response.verify|verify} messages.
         * @function encode
         * @memberof test.Response
         * @static
         * @param {test.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vtuber != null && message.hasOwnProperty("vtuber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vtuber);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link test.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.Response
         * @static
         * @param {test.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof test.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.vtuber = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof test.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vtuber != null && message.hasOwnProperty("vtuber"))
                if (!$util.isString(message.vtuber))
                    return "vtuber: string expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.test.Response)
                return object;
            var message = new $root.test.Response();
            if (object.vtuber != null)
                message.vtuber = String(object.vtuber);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.Response
         * @static
         * @param {test.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.vtuber = "";
            if (message.vtuber != null && message.hasOwnProperty("vtuber"))
                object.vtuber = message.vtuber;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof test.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    return test;
})();

module.exports = $root;
