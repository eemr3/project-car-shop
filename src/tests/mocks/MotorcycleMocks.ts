import { Motorcycle } from "../../interfaces/MotorcycleInterface";

export const bodyMotor = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
} as Motorcycle;

export const returnCreateMotor = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125,
  _id: '4edd40c86762e0fb12000003',
  v: "vvvv"
};

export const returnFindAllMotor = [
  {
    _id: '4edd40c86762e0fb12000003',
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
];

export const bodyUpdate = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "black",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
} as Motorcycle;

export const returnUpdateMotor = {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "black",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
};
