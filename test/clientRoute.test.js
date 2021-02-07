

const login = require("../routes/index");
const request = require("supertest");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", login);


 

test("Index route Login check", done => {
  request(app)
    .post("/login")
    .expect("Content-Type", /json/)
    .expect(200, done);
});