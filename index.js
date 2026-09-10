let indScore = 0
let indWicket = 0
let indOut = false

let indScoreEl = document.getElementById("indScore")

function add1(){
  if(indOut) return
  indScore += 1
  indScoreEl.textContent = indScore  + "/" + indWicket
}

function add2(){
  if(indOut) return
  indScore += 2
  indScoreEl.textContent = indScore  + "/" + indWicket
}
function add3(){
  if(indOut) return
  indScore += 3
  indScoreEl.textContent = indScore  + "/" + indWicket
}
function add4(){
  if(indOut) return
  indScore += 4
  indScoreEl.textContent = indScore  + "/" + indWicket
}
function add6(){
  if(indOut) return
  indScore += 6
  indScoreEl.textContent = indScore  + "/" + indWicket
}

function indWickets(){
  if(indOut) return
  indWicket += 1
  if(indWicket >= 10){
    indOut = true
    indScoreEl.textContent = indScore + "/" + indWicket + " - All Out"
  } else {
    indScoreEl.textContent = indScore + "/" + indWicket
  }
}

function indReset(){
  indScore = 0
  indWicket = 0
  indOut = false
  indScoreEl.textContent = indScore + "/" + indWicket
}

let japScore = 0
let japWicket = 0
let japOut = false

let japScoreEl = document.getElementById("japScore")

function japAdd1(){
  if(japOut) return
  japScore += 1
  japScoreEl.textContent = japScore + "/" + japWicket
}

function japAdd2(){
  if(japOut) return
  japScore += 2
  japScoreEl.textContent = japScore  + "/" + japWicket
}
function japAdd3(){
  if(japOut) return
  japScore += 3
  japScoreEl.textContent = japScore  + "/" + japWicket
}
function japAdd4(){
  if(japOut) return
  japScore += 4
  japScoreEl.textContent = japScore  + "/" + japWicket
}
function japAdd6(){
  if(japOut) return
  japScore += 6
  japScoreEl.textContent = japScore  + "/" + japWicket
}

function japWickets(){
  if(japOut) return
  japWicket += 1
  if(japWicket >= 10){
    japOut = true
    japScoreEl.textContent = japScore + "/" + japWicket + " - All Out"
  } else {
    japScoreEl.textContent = japScore + "/" + japWicket
  }
}

function japReset(){
  japScore = 0
  japWicket = 0
  japOut = false
  japScoreEl.textContent = japScore + "/" + japWicket
}