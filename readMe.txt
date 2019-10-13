Deployment step of nodejs application on Heroku:-
Step 1: First install the helmet using this command :
        npm install --save helmet
Step 2: Install compression using the following command : 
        npm install --save compression

Step 3: Then create a file production.js and require the file in the app.js
Step 4: Then install the heroku cli according to your system os. For linux use this command:
        sudo snap install --classic heroku

Step 5: Then login to heroku using terminal by using this command : 
        heroku login --> then enter email id and password
Step 6: Then set the proxy using this command:
            export HTTP_PROXY=http://proxy.server.com/1234

Then prepare application for deployment....

Step 1: Set the npm start in package.json 
Step 2: Then add the engine object in the package.json
            "engines":{
                "node": "version of node you are using"
            }

Start deployment of the application
Step 1: heroku create then use command to use code on heroku:
        git push heroku master
Step 2: Then go to heroku project repo then click add-ons and select mLab mongodb
Step 3: ANy thing
