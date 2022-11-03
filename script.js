var currentdate = moment().format("MMMM Do YYYY")
console.log(currentdate)
$("#currentDay").text(currentdate)

$(".saveBtn").on("click", function(){
var textarea=$(this).siblings(".description").val()
var key=$(this).parent().attr("id")
localStorage.setItem(key,textarea)
})