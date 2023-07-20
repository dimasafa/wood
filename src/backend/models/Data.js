import mongoose, { Schema, Types } from "mongoose";


const schema = new Schema({
	owner: {type: Types.ObjectId, ref: 'User'},
	name: {type: String},
	surname: {type: String},
	age: {type: Number},
	land: {type: String},
	city: {type: String},
	plz: {type: Number},
	street: {type: String},
	house: {type: Number},
	completed: {type: Boolean}
});


const Data = mongoose.model('Data', schema);


export { Data };