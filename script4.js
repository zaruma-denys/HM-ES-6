let arr4 = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
  ];
  
  if (arr4.some(obj => obj.country === 'Cuba')) {
    console.log('True');
  } else {
    console.log('False');
  }
