//-----------------------------------------------------
//                  jQuery Project: New of the Day
//----------------------------------------------------
$(document).ready(function() {

     var url='http://hn.algolia.com/api/v1/search?query=javascript';
     $.getJSON(url,function(data) {

        var currentquote ='';
     	var quotes = data.hits;

     	$('.read').on('click',function(){
     		currentquote =quotes[Math.floor(Math.random()*quotes.length)];
     		//------ Knowledge : 
     		//var f= Math.floor(5.95)
     		//console.log(f); //5
     		//var f =Math.ceil(5.95)
     		//console.log(f); //6
     		//------ Knowledge : ends
            console.log(currentquote);
            // part 1: keep this
            //$('.quoteBody').html(currentquote.title);
            // part 2: to conver t in clickable link
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentquote.title);
            $('.quoteBodyLink').attr('href',currentquote.url).attr('target','_blank') ; // we have made the js message with clickable link in new tab


            $('.quoteAuthor').html(currentquote.author);

            $('.tweetQuote').attr('href','https://twitter.com/intent/tweet?text=' + currentquote.title+' - '+ currentquote.author
            	)
            	.attr('target','_blank') // this _blank with keep out web page as it is open link in new tab
            	.attr('disabled',false);   // 'disabled',false means it is no longe disabpled
            	$('.read').html('Show me one more');
                                                                    
     	});

        console.log(quotes[0].title);

     	console.log(data);
     });
});