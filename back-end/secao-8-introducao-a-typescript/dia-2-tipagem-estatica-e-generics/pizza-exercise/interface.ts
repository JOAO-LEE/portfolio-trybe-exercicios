
export type TPieces = 4 | 6 | 8;

type TCommon = "Calabresa" | "Frango" | "Pepperoni";
type TVegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type TSweet = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

export interface IPizza {
  flavor: string;
  slices: TPieces;
};

export interface CommonFlavors extends IPizza {
  flavor: TCommon,
};

export interface vegatarianFlavors extends IPizza {
  flavor: TVegetarian,
};

export interface sweetFlavors extends IPizza {
  flavor: TSweet,
  slices: 4,
};