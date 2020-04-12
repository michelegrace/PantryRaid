import {useState} from 'react'
import {useRouter} from 'next/router'
import Emoji from 'a11y-react-emoji'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default ({action = '/recipes'}) => {
   const router = useRouter()
   const [query, setQuery] = useState('')

   const handleParam = setValue => e => setValue(e.target.value)

   const handleSubmit = preventDefault(() => {
     router.push({
       pathname: action,
       query: {q: [query]},
     })
   })

   const labelStyle = {
    color: '#B57F50',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize : '1.200rem',
    paddingBottom: '.25rem',
    paddingRight: '.5rem',
    display: 'block'
  }
  
  const inputStyle = {
    fontSize : '1.600rem',
    color: 'white',
    background: '#C2966F',
    borderRadius: '4px',
    border: 'none',
    padding: '10px 15px',
    width: '100%',
    maxWidth: '320px'
  }

  const formStyle = {
    marginTop: '2.5rem',
  }

   return (
     <div className="col flex-center" style={{marginTop: "2.5rem"}}>
      <Emoji style={{fontSize:"2.200rem"}} symbol="😋" label="face savoring food" />
        <form onSubmit={handleSubmit} >
        <label htmlFor="q" style={labelStyle}>Ingredients</label>
          <input
            type='text'
            style={inputStyle}
            name='q'
            value={query}
            onChange={handleParam(setQuery)}
            aria-label='Search'
          />
        </form>
     </div>

   )
}