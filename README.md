# MongoDB Aggregation Unwind Error on Empty Array

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines. The `$unwind` operator is used to deconstruct an array field from the input documents to output a document for each element. However, if the array field is empty for a document, the `$unwind` operation will throw an error.

The `bug.js` file contains the erroneous code that causes this error. The `bugSolution.js` file provides a solution that handles cases where the array field might be empty.