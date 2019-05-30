import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName : {
        type : String,
        required : 'Enter first name!'
    },
    lastName : {
        type : String, 
        required : 'Enter last name!'
    },
    company: {
        type: String            
    },
    phone: {
        type: Number            
    }
},{
    timestamps: true,
});

export const Contact = mongoose.model('Contact', ContactSchema);