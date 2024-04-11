import { CoverImage } from "./CoverImage/CoverImage.jsx";
import { ArtistName } from "./ArtistName/ArtistName.jsx";
import { AlbumName } from "./AlbumName/AlbumName.jsx";

export const Album = ({ items }) => {
  console.log(items.albums.items);

  let albums = items.albums.items;
  console.log(albums);
  return (
    <section className="album-wrapper">
      {albums.map((singleItem) => {
        console.log("log singleItem:", singleItem);
        return (
          <div className="album" key={singleItem.id}>
            <CoverImage singleCoverItem={singleItem} />
            <AlbumName singleAlbumItem={singleItem} />
            <ArtistName singleArtistItem={singleItem} />
          </div>
        );
      })}
    </section>
  );
};