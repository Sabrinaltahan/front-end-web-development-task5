The purpose of the task is to:

Familiarize yourself with new technology.
Using FetchAPI calls along with async/await to fetch data from external source.
Using different types of charts to visually present some form of data/statistics.
Be able to use SASS to facilitate development with CSS.
Practical use of the development environment you created in previous steps.

Task
Moment 5 - Dynamic websites
In this task, you must further develop your website from the previous laboratory in Moments 3 & 4.

Create two new HTML pages that you name "Diagram" and "Map", make sure these are linked in the main menu. You will work with these subpages in this lab.

The task is divided into two parts:

Part 1 - Charts
In this task, you will create two different types of charts, a bar chart and a pie chart.

These charts should be available to view under the "Charts" HTML page.

There are various JavaScript libraries to insert the charting functionality into your project. For example:

Chart.js
Chartist.js
D3.js
The data to be presented visually in the charts should be fetched from external source using FetchAPI calls along with async/await.

You can either use an external URL: Admission statistics HT2023

Or download and include the JSON file among your own project files: Admission statistics HT2023 (click the link -> right click -> "Save as").

Requirements for the task:

Bar chart - should show statistics on the 6 most searched courses at Mittuniverstetet, HT23. The name of the course and the total number of applicants must appear in the diagram.
Pie chart - should show statistics on the 5 most searched programs at Mittuniverstetet, HT23. The name of the program and the total number of applicants must appear in the diagram.
Part 2 - Map
In this part, you will use an external API to attach a map to the website. There are several different solutions to this. Suggested:

Combine the Nominatim API to get coordinates (latitude and longitude) with OpenStreetMap as an embedded iframe.
Google Maps - Developers get $200 in credit to use for Google Maps API calls per month per user (1000 calls cost $2).
Requirements for the task:

There should be a text field somewhere on the page where the user can enter a location.
When selecting a location, AJAX calls (Fetch, Import or similar to an external source) must be made to the selected map service.
The location should be visually displayed on the map with the selected location marker.