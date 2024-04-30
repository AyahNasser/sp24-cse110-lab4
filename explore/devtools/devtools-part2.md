
    1.What was the bug? The bug was that we are taking the number from the html file by ID meaning taking it as a string. 
    2.How would you fix it? As shown on the fix image included in my screenshots, I convrted the string taking from the html file to an integer for both num1 and num2, and to do that I did 
    parseInt(document. getElementyId("num1"). value));
