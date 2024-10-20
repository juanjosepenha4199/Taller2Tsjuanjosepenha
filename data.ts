export interface Series {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  imageUrl: string;
}

export const series: Series[] = [
  { id: 1, name: 'Breaking Bad', channel: 'AMC', seasons: 5, description: 'A critically acclaimed crime drama...', imageUrl: 'breakingbad.jpg' },
  { id: 2, name: 'Stranger Things', channel: 'Netflix', seasons: 4, description: 'A science fiction horror series...', imageUrl: 'strangerthings.jpg' },
  { id: 3, name: 'The Crown', channel: 'Netflix', seasons: 5, description: 'A historical drama series...', imageUrl: 'thecrown.jpg' },
  { id: 4, name: 'The Boys', channel: 'Amazon Prime Video', seasons: 3, description: 'A superhero satire...', imageUrl: 'theboys.jpg' },
  { id: 5, name: 'Friends', channel: 'NBC', seasons: 10, description: 'A sitcom about six friends...', imageUrl: 'friends.jpg' },
  { id: 6, name: 'The Office', channel: 'NBC', seasons: 9, description: 'A mockumentary sitcom...', imageUrl: 'theoffice.jpg' },
  // Agrega más series aquí...
];
