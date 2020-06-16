"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsSchema = void 0;
const mongoose = require("mongoose");
const autoincrement = require('simple-mongoose-autoincrement');
exports.FormsSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    dynamicInputs: { type: Array, required: true },
    submissions: { type: [Array], required: true },
}, { collection: 'forms' });
exports.FormsSchema.plugin(autoincrement, { field: 'id' });
//# sourceMappingURL=forms.model.js.map