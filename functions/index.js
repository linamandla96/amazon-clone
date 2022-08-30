const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("");
const { spawn } = require('child_process')

// - API

// - APP Config
const app = express();
// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());
// - API Routes
app.get('/', (req, res) => res.status(200).send("Hello"));
// - Listen Commands
exports.api =functions.https.onRequest(app);
