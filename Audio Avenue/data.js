const songs = [];

for (let i = 1; i <= 50; i++) {
  songs.push({
    title: `Song ${i}`,
    artist: `Artist ${i}`,
    file: `assets/songs/song${i}.mp3`,
    cover: `assets/images/song${i}.jpg`
  });
}
