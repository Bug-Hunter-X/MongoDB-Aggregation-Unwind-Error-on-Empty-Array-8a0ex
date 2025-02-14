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
    $unwind:
      {
        path: "$relatedDocs",
        preserveNullAndEmptyArrays: true
      }
  }
];
```