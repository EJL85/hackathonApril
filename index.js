const boxes = document.querySelectorAll(".box")

console.log(boxes)

boxes.forEach(function (box){
  box.addEventListener("click", addUrl)
})


function addUrl(event){
  event.target.href = `results.html?${event.target.id}`
}
