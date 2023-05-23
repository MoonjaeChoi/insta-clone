import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker' // npm install --save-dev @faker-js/faker

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
  count: 5,
});

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    setSuggestions(USERS)
    console.log(USERS)
    console.log('suggestions')
    console.log(suggestions)

}, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
          <h3 className='text-sm font-bold text-gray-400'>
            Suggestions for you
          </h3>
          <button className='text-gray-600 font-semibold'>
            See All
          </button>
        </div>

        {
        USERS.map((profile) => (
          <div
            key={profile.id}
            className='flex items-center justify-between mt-3'
          >
            <img 
              className='w-10 h-10 rounded-full border p-[2px]'
              src={profile.avatar}
              alt='' 
            />

            <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-sm'>
                {profile.username}
              </h2>
              <h3 className='flex-xs text-gray-400'>
                Work at {profile.userId}
              </h3>
            </div>

            <button className='text-blue-400 text-sm'>Follow</button>
              
          </div>
        ))
        }
    </div>
  )
}

export default Suggestions