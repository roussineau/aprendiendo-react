import { useState } from 'react';

import './App.css'

export function XFollowCard({ username = 'unknown', initialIsFollowing, children }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'x-followCard-aside-follow is-following'
        : 'x-followCard-aside-follow';

    return (
        <article className='x-followCard'>
            <header className='x-followCard-header'>
                <img
                    className='x-followCard-header-pfp'
                    src={`https://unavatar.io/x/${username}`}
                    alt={`Avatar de ${username}`} />
                <div className='x-followCard-header-info'>
                    <strong>{children}</strong>
                    <span className='x-followCard-header-info-username'>@{username}</span>
                </div>
            </header>
            <aside className='x-followCard-aside'>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='x-followCard-aside-followText'>
                        {text}
                    </span>
                    <span className='x-followCard-aside-unfollow'>
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}