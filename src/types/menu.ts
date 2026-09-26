export type PizzaSize = {
  label: string;
  price: number;
};

export type MenuCategoryId =
  | "starting-69"
  | "simply-veg"
  | "double-topping"
  | "three-topping"
  | "veg-loaded"
  | "classic-veg";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  ingredients: string[];
  sizes: PizzaSize[];
  vegetarian: boolean;
  spicy?: boolean;
  popular?: boolean;
  /** Used to pick an accent tone for the illustration on the card. */
  tone: "onion" | "tomato" | "corn" | "paneer" | "olive" | "classic";
};

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  shortLabel: string;
};
