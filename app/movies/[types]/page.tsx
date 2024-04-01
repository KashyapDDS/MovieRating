import MovieCard from "@/components/MovieCard/MovieCard";
import axios from "axios";

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

interface MovieDetailsProps {
  params: {
    types: string;
  };
}

async function MoviePage({ params }: MovieDetailsProps) {
  const types = params?.types;

  async function getMovie() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        types ? types : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    return res.data.results;
  }

  const movie = await getMovie();

  return (
    <div>
      {movie?.map((movie: movieData, i: number) => {
        return <MovieCard key={i} {...movie} />;
      })}
    </div>
  );
}

export default MoviePage;
