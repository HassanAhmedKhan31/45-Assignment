function make_album(artist, tittle, track) {
    var album = {
        artist: artist,
        tittle: tittle,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
console.log(make_album("Hassan", "title1"));
console.log(make_album("Azlan", "title2"));
console.log(make_album("Huzaifa", "title3", 9));
