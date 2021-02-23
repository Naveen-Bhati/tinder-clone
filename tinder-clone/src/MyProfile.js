import React from 'react'
import './MyProfile.css'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

function MyProfile() {
    function truncate(str,n){
        return str?.length > n? str.substr(0,n-1) + "...": str;
    }
    return (
        <div className='MyProfile'>
            <div className="Mymain">
                <img src='https://static.zerochan.net/Albus.Dumbledore.full.616027.jpg' alt=''/>
                <div className='main__name'>
                <h2 style={{fontFamily:'sans-serif',fontWeight:"Bold"}}>Dumbledore <span style={{fontFamily:'serif',fontWeight:"Bold"}}>150</span></h2>
                <div className="Mymain__location">
                < LocationSearchingIcon className='locationLogo' fontSize='small' />
                <h4 style={{color:'gray',marginLeft:'2px',fontWeight:'600'}}> Bali Island</h4>
                </div>
                </div>
                <hr style={{marginBottom:'10px'}} /> 
                <div className="Mymain__datails">
                    <p style={{color:'gray',marginLeft:'10px',marginRight:'15%',fontWeight:'400',paddingTop:'7px',lineHeight:'1.5',fontSize:'large'}}>{truncate('Albus Dumbledore is tall and thin, with silver hair and beard (auburn in his youth) so long that they can be tucked into his belt. He has a very long and crooked nose that looks as if it has been broken at least twice.Albus Dumbledore is tall and thin, with silver hair and beard (auburn in his youth) so long that they can be tucked into his belt. He has a very long and crooked nose that looks as if it has been broken at least twice.Albus Dumbledore is tall and thin, with silver hair and beard (auburn in his youth) so long that they can be tucked into his belt. He has a very long and crooked nose that looks as if it has been broken at least twice.Albus Dumbledore is tall and thin, with silver hair and beard (auburn in his youth) so long that they can be tucked into his belt. He has a very long and crooked nose that looks as if it has been broken at least twice.',500)}</p>
                </div>
                
                <div className="Mymain__buttonDiv">
                    <button type='submit' className='Mymain__button'>UNMATCH</button>
                    <button type='submit' className='Mymain__button'>REPORT</button>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default MyProfile
