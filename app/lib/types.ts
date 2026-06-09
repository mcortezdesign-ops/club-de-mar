export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string | null;
  category: "frescos" | "congelados" | "rebozados";
  nutrition: [string, string, string];
  cooking: [string, string];
  origin: string;
  type: "Fresco" | "Congelado" | "Rebozado";
  unit: string;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  items: string[];
}

export interface Recipe {
  id: string;
  name: string;
  difficulty: string;
  time: string;
  image: string;
  ingredients: string[];
  steps: string[];
}
