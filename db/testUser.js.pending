// testing user in db has id, name, access_token, item_id
"use strict";

const mocha = require("mocha");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect;

// path to file 
var User = require("../../db/models/user.js")

// create a new schema that accepts id, name, access token, and item id
const testSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

// create a new collection called name 
const Name = mongoose.model("Name", testSchema);

describe('Database Tests', function () {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before(function (done) {
        mongoose.connect('mongodb://localhost/willsdevdbformoneytrees');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('We are connected to test database!');
            done();
        });
    });

    // test if we can save a user in db 
describe("User Tests", function () {
    // save obj with name value of Panchita 
    it("new name saved to test db", function (done) {
        var testName = Name({
            name: "Panchita"
        });
        testName.save(done);
    });
    it("Don't save incorrect format to db", function (done) {
        // attempt to save wrong info, an error shoudld trigger
        var wrongSave = Name({
            notName: "Not Panchita"
        });
        wrongSave.save(err => {
        if (err) { return done();
        }
        throw new Error("Should generate error");
        });
    
    });
    });

});

// //     it("Should retrieve data from test db", function (done) {
// //         // look up the "mike" object previously saved
// //         Name.find({
// //             name: "Mike"
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
