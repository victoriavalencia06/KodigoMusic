import React from 'react';
import Songs from '../components/Songs';
import Categories from '../components/Categories';

export default function Home({onSelectSong}) {
  return (
    <>
      <section>
        <h1>Bienvenido a Kodigo Music 🎵</h1>
        <p>Explora playlists, artistas y álbumes.</p>
      </section>

      <Categories />

      <Songs onSelectSong={onSelectSong} />
    </>
  );
}
