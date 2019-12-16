import React, {Component} from "react";
import citiesMock from "./../../utils/cities.json";
import City from "./../../components/City";
import "./Cities.css"

class Cities extends Component {

   state = {
        cities: []
   }

    updateCities = () => {
      this.setState({cities: citiesMock});
    }

    componentDidMount() {
        this.updateCities();
    }

    removeCityHandler = (cityParam) => {
        let filteredCities = this.state.cities.filter(city => 
            city.city !== cityParam.city ? true: false
            )
        this.setState({cities: [...filteredCities]});
    }

    render() {
        let cities = null;

        if(this.state.cities.length > 0) {
            cities = this.state.cities.map(city => (
                // <City city={city.city} key={city.city}/>

                <City {...city} removeCity={() => this.removeCityHandler(city)} key={city.city}/>
            ))
        }else {
            cities = <div className="no-data">No data available</div>
        }
        return (<div className="cities">
            {cities}
        </div>)
    }
    
    
    
}

export default Cities;