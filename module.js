export function myEsModuleExportedFunction() {
  return "elephant";
}

export function check = () => {
  lookup(value, ((err, result) => {
    if (err === null) {
      showIP.innerText = result;
    } else {
      showIP.innerText = err.message;
    }
  }));
};