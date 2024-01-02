const myService = {
  exampleMethod: async (objectIds: string[]) => {
    // Simulate asynchronous fetching of objects based on objectIds
    return objectIds.map((objectId) => ({ id: objectId, object_id: objectId }));
  },
};

const rows = [
  { object_id: 'obj1' },
  { object_id: 'obj2' },
  { object_id: 'obj3' },
];

// Immediately Invoked Function Expression
(async () => {
  try {
    console.log('START of IIFE');
    // Your asynchronous code with top-level await here
    const result = new Map<string, object>(
      (
        await myService.exampleMethod(
          rows.map((object) => object.object_id)
        )
      ).map((object) => {
        return [object.id, object];
      })
    );
    // new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log('Async operation completed');
    //     resolve('Operation Result');
    //   }, 10000);
    // });
    // Log the result or other information
    console.log('Result IIFE:', result);
  } catch (error) {
    console.error('Error:', error);
  }
})();

async function myFunc() {
  console.log('START of Async Function');
  return new Map<string, object>(
    (
      await myService.exampleMethod(
        rows.map((object) => object.object_id)
      )
    ).map((object) => {
      return [object.id, object];
    })
  );
}
// Example usage
myFunc()
  .then((result) => {
    console.log('Result myFunc:', result);
  });


