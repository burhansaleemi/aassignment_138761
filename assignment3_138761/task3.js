var ar1 = ["red" , "green" , "blue"] , i = 0;
document.write("Array = " , ar1 , "<br>");
ar1.unshift(prompt("Enter the color which you wants to add to the beginning of the array"));
document.write("Array = " , ar1 , "<br>");
ar1.push(prompt("Enter the color which you wants to add to the end of the array"));
document.write("Array = " , ar1 , "<br>");
ar1.unshift("yellow" , "orange");
document.write("Array = " , ar1 , "<br>");
ar1.shift();
document.write("Array = " , ar1 , "<br>");
ar1.pop();
document.write("Array = " , ar1 , "<br>");
i = prompt("Enter that index (start counting from 1) of the array after which you want to add a color");
ar1.splice(i , 0 , prompt("Enter the color name which you want to add after index " + i));
document.write("Array = " , ar1 , "<br>");
i = prompt("Enter that index (start counting from 1) of the array after which you want to delete color(s)");
ar1.splice(i , prompt("Enter the number of color(s) which you want to delete after index " + i));
document.write("Array = " , ar1);