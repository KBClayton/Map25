
$(document).ready(function() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function wait() {
        await sleep(1500);
    }
      
    wait().then(function(){
        var water_points = {
            draw: function(){
                var location_001={lat: 28.85807860419282, lng:  -96.52963887348118} 
                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "measure point 1 headwaters"
                });
                point_001.setMap(map);             
                
                 var location_002={lat: 28.81641876970863, lng: -96.54457581304686} 
                 var point_002 = new google.maps.Marker({
                     position: location_002,
                     title: "Measuring point 2 approx 4 miles downstream"
                 });
                 point_002.setMap(map); 

                 var location_003={lat: 28.76982548558601, lng:-96.53996079634923}  
                 var point_003 = new google.maps.Marker({
                     position: location_003,
                     title: "Measuring point 3 approx 8 miles downstream"
                 });
                 point_003.setMap(map); 
                
                 var location_004={lat: 28.725856478399155, lng:-96.53143568141867}  
                 var point_004 = new google.maps.Marker({
                     position: location_004,
                     title: "Measuring point 4 approx 12 miles downstream"
                });
                 point_004.setMap(map); 
                
                var location_005={lat: 28.67506991278285, lng:-96.5312794029677}

                var point_005 = new google.maps.Marker({
                    position: location_005,
                    title: "Measuring point 5 approx 16 miles downstream"
                });
                point_005.setMap(map); 
            } 
        }
        water_points.draw();

    });
    


});