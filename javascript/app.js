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
            return false;
        });
    }

    // Removing Most Recent Button
    function removeButton() {
        $("#delete").on('click', function(){
            var anime = animes.length;
            animes.pop(anime);
            buttons();
            return false;
        })
    }

    buttons();
    newButtons();
    removeButton();
});