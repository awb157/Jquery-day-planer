var currentdate = moment().format("MMMM Do YYYY")
console.log(currentdate)
$("#currentDay").text(currentdate)

$(".saveBtn").on("click", function () {
    var textarea = $(this).siblings(".description").val()
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, textarea)
})


$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

//

