import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.pokemontcg.io/v1/cards',
            pokemons: [],
            name: '',
        }

    }
    componentDidMount() {
        axios.get(`https://api.pokemontcg.io/v1/cards`)
        .then(response =>{
            const pokemons =response.data.cards;
            this.setState({pokemons})
        })
    }
    render() {
        const { pokemons, name } = this.state;
        console.log(pokemons)
        return (
            <div className='row' >
                {pokemons.map(pokemon => (
                    <div className='col-md-3' key={pokemon.id}>
                        <img src={pokemon.imageUrl} alt='tutu'/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Gallery;