import * as $protobuf from "protobufjs";
/** Namespace TagDataSender. */
export namespace TagDataSender {
  /** Represents a TagDataSender */
  class TagDataSender extends $protobuf.rpc.Service {
    /**
     * Constructs a new TagDataSender service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean,
    );

    /**
     * Creates new TagDataSender service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean,
    ): TagDataSender;

    /**
     * Calls Send.
     * @param request TagList message or plain object
     * @param callback Node-style callback called with the error, if any, and Res
     */
    public send(
      request: TagDataSender.ITagList,
      callback: TagDataSender.TagDataSender.SendCallback,
    ): void;

    /**
     * Calls Send.
     * @param request TagList message or plain object
     * @returns Promise
     */
    public send(request: TagDataSender.ITagList): Promise<TagDataSender.Res>;
  }

  namespace TagDataSender {
    /**
     * Callback as used by {@link TagDataSender.TagDataSender#send}.
     * @param error Error, if any
     * @param [response] Res
     */
    type SendCallback = (
      error: Error | null,
      response?: TagDataSender.Res,
    ) => void;
  }

  /** Properties of a TagList. */
  interface ITagList {
    /** TagList readTime */
    readTime?: string | null;

    /** TagList tags */
    tags?: TagDataSender.TagList.ITag[] | null;
  }

  /** Represents a TagList. */
  class TagList implements ITagList {
    /**
     * Constructs a new TagList.
     * @param [properties] Properties to set
     */
    constructor(properties?: TagDataSender.ITagList);

    /** TagList readTime. */
    public readTime: string;

    /** TagList tags. */
    public tags: TagDataSender.TagList.ITag[];

    /**
     * Creates a new TagList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TagList instance
     */
    public static create(
      properties?: TagDataSender.ITagList,
    ): TagDataSender.TagList;

    /**
     * Encodes the specified TagList message. Does not implicitly {@link TagDataSender.TagList.verify|verify} messages.
     * @param message TagList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: TagDataSender.ITagList,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified TagList message, length delimited. Does not implicitly {@link TagDataSender.TagList.verify|verify} messages.
     * @param message TagList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: TagDataSender.ITagList,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a TagList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TagList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): TagDataSender.TagList;

    /**
     * Decodes a TagList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TagList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): TagDataSender.TagList;

    /**
     * Verifies a TagList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TagList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TagList
     */
    public static fromObject(object: {
      [k: string]: any;
    }): TagDataSender.TagList;

    /**
     * Creates a plain object from a TagList message. Also converts values to other types if specified.
     * @param message TagList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: TagDataSender.TagList,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this TagList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace TagList {
    /** Properties of a Tag. */
    interface ITag {
      /** Tag tagId */
      tagId?: string | null;

      /** Tag antennaNo */
      antennaNo?: number | null;

      /** Tag rssi */
      rssi?: number | null;

      /** Tag frequency */
      frequency?: number | null;

      /** Tag phase */
      phase?: number | null;

      /** Tag doppler */
      doppler?: number | null;
    }

    /** Represents a Tag. */
    class Tag implements ITag {
      /**
       * Constructs a new Tag.
       * @param [properties] Properties to set
       */
      constructor(properties?: TagDataSender.TagList.ITag);

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
      public static create(
        properties?: TagDataSender.TagList.ITag,
      ): TagDataSender.TagList.Tag;

      /**
       * Encodes the specified Tag message. Does not implicitly {@link TagDataSender.TagList.Tag.verify|verify} messages.
       * @param message Tag message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: TagDataSender.TagList.ITag,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Encodes the specified Tag message, length delimited. Does not implicitly {@link TagDataSender.TagList.Tag.verify|verify} messages.
       * @param message Tag message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: TagDataSender.TagList.ITag,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a Tag message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Tag
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): TagDataSender.TagList.Tag;

      /**
       * Decodes a Tag message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Tag
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): TagDataSender.TagList.Tag;

      /**
       * Verifies a Tag message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Tag message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Tag
       */
      public static fromObject(object: {
        [k: string]: any;
      }): TagDataSender.TagList.Tag;

      /**
       * Creates a plain object from a Tag message. Also converts values to other types if specified.
       * @param message Tag
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: TagDataSender.TagList.Tag,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this Tag to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a Res. */
  interface IRes {
    /** Res status */
    status?: number | null;
  }

  /** Represents a Res. */
  class Res implements IRes {
    /**
     * Constructs a new Res.
     * @param [properties] Properties to set
     */
    constructor(properties?: TagDataSender.IRes);

    /** Res status. */
    public status: number;

    /**
     * Creates a new Res instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Res instance
     */
    public static create(properties?: TagDataSender.IRes): TagDataSender.Res;

    /**
     * Encodes the specified Res message. Does not implicitly {@link TagDataSender.Res.verify|verify} messages.
     * @param message Res message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: TagDataSender.IRes,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Res message, length delimited. Does not implicitly {@link TagDataSender.Res.verify|verify} messages.
     * @param message Res message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: TagDataSender.IRes,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Res message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Res
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): TagDataSender.Res;

    /**
     * Decodes a Res message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Res
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): TagDataSender.Res;

    /**
     * Verifies a Res message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Res message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Res
     */
    public static fromObject(object: { [k: string]: any }): TagDataSender.Res;

    /**
     * Creates a plain object from a Res message. Also converts values to other types if specified.
     * @param message Res
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: TagDataSender.Res,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Res to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
