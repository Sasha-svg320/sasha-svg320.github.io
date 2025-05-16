let count = 0;
let o, j;
let otvet;
let c = 0;
while (c < 5) {
  o = Math.floor(Math.random() * 10);
  j = Math.floor(Math.random() * 10);
  otvet = prompt(`${o} + ${j} пример ${c + 1}/10`, '');
  if (parseInt(otvet) === o + j) {
    alert('Верно!');
    count++;
  } else {
    alert('Неправильно.');
  }
  c++;
}
while (c < 10) {
  o = Math.floor(Math.random() * 10);
  j = Math.floor(Math.random() * 10);
  if (o < j) {
    otvet = prompt(`${j} - ${o} пример ${c + 1}/10`, '');
    if (parseInt(otvet) === j - o) {
      alert('Верно!');
      count++;
    } else {
      alert('Неправильно.');
    }
  } else {
    otvet = prompt(`${o} - ${j} пример ${c + 1}/10`, '');
    if (parseInt(otvet) === o - j) {
      alert('Верно!');
      count++;
    } else {
      alert('Неправильно.');
    }
  }
  c++;
}

alert(`Верно ${count} из ${c}`);
