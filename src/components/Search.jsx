import React, { useCallback, useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setInputState } from '../state_store/features/userInputSlice'
import { setUrl } from '../state_store/features/urlSelectSlice'


const Search = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  

  const input = useSelector(state => state?.userInput?.inputText)
  console.log(`search.jsx: input: ${input}`)
  
  const [isbrandbtn, setisbrandbtn] = useState(false)
  const [isgenericbtn, setisgenericbtn] = useState(false)
  const [isactivebtn, setisactivebtn] = useState(false)

  const getbrandurl =  useSelector((state)=>state.urlSlice.urls_url.brandUrl)
  const getgenericurl =  useSelector((state)=>state.urlSlice.urls_url.genericUrl)
  const getactiveurl =  useSelector((state)=>state.urlSlice.urls_url.activeUrl)
  const getsearchurl = useSelector(state => state.urlSlice.selected_url_value)

  console.log(getbrandurl)
  // const dispatchUrl = useCallback(
  //   () => {
  //     isbrandbtn && dispatch(setUrl(getbrandurl))
  //     isgenericbtn && dispatch(setUrl(getgenericurl))
  //     isactivebtn && dispatch(setUrl(getactiveurl))
  
  //     console.log(`brandbtn: ${isbrandbtn}`)
  //     console.log(`genericbtn: ${isgenericbtn}`)
  //     console.log(`activebtn: ${isactivebtn}`)
  //   }, [isbrandbtn, isgenericbtn, isactivebtn, getbrandurl, getgenericurl, getactiveurl, dispatch]
  // )

  useEffect(()=>{
    if (isbrandbtn || isgenericbtn || isactivebtn){
      isbrandbtn && dispatch(setUrl(getbrandurl))
      isgenericbtn && dispatch(setUrl(getgenericurl))
      isactivebtn && dispatch(setUrl(getactiveurl))
      navigate('/results')
    }
  }, [isbrandbtn, isgenericbtn, isactivebtn, navigate])

  console.log(`search url: ${getsearchurl}`)

  return (
    <section className='home-section'>

    <div className='banner-home'>
      <p id='w-name'>Know Your Med</p>
        <div className='info-text'>
            <p className='info-text-big'>Know Before Use</p>
            <div id='vline'>&nbsp;</div>
            <p className='info-text-small'>Find out more about your medicine</p>
        </div>

        <hr id='hr'/>
    </div>


<div className='search'>

    <input 
    type='text' 
    placeholder='type here to search'
    onChange={
      (e) => {
        let u_in = e.target.value
        dispatch(setInputState(u_in))
        console.log(input)
      }}
    />

    <div>{input}</div>

    <a><i className="fa-solid fa-magnifying-glass"></i></a>    
</div>

<div className='search-btns'>
  <h2>Search by</h2>
  
  <div className='btns'>
  <button onClick={
    () => {
      setisbrandbtn(true)
      setisgenericbtn(false)
      setisactivebtn(false)
    }
  }>brand name</button>
  <button onClick={
    () => {
      setisbrandbtn(false)
      setisgenericbtn(true)
      setisactivebtn(false)
    }
  }>Generic name</button>
  <button onClick={
    () => {
      setisbrandbtn(false)
      setisgenericbtn(false)
      setisactivebtn(true)
    }
  }>Active ingredient</button>
  </div>
</div>

  <div className='dev-info'>
    <h3>Important</h3>
    <p align='center'>For purposes of testing the application, use the following values for each button</p>
    <div id='para-s' align='center'>

      <p className='p-flex'>
        <b> Brand names</b> <span>Crestor, Advil, Coartem, Prozac</span>
      </p>
      <p className='p-flex'>
        <b> Generic names</b> <span>Alprazolam, Atorvastatin, Fluoxetine, ranitidine</span>
      </p>
      <p className='p-flex'>
        <b> Brand names</b> <span>Paracetamol, Aspirin, Loratadine, guaifenesin</span>
      </p>
    </div>
  </div>

    


    </section>
    
  )
}

export default Search