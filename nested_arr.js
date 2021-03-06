function find(array, criteriaFn) {
  let current = array;
  let next = [];
  
  while (current || current === 0) {
    if (criteriaFn(current)) {
      return current;
    }
    
    if (Array.isArray(current)) {
      for(let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    
    current = next.shift();
  }
  
  return null;
}

const numberCollections = [1, [2, [4, [5, [6]], 3]]];

console.log(find(numberCollections, num => num > 5));