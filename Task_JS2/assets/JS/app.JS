
    alert("Данная страница определяет количество простых чисел до 1000 и выводит их");
    // let x = +prompt("Введите целое число для проверки");
    // console.log(`Число - ${x}`)

    // let prime_number = true;
     
    
    // for(let i = 2; i < (x - 1); i++) {
    //     console.log(` I = ${i}`);
    //     let operation = x % i;
    //     // console.log(` I = ${i}`);
    //     console.log(`${x} % ${i}`);
    //     console.log(`Operation = ${operation}`);

    //     if(operation == 0) {
    //         console.log(`${operation}`)
    //         prime_number = false;
    //         alert(`Число ${x} - не простое`)
    //         break; 
    //     }
    //     // else {
    //     //     continue;
    //     // }


    // }
    
    // if(prime_number){
    //     alert(`Число ${x} Простое`);
    // }

    let number = 1000;
    let show_numbers = [1, ]
    let prime_numbers = true;
    

    for(let x = 3; x < number; x++) {

        prime_numbers = true;

         for(let j = 2;  j < x; j++) {
            // console.log(`x = ${x}, j = ${j}`);
            let operation = x % j;
            // console.log(`${x} % ${j}`);
            // console.log(`Operation = ${operation}`);

            if(operation == 0) {
                // console.log(`${operation}`);
                prime_numbers = false;
                // alert(`Число ${x} - не простое`)
                break; 
            }
           

        }

        if(prime_numbers) {
            console.log(x)
            show_numbers.push(x);
        } 
        
    }

    alert(` Простые числа от 1 до 1000: ${show_numbers}`);


    




        