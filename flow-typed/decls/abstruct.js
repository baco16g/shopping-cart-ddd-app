declare type EntitySchema = {
  id: number,
  created_at: Date,
  updated_at: Date
}

declare type ValueObjectSchema = {
  [*]: any
}

/* eslint-disable */
declare class Entity {
/* eslint-disable */
  equals: Entity => boolean,
  getID: () => string,
  getProductCode: () => string,
  getCreatedAt: () => Date,
  getUpdatedAt: () => Date,
  updateUpdatedAt: () => Entity,
  restoreID: (id: string) => Entity,
  restoreCreatedAt: (date: Date) => Entity,
  restoreUpdatedAt: (date: Date) => Entity
}

/* eslint-disable */
declare class ValueObject {
/* eslint-disable */
  equals: ValueObject => boolean
}
