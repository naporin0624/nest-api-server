// package: TagDataSender
// file: src/proto/schemas.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class TagList extends jspb.Message { 
    getReadtime(): string;
    setReadtime(value: string): void;

    clearTagsList(): void;
    getTagsList(): Array<TagList.Tag>;
    setTagsList(value: Array<TagList.Tag>): void;
    addTags(value?: TagList.Tag, index?: number): TagList.Tag;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagList.AsObject;
    static toObject(includeInstance: boolean, msg: TagList): TagList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagList;
    static deserializeBinaryFromReader(message: TagList, reader: jspb.BinaryReader): TagList;
}

export namespace TagList {
    export type AsObject = {
        readtime: string,
        tagsList: Array<TagList.Tag.AsObject>,
    }


    export class Tag extends jspb.Message { 
        getTagid(): string;
        setTagid(value: string): void;

        getAntennano(): number;
        setAntennano(value: number): void;

        getRssi(): number;
        setRssi(value: number): void;

        getFrequency(): number;
        setFrequency(value: number): void;

        getPhase(): number;
        setPhase(value: number): void;

        getDoppler(): number;
        setDoppler(value: number): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Tag.AsObject;
        static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Tag;
        static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
    }

    export namespace Tag {
        export type AsObject = {
            tagid: string,
            antennano: number,
            rssi: number,
            frequency: number,
            phase: number,
            doppler: number,
        }
    }

}

export class Res extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Res.AsObject;
    static toObject(includeInstance: boolean, msg: Res): Res.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Res, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Res;
    static deserializeBinaryFromReader(message: Res, reader: jspb.BinaryReader): Res;
}

export namespace Res {
    export type AsObject = {
        status: number,
    }
}
