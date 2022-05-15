package io.franco.troubadour.streaming;

public class Song {

    private final String name;
    private boolean isPlaying;

    public Song(String name) {
        this.name = name;
        this.isPlaying = false;
    }

    public static Song named(String songName) {
        return new Song(songName);
    }

    public boolean isNamed(String nameToCompare) {
        return this.name.equalsIgnoreCase(nameToCompare);
    }

    public void play() {
        isPlaying = true;
    }

    public boolean isPlaying() {
        return isPlaying;
    }

    public void pause() {
        isPlaying = false;
    }
}
