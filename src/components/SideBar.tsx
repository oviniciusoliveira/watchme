import { GenreResponseProps } from "../App";
import { Button } from "./Button";

import "../styles/sidebar.scss";

type SideBarProps = {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onSelectGenre: (genreId: number) => void;
};

export function SideBar({
  genres,
  selectedGenreId,
  onSelectGenre,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
