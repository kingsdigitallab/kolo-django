# kolo-django
Repository for King's Collaborator Locator (KoLo)

## Project set up

* create a folder 'kolo'
* install the git project into 'kolo'
* copy the 'confidential' folder into 'kolo'
* edit confidential/settings.js

## Data Import

### Run a local webserver

* open the terminal
* cd into bin
* python web.py
* visit the URL shown by the script

### Prepare and upload the data
* Visit the kolo-person sheet on Google
* Export it as CSV
* Rename is as people.csv
* Move it into your confidential folder  
* Browse the import.html webpage

# Libraries

Libraries you could you for your app:

* <a href="https://vuejs.org/v2/guide/">Vue.js</a>: a client-side html templating system. Generates UI from json data.
* <a href="bulma.io">Bulma</a>: a minimal CSS framework that works well with Vue.js
* <a href="https://pouchdb.com/getting-started.html">PouchDB</a>: a javascript library to manipulate CouchDB data
