import mongoose, { Schema, Types } from "mongoose";


const schema = new Schema({
	orderTime: {type: String},
	allOrder: {type: Object},
	sum: {type: Number},
	lieferung: {type: Number},
	bestellung: {type: Number},
	owner: {type: Types.ObjectId, ref: 'User'}
});


const Order = mongoose.model('Order', schema);


export { Order };