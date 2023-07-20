import mongoose, { Schema } from "mongoose";

const schema = new Schema ({
	name: {type: String},
	tel: {type: String},
	frage: {type: String}
});

const Frage = mongoose.model('Frage', schema);

export { Frage };