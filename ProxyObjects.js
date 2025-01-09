const target = {
    message: 'Hello, Proxy!'
  };
  
  const handler = {
    get(target, prop) {
      console.log(`Property '${prop}' was accessed.`);

      if(prop in target) {
        return target[prop];
      }else{
        return `Property '${prop}' does not exist`;
      }
    }
  };
  
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.message); 
  console.log(proxy.title);  
  