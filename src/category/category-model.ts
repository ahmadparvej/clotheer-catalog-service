interface PriceConfiguration {
  [key: string]: {
    priceType: "base" | "additional";
    availableOptions: string[];
  };
}

interface Attribute {
  name: string;
  widgetType: "radio" | "switch";
  defaultValue: string;
  availableOption: string[];
}

export interface Category {
  name: string;
  priceConfiguration: PriceConfiguration;
  attributes: Attribute[];
}
