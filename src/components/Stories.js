import { faker } from '@faker-js/faker' // npm install --save-dev @faker-js/faker
import { useEffect, useState } from 'react'
import Story from './Story';
import { useSession } from "next-auth/react"

export function createRandomUser() {
    return {
      userId: faker.number.int(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }
  }

 export const USERS = [] = faker.helpers.multiple(createRandomUser, {
    count: 20,
  });

function Stories() {
    const [suggestions, setSuggestions] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        // const users = [...Array(1)].map((_, i) => ({
        //     ...USERS,
        //     id: i,
        // }))

        setSuggestions(USERS)
        console.log(USERS)
        console.log('suggestions')
        console.log(suggestions)

    }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        {
          session && (
            <Story 
              key={session.user.userId}
              img={session.user.image}
              username={session.user.username} />
          )
        }

        {USERS?.map((profile) => {(
            <Story
              key={profile.userId}
              img={profile.avatar}
              username={profile.username}
            />
        )
        console.log(profile.userId)
        console.log(profile.avatar)
        console.log(profile.username)
      })
        }
    </div>
  )
}

export default Stories