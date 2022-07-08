

let start_date = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
let secondDay = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
let thirdDay = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
let fourthDay = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
let fifthDay = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
let sixthDay = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
let end_date = new Date().toISOString().split('T')[0];



let button = document.getElementById('triggerBtn');



button.addEventListener('click', function(e){
    e.preventDefault()
    async function search() {
        const inputValue = document.getElementById("inputField").value.trim();
        if(!inputValue) return alert("Enter an API KEY.");
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${inputValue}`;
        try {
          const res = await fetch(url);
          if(!res.ok) throw new Error("Please Input Correct NASA API Key");
          const myData = await res.json();
          appendDatatoHTML(myData);
        } catch(err) {
          alert(err);
        }
        document.getElementById('inputField').value = '';
      }
      search()
})
 

   

     function missesDistance(Instance) {
        return Instance.close_approach_data[0].miss_distance.miles;
     }



function appendDatatoHTML(myData) {
    let near_earth_objects = myData.near_earth_objects;
    console.log(near_earth_objects);
   
    // reusable functions for each day instance
    function dateInstance(Instance) {
            return near_earth_objects[Object.keys(near_earth_objects)[Instance]]
         }
        
       
        //  assigning variables to each day instance
         let testDate = dateInstance(0)
         let testDate1 = dateInstance(1)
         let testDate2 = dateInstance(2)
         let testDate3 = dateInstance(3)
         let testDate4 = dateInstance(4)
         let testDate5 = dateInstance(5)
         let testDate6 = dateInstance(6)


        
      

        // Average Diameters
        let firstDayAverageDiameter = testDate.map((x) =>{ return (x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min) / 2});
       
        let secondDayAverageDiameter = testDate1.map((x) =>{ return (x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min) /2});
       
        let thirdDayAverageDiameter = testDate2.map((x) => {return (x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min) /2});
       
        let fourthDayAverageDiameter = testDate3.map((x) =>{return (x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min) /2});
        
        let fifthDayAverageDiameter = testDate4.map((x) => {return (x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min)/2 });
       
        let sixthDayAverageDiameter = testDate5.map((x) =>{ return (x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min)/2 });
      
        let seventhDayAverageDiameter = testDate6.map((x) =>{ return(x.estimated_diameter.miles.estimated_diameter_max-x.estimated_diameter.miles.estimated_diameter_min)/2 });
        
        // Total average diameter for each day
        let day1TotalDiameter = firstDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day1TotalDiameter = parseFloat(day1TotalDiameter).toFixed(3) ;
        let day2TotalDiameter = secondDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day2TotalDiameter = parseFloat(day2TotalDiameter).toFixed(3) ;
        let day3TotalDiameter = thirdDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day3TotalDiameter = parseFloat(day3TotalDiameter).toFixed(3) ;
        let day4TotalDiameter = fourthDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day4TotalDiameter = parseFloat(day4TotalDiameter).toFixed(3) ;
        let day5TotalDiameter = fifthDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day5TotalDiameter = parseFloat(day5TotalDiameter).toFixed(3) ;
        let day6TotalDiameter = sixthDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day6TotalDiameter = parseFloat(day6TotalDiameter).toFixed(3) ;
        let day7TotalDiameter = seventhDayAverageDiameter.reduce((a, b)=>a + b, 0);
        day7TotalDiameter = parseFloat(day7TotalDiameter).toFixed(3) ;

        // Miss Distance
        let day1MissDistance = testDate.map(x => x.close_approach_data[0].miss_distance.miles)
        let day2MissDistance = testDate1.map(x => x.close_approach_data[0].miss_distance.miles)
        let day3MissDistance = testDate2.map(x => x.close_approach_data[0].miss_distance.miles)
        let day4MissDistance = testDate3.map(x => x.close_approach_data[0].miss_distance.miles)
        let day5MissDistance = testDate4.map(x => x.close_approach_data[0].miss_distance.miles)
        let day6MissDistance = testDate5.map(x => x.close_approach_data[0].miss_distance.miles)
        let day7MissDistance = testDate6.map(x => x.close_approach_data[0].miss_distance.miles)
    
    
        // Total Miss Distance for each day
        let day1TotalMissDIstance = day1MissDistance.reduce((a, b)=>a + b, 0);
       day1TotalMissDIstance = parseFloat(day1TotalMissDIstance).toFixed(2) ;
       
        let day2TotalMissDIstance = day2MissDistance.reduce((a, b)=>a + b, 0);
       day2TotalMissDIstance = parseFloat(day2TotalMissDIstance).toFixed(2) ;

        let day3TotalMissDIstance = day3MissDistance.reduce((a, b)=>a + b, 0);
       day3TotalMissDIstance = parseFloat(day3TotalMissDIstance).toFixed(2) ;

        let day4TotalMissDIstance = day4MissDistance.reduce((a, b)=>a + b, 0);
       day4TotalMissDIstance = parseFloat(day4TotalMissDIstance).toFixed(2) ;

        let day5TotalMissDIstance = day5MissDistance.reduce((a, b)=>a + b, 0);
       day5TotalMissDIstance = parseFloat(day5TotalMissDIstance).toFixed(2) ;

        let day6TotalMissDIstance = day6MissDistance.reduce((a, b)=>a + b, 0);
       day6TotalMissDIstance = parseFloat(day6TotalMissDIstance).toFixed(2) ;

        let day7TotalMissDIstance = day7MissDistance.reduce((a, b)=>a + b, 0);
       day7TotalMissDIstance = parseFloat(day7TotalMissDIstance).toFixed(2) ;

// Line chart functions
let ctx = document.getElementById('myChart')
 
let myChart = new Chart(ctx,  {
    type: 'line',
    data: {
        labels: [day1TotalDiameter,day2TotalDiameter, day3TotalDiameter, day4TotalDiameter, day5TotalDiameter, day6TotalDiameter, day7TotalDiameter],
       
        datasets: [{
            label: 'Miss distance  - Av. est. dm ',
            data: [day1TotalMissDIstance, day2TotalMissDIstance, day3TotalMissDIstance, day4TotalMissDIstance, day5TotalMissDIstance, day6TotalMissDIstance, day7TotalMissDIstance],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: false
     }
})

function tableLoad() {
    let asteroidValues = document.getElementById('tableSection');
    let tabledateHeader = "Date";
    let tableAverageDiameter = "Average asteroid diameter";
    let tableMissHeader = "Miss Distance";
    
    let output = ""
    output += `
    <h5>Chart Table</h5>
    <table>
    <tr>
    <th>${tabledateHeader}</th>
    <th>${tableAverageDiameter}</th>
    <th>${tableMissHeader}</th>
    </tr>
    <tbody>
    <tr>
    <td>${start_date}</th>
    <td>${day1TotalDiameter}</th>
    <td>${day1TotalMissDIstance}</th>
    </tr>
    <tr>
    <td>${secondDay}</th>
    <td>${day2TotalDiameter}</th>
    <td>${day2TotalMissDIstance}</th>
    </tr>
    <tr>
    <td>${thirdDay}</th>
    <td>${day3TotalDiameter}</th>
    <td>${day3TotalMissDIstance}</th>
    </tr>
    <tr>
    <td>${fourthDay}</th>
    <td>${day4TotalDiameter}</th>
    <td>${day4TotalMissDIstance}</th>
    </tr>
    <tr>
    <td>${fifthDay}</th>
    <td>${day5TotalDiameter}</th>
    <td>${day5TotalMissDIstance}</th>
    </tr>
    <tr>
    <td>${sixthDay}</th>
    <td>${day6TotalDiameter}</th>
    <td>${day6TotalMissDIstance}</th>
    </tr>
    <tr>
    <td>${end_date}</th>
    <td>${day7TotalDiameter}</th>
    <td>${day7TotalMissDIstance}</th>
    </tr>
    </tbody>
    </table>
    
    `
    asteroidValues.innerHTML = output
} 

tableLoad()


}

