let squarer;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('./../Wasm/squarer.wasm')
  .then(instance => {
    squarer = instance.exports._Z7squareri;
    document.getElementById("scratchpad").innerHTML = squarer(2);
	
    console.log('Finished compiling! Ready when you are...');
  });
