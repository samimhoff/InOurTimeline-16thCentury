//NATURE OF TYPES

//ENTRIES

/*


All entries should be connected to a place, at the minimum. This way, when people are searching for individuals/ etc. when connecting entries when they're submitting them to the database, the search won't be so long.
All entries will also critically have a type. 
Type Hierarchy

Place
People
Event
  e.g. Naples becomes French Vassal in May 10th, 1502







*/

export interface ViewCard {
  entryID: number;
  title: string;
  summary: string;
  eventType: EventType;
  artType?: ArtType;
}

export enum EventType {
  nation = "Nation",
  people = "People",
  art = "Art",
}

export enum ArtType {
  religion = "Religion",
  literature = "Literature",
  art = "Art",
  architecture = "Architecture",
}

