const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    socialName: {
        type: String,
        require: false,
    },
    age: {
        type: Number,
        require: true,
    },
    CEP: {
        type: String,
        require: true,
    },
    CPF: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    Telefone: {
        type: String, 
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;