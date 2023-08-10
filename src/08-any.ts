(()=>{
  let myDynamicVar : any;
  myDynamicVar = 2017;
  myDynamicVar = null;
  myDynamicVar = true;
  myDynamicVar = 'Hello';

  // Is recomended to NOT use any.
  // Use it only when you need to.
  // Ususally is used when you don't know the type of the variable.
  // Like when you are workin on a legacy code and you don't know the type of the variable.

  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1221;
  const rta2 = (<number>myDynamicVar).toPrecision(3);
  console.log(rta2);
})();
