# SexEd_MapInteractive

Interactive map that shows the state of sex education in the United States, reflecting 2021 data from Guttmacher Institute.
When the user clicks on a square which represents a state, a card with different criteria shows up telling the user what the sex education laws
are in that state.

Seperate HTML files handle the different aspects of the visualization. 
Index.html lays out where the map will be with a legend, a title, and a caption underneath that can reflect where the information comes from or name who created it.
map.html uses method draw to create the 50 rectangles that will represent the different states. This also assigns the different classes and ids that will later
be used with the card.html.
card.html uses bootstraps to create the layout of the card. 
The Javascript assigns values to each state based on the id and a json file containing the true or false values for each state. 
JQuery is used to add or take away the class that will add either a checkmark or an x depending on the json data. The card also has an expand function
that offers different resources. 



to start the project; install python3, open your terminal and select folder where project is and enter python3 -m http.server 
this will start a python server which will start the web service. Type localhost:8000 in browser to see the graph.


