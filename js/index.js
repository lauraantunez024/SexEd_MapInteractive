$(document).ready(function () {

    $(function(){
        $("#map").load("map.html");
      });
  
    $(function(){
      $("#card").load("card.html");
    });
  
  var checkExist = setInterval(function() {
     if ($('#btn-close').length) {
  
  
  
      var data ={"AL":{
              "state": "Alabama",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "AK":{
              "state": "Alaska",
              "mandated": false,
              "HIV": false,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "AZ":{
              "state": "Arizona",
              "mandated": false,
              "HIV": false,
              "accurate": "HIV",
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "AR":{
              "state": "Arkansas",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "CA":{
              "state": "California",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "CO":{
              "state": "Colorado",
              "mandated": false,
              "HIV": false,
              "accurate": true,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "CT":{
              "state": "Connecticut",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": false,
              "consent": false},
  
  
              "DE":{
              "state": "Delaware",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "DC":{
              "state": "Dist. of Columbia",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "FL":{
              "state": "Florida",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "GA":
              {"state": "Georgia",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "HI":
             {"state": "Hawaii",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "ID":
              {"state": "Idaho",
              "mandated": false,
              "HIV": false,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "IL":{
              "state": "Illinois",
              "mandated": false,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": true},
  
  
              "IN":{
              "state": "Indiana",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "IA":{
              "state": "Iowa",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": false,
              "consent": false},
  
  
              "KS":{
              "state": "Kansas",
              "mandated": true,
              "HIV": false,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "KY":{
              "state": "Kentucky",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "LA":{
              "state": "Louisiana",
              "mandated": false,
              "HIV": false,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "ME":{
              "state": "Maine",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "MD":{
              "state": "Maryland",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "MA":{
              "state": "Massachusetts",
              "mandated": false,
              "HIV": false,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "MI":{
              "state": "Michigan",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "MN":{
              "state": "Minnesota",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "MS":{
              "state": "Mississippi",
              "mandated": true,
              "HIV": false,
              "accurate": false,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "MO":{
              "state": "Missouri",
              "mandated": false,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "MT":{
              "state": "Montana",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "NE":{
              "state": "Nebraska",
              "mandated": false,
              "HIV": false,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "NV":{
              "state": "Nevada",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "NH":{
              "state": "New Hampshire",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "NJ":{
              "state": "New Jersey",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "NM":{
              "state": "New Mexico",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": false},
  
  
              "NY":{
              "state": "New York",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "NC":{
              "state": "North Carolina",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "ND":{
              "state": "North Dakota",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "OH":{
              "state": "Ohio",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "OK":{
              "state": "Oklahoma",
              "mandated": false,
              "HIV": true,
              "accurate": "HIV",
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "OR":{
              "state": "Oregon",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "PA":{
              "state": "Pennsylvania",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "RI":{
              "state": "Rhode Island",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": false},
  
  
              "SC":{
              "state": "South Carolina",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": true},
  
  
              "SD":{
              "state": "South Dakota",
              "mandated": false,
              "HIV": false,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "TN":{
              "state": "Tennessee",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "TX":{
              "state": "Texas",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "UT":{
              "state": "Utah",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "VT":{
              "state": "Vermont",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "VA":{
              "state": "Virginia",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": false,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "WA":{
              "state": "Washington",
              "mandated": true,
              "HIV": true,
              "accurate": true,
              "abstinence": true,
              "relationships": true,
              "lgbt": true,
              "boundaries": true,
              "consent": true},
  
  
              "WV":{
              "state": "West Virginia",
              "mandated": true,
              "HIV": true,
              "accurate": false,
              "abstinence": false,
              "relationships": true,
              "lgbt": false,
              "boundaries": true,
              "consent": false},
  
  
              "WI":{
              "state": "Wisconsin",
              "mandated": false,
              "HIV": true,
              "accurate": false,
              "abstinence": true,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false},
  
  
              "WY":{
              "state": "Wyoming",
              "mandated": false,
              "HIV": false,
              "accurate": false,
              "abstinence": false,
              "relationships": false,
              "lgbt": false,
              "boundaries": false,
              "consent": false}
  
        }
  
       var dataKeys = ["mandated","HIV", "accurate", "abstinence", "lgbt", "relationships", "boundaries", "consent"]
  
       const stateData = Object.keys(data)
  
       for (state of stateData) {
         if (data[state]["mandated"] == true && data[state]["HIV"] == true) {
           $("#" + state).addClass("bMandated");
         } else if (data[state]["mandated"] == true && data[state]["HIV"] == false) {
           $("#" + state).addClass("sMandated");
         } else if (data[state]["mandated"] == false && data[state]["HIV"] == true) {
           $("#" + state).addClass("hMandated");
         } else if (data[state]["mandated"] == false && data[state]["HIV"] == false) {
           $("#" + state).addClass("nMandated");
         }
       }
  
      $(".state-square").on("click", (e)=>{
        $("#card").removeClass("invisible")
  
        const stateId = $(e.target).attr("id")
  
        $(".state-name").text(data[stateId].state)
  
        for (key of dataKeys) {
          if (data[stateId][key] == false) {
            $("#category-" + key + " i").removeClass("fa-check")
            $("#category-" + key + " i").addClass("fa-times")
          } else {
            $("#category-" + key + " i").removeClass("fa-times")
            $("#category-" + key + " i").addClass("fa-check")
          }
        }
          if ($(e.target).attr("x")<600) {
            $(".card-group").addClass("right")
          } else {
            $(".card-group").removeClass("right")
          }
  
      $(".state-name").text(data[stateId].state)
  
        for (key of dataKeys) {
          if (data[stateId][key = "mandated"] == true && data[stateId][key = "HIV"] == true) {
            $(".card").removeClass(["neitherMandated", "hivMandated", "sexEdMandated", "bothMandated"]);
            $(".card").addClass("bothMandated");
          } else if (data[stateId][key = "mandated"] == true && data[stateId][key = "HIV"] == false) {
            $(".card").removeClass(["neitherMandated", "hivMandated", "sexEdMandated", "bothMandated"]);
            $(".card").addClass("sexEdMandated");
  
          } else if (data[stateId][key = "mandated"] == false && data[stateId][key = "HIV"] == true) {
            $(".card").removeClass(["neitherMandated", "hivMandated", "sexEdMandated", "bothMandated"]);
            $(".card").addClass("hivMandated");
          } else if (data[stateId][key = "mandated"] == false && data[stateId][key = "HIV"] == false) {
            $(".card").removeClass(["neitherMandated", "hivMandated", "sexEdMandated", "bothMandated"]);
            $(".card").addClass("neitherMandated");
          }
        }
  
  
        })
  
        $(".close").on("click", ()=>{
          $("#card").addClass("invisible")
        })
        clearInterval(checkExist);
     }
  }, 100); // check every 100ms
  })
  

  