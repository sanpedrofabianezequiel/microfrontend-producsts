import faker from 'faker';


if(process.env.NODE_ENV === 'development'){
  const el =  document.querySelector('#dev-products');

  //Assuming our container does not have an element
  if(el){
    //we are propably running in isolation
    mount(el);
  }
}
const mount =(el)=>{

  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  
  el.innerHTML = products;
  //Example in react
  //ReactDOM.render(<App />,el);
}



export {mount}; 