import React, { useState, useEffect } from "react";
import MyCarousel from "../Components/MyCarousel"
import axios from "axios";
import img from "../download.png"
import { Card, Button } from "react-bootstrap"

const CardComponent = (props) => {
    const { cardData } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{cardData.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
// class Home extends React.Component {
//     state = {
//         data: [],
//         loading: true,
//     }

//     componentDidMount = async () => {
//         const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')
//         setTimeout(()=>this.setState({
//             data: data,
//             loading: false
//         }), 2500)
//     }
//     render() {
//         return (
//             <React.Fragment>
//                  <MyCarousel />
//                 <div className="card-container">
//                     {
//                         this.state.loading ? <div class="loader">Loading...</div> : this.state.data.slice(0, 100).map((card, i) => {
//                             return <CardComponent cardData={card} index={i} />
//                         })
//                     }
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const get_data = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setData(data);
            setIsLoading(false);
        }
        get_data()
    })

    return <>
        <MyCarousel />
        <div className="card-container">
            {isLoading ? <div class="loader">Loading...</div>
                : data.map((card, i) => {
                    return <CardComponent cardData={card} index={i} />
                })}
        </div>
    </>

}

export default Home