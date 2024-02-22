const monObjet = {
  nom: "Olivier Robert-Duboille",
};
monObjet.age = 10;

monObjet["sujet"] = "La technique en général";
console.log(monObjet);

//L'objet natif Object et quelques méthodes :
console.log(Object);

const promise01 = fetch("https://jsonplaceholder.typicode.com/users");
promise01.then(async (response) => {
  console.log(response);
  const data = await response.json();
  console.log(data);
  // console.log(JSON.stringify(data));
  console.log(data);
  // console.log(data[1]);
  console.log(Object.keys(data));
  // console.log(Object.entries(data));
  console.log(Object.values(data));

  const descriptor = Object.getOwnPropertyDescriptor(data[1], "name");
  console.log(descriptor);

  Object.defineProperty(data[1], "name", {
    writable: false,
    value: "Olivier",
  });

  data[1].name = "Olivier";
  console.log(data[1].name);
});
