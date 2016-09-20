function quest(){
   
	    var min = 1;
	    var max = 100;
	
	    // Загадываем случайное число
	    var guessNumber = Math.floor ( Math.random () * ( max - min+ 1 )) + min;
	    alert ( "Компьютер загадал число от " + min + " до " + max + ". Угадайте его за 7 попыток!" );
	    // Номер попытки
	    var tryCount = 0;
	    var userAnswer;
	    do
	    {
		// Увеличиваем количество попыток на единицу
		tryCount = tryCount + 1;
		userAnswer =+ prompt ( tryCount + " попытка. Ваш вариант:" );
		
		if ( userAnswer > guessNumber )
		alert ( "Перелет" );
		if ( userAnswer < guessNumber )
		alert ( "Недолет" );
	    }
	    while ( userAnswer != guessNumber && tryCount < 7 );
	    if ( userAnswer == guessNumber ) alert ( "Поздравляем! Вы угадали!" );
		else alert ( "Вы проиграли! Попробуйте еще раз" );
        
}
