package io.franco.troubadour.streaming;

import java.util.HashSet;
import java.util.Set;

public class Playlist {

    private String name;
    private final Set<Song> songs = new HashSet<>();

    public Playlist(String name) {
        this.name = name;
    }

    public static Playlist named(String name) {
        return new Playlist(name);
    }

    public boolean isNamed(String nameToCompare) {
        return name.equalsIgnoreCase(nameToCompare);
    }

    public void addSong(String songNameToAdd) {
        songs.add(new Song(songNameToAdd));
    }

    public boolean hasSong(String songName) {
        return songs.stream().anyMatch(song -> song.isNamed(songName));
    }

    public void removeSong(String songNameToRemove) {
        this.songs.removeIf(song -> song.isNamed(songNameToRemove));
    }
}
