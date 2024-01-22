$('.open').click(function(){
    $('.homeNav').animate({width:'20%'},100)
    $('.open').animate({marginLeft:'250px'},100)
});
$('.close').click(function(){
    $('.homeNav').animate({width:'0'},100)
    $('.open').animate({marginLeft:'0'},100)
});
/*                 slide                */
  
$('.durationHead').click(function(){
    $('.durationContent').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});

/*                  scroll                */



$('.homeNav a').click(function(e){
      let links = $(e.target).attr('href');
      let offsetLink= $(links).offset().top
      $('html , body').animate({scrollTop: offsetLink},3000);
});


/*              counter              */


let countDownDate=new Date("31 january 2024 9:59:59").getTime();

let counter=setInterval(()=>{
    let dateNow=new Date().getTime();

   let dateDif=countDownDate - dateNow;
   

   let day=Math.floor(dateDif / (1000 * 60 * 60 * 24));
   let hour=Math.floor(dateDif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   let minuts=Math.floor(dateDif % (1000 * 60 * 60 ) / (1000 * 60));
   let second=Math.floor(dateDif % (1000 * 60 ) / 1000);


   $('.days').html(`${day} D`);
   $('.hours').html(`${hour} H`);
   $('.min').html(`${minuts} M`);
   $('.seconds').html(`${second} S`);

   if(dateDif<0){
    clearInterval(counter);
   }
},1000);


/*           contact          */


let char = '';

$('textarea').keyup (function(e){  
    let num = 100;

    char =  $('textarea').val()

    num = num - char.length 

    if(num < 0){
        $('.type').text('your available character finished');  
        
    }else{
        $('.type').text(num);
    }

})