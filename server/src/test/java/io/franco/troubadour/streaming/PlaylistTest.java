package io.franco.troubadour.streaming;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

class PlaylistTest {

    private static final String PLAYLIST_NAME = "a playlist";
    public static final String SONG_NAME = "a songName";
    public static final String ANOTHER_SONG_NAME = "another songName";

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

    @Test
    public void canNotAddSameSongTwice() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        playlist.addSong(SONG_NAME);

        var ex = assertThrows(RuntimeException.class,
                () -> playlist.addSong(SONG_NAME));

        assertThat(ex.getMessage()).isEqualTo(Playlist.ALREADY_CONTAINS_SONG);
    }

    @Test
    public void canRenamePlaylist() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        String anotherName = "another name";
        playlist.rename(anotherName);
        assertThat(playlist.isNamed(anotherName)).isTrue();
    }

    @Test
    public void cannotCreatePlaylistWithEmptyName() {
        var ex = assertThrows(RuntimeException.class, () -> Playlist.named(""));
        assertThat(ex.getMessage()).isEqualTo(Playlist.NAME_CANNOT_BE_EMPTY);
    }

    @Test
    public void cannotRenameToEmptyName() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        var ex = assertThrows(RuntimeException.class, () -> playlist.rename(""));
        assertThat(ex.getMessage()).isEqualTo(Playlist.NAME_CANNOT_BE_EMPTY);
    }

    @Test
    public void canPlaySongsFromTheBeginningOfPlaylist() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        playlist.addSongs("another songName", SONG_NAME);

        playlist.play();

        assertThat(playlist.isPlaying()).isTrue();
        assertThat(playlist.songPlaying()).isEqualTo(playlist.songNamed(SONG_NAME));
    }

    @Test
    public void canPlaySongsFromAnywhereInThePlaylist() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        playlist.addSongs(ANOTHER_SONG_NAME, SONG_NAME);

        playlist.play(ANOTHER_SONG_NAME);

        assertThat(playlist.isPlaying()).isTrue();
        assertThat(playlist.songPlaying()).isEqualTo(playlist.songNamed(ANOTHER_SONG_NAME));
    }

    @Test
    public void givenPlayCommand_whenSongIsPlaying_ThenSwitchToNewSong() {
        var playlist = Playlist.named(PLAYLIST_NAME);
        playlist.addSongs(ANOTHER_SONG_NAME, SONG_NAME);
        playlist.play(ANOTHER_SONG_NAME);

        playlist.play(SONG_NAME);

        assertThat(playlist.songPlaying()).isEqualTo(playlist.songNamed(SONG_NAME));
        assertThat(playlist.songNamed(ANOTHER_SONG_NAME).isPlaying()).isFalse();
    }

}