document.getElementById('mode-toggle').addEventListener('click', function() {
    // Toggle theme class on body
    document.body.classList.toggle('dark');
});

window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');
    loader.style.display = 'none'; 
});


document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});


// Function to fetch data from the external source
async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData().then(data => {
    console.log('Data fetched:', data);
    createBarChart(data);
    createPieChart(data);
});


// Function to create a bar chart
function createBarChart(data) {
    try {
        const coursesData = data.filter(entry => entry.type === 'Kurs');
        const topCourses = coursesData.slice(0, 6); // Select the top 6 courses

        const courseNames = topCourses.map(course => course.name);
        const totalApplicants = topCourses.map(course => parseInt(course.applicantsTotal)); // Convert to integers

        // console.log('Course Names:', courseNames);
        // console.log('Total Applicants:', totalApplicants);

        const ctx = document.getElementById('barChart').getContext('2d');
        if (ctx) {
            const barChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: courseNames,
                    datasets: [{
                        label: 'Total Applicants',
                        data: totalApplicants,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        } else {
            console.error('Failed to create bar chart: Canvas element not found');
        }
    } catch (error) {
        console.error('Error creating bar chart:', error);
    }
}

// Function to create a pie chart
function createPieChart(data) {
    try {
        const programsData = data.filter(entry => entry.type === 'Program');

        programsData.sort((a, b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal));

        const topPrograms = programsData.slice(0, 5); // Select the top 5 programs

        const programNames = topPrograms.map(program => program.name);
        const totalApplicants = topPrograms.map(program => parseInt(program.applicantsTotal));

        // console.log('Program Names:', programNames);
        // console.log('Total Applicants:', totalApplicants);

        const ctx = document.getElementById('pieChart').getContext('2d');
        if (ctx) {
            const pieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: programNames,
                    datasets: [{
                        label: 'Total Applicants',
                        data: totalApplicants,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });
        } else {
            console.error('Failed to create pie chart: Canvas element not found');
        }
    } catch (error) {
        console.error('Error creating pie chart:', error);
    }
}



//map
document.getElementById('search-button').addEventListener('click', searchLocation);

async function searchLocation() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
        const data = await response.json();
        if (data && data.length > 0) {
            const { lat, lon } = data[0];
            showMap(lat, lon);
        } else {
            alert('Location not found.');
        }
    } catch (error) {
        console.error('Error fetching location:', error);
        alert('Failed to fetch location. Please try again later.');
    }
}

function showMap(lat, lon) {
const mapContainer = document.getElementById('map-container');
const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lon},${lat},${lon},${lat}&layer=mapnik`;
const markerUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`;
mapContainer.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${url}"></iframe><br/><small><a href="${markerUrl}" target="_blank">View Marker</a></small>`;
}