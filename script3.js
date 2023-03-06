let arr3 = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
  ];
  
  let allFromUkraine = arr3.every(obj => obj.country === 'Ukraine');
  
  console.log(allFromUkraine);