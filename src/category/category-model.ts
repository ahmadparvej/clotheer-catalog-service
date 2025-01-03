import mongoose from "mongoose";

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

const priceConfigurationSchema = new mongoose.Schema<PriceConfiguration>({
  priceType: {
    type: String,
    enum: ["base", "additional"],
    required: true,
  },
  availableOptions: {
    type: [String],
    required: true,
  },
});

const attributeSchema = new mongoose.Schema<Attribute>({
  name: {
    type: String,
    required: true,
  },
  widgetType: {
    type: String,
    enum: ["radio", "switch"],
    required: true,
  },
  defaultValue: {
    type: String,
    required: true,
  },
  availableOption: {
    type: [String],
    required: true,
  },
});

const categorySChema = new mongoose.Schema<Category>({
  name: {
    type: String,
    required: true,
  },
  priceConfiguration: {
    type: Map,
    of: priceConfigurationSchema,
    required: true,
  },
  attributes: {
    type: [attributeSchema],
    required: true,
  },
});

export const Category = mongoose.model("Category", categorySChema);
