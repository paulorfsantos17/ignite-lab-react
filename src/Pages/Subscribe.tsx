import { gql, useMutation } from '@apollo/client'
import React, { useState , FormEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscribeMutation } from '../graphql/generated'



export default function Subscribe() {
  const navegate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscribe, { data, loading}]= useCreateSubscribeMutation()
  
  async function handleSubscribe(event: FormEvent)  {
    event.preventDefault()
      await createSubscribe({
      variables: {
        name, 
        email
      }
    })

    navegate('/event')
  }
  
  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20  mx-auto'>
        <div className='max-w-[640px]'>
          <Logo/>
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-500'>aplicação completa </strong>, do zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className='p-8 bg-gray-700 border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe}  className='flex  flex-col w-full'>
            <input 
              className='bg-gray-900 rounded px-5 h-14 my-2'
              type="text" 
              placeholder='Seu nome completo' 
              onChange={e => setName(e.target.value)}
            />
            <input 
              className='bg-gray-900 rounded px-5 h-14 my-2'
              type="text" 
              placeholder='Digite seu email'
              onChange={e => setEmail(e.target.value)}
              />

              <button
                className='mt-4 py-4 bg-green-500 uppercase rounded font-bold font-sm hover:bg-green-700 transition-colors disabled:opacity-50'
                disabled={loading}
                type='submit'>
                Garantir minha vaga
              </button>
          </form>
        </div>
      </div>
      <img src="src/assets/code-mockup.png" alt="code-mockup" className='mt-10' />
    </div>
  )
}
