import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '@/components/Header'
import { getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]'

function signIn({providers}) {
  return (
    <>
    <Header />
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <img className='w-80' src='https://links.papareact.com/ocw' alt='' />
        <p className='font-xs italic'>
          This is not a REAL app, it is built for educational purpose only
        </p>

        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-blue-500 rounded-lg text-white'
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
    </>
  )
}

// // Server side Rendering
// export async function getServerSideProps() {
//     const providers = getProviders()
//     return {
//         props: {
//             providers
//         }
//     }
// }

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await getServerSession(req, res, authOptions)
    }
  }
}

export default signIn