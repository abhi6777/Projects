const os = require("os");
const { json } = require("stream/consumers");

// Finds out the cpu architecture
console.log("cpu architecture > " + os.arch());

// finds out the free memory in the disk
console.log("Free Memory > " + os.freemem());

// finds out the total memory 
console.log("Total Memory > " + os.totalmem());

// finds out the Network interface
console.log("Network Interface > " + JSON.stringify(os.networkInterfaces()));

// Finds out the temporary default File 
console.log("Temporary File > " + os.tmpdir());

// Finds out the cpu's byte order that it is little endian or Bid endian
console.log("cpu's byte order > " + os.endianness());

// Finds out the hostname of the system
console.log("Cpu's HostName  > " + os.hostname());

// Finds out type of os used 
console.log("Type of os > " + os.type());

// Finds out which PLateform is used 
console.log("Plate Form Type > " + os.platform());

// Finds out which version of os is used
console.log("Releases > " + os.release());
