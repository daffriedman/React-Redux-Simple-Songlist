import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "National Anthem", duration: "4:05" },
    { title: "Take me out to the Ball Game", duration: "2:30" },
    { title: "Pledge of Allegiance", duration: "5:10" },
    { title: "One Two..", duration: "1:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
