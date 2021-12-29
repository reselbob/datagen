# Big Data Generator for JSON

* Examples
* Installation
* Your first run

This project is a command line utility that generate a file that stores an array of at least 1 million JSON objects.

Each JSON object will have random data structured in the following format:

```
{
  "firstName": "Francisco",
  "lastName": "Walter",
  "email": "Francisco.Walter@adolfo.com",
  "phone": "411-353-7106 x48811",
  "dob": "1980-02-12T10:14:18.540Z"
}
```

The structure of the command is:

```
data-gen.js <# of objects to generate in millions (optional)>
```

# Examples

**Example 1:** To generate a file with 1 million objects, execute the following code

```
/data-gen.js
```

Remember, the default number of JSON objects that will be generated is 1 million

**Example 1:** To generate a file with 5 million objects, execute the following code

```
/data-gen.js 5
```

# Installation

`Step 1:` Get the source code from GitHub

```
git clone https://github.com/reselbob/datagen.git
```

`Step 2:` Go to the working directory for the Node.js version of the data generator

```
cd ./datagen/big-data-json/readme.md
```

`Step 3:`  Install the dependencies

```
npm install
```

`Step 4:`  Make the main file executable

```
chmod +x data-gen.js 
```

# Your first run

To create a file with 2 million JSON objects with random data, execute the following command

```
./data-gen.js 2
```


