// testing inst db if it has id, name, access_token, item_id
process.env.NODE_ENV = "test";
const mocha = require("mocha");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect; 

// path to controller and to database
const Institution = require("../../db/models/inst.js");
const PlaidControl = require("../../api/controllers/plaidController.js");


// PRIORITY test if access_token and bank institution name are returned by API Plaid

// PRIORITY test if the bank name and access token above are saved to db
describe("Database Tests", function () {
    // before starting test, created a sandbox database connection
    before(function (done) {
        mongoose.connect("mongodb://localhost/willsdevdbformoneytrees");
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error"));
        // once a connection invoke done ()
            db.once("open", function () {
                console.log("we are connected to test db")
                done();
            });
        });
    });

    // create a new schema that accepts id, name, access token, and item id
// const instTestSchema = new Schema({
//     access_token: link.access_token,
//     bank_name: inst_data.name,
// });

// describe("Test database", function () {
//     // save object with "name" value of "mike"
//     it("new name saved to test db", function (done) {
//         var testName = Name({
//             name: "Mike"
//         });
//         testName.save(done);
//     });
// });

// test if account object is returned and saved to db (with account id and name of acct)
// PRIORITY test if it allows random other data into db and it returns an error
// the files used are plaid.js, plaidcontroller, and itemcreator 


//     it("Don't save incorrect format to db", function (done) {
//         // attempt to save wrong info, an error shoudld trigger
//         var wrongSave = Name({
//             notName: "Not Mike"
//         });

//         wrongSave.save(err => {
//             if (err) {
//                 return done();
//             }
//             throw new Error("Should generate error");
//         });
//     });

//     it("Should retrieve data from test db", function (done) {
//         // look up the "mike" object previously saved
//         Name.find({
//             name: "Mike"
//         }, (err, name) => {
//             if (err) {
//                 throw err;
//             }
//             if (name.length === 0) {
//                 throw new Error("No data!");
//             }
//             done();
//         });
//     });

