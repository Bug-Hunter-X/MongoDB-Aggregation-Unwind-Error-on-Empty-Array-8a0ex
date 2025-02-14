```javascript
const pipeline = [
  {
    $lookup:
      {
        from: "collectionB",
        localField: "_id",
        foreignField: "foreignKey",
        as: "relatedDocs",
      }
  },
  {
    $unwind: "$relatedDocs" //This line might cause error if relatedDocs array is empty for some documents
  }
];
```