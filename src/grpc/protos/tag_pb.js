/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TagDataSender = (function() {

    /**
     * Namespace TagDataSender.
     * @exports TagDataSender
     * @namespace
     */
    var TagDataSender = {};

    TagDataSender.TagDataSenderService = (function() {

        /**
         * Constructs a new TagDataSenderService service.
         * @memberof TagDataSender
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
         * @memberof TagDataSender.TagDataSenderService
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
         * Callback as used by {@link TagDataSender.TagDataSenderService#send}.
         * @memberof TagDataSender.TagDataSenderService
         * @typedef SendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {TagDataSender.Res} [response] Res
         */

        /**
         * Calls Send.
         * @function send
         * @memberof TagDataSender.TagDataSenderService
         * @instance
         * @param {TagDataSender.ITagList} request TagList message or plain object
         * @param {TagDataSender.TagDataSenderService.SendCallback} callback Node-style callback called with the error, if any, and Res
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TagDataSenderService.prototype.send = function send(request, callback) {
            return this.rpcCall(send, $root.TagDataSender.TagList, $root.TagDataSender.Res, request, callback);
        }, "name", { value: "Send" });

        /**
         * Calls Send.
         * @function send
         * @memberof TagDataSender.TagDataSenderService
         * @instance
         * @param {TagDataSender.ITagList} request TagList message or plain object
         * @returns {Promise<TagDataSender.Res>} Promise
         * @variation 2
         */

        return TagDataSenderService;
    })();

    TagDataSender.TagList = (function() {

        /**
         * Properties of a TagList.
         * @memberof TagDataSender
         * @interface ITagList
         * @property {string|null} [readTime] TagList readTime
         * @property {Array.<TagDataSender.TagList.ITag>|null} [tags] TagList tags
         */

        /**
         * Constructs a new TagList.
         * @memberof TagDataSender
         * @classdesc Represents a TagList.
         * @implements ITagList
         * @constructor
         * @param {TagDataSender.ITagList=} [properties] Properties to set
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
         * @memberof TagDataSender.TagList
         * @instance
         */
        TagList.prototype.readTime = "";

        /**
         * TagList tags.
         * @member {Array.<TagDataSender.TagList.ITag>} tags
         * @memberof TagDataSender.TagList
         * @instance
         */
        TagList.prototype.tags = $util.emptyArray;

        /**
         * Creates a new TagList instance using the specified properties.
         * @function create
         * @memberof TagDataSender.TagList
         * @static
         * @param {TagDataSender.ITagList=} [properties] Properties to set
         * @returns {TagDataSender.TagList} TagList instance
         */
        TagList.create = function create(properties) {
            return new TagList(properties);
        };

        /**
         * Encodes the specified TagList message. Does not implicitly {@link TagDataSender.TagList.verify|verify} messages.
         * @function encode
         * @memberof TagDataSender.TagList
         * @static
         * @param {TagDataSender.ITagList} message TagList message or plain object to encode
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
                    $root.TagDataSender.TagList.Tag.encode(message.tags[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TagList message, length delimited. Does not implicitly {@link TagDataSender.TagList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TagDataSender.TagList
         * @static
         * @param {TagDataSender.ITagList} message TagList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TagList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TagList message from the specified reader or buffer.
         * @function decode
         * @memberof TagDataSender.TagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TagDataSender.TagList} TagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TagList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TagDataSender.TagList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.readTime = reader.string();
                    break;
                case 2:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.TagDataSender.TagList.Tag.decode(reader, reader.uint32()));
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
         * @memberof TagDataSender.TagList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TagDataSender.TagList} TagList
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
         * @memberof TagDataSender.TagList
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
                    var error = $root.TagDataSender.TagList.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TagList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TagDataSender.TagList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TagDataSender.TagList} TagList
         */
        TagList.fromObject = function fromObject(object) {
            if (object instanceof $root.TagDataSender.TagList)
                return object;
            var message = new $root.TagDataSender.TagList();
            if (object.readTime != null)
                message.readTime = String(object.readTime);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".TagDataSender.TagList.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".TagDataSender.TagList.tags: object expected");
                    message.tags[i] = $root.TagDataSender.TagList.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TagList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TagDataSender.TagList
         * @static
         * @param {TagDataSender.TagList} message TagList
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
                    object.tags[j] = $root.TagDataSender.TagList.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this TagList to JSON.
         * @function toJSON
         * @memberof TagDataSender.TagList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TagList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TagList.Tag = (function() {

            /**
             * Properties of a Tag.
             * @memberof TagDataSender.TagList
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
             * @memberof TagDataSender.TagList
             * @classdesc Represents a Tag.
             * @implements ITag
             * @constructor
             * @param {TagDataSender.TagList.ITag=} [properties] Properties to set
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
             * @memberof TagDataSender.TagList.Tag
             * @instance
             */
            Tag.prototype.tagId = "";

            /**
             * Tag antennaNo.
             * @member {number} antennaNo
             * @memberof TagDataSender.TagList.Tag
             * @instance
             */
            Tag.prototype.antennaNo = 0;

            /**
             * Tag rssi.
             * @member {number} rssi
             * @memberof TagDataSender.TagList.Tag
             * @instance
             */
            Tag.prototype.rssi = 0;

            /**
             * Tag frequency.
             * @member {number} frequency
             * @memberof TagDataSender.TagList.Tag
             * @instance
             */
            Tag.prototype.frequency = 0;

            /**
             * Tag phase.
             * @member {number} phase
             * @memberof TagDataSender.TagList.Tag
             * @instance
             */
            Tag.prototype.phase = 0;

            /**
             * Tag doppler.
             * @member {number} doppler
             * @memberof TagDataSender.TagList.Tag
             * @instance
             */
            Tag.prototype.doppler = 0;

            /**
             * Creates a new Tag instance using the specified properties.
             * @function create
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {TagDataSender.TagList.ITag=} [properties] Properties to set
             * @returns {TagDataSender.TagList.Tag} Tag instance
             */
            Tag.create = function create(properties) {
                return new Tag(properties);
            };

            /**
             * Encodes the specified Tag message. Does not implicitly {@link TagDataSender.TagList.Tag.verify|verify} messages.
             * @function encode
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {TagDataSender.TagList.ITag} message Tag message or plain object to encode
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
             * Encodes the specified Tag message, length delimited. Does not implicitly {@link TagDataSender.TagList.Tag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {TagDataSender.TagList.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Tag message from the specified reader or buffer.
             * @function decode
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TagDataSender.TagList.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TagDataSender.TagList.Tag();
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
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TagDataSender.TagList.Tag} Tag
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
             * @memberof TagDataSender.TagList.Tag
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
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TagDataSender.TagList.Tag} Tag
             */
            Tag.fromObject = function fromObject(object) {
                if (object instanceof $root.TagDataSender.TagList.Tag)
                    return object;
                var message = new $root.TagDataSender.TagList.Tag();
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
             * @memberof TagDataSender.TagList.Tag
             * @static
             * @param {TagDataSender.TagList.Tag} message Tag
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
             * @memberof TagDataSender.TagList.Tag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Tag;
        })();

        return TagList;
    })();

    TagDataSender.Res = (function() {

        /**
         * Properties of a Res.
         * @memberof TagDataSender
         * @interface IRes
         * @property {number|null} [status] Res status
         */

        /**
         * Constructs a new Res.
         * @memberof TagDataSender
         * @classdesc Represents a Res.
         * @implements IRes
         * @constructor
         * @param {TagDataSender.IRes=} [properties] Properties to set
         */
        function Res(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Res status.
         * @member {number} status
         * @memberof TagDataSender.Res
         * @instance
         */
        Res.prototype.status = 0;

        /**
         * Creates a new Res instance using the specified properties.
         * @function create
         * @memberof TagDataSender.Res
         * @static
         * @param {TagDataSender.IRes=} [properties] Properties to set
         * @returns {TagDataSender.Res} Res instance
         */
        Res.create = function create(properties) {
            return new Res(properties);
        };

        /**
         * Encodes the specified Res message. Does not implicitly {@link TagDataSender.Res.verify|verify} messages.
         * @function encode
         * @memberof TagDataSender.Res
         * @static
         * @param {TagDataSender.IRes} message Res message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Res.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Res message, length delimited. Does not implicitly {@link TagDataSender.Res.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TagDataSender.Res
         * @static
         * @param {TagDataSender.IRes} message Res message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Res.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Res message from the specified reader or buffer.
         * @function decode
         * @memberof TagDataSender.Res
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TagDataSender.Res} Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Res.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TagDataSender.Res();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Res message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TagDataSender.Res
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TagDataSender.Res} Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Res.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Res message.
         * @function verify
         * @memberof TagDataSender.Res
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Res.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a Res message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TagDataSender.Res
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TagDataSender.Res} Res
         */
        Res.fromObject = function fromObject(object) {
            if (object instanceof $root.TagDataSender.Res)
                return object;
            var message = new $root.TagDataSender.Res();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a Res message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TagDataSender.Res
         * @static
         * @param {TagDataSender.Res} message Res
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Res.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this Res to JSON.
         * @function toJSON
         * @memberof TagDataSender.Res
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Res.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Res;
    })();

    return TagDataSender;
})();

module.exports = $root;
