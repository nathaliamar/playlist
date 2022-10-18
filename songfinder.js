var lastTitle = "";
var lastSubtitle = "";
function checkSong(){
    songTitle = $('.player-info-container p.title').text();
    songSubtitle = $('.player-info-container p.subtitle').text();
    if( songTitle !== lastTitle ) {
        lastTitle = songTitle;
        lastSubtitle = songSubtitle;
        console.log("new song: ",songTitle+"+"+songSubtitle );
        requestSong(songTitle+"+"+songSubtitle);
    }
}
function requestSong(name){
    query = name.replace(" ", "+");
    YTpath = "https://www.youtube.com/results?search_query=";
    win = window.open( YTpath + query, '_elPlayer');
}
var songInterval = setInterval( function(){
    checkSong();
}, 500);
