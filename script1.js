let col = document.querySelector('.col-10')
var div1=document.createElement("p")
var maindiv=document.createElement('p');


var div2=document.createElement('div');
var div3=document.createElement('div');
var div4=document.createElement('div');


// Function for home button
let page1=()=>{

  div1.setAttribute('class','div1');
  maindiv.setAttribute('class','maindiv');
  div2.setAttribute('class','div5');
  div3.setAttribute('class','div3');
  div4.setAttribute('class','div4');

  
  div1.innerText="Playlist #1";
  div2.innerText="Sample Playlist1";
  div3.innerText="Sample Playlist1";
  div4.innerText="Sample Playlist1";


  maindiv.append(div2,div3,div4);
  col.append(div1,maindiv);




}


//function for libraries
let page2=()=>{

  div1.setAttribute('class','div1');
  maindiv.setAttribute('class','maindiv');
  div2.setAttribute('class','div5');
  div3.setAttribute('class','div3');
  div4.setAttribute('class','div4');

  
  div1.innerText="Playlist #2";
  div2.innerText="Sample Playlist2";
  div3.innerText="Sample Playlist2";
  div4.innerText="Sample Playlist2";


  maindiv.append(div2,div3,div4);
  col.append(div1,maindiv);
  


}


// function for search button
let page3=()=>{

    div1.setAttribute('class','text');
    let text=document.createElement('input');
    text.setAttribute('type','text')
    text.setAttribute('placeholder','Search')
    text.innerText='<i class="fa fa-search fa-2x" ></i>'
    text.setAttribute('class','text1')
 
    div2.setAttribute('class','div6');
    div3.setAttribute('class','div6');
    div4.setAttribute('class','div6');
  
    div1.innerText="";
    div2.innerText="";
    div3.innerText="";
    div4.innerText="";
  
    maindiv.append(div2,div3,div4)
    col.append(div1,maindiv)
    div1.append(text)
}