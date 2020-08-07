function dec(number,prix, total,t1,t2,sum)
{
   
    var value = parseInt(document.getElementById(number).value, 10);
    var tot = parseFloat(document.getElementById(total).innerHTML) ;
    var tot1 = parseFloat(document.getElementById(t1).innerHTML) ;
    var tot2 = parseFloat(document.getElementById(t2).innerHTML) ;
   
    var pr=parseFloat(document.getElementById(prix).innerHTML) ;
    var summ=document.getElementById(sum).innerHTML ;
    value = isNaN(value) ? 0 : value;
   if(value<=0)
    value=0;
    else 
    value--;

  document.getElementById(number).value = value;
  tot=value*pr;
  document.getElementById(total).innerHTML = tot+'$';
  summ = isNaN(sum) ? 0 : summ;
  summ=tot+tot1+tot2;
  document.getElementById(sum).innerHTML = summ+'$';
    
}

function inc(number,prix,total,t1,t2,sum)
{
  var value = parseInt(document.getElementById(number).value, 10);
  var tot = parseFloat(document.getElementById(total).innerHTML) ;
  var pr=parseFloat(document.getElementById(prix).innerHTML) ;
  var tot1 = parseFloat(document.getElementById(t1).innerHTML) ;
  var tot2 = parseFloat(document.getElementById(t2).innerHTML) ;
   
  var summ=document.getElementById(sum).innerHTML ;
 value = isNaN(value) ? 0 : value;
value++;
document.getElementById(number).value = value;
tot=value*pr;
 document.getElementById(total).innerHTML = tot+'$';
 summ = isNaN(summ) ? 0 : summ;
 summ=tot+tot1+tot2;
 document.getElementById(sum).innerHTML = summ+'$';
}

function redheart(heart)
{
  
  var bt=document.getElementById(heart);
  if(bt.style.color=="red") {
    bt.style.color="black";
  } else {
  bt.style.color="red";
}
}

function deleteart(ligne)
{
 var contentP = document.getElementById(ligne);
 console.log(contentP)
   contentP.remove();
}