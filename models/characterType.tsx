
export interface Charater {
  data: CharaterData;
}

export default interface CharaterData {
  _id:             number;
  films:           string[];
  shortFilms:      string[];
  tvShows:         string[];
  videoGames:      string[];
  parkAttractions: string[];
  allies:          string[];
  enemies:         string[];
  sourceUrl:       string;
  name:            string;
  imageUrl:        string;
  createdAt:       Date;
  updatedAt:       Date;
  url:             string;
  __v:             number;
}