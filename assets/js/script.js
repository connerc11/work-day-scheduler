window.onload = function() {
    color();
}

//The current time and date
var todaysDate = moment().format('MMM Do YYYY, dddd, h:mm:ss a');
$("#currentDay").html(todaysDate);

//set the timing for the calender

var timing = new Date().getHours();

function color() {
    if(timing > 9){
        $("#nineam").addClass("previous");
    }else if(timing >= 9 && timing < 10){
    $("#nineam").addClass("current");
        }else if(timing < 9) {
            $("#nineam").addClass("upcoming");
        }
    if(timing > 10){
        $("#tenam").addClass("previous");
    }else if(timing >= 10 && timing < 11){
    $("#tenam").addClass("current");
        }else if(timing < 10) {
            $("#tenam").addClass("upcoming");
            }
    if(timing > 11){
        $("#elevenam").addClass("previous");
    }else if(timing >= 11 && timing < 12){
        $("#elevenam").addClass("current");
            }else if(timing < 11) {
                $("#elevenam").addClass("upcoming");
    }
    if(timing > 12){
        $("#twelvepm").addClass("previous");
    }else if(timing >= 12 && timing < 13){
        $("#twelvepm").addClass("current");
            }else if(timing < 12) {
                $("#twelvepm").addClass("upcoming");
    }
    if(timing > 13){
        $("#onepm").addClass("previous");
    }else if(timing >= 13 && timing < 14){
        $("#onepm").addClass("current");
            }else if(timing < 13) {
                $("#onepm").addClass("upcoming");
    }
    if(timing > 14){
        $("#twopm").addClass("previous");
    }else if(timing >= 14 && timing < 15){
        $("#twopm").addClass("current");
            }else if(timing < 14) {
                $("#twopm").addClass("upcoming");
    }
    if(timing > 15){
        $("#threepm").addClass("previous");
    }else if(timing >= 15 && timing < 16){
        $("#threepm").addClass("current");
            }else if(timing < 15) {
                $("#threepm").addClass("upcoming");
    }
    if(timing > 16){
        $("#fourpm").addClass("previous");
    }else if(timing >= 16 && timing < 17){
        $("#fourpm").addClass("current");
            }else if(timing < 16) {
                $("#fourpm").addClass("upcoming");
    }
    if(timing > 17){
        $("#fivepm").addClass("previous");
    }else if(timing >= 17 && timing < 18){
        $("#fivepm").addClass("current");
            }else if(timing < 17) {
                $("#fivepm").addClass("upcoming");
    }

}

$(".saveBtn").on("click", function(){
    console.log(this)
var activity = $(this).siblings(".workday").val().trim()
console.log(activity)
var hour = $(this).siblings(".hourly").text()
console.log(hour)
localStorage.setItem(hour, activity)
})

$("#amhour9 .workday").val(localStorage.getItem("9 A.M."))
$("#amhour10 .workday").val(localStorage.getItem("10 A.M."))
$("#amhour11 .workday").val(localStorage.getItem("11 A.M."))
$("#pmhour12 .workday").val(localStorage.getItem("12 P.M."))
$("#pmhour1 .workday").val(localStorage.getItem("1 P.M."))
$("#pmhour2 .workday").val(localStorage.getItem("2 P.M."))
$("#pmhour3 .workday").val(localStorage.getItem("3 P.M."))
$("#pmhour4 .workday").val(localStorage.getItem("4 P.M."))
$("#pmhour5 .workday").val(localStorage.getItem("5 P.M."))



