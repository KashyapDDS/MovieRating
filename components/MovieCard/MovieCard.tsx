import Link from "next/link";

interface movieData {
  adult: boolean;
  backdrop_path: String;
  genre_ids: number[];
  id: number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: number;
  poster_path: String;
  release_date: String;
  title: String;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function MovieCard(movie: movieData) {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 mx-[10px] sm:mx-[40px] lg:mx-[180] my-10">
      <div className="w-full">
        <Link href={`/movie/${movie?.id}`}>
          <img
            className="h-[600px] w-full object-contain rounded-xl"
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.poster_path
            }`}
            alt="Movie Poster"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3 sm:gap-10">
        <span className="font-bold text-[30px]">
          {movie ? movie.original_title : ""}
        </span>
        <span className="text-[20px] font-normal">
          Relese Date : {movie ? movie.release_date : ""}
        </span>
        <span className="text-[20px] font-normal">
          Ratings : {movie ? movie.vote_average : ""}
        </span>
        <span className="text-[20px] font-normal">
          Description : {movie ? movie.overview : ""}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
