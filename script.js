function quest(){
   
	    var min = 1;
	    var max = 100;
	
	    // ���������� ��������� �����
	    var guessNumber = Math.floor ( Math.random () * ( max - min+ 1 )) + min;
	    alert ( "��������� ������� ����� �� " + min + " �� " + max + ". �������� ��� �� 7 �������!" );
	    // ����� �������
	    var tryCount = 0;
	    var userAnswer;
	    do
	    {
		// ����������� ���������� ������� �� �������
		tryCount = tryCount + 1;
		userAnswer =+ prompt ( tryCount + " �������. ��� �������:" );
		
		if ( userAnswer > guessNumber )
		alert ( "�������" );
		if ( userAnswer < guessNumber )
		alert ( "�������" );
	    }
	    while ( userAnswer != guessNumber && tryCount < 7 );
	    if ( userAnswer == guessNumber ) alert ( "�����������! �� �������!" );
		else alert ( "�� ���������! ���������� ��� ���" );
        
}
