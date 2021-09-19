import React from "react";
import MyCarousel from "../Components/MyCarousel"
import axios from "axios";
import img from "../download.png"

const CardComponent = (props) => {
    const { cardData } = props;
    return (
        <div className="card-cover">
            <small>{cardData.id}</small> <br />
            <img src={cardData.thumbnailUrl} alt=""/>
            <h4>{cardData.title}</h4>
        </div>
    )
}
class Home extends React.Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')
        this.setState({
            data: data
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <React.Fragment>
                <MyCarousel />
                <div className="card-container">
                    {this.state.data.map((card, i) => {
                        return <CardComponent cardData={card} index={i}/>
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default Home