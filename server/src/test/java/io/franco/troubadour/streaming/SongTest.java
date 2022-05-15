package io.franco.troubadour.streaming;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class SongTest {

    private static final String songName = "songName";

    @Test
    public void songCreatesWithName() {
        Song song = Song.named(songName);
        assertThat(song.isNamed(songName.toUpperCase())).isTrue();
    }

    @Test
    public void newSongIsNotPlaying() {
        Song song = Song.named(songName);
        assertThat(song.isPlaying()).isFalse();
    }

    @Test
    public void songComparesNameLowerCase() {
        Song song = Song.named(songName);
        assertThat(song.isNamed("name that isn't")).isFalse();
    }

    @Test
    public void songCanBePlayed() {
        Song song = Song.named(songName);
        song.play();
        assertThat(song.isPlaying()).isTrue();
    }

    @Test
    public void songCanBePaused() {
        Song song = Song.named(songName);
        song.play();
        song.pause();
        assertThat(song.isPlaying()).isFalse();
    }



}