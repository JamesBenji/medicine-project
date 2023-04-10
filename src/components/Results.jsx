import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { clear_Url } from '../state_store/features/urlSelectSlice'

const Results = () => {
  const dispatch = useDispatch()

  let errorObj
  const getsearchurl = useSelector(state => state.urlSlice.selected_url_value)
  const searchValue = useSelector((state) => state.userInput?.inputText)

  const searchUrl = `${getsearchurl}${searchValue}`// ✅

    const {data: searchData, isLoading, isError} = useQuery(
      ['dataQuery'],
      async () => {
        return await Axios.get(searchUrl)?.then(res => res?.data).catch(err => {
          errorObj = err
          console.log(errorObj)
        })
      },
    )

  const dataObj = searchData?.results?.[0]

    
    const propCheck= (prop) => {
      return dataObj?.hasOwnProperty(prop)
    }

    console.log(`Searched URL:> ${searchUrl}`)
    console.log(`data obj; ${dataObj}`)

    if(propCheck('openfda')){
      dispatch(clear_Url())
    }
  return (
    <div className='results-display'>

      <aside id='sidebar'>
        <h1 className='results-section-header' align='center'>Navigate</h1>
        <ul>
          <li><a 
          href='#basic'
          >Basic Information</a></li>
          <li><a 
          href='#use'
          >Usage information</a></li>
          <li><a 
          href='#warn'
          >Usage Warnings</a></li>
        </ul>
      </aside>


      
      <main id='results-main'>
        
        {
          searchData?.hasOwnProperty('results') ? 
          <section className='info-section' id='basic'>
            <h1 className='results-section-header'>{searchValue}</h1>
            <hr id='res-hr'/>
            <h2 >Basic Information</h2>
            
            {propCheck('spl_product_data_elements') && 
            <div><h3>Product data elements</h3>{dataObj?.spl_product_data_elements[0].split('.').map(txt => <p>{txt}</p>)}</div>              }
            
            
            {propCheck('openfda') && Object.keys(dataObj?.openfda || {}).length > 0 && (
              <div>
                <h3>Brand name</h3>
                {dataObj?.openfda?.brand_name?.[0]}
              </div>
            )}
          {propCheck('openfda') && 
           Object.keys(dataObj?.openfda || {}).length && <div><h3>Generic name</h3>{dataObj?.openfda?.generic_name[0]}</div>
          }

          {propCheck('openfda') && 
           Object.keys(dataObj?.openfda || {}).length && <div><h3>Manuacturer name</h3>{dataObj?.openfda?.manufacturer_name[0]}</div>
          }

          {propCheck('openfda') && 
           Object.keys(dataObj?.openfda || {}).length && <div><h3>Product type</h3>{dataObj?.openfda?.product_type[0]}</div>
          }

            {propCheck('description') && 
            <div><h3>Desription</h3>{dataObj?.description[0].split('.').map(txt => <p>{txt}</p>)}</div>
            }
            
            {propCheck('active_ingredient') && 
              <div>
                <h3>Active ingredient</h3>{dataObj?.active_ingredient[0]}
              </div>}
            
            {propCheck('indications_and_usage') && 
              <div id='use'><h3 >Indications and Usage</h3>{dataObj?.indications_and_usage[0].split('.').map(txt => <p>{txt}</p>)}</div>
              }

          {propCheck('storage_and_handling') && 
            <div><h3>Storage and Handling</h3>{dataObj?.storage_and_handling[0].split('.').map(txt => <p>{txt}</p>)}</div>
          }
          {propCheck('drug_interactions') && 
            <div><h3>Drug interactions</h3>{dataObj?.drug_interactions[0].split('.').map(txt => <p>{txt}</p>)}</div>
          }
          
          {propCheck('mechanism_of_action') && 
            <div><h3>Mechanism of action</h3>{dataObj?.mechanism_of_action[0].split('.').map(txt => <p>{txt}</p>)}</div>
          }
            
            {propCheck('warnings') && 
            <div id='warn'><h3 >Warnings</h3>{dataObj?.warnings[0].split('.').map(txt => <p>{txt}</p>)}</div>
            }
            {propCheck('warnings_and_cautions') && 
            <div id='warn'><h3 >Warnings</h3>{dataObj?.warnings_and_cautions[0].split('.').map(txt => <p>{txt}</p>)}</div>
            }
            
            {propCheck('spl_unclassified_section') && 
            <div><h3>Spl Unclassified</h3>{dataObj?.spl_unclassified_section[0].split('.').map(txt => <p>{txt}</p>)}</div>
          }
          
          
          

          </section> :
          <div className='error-section'>
            {
              isLoading ? <h3>Loading ...</h3>:<h3>No results</h3>
            }</div>
        
        
        }

        
      </main>



      
    </div>
  )
}

export default Results