const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://127.0.0.1:27017/produtos_db';

async function conectar() {
    await mongoose.connect(MONGO_URL);
    console.log('Conectado ao MongoDB');
}

module.exports = conectar;

async function conectarx() {
    await mongoose.connect(MONGO_URL);
    console.log('Conectado ao MongoDB');
}

module.exports = conectar;

async function conectarx() {
    await mongoose.connect(MONGO_URL);
    console.log('Conectado ao MongoDB');
}

module.exports = conectar;