
const movies = [
  { title: 'a', year: 2022, rating: 4.5 },
  { title: 'b', year: 2020, rating: 2.4 },
  { title: 'c', year: 2019, rating: 4.9 },
  { title: 'd', year: 2021, rating: 4.4 },
  { title: 'e', year: 2022, rating: 3.0 },
  { title: 'f', year: 2022, rating: 5.0 },
  { title: 'g', year: 2022, rating: 4.0 },
  { title: 'h', year: 2022, rating: 4.0 },
  { title: 'i', year: 2022, rating: 4.3 },
]

function getMovie(movies, year, rating) {
  const titles = movies
    .filter(m => m.year === year && m.rating >= rating)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
  return titles;
}

const output = getMovie(movies, 2022, 4)
console.log(output);
