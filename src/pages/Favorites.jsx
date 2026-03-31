import { useState } from 'react';
import GameCard from '../components/GameCard';

const Favorites = () => {
    // 💡 Lazy Initialization: Pasamos una función a useState.
    // React solo ejecutará esto una vez al montar el componente.
    const [favorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    return (
        <div className="container">
            <h2 className="title">Mis Juegos Favoritos</h2>
            
            {favorites.length === 0 ? (
                <p className="state-message">Aún no tienes favoritos guardados.</p>
            ) : (
                <div className="games-grid">
                    {favorites.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;