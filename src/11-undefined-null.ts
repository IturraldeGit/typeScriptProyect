(()=>{
  // let myNumber: number = undefined;
  // let myString: string = null;

  // null and undefined are no infered as types but as any
  // let myNull = null;
  // let myUndefined = undefined;

  //  We can use null and undefined as types
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;

  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = "Hello";

  function hi(name: string | null) {
    let hello = `Hello ${name ? name : "stranger"}`;
    // let hello = name?.toLowerCase() || "stranger";
    console.log(hello);
  }

  hi("John");
  hi(null);

})();
