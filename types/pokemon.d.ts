export declare global {
  interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];

    held_items: {
      item: {
        name: string;
        url: string;
      };
      version_details: {
        rarity: number;
        version: {
          name: number;
          url: string;
        };
      }[];
    }[];
    location_area_encounters: string;
    moves: Move[];
    species: {
      name: string;
      url: string;
    };
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
  }
}
