console.log('Starting app');

setTimeout(()=>{
  console.log('in callback one');
},2000);

setTimeout(()=>{
  console.log('callback 2 with zero delay');
},0000);


console.log('Finishing app');
