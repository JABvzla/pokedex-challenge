export declare global {
  type TypeName =
    | "fire"
    | "water"
    | "bug"
    | "grass"
    | "normal"
    | "poison"
    | "electric"
    | "fairy";
  interface Type {
    slot: number;
    type: {
      name: TypeName;
      url: string;
    };
  }
}
