import { faker } from '@faker-js/faker' // npm install --save-dev @faker-js/faker
import { useEffect, useState } from 'react'
import Story from './Story';

export function createRandomUser() {
    return {
      userId: faker.number.bigInt(),
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
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll'>
        {USERS?.map((profile) => (
            <Story
                key={profile.id}
                img={profile.avatar}
                username={profile.username}
                 />
        ))
        }
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
    </div>
  )
}

export default Stories