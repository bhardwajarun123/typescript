
// any ---> any switch off the power of typescript so that we can assign data into any variable but in unknown its not happen


// let data:any;
// data = 10;
// data = "a"
// data = true

// let item:string;
// item = data;

let data:unknown;
data = 10;
data = "a"
data = true

let item:string;
if(typeof data === "string"){
    item = data;
}