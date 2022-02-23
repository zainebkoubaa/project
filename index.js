// console.log(document.('#one'))


var name_input = document.querySelector('#name')
var prenom_input = document.querySelector('#prenom')
var article_input = document.querySelector('#article')
var num_input = document.querySelector('#num')
var rue_input = document.querySelector('#rue')
var code_input = document.querySelector('#code')
// var span = document.querySelector('span')
var select = document.querySelector('select')
console.log(select)

function check_nom(){
    var td = name_input.parentElement
    var span = td.querySelector('span')
    if(name_input.value===""){
        // alert('Please provide your last name')
        span.innerHTML='Please provide your last name !'
    }else span.innerHTML=''
}


function check_prenom(){
    var td = prenom_input.parentElement
    var span = td.querySelector('span')
    if(prenom_input.value===""){
        // alert('Please provide your last name')
        span.innerHTML='Please provide your first name !'
    }else span.innerHTML=''
}
function check_article(){
    var td = article_input.parentElement
    var span = td.querySelector('span')
    if(article_input.value===""){
        // alert('Please provide your article')
        span.innerHTML='Please provide your article !'
    }else span.innerHTML=''
}
function check_num(){
    var td = num_input.parentElement
    var span = td.querySelector('span')
    if(num_input.value===""){
        // alert('Please provide your numéro')
        span.innerHTML='Please provide your numéro !'
    }else span.innerHTML=''
}
function check_rue(){
    var td = rue_input.parentElement
    var span = td.querySelector('#ahmed')
    console.log(span)
    if(rue_input.value===""){
        // alert('Please provide your rue')
        span.innerHTML='Please provide your rue !'
    }else span.innerHTML=''
}
function check_code(){
    var td = code_input.parentElement
    var span = td.querySelector('#zeineb')
    if(code_input.value===""){
        // alert('Please provide your code postal')
        span.innerHTML='Please provide your code postal !'
    }else span.innerHTML=''
}

function validateForm() {
    var span = document.querySelector('#radio')
    var radios = document.getElementsByClassName("radio");
    console.log(radios)
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) span.innerHTML='Please choose an option';
    return formValid;
}

function check(){
  check_nom()
  check_prenom()
  check_article()
  check_num()
  check_rue()
  check_code()
  validateForm()
  
}

function clear_all(){
    var inputs = document.querySelectorAll('input')
    var radios = document.getElementsByClassName("radio");
    console.log(inputs)
    var spans = document.querySelectorAll('span')
    console.log(spans)
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false
        
    }
    for (let i = 0; i < inputs.length-2; i++) {
        
        inputs[i].value =''
        
    }
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML =''
        
    }
}


// test //
