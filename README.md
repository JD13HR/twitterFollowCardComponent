# Twitter Follow Card Component 🦰

- A React component styled with CSS to resemble a card for following other users on Twitter, based on the React course by [@midudev](https://twitter.com/midudev).

## Preview

- https://drive.google.com/file/d/1ipT2j13xy47gnvf_86xDsqKQ6-yrwqPp/view?usp=drive_link
- https://drive.google.com/file/d/150kkdxb5VYb5gpWC-sqMcMoEqajDqc2x/view?usp=drive_link

## Installation

Clone the repository and install via npm:

```bash
- git clone https://github.com/JD13HR/twitterFollowCardComponent.git
- npm install
```
## Usage

```bash
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'jd13hr',
        name: 'Juan David Herrera RamÃ­rez',
        isFollowing: false
    },
]

export function App (){

    return(
        <div className='App'>
            {users.map( user =>{
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
```
## Props
- userName (string): The Twitter username you wish to follow.
- name (string): Full name of the Twitter account owner.
- isFollowing (bool): State that defines whether the Twitter account is followed or not.






