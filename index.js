
let screen1=document.getElementById("sc1")
let screen2=document.getElementById("sc2")
let home_run = 0
let guest_run=0



function home_add1(){
	home_run+=1
 screen1.innerText = home_run
}

function home_add2(){
	home_run+=2
 screen1.innerText = home_run
}

function home_add3(){
	home_run+=3
 screen1.innerText = home_run
}

function func_reset(){
	home_run=0
	screen1.innerText = home_run
}

function guest_add1(){
	guest_run+=1
 screen2.innerText = guest_run
}

function guest_add2(){
	guest_run+=2
 screen2.innerText = guest_run
}

function guest_add3(){
	guest_run+=3
 screen2.innerText = guest_run
}

function func_reset(){
	guest_run=0
	home_run=0
	screen1.innerText = home_run
	screen2.innerText = guest_run
}