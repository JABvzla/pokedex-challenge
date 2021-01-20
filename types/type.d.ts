export declare global {
  type TypeName = "fire" | "water" | "bug";
  interface Type {
    slot: number;
    type: {
      name: TypeName;
      url: string;
    };
  }
}
