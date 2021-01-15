import React from 'react'
import confData from '../confs.json'

const Agenda = () => {

    return (
        <div className=''>
            <h1 className='theme-color'>Agenda</h1>

            <div>
                <p>The event will start at 11:00 AM and will include:</p>
                <ul>
                    {confData.map(event => {
                        return <li key={event.startTime}>
                            <p>{event.startTime} - {event.topic}</p>
                        </li>
                    })}
                </ul>
            </div>
            <p className='theme-color'>Be careful for code challenge to win some prizes!</p>

            <div className='my-5'>
                <p>Here is detailed agenda</p>
                <div className="table-responsive">
                    <table className='table  table-hover table-bordered table-nowrap'>
                        <thead>
                        <tr>
                            <th className='theme-bg-color color-white'>
                                Start Time
                            </th>
                            <th className='theme-bg-color color-white'>
                                Topic
                            </th>
                            <th className='theme-bg-color color-white'>
                                Speakers
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            confData.map(event => {
                                return (
                                    <tr key={event.topic}>
                                        <td className='align-middle'>
                                            <p>{event.startTime}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p>{event.topic}</p>
                                        </td>
                                        <td className='align-middle'>
                                            {event.speakers.map(speaker => {
                                                return <p key={speaker}>{speaker}</p>
                                            })}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Agenda
