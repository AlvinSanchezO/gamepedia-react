import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const GameDetails = () => {
    const { id } = useParams(); 
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Nuevo estado para saber si el juego es favorito o no
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const API_KEY = 'c58f9c7d2dfd464fac4ed08fd37aaeda'; 
        
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
                if (!response.ok) throw new Error('No se pudieron cargar los detalles');
                const data = await response.json();
                setGame(data); 

                // Verificamos si este juego ya está en localStorage al cargar la página
                const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
                // Comparamos el ID (convirtiendo el id de la URL a número)
                const isSaved = savedFavorites.some(fav => fav.id === Number(id));
                setIsFavorite(isSaved);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGameDetails();
    }, [id]); 

    // Función que se ejecuta al hacer clic en el botón de favorito
    const toggleFavorite = () => {
        let savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorite) {
            // Si ya es favorito, lo filtramos para sacarlo de la lista
            savedFavorites = savedFavorites.filter(fav => fav.id !== game.id);
        } else {
            // Si no es favorito, creamos un objeto con los datos esenciales y lo guardamos
            const gameToSave = {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                rating: game.rating
            };
            savedFavorites.push(gameToSave);
        }

        // Guardamos la nueva lista en localStorage y actualizamos el estado
        localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        setIsFavorite(!isFavorite);
    };

    if (isLoading) return <h2 className="state-message">Cargando detalles... ⏳</h2>;
    if (error) return <h2 className="state-message error-text">Error: {error} ❌</h2>;
    if (!game) return null;

    return (
        <div className="container">
            <Link to="/" className="back-button">⬅ Volver al inicio</Link>

            <div className="game-details-card">
                <img src={game.background_image} alt={game.name} className="details-image" />
                <div className="details-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 className="details-title">{game.name}</h2>
                        
                        {/* Aquí está nuestro nuevo botón interactivo */}
                        <button 
                            onClick={toggleFavorite} 
                            className={`fav-button ${isFavorite ? 'active' : ''}`}
                        >
                            {isFavorite ? '❤️ Quitar de Favoritos' : '🤍 Guardar en Favoritos'}
                        </button>
                    </div>

                    <div className="details-meta">
                        <span>⭐ Calificación: {game.rating}</span>
                        <span>📅 Lanzamiento: {game.released}</span>
                    </div>
                    <p className="details-description">{game.description_raw}</p>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;