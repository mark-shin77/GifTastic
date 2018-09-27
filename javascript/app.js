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
            if (anime == 8) {
                return null;
            } else {
                var anime = animes.length;
                animes.pop(anime);
                buttons();
            }
        })
    }

    // Getting Gifs from API
    function getGIFS() {
        var anime = $(this).attr("data-name");
        var apiKey = "45zTb4XSxB3hlYFp11XmZI7vp9rUmXJI";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=" + apiKey + "&limit=10"

        console.log(queryURL);
        // console.log(queryURL);
        $.ajax ({ URL: queryURL, method: "GET"})
         .done (function (response){
            console.log(response);
         })
    }

    buttons();
    newButtons();
    removeButton();
    getGIFS();
});