let stu1 = {
    name: 'Togrul',
    surname: 'Quluzade',
    adress: "keshle",
    age : 23
  };
  let stu2 = {
    name: 'Fidan',
    surname: 'Mardanli',
    adress: "Sherq",
    age : 17
  };
  let stu3 = {
    name: 'Haqverdi',
    surname: 'Mustafayev',
    adress: "Hezi",
    age : 26
  };
  let stu4 = {
    name: 'Seadet',
    surname: 'Murseliyeva',
    adress: "Genclik",
    age : 19
  };

  let arr = [stu1,stu2,stu3,stu4];

  localStorage.setItem("arr",JSON.stringify(arr));

  let neyse = JSON.parse(localStorage.getItem("arr"));

  console.log(neyse);
