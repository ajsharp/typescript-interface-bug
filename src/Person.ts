import { model, Document, Model, Schema, Query } from "mongoose";

export interface PersonDocument extends Document {
  name: string;
}

export interface PersonModel extends Model<PersonDocument> {}

const personSchema = new Schema({
  name: String
})

personSchema.methods.test = function() {
  // will throw a 'ReferenceError: Document is not defined' error
  if (this instanceof Document) {
    return `I'm a document!`;
  } else if (this instanceof Query) {
    return `I'm a query!`
  } else {
    return `I'm neither`
  }
}

export const Person: PersonModel = model<PersonDocument, PersonModel>('Person', personSchema);