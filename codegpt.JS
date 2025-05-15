let Count = 0;
const totalQuestions = 10;

for (let i = 0; i < totalQuestions; i++) {
    let o = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);
    let operation = Math.random() < 0.5 ? '+' : '-'; // Случайно выбираем операцию

    let correctAnswer;
    if (operation === '+') {
        correctAnswer = o + j;
    } else {
        // Убедимся, что результат не будет отрицательным
        if (o < j) {
            [o, j] = [j, o]; // Меняем местами, если o меньше j
        }
        correctAnswer = o - j;
    }

    let Otvet = prompt(`${o} ${operation} ${j}`, '');

    if (parseInt(Otvet) === correctAnswer) {
        Count++;
        alert('Верно!');
    } else {
        alert('Неправильно.');
    }
}

alert(`Верно ${Count} из ${totalQuestions}`);