import React from 'react'
import moment from 'moment'

const Home = () => {
    const [dateNow, setDateNow] = React.useState(moment())
    const confDate = moment("2021-01-30")


    React.useEffect(() => {
        setTimeout(() => {
            setDateNow(moment())
        }, 1000)
    }, [dateNow])

    const duration = moment.duration(confDate.diff(dateNow));
    const days = duration.asDays();
    const hours = (days - parseInt(days)) * 24
    const minutes = (hours - parseInt(hours)) * 60

    return (
        <div className="container">
            <div className='d-flex justify-content-between align-items-center'>
                <div className=''>
                    <h2 className='font-weight-bold text-center theme-color'>.NET Conf Armenia 2021</h2>
                    <h3 className='mt-3 text-center'>January 30</h3>
                    <div className='d-flex mt-5 justify-content-center'>
                        <div className='text-center'>
                            <h2 className='theme-color'>{parseInt(days)}</h2>
                            <span>Days</span>
                        </div>
                        <div className='mx-4 text-center' >
                            <h2 className='theme-color'>{parseInt(hours)}</h2>
                            <span>Hours</span>
                        </div>
                        <div className='text-center'>
                            <h2 className='theme-color'>{parseInt(minutes)}</h2>
                            <span>Minutes</span>
                        </div>
                    </div>

                </div>

                <div>
                    <img src="data:image/png;base64,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"
                         alt=""/>
                </div>
            </div>


            <p className='font-weight-bold text-center mt-5 theme-color'>Text about conf</p>
        </div>
    )
}

export default Home
