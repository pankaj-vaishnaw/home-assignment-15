# index.html
in this file we are having the heading tag to show the text 
then we have vreated a form which  contains input and a button and 
after that we are creating a div to sow the images 
and then we have one more button to show the more contents of the images 


 # index.js 
 in this file we creating a variavle which stores the api key 
 then we are selecting the elements based on their id 
 then we have added a event listener to the  search which is submit 
 then we are applying the e.prevent default to change the default beahavior of the for input
 then we are resting the page value 1 when the new search iis performed 
 then we are storing the value inside the query input in the query  than if query is null than return value will be null
 then we have a try block which fetches the data based on parameters and it will give response in json format 
after than we are checking the condition that data.result is greater than 0 than it will display the data in the form of block styiling means image will be shown in the form of block 
else we are printing the result as not found 
and setting the property of show more button as none 
after that if there is any error than console will print the error and a message will be displayed that an erroe occured 
than we have one more event listener to increase the value of page 
then we have try block which will help to fetch the more data based on query and page and then we are storing the data in data variable 
then we are checking the condition and appending the data.results else it will hide the show more button and if there is any error in the catch block show more button will not be visible as there would be no data 
then we have a function called display image which coontains the set the property as empty and it will call append child metod 
after that we have append child method which will do for each imaeg we are creating a dive and adding the class as image-card 
then we are creating one more child element which is img tag  and we are storing the value inside the variable afet that
we are creating a p tag which will show the text of author on image card 
then we are appending both the child to the image card and image card will be displayed in imege container
          

       