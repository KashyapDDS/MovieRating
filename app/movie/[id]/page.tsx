import axios from "axios";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: Boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

async function MovieDetails({ params }: MovieDetailsProps) {
  const id = params?.id;
  const getdata = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    return res.data;
  };
  const movie = await getdata();

  return (
    <div>
      <img
        className="h-[300px] sm:h-[700px] object-contain rounded-xl mx-auto"
        src={`https://image.tmdb.org/t/p/original${
          movie && movie?.backdrop_path
        }`}
        alt="Img Poster"
      />
      <div className="mx-[10px] sm:mx-[50px] lg:mx-[70px] xl:mx-[180px] py-3 flex flex-wrap items-center justify-between">
        <h1 className="text-[30px] mb-3 font-bold">{movie?.original_title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <span className="text-[18px] font-normal border border-white p-2 rounded-lg">
            Rating : {movie?.vote_average}
          </span>
          <span className="text-[18px] font-normal border border-white p-2 rounded-lg">
            Rating : {movie?.vote_count}
          </span>
          <span className="text-[18px] font-normal border border-white p-2 rounded-lg">
            Duration : {movie?.runtime} Mins
          </span>
          <span className="text-[18px] font-normal border border-white p-2 rounded-lg">
            Date : {movie?.release_date}
          </span>
        </div>
      </div>
      <div className="mx-[10px] sm:mx-[50px] lg:mx-[70px] xl:mx-[180px] py-2 flex flex-wrap items-center justify-between gap-2 ">
        <span className="bg-gray-400 text-black p-2 rounded-lg">
          {movie?.tagline ? movie?.tagline : "Genres"}
        </span>
        <div className="flex flex-wrap gap-3">
          {movie?.genres?.map(
            (ele: { id: number; name: string }, i: number) => {
              return (
                <span className="bg-gray-400 text-black p-2 rounded-lg" key={i}>
                  {ele?.name}
                </span>
              );
            }
          )}
        </div>
      </div>
      <div className="mx-[10px] sm:mx-[50px] lg:mx-[70px] xl:mx-[180px] py-2 flex gap-3 items-center">
        <span className="bg-gray-400 text-black p-2 rounded-lg w-fit">
          Description
        </span>
        {movie.overview}
      </div>
      <div className="mx-[10px] sm:mx-[50px] lg:mx-[70px] xl:mx-[180px] py-2 flex gap-3 items-center">
        <h2 className="">Usefull Links : </h2>
        <h3 className="bg-gray-400 text-black p-2 rounded-lg">
          <a target="new" href={`${movie.homepage}`}>
            HomePage
          </a>
        </h3>
        <h3 className="bg-gray-400 text-black p-2 rounded-lg">
          <a target="new" href={`https://www.imdb.com/title/${movie.imdb_id}`}>
            IMDB
          </a>
        </h3>
      </div>
    </div>
  );
}

export default MovieDetails;
