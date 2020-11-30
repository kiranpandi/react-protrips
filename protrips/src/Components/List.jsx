import React from 'react'
import '../Components/List.css'


export default class List extends React.Component {

    renderTrips = () => {
        const trips = this.props.trips;
        const mapRows = trips.map((trip, index) => (
            <tr key={index} className="table-content">
                <td>{trip.date}</td>
                <td>{trip.place}</td>
                <td>{trip.type}</td>
            </tr>
        ))
        return mapRows;
    }


    render() {
        let list = this.props.trips ? (
            <>

                <table >
                    <thead >
                        <tr >
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>

                    </thead>
                    <tbody >
                        {this.renderTrips()}
                    </tbody>
                </table>

            </>
        ) : (
                <>
                    No Trips Added
                </>
            );
        return (
            <div>
                { list}
            </div>
        )
    }
}