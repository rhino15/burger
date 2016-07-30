# Burger App Using Node, Express, and MVC

This app uses the MVC model to talk to the server and browser coupled with JawsDB.
It's a simple app, and it allows the user to enter any burger they want.

![homepage](https://cloud.githubusercontent.com/assets/8932227/17272862/6e96a30c-5667-11e6-8fa0-4ac8d4b28f3a.PNG)

When you add a burger, and hit the 'Order Up!'' button, it will populate the new burger into the menu column by the browser speaking to the controller.  Then the controller will speak to the server, and the server will bring back a response via the controller to the browser.

![orderbutton](https://cloud.githubusercontent.com/assets/8932227/17272884/50cbe7aa-5668-11e6-911c-111b714ad8c2.PNG)

![menucol](https://cloud.githubusercontent.com/assets/8932227/17272891/973b282c-5668-11e6-85c4-cd9558da5bfe.PNG)

If you hit the 'Nom Nom Nom' button, it will then talk to the controller again and will update the server to have the devoured field change to true.  Then it will populate the 'MMMM' column.  

![devoured](https://cloud.githubusercontent.com/assets/8932227/17272909/2cc10916-5669-11e6-969d-50ee850a72c0.PNG)

I then added a delete button to create a complete CRUD app.  Great exercise to learn this model.

![delete](https://cloud.githubusercontent.com/assets/8932227/17272929/6e573e86-5669-11e6-9cf8-0e0f99e29a77.PNG)