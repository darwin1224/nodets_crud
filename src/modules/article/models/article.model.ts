import { Schema } from 'mongoose'

export const ArticleSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  } 
})