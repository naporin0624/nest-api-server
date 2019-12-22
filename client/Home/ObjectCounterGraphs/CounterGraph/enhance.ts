import { Props } from ".";
import { unique } from "@/client/utils";
export const useEnhance = (props: Props) => {
  const data = props.data.map(d => {
    let dd: { [key: string]: number | string } = {};
    for (const key in d) dd[key] = d[key] >= 30 ? 30 : d[key];
    return dd;
  });

  const names =
    props.data.length > 0
      ? unique(
          props.data.map(d => Object.keys(d)).reduce((a, b) => [...a, ...b]),
        ).filter(n => n !== "name")
      : [];

  return { data, names };
};
