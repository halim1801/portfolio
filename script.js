 document.getElementById("b").onclick=function()
    {
      //document.getElementsByID('hidden').style.display='block';
      document.getElementById('h1').innerHTML="I turn blank screens into beautiful websites";
      document.getElementById('h2').innerHTML=' Using HTML, CSS,JAVA SCRIPT ';
      document.getElementById('h3').innerHTML="and a bit of imagination.";
      document.getElementById('h4').innerHTML='From  personal blogs to landing pages.';

      document.getElementById('h1').style.color='firebrick';
     document.getElementById('h2').style.color='firebrick';
     document.getElementById('h3').style.color='firebrick';
      document.getElementById('h4').style.color='firebrick';
        document.getElementById('h11').style.color='white';
     document.getElementById('h12').style.color='blac';

     // document.getElementById('h1').style.justifyItems='right';
      document.getElementById("h11").innerHTML="Junior Developer"; 
      document.getElementById("h12").innerHTML="B.Sc(Computer Science) "; 
     //document.getElementById('h1').innerHTML="I turn blank screens into beautiful websites ";
    }
    document.getElementById('edu').onclick=function()
    {
      document.getElementById('full').style.display='none'
   /* document.getElementById('h1').innerHTML='School';
    document.getElementById('h2').innerHTML='AKDR Girls Hr.Sec School';
    document.getElementById('h3').innerHTML='College'; 
     document.getElementById('h4').innerHTML='Rajapalayam Rajus College'; */
    /*document.getElementById('h3').style.color="darkblue";
   document.getElementById('h4').style.color="black" ; 
     document.getElementById('h2').style.color="black";
     document.getElementById('h2').style.opacity='0.8';
     document.getElementById('h4').style.opacity='0.8';*/
     document.getElementById('hidden').style.display='none';
     document.getElementById('skill').style.display='none';
    document.getElementById('education').style.display='block';
    }
    document.getElementById('contact').onclick=function()
  {
   /* document.getElementById('h1').style.display='none';
   document.getElementById('h2').style.display='none';
   document.getElementById('h3').style.display='none';
   document.getElementById('h4').style.display='none';
    */
   document.getElementById('full').style.display='none';
   document.getElementById('skill').style.display='none';
   document.getElementById('education').style.display='none';
   document.getElementById('hidden').style.display='block';
  }

  document.getElementById('skills').onclick=function(){
    document.getElementById('full').style.display='none';
      document.getElementById('education').style.display='none';
    document.getElementById('hidden').style.display='none';
 
     document.getElementById('skill').style.display='block';
  }
