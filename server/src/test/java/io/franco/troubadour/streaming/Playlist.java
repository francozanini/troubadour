package io.franco.troubadour.streaming;

import java.util.HashSet;
import java.util.Set;

public class Playlist {

    public static final String ALREADY_CONTAINS_SONG = "Song is already in the playlist";
    public static final String PLAYLIST_IS_EMPTY = "Playlist has no songs";
    public static final String NAME_CANNOT_BE_EMPTY = "Name can not be empty";
    private static final String NO_SONG_PLAYING = "No song is being played";
    private static final String SONG_NOT_FOUND = "Song is not on the playlist";
    private String name;
    private final Set<Song> songs = new HashSet<>();

    public Playlist(String name) {
        validatePlaylistName(name);

        this.name = name;
    }

    private void validatePlaylistName(String name) {
        if (name.equals("")) {
            throw new RuntimeException(NAME_CANNOT_BE_EMPTY);
        }
    }

    public static Playlist named(String name) {
        return new Playlist(name);
    }

    public boolean isNamed(String nameToCompare) {
        return name.equalsIgnoreCase(nameToCompare);
    }

    public void addSong(String songNameToAdd) {
        if (hasSong(songNameToAdd)) {
            throw new RuntimeException(ALREADY_CONTAINS_SONG);
        }

        songs.add(new Song(songNameToAdd));
    }

    public boolean hasSong(String songName) {
        return songs.stream().anyMatch(song -> song.isNamed(songName));
    }

    public void removeSong(String songNameToRemove) {
        this.songs.removeIf(song -> song.isNamed(songNameToRemove));
    }

    public void play() {
        Song songToPlay = this.songs.stream().findFirst().orElseThrow(() -> new RuntimeException(PLAYLIST_IS_EMPTY));
        songToPlay.play();
    }

    public boolean isPlaying() {
        return true;
    }

    public Song songPlaying() {
        return songs
                .stream()
                .filter(Song::isPlaying)
                .findFirst()
                .orElseThrow(() -> new RuntimeException(NO_SONG_PLAYING));
    }

    public Song songNamed(String songNameToLookFor) {
        return songs
                .stream()
                .filter(song -> song.isNamed(songNameToLookFor))
                .findFirst()
                .orElseThrow(() -> new RuntimeException(SONG_NOT_FOUND));
    }

    public void play(String songNameToPlay) {
        songs.forEach(Song::pause);
        songNamed(songNameToPlay).play();
    }

    void addSongs(String... songNames) {
        for (String songName : songNames) {
            addSong(songName);
        }
    }

    public void rename(String nameToChangeTo) {
        validatePlaylistName(nameToChangeTo);
        name = nameToChangeTo;
    }
}
