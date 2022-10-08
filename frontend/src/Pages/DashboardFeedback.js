import { useState } from 'react';
import '../Pages Css/Dashboard.css';

const DashboardFeedback = () =>{
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [station, setStation] = useState('');
    const [officer, setOfficer] = useState('');

    const getTotal = ()=>{
        return 10
    }
    const getCityTotal = ()=>{
        return 10
    }
    const getDistrictTotal = ()=>{
        return 10
    }
    const getStationTotal = ()=>{
        return 10
    }
    const getOfficerTotal = ()=>{
        return 10
    }

    return <>
        <div className='container'>
            <div className='title'>Feedbacks</div>
            <div>
                <div className='label'>Total Submissions</div>
                <div className='title'>{getTotal()}</div>
            </div>
            <div>
                <label htmlFor='city' className='label'>City</label>
                <input id="city" value={city} onChange={e=>setCity(e.target.value)} className="input" placeholder='Give the City Name'/>
            </div>
            <div>
                <label htmlFor='district' className='label'>District</label>
                <input id="district" value={district} onChange={e=>setDistrict(e.target.value)} className="input" placeholder='Give the District Name'/>
            </div>
            <div>
                <label htmlFor='station' className='label'>Station</label>
                <input id="station" value={station} onChange={e=>setStation(e.target.value)} className="input" placeholder='Give the Station Name'/>
            </div>
            <div>
                <label htmlFor='officer' className='label'>Officer</label>
                <input id="officer" value={officer} onChange={e=>setStation(e.target.value)} className="input" placeholder='Give the Station Name'/>
            </div>
        </div>
    </>
}

export default DashboardFeedback;