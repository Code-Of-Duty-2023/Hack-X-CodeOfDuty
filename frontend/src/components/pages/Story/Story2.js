import { useState, useEffect } from 'react'
import axios from 'axios'
import './Story.css'
import { useNavigate } from 'react-router-dom'

const Story2 = () => {

    const navigate = useNavigate()
    const [stories, setStories] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:8000/event/helpanimal`)
            .then((res) => {
                setStories(res.data);
            }).catch((err) => {
                console.log(err);
            })
        
    }, [])

    return (

        <div className="ag-format-container">

            <div className="ag-courses_box">

                {stories.length && 
                    
                    stories.map((val) =>

                        <div key={val._id} className="ag-courses_item" style={{ backgroundImage: `url(${val.image})` }}>
                            <div className="ag-courses-item_link" >

                                <div className="ag-courses-item_title">
                                    <p> Event name: {val.name} </p>
                                    <p> Address: {val.address} </p>
                                    <p> Landmark: {val.landmark} </p>
                                    <p> Pincode: {val.pin} </p>
                                </div>

                                <div className="ag-courses-item_date-box">

                                    <span className="ag-courses-item_date">
                                        <button className='donatebutton' onClick={() => navigate('/payment')}>Donate</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Story2;