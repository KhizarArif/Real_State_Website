import React from 'react'
import { styled } from 'styled-components'

const Companies = () => {
  return (
    <CompanyWrapper>
        <div className="paddings innerWidth flexCenter company-container">
            <img src="./prologis.png" alt="" />
            <img src="./tower.png" alt="" />
            <img src="./equinix.png" alt="" />
            <img src="./realty.png" alt="" /> 
        </div>
    </CompanyWrapper>
  )
}

export default Companies


const CompanyWrapper = styled.section`

    .company-container{
        justify-content: space-between;
        gap: 1rem;
    }

    .company-container img{
        width: 9rem;
    }

    @media (max-width: 640px){
        .company-container{
            justify-content: center;
        }
    }

`;