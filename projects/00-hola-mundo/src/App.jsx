import { XFollowCard } from "./XFollowCard";

const users = [
    {
        username: 'exactense',
        name: 'recursé álgebra',
        isFollowing: true
    },
    {
        username: 'CB_ChinoBasico',
        name: 'chino básico',
        isFollowing: false
    },
    {
        username: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(({ username, name, isFollowing }) => (
                    <XFollowCard
                        key={username}
                        username={username}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </XFollowCard>
                ))
            }
        </section>
    );
}