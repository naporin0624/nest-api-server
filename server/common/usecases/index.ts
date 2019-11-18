import { DateRange } from "@/rfid/dto/query";
import { MapExclude } from "@/common/types";

export function createDateObj(payload: string | Date): Date {
  return typeof payload === "string" ? new Date(payload) : payload;
}

function createObjOrNull<T extends (...args: any) => any>(
  factory: T,
  args?: T extends (...arg: infer U) => any ? U[0] : never,
): ReturnType<T> | null {
  try {
    return factory(args);
  } catch (e) {
    return null;
  }
}

export function dateRangeExcludeString(
  dateRange: DateRange,
): MapExclude<DateRange, string> {
  return {
    startTime: createObjOrNull(createDateObj, dateRange.startTime),
    endTime: createObjOrNull(createDateObj, dateRange.endTime),
  };
}
