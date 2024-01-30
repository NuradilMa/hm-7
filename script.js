/* TASK-1*/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));

/* task-2 */
//output : 1 второй resolve будет делать игнор 


/* task-3 */

promise.then(f1).catch(f2);

promise.then(f1, f2);

/* Они не одинаковые потому-что в первом случае если будет ошибка то сразу будет выполниться catch, во втором нет такого если 
то скорее всего ошибка не будет, будет но токо не будет рендерится чтоле */
