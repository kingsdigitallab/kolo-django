# kolo Workshop Material
Repository for King's Collaborator Locator (KoLo)

## DISCLAIMER

<b>Disclaimer</b>: this is an incomplete prototype put together only for 
running a workshop. It is not a recommended solution, just a 
support material for explaining the way you could build your front-end app.

## One-off initial set up

### Install the Database Manager (CouchDB)

* download kitematic from the web
* install it on your machine
* run kitematic 
* search for couchdb
* look at the first item in the result (labelled 'official')
* click the ... at the bottom right of the little box
* click the blue 'latest'
* click 1.6.1
* click the little blue cross in the bottom right corner of th little box
* click 'Create'

### Install the prototype

* create a folder 'kolo'
* cd into 'kolo'
* git clone git@github.com:kingsdigitallab/kolo-django.git
* copy the 'confidential' folder into 'kolo'
* edit confidential/settings.js
* ...

## Data Import [TBC]

### Prepare and upload the data

* Visit the kolo-person sheet on Google
* Export it as CSV
* Rename is as people.csv
* Move it into your confidential folder
* Browse the import.html webpage
* Press the import button

## (Re)starting the environment

### CouchDB

* start Kitematic
* click chouchdb in the left panel
* check if the chouchdb container is started (green circle)
* if the circle is grey, click 'star' button in the horizontal toolbar near the top
* for first time:
** take note of the 'Access URL' in the right panel (localhost:XXXX)
** go to http://localhost:32768/_utils/config.html
** set credentials = true
** add cores, origins, *
** set enable_cors = true 

### Local web server

* set confidential/settings.js to 'http://localhost:XXXX/kolo' (see above for the value of XXX)
* open the terminal
* cd into bin
* python web.py
* visit the URL shown by the script (http://localhost:9000/YYYY)

# Libraries

Libraries you could you for your app:

* <a href="https://vuejs.org/v2/guide/">Vue.js</a>: a client-side html templating system. Generates UI from json data.
* <a href="http://bulma.io/documentation/overview/start/">Bulma</a>: a minimal CSS framework that works well with Vue.js
* <a href="https://pouchdb.com/getting-started.html">PouchDB</a>: a javascript library to manipulate CouchDB data
