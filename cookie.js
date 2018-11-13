function WriteCookie()
            {
               if( document.myform.customer.value == "" ){
                  alert("Enter some value!");
                  return;
               }
               cookievalue= escape(document.myform.customer.value);
               document.cookie="name=" + cookievalue;
               document.write ("Welcome to the website");
               document.write (cookievalue); 
            }