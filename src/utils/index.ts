export const styleToString = (style: Record<string, string | number>) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() +
      ":" +
      style[key] +
      ";",
    ""
  );
};

export const stringToStyle = (style: string) => {
  const styles: Record<string, string | number> = {};
  style.split(";").forEach((s) => {
    const parts = s.split(":", 2);
    const objKey: string = parts[0]
      .trim()
      .replace(/-([a-z])/gi, (_, l) => l.toUpperCase());
    if (parts.length > 1) {
      styles[objKey] = parts[1].trim();
    }
  });
  return styles;
};

export const stringRepeat = (
  repNum: number = 1,
  repStr: string = "Default String",
  joinBy: string = " - "
) => [...new Array(repNum).keys()].map(() => repStr).join(joinBy);

export const isObjEmpty = (obj: Record<string, any>) =>
  Object.keys(obj).length === 0;
