import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

function SignIn({providers}) {
  return (
    <>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button onClick={() => SignIntoProvider(provider.id)}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </>
  )
}

// Server side Rendering
export async function getServerSideProps() {
    const providers = getProviders()

    return {
        props: {
            providers
        }
    }

}

export default SignIn