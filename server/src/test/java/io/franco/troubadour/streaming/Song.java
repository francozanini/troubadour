package io.franco.troubadour.streaming;

import java.util.Objects;

public class Song {

    public static final String CAN_NOT_CREATE_UNNAMED_SONG = "Song must have a name";
    private final String name;
    private boolean isPlaying;

    private Song(String name) {
        assertNameNotEmpty(name);

        this.name = name;
        this.isPlaying = false;
    }

    private void assertNameNotEmpty(String name) {
        if (name == null || name.isEmpty()) throw new RuntimeException(CAN_NOT_CREATE_UNNAMED_SONG);
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

    public boolean isNamed(Song song) {
        return Objects.equals(this.name, song.name);
    }
}
