function Task_1(){
    let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
    let shoppingCart = fruits;
    shoppingCart.push("Банан");
// что в fruits?
    alert( fruits ); // выведет 4 и в этом массиве будет банан, т.к масивы как и обьекты передаються по ссылке
}
//Task_1();

function Task_2(){
    let styles = [`Джаз`,`Блюз`,];
    styles.push(`Рок-н-ролл`);
    styles[Math.floor((styles.length)/2)] = `Классика`;
    alert(styles.shift());
    styles.unshift(`Рэп`, `Регги`)
}
//Task_2()

// function Task_3(){
    //Каков результат? Почему?
    //     let arr = ["a", "b"];
    // arr.push(function() {
    //     alert( this );
    // })
    // arr[2]();
    // будет выведен массив, т.к мы закидываем функцию как метод, а потом ее вызываем и this нам возвращает массив arr












