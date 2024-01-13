import mongoose, { mongo } from 'mongoose'

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],

    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }
})

export const Patient = mongoose.model('Patient', patientSchema)