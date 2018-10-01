$(document).ready(function(){

    var animes = ["Haikyuu", "Kuroko No Basket", "Diamond No Ace" , "Noragami", "Sword Art Online", "Hunter X Hunter", "Rurouni Kenshin", "Attack on Titan"];
    
    // Generate Buttons
    function buttons(){
        $(".myAnimes").empty();
        for (var x = 0; x < animes.length; x++){
            var animeButton = $("<button>");
            animeButton.addClass("anime");
            animeButton.addClass("btn-danger");
            animeButton.attr("data-name", animes[x]);
            animeButton.text(animes[x]);
            $(".myAnimes").append(animeButton);

            // console.log("#myAnimes");
            // console.log(animeButton);
        }
    };

    // Generate New Buttons
    function newButtons(){
        $("#find").on('click', function () {
            var anime = $('#searchTerm').val();
            if (anime == '') {
                return false;
            }
            animes.push(anime);
            buttons();
        });
    }

    // Removing Most Recent Button
    function removeButton() {
        $("#delete").on('click', function(){
            if (animes.length == 8) {
                return null;
            } else {
                var anime = animes.length;
                animes.pop(anime);
                buttons();
            }
        })
    }

    // Getting Gifs from API
    $(document).on('click', '.anime', function() {
        console.log("hi");
        var anime = $(this).attr("data-name");
        var apiKey = "45zTb4XSxB3hlYFp11XmZI7vp9rUmXJI";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=" + apiKey + "&limit=12"
        console.log(queryURL);

        $.ajax ({ 
            url: queryURL, 
            method: "GET",
            cors: true,
        })
         .then(function (response){
            console.log(response);
            $(".gifs").empty();
            var results = response.data;
            if (results == ""){
                alert("There isn't a gif for the selected button")
            }
            for (var x = 0; x < results.length; x ++){
                var gifDiv = $('<div>');
                gifDiv.addClass("gifsDiv").addClass('col-lg-3 col-md-4 col-sm-6');
                var gifRating = $('<p>').text("Rating: " + results[x].rating);
                var gifImage = $('<img>');
                gifDiv.append(gifRating);
                gifImage.attr('src', results[x].images.fixed_height_small_still.url);
                gifImage.attr('data-still', results[x].images.fixed_height_small_still.url);
                gifImage.attr('data-animate', results[x].images.fixed_height_small_still.url);
                gifImage.attr('data-state', "still");
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                $(".gifs").prepend(gifDiv);
            }
         })
    })
    $(document.body).on('click', '.image', function(){
        console.log(this);
        var state = $(this).attr('data-state');
         if(state === "still"){
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
            console.log('animate');
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
            console.log('still')
        }

    });

    
    buttons();
    newButtons();
    removeButton();
});