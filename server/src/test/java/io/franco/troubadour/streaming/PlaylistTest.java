package io.franco.troubadour.streaming;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class PlaylistTest {

    private static final String PLAYLIST_NAME = "a playlist";
    public static final String SONG_NAME = "a songName";

    @Test
    public void isCreatedWithName() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        assertThat(playlist.isNamed("a playlist".toUpperCase())).isTrue();
    }

    @Test
    public void canAddSongToPlaylist() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        playlist.addSong(SONG_NAME);
        assertThat(playlist.hasSong(SONG_NAME)).isTrue();
    }

    @Test
    public void canRemoveSong() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        playlist.addSong(SONG_NAME);
        playlist.removeSong(SONG_NAME);
        assertThat(playlist.hasSong(SONG_NAME)).isFalse();
    }

}