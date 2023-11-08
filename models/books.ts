export interface BookData {
  work:           Work;
  logged_edition: string;
  logged_date:    string;
}

export interface  Work extends BookData{
  title:              string;
  key:                string;
  author_keys:        string[];
  author_names:       string[];
  first_publish_year: number;
  lending_edition_s:  string;
  edition_key:        string[];
  cover_id:           number;
  cover_edition_key:  string;
}
