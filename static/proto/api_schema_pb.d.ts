import * as $protobuf from "protobufjs";
/** Namespace api. */
export namespace api {

    /** Represents a TagDataSenderService */
    class TagDataSenderService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TagDataSenderService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TagDataSenderService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TagDataSenderService;

        /**
         * Calls Send.
         * @param request TagList message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public send(request: rfid.ITagList, callback: api.TagDataSenderService.SendCallback): void;

        /**
         * Calls Send.
         * @param request TagList message or plain object
         * @returns Promise
         */
        public send(request: rfid.ITagList): Promise<rfid.Response>;
    }

    namespace TagDataSenderService {

        /**
         * Callback as used by {@link api.TagDataSenderService#send}.
         * @param error Error, if any
         * @param [response] Response
         */
        type SendCallback = (error: (Error|null), response?: rfid.Response) => void;
    }

    /** Represents a TestService */
    class TestService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TestService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TestService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TestService;

        /**
         * Calls Send.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public send(request: test.IRequest, callback: api.TestService.SendCallback): void;

        /**
         * Calls Send.
         * @param request Request message or plain object
         * @returns Promise
         */
        public send(request: test.IRequest): Promise<test.Response>;
    }

    namespace TestService {

        /**
         * Callback as used by {@link api.TestService#send}.
         * @param error Error, if any
         * @param [response] Response
         */
        type SendCallback = (error: (Error|null), response?: test.Response) => void;
    }
}

/** Namespace rfid. */
export namespace rfid {

    /** Properties of a Response. */
    interface IResponse {

        /** Response statusCode */
        statusCode?: (number|null);

        /** Response message */
        message?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: rfid.IResponse);

        /** Response statusCode. */
        public statusCode: number;

        /** Response message. */
        public message: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: rfid.IResponse): rfid.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link rfid.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rfid.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link rfid.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rfid.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rfid.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rfid.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): rfid.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rfid.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Tag. */
    interface ITag {

        /** Tag tagId */
        tagId?: (string|null);

        /** Tag antennaNo */
        antennaNo?: (number|null);

        /** Tag rssi */
        rssi?: (number|null);

        /** Tag frequency */
        frequency?: (number|null);

        /** Tag phase */
        phase?: (number|null);

        /** Tag doppler */
        doppler?: (number|null);
    }

    /** Represents a Tag. */
    class Tag implements ITag {

        /**
         * Constructs a new Tag.
         * @param [properties] Properties to set
         */
        constructor(properties?: rfid.ITag);

        /** Tag tagId. */
        public tagId: string;

        /** Tag antennaNo. */
        public antennaNo: number;

        /** Tag rssi. */
        public rssi: number;

        /** Tag frequency. */
        public frequency: number;

        /** Tag phase. */
        public phase: number;

        /** Tag doppler. */
        public doppler: number;

        /**
         * Creates a new Tag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tag instance
         */
        public static create(properties?: rfid.ITag): rfid.Tag;

        /**
         * Encodes the specified Tag message. Does not implicitly {@link rfid.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rfid.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link rfid.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rfid.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rfid.Tag;

        /**
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rfid.Tag;

        /**
         * Verifies a Tag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Tag
         */
        public static fromObject(object: { [k: string]: any }): rfid.Tag;

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @param message Tag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rfid.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Tag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TagList. */
    interface ITagList {

        /** TagList readTime */
        readTime?: (string|null);

        /** TagList tags */
        tags?: (rfid.ITag[]|null);
    }

    /** Represents a TagList. */
    class TagList implements ITagList {

        /**
         * Constructs a new TagList.
         * @param [properties] Properties to set
         */
        constructor(properties?: rfid.ITagList);

        /** TagList readTime. */
        public readTime: string;

        /** TagList tags. */
        public tags: rfid.ITag[];

        /**
         * Creates a new TagList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TagList instance
         */
        public static create(properties?: rfid.ITagList): rfid.TagList;

        /**
         * Encodes the specified TagList message. Does not implicitly {@link rfid.TagList.verify|verify} messages.
         * @param message TagList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rfid.ITagList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TagList message, length delimited. Does not implicitly {@link rfid.TagList.verify|verify} messages.
         * @param message TagList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rfid.ITagList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TagList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rfid.TagList;

        /**
         * Decodes a TagList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TagList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rfid.TagList;

        /**
         * Verifies a TagList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TagList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TagList
         */
        public static fromObject(object: { [k: string]: any }): rfid.TagList;

        /**
         * Creates a plain object from a TagList message. Also converts values to other types if specified.
         * @param message TagList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rfid.TagList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TagList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace test. */
export namespace test {

    /** Love enum. */
    enum Love {
        SANA_SAORI = 0,
        KAF = 1,
        ROA_YUZUKI = 2
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request vtuber */
        vtuber?: (test.Love|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.IRequest);

        /** Request vtuber. */
        public vtuber: test.Love;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: test.IRequest): test.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link test.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link test.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): test.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: test.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response vtuber */
        vtuber?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.IResponse);

        /** Response vtuber. */
        public vtuber: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: test.IResponse): test.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link test.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link test.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): test.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: test.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
