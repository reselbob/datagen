#!/usr/bin/env node

import faker from 'faker';
import fs from "fs";
import path from 'path';

const args = process.argv;

let numberOfItems = 1000000;

function isInt(value) {
    let x;
    return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
  }

if(process.argv[2] && isInt(process.argv[2])){
    numberOfItems = process.argv[2] * 1000000;
}

const jsonFileName = 'big-data.json';

let message = `Creating a file named, ${jsonFileName} that stores an array of ${(numberOfItems).toLocaleString('en-US') } JSON objects with random data.`;

console.log(message);

const data = [];


for (let i = 0; i < numberOfItems; i++) {
    const user = {};

    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.email = `${user.firstName}.${user.lastName}@${faker.internet.domainName()}`;
    user.phone = faker.phone.phoneNumber();
    user.dob = faker.date.between(new Date('1/1/1949'), new Date('12/31/1999'));
    data.push(user);
}

fs.writeFile(jsonFileName, JSON.stringify(data), (err) => {
    if (err) {
        throw err;
    }
});


const absolutePath = path.resolve( './', jsonFileName);

message = `The file is saved to ${absolutePath}`;
console.log(message);