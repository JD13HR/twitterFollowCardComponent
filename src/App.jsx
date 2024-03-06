import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'jd13hr',
        name: 'Juan David Herrera Ramírez',
        isFollowing: false
    },
]

export function App (){

    return(
        <div className='App'>
            {users.map((user)=>{
                const { userName, name, isFollowing } = user
                return(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })}
        </div>
    )
}