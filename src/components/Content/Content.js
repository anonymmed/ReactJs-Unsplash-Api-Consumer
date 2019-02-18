import React, { Component } from 'react';
import './content.css';
import { MDBFormInline, MDBIcon } from "mdbreact";
import axios from "axios";

class Content extends Component{
    state = {
        source : 'https://api.unsplash.com/search/',
        searchKeyword: 'users',
        accessKey : '5700a8c2bddd27ffc769f82c5971f1aa701bee987dbd5cce42e995ac94a459ab',
        secretKey : 'b2ff4e11bfa6034cedfc439572c5f505f5faca5f428ced18a2228c579a8719b6',
        users: [] ,
        userClicked : null,
        images: [],
        output : null,
        query: ''
    };
    search = (query) => {
        const {source, searchKeyword, accessKey}  = this.state;
        axios.get(source + searchKeyword + '?query=' +  query + '&per_page=30&client_id=' + accessKey).then((res) => {
            this.setState({users : res.data.results});
            },
            (error) => {
                console.log(error);
            }
        );
    };

    updateSearch = (event) => {
        const query = event.target.value;
        this.setState({query: query});
        if (query === '') {
            this.setState({users: []});
        } else {
            this.search(query);
        }
    };

    returnOutput = () => {
        if (this.state.query !== '') {
        const output = this.state.images.map((images) =>
             (
                <img key={images.id} alt={images.id} src={images.urls.thumb} className='displayed-images' />
            )
        );
        this.setState({output : output});
    }
    };
    viewImages = (user, event) => {
        event.preventDefault();
        this.setState({userClicked: true, images: user.photos}, () => this.returnOutput());
    };
    render() {
        return (
            <div className='row'>
                <div className='details col-md-12'>
                    <strong style={{color: 'red'}}>Usage: </strong> Search for any user by typing his username, and click on his profile to view his uploaded images.
                </div>

                <div className='col-md-4' style={{marginTop: '10px', marginBottom: '10px'}}>
                    <MDBFormInline className="md-form">
                        <MDBIcon icon="search" />
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={this.updateSearch} />
                        <ul className='user-list scroller'>
                            {this.state.users.map((user) =>
                                (<li  key={user.id} className='users scroller' onClick={(event) => this.viewImages(user, event)}>
                                    <img className='user-img' src={user.profile_image.large} alt={user.name} style={{borderRadius: '50%'}}/> <br /><br />
                                    <div className='username'>
                                        <span>Username: </span>{user.username}
                                    </div>
                                    <hr /><strong>{user.name}</strong>
                                    {user.bio != null ? (<p><span style={{color: 'cadetblue', fontSize: 'medium'}}>BIO</span><br />: {user.bio}</p>) : ('')}
                                   </li>)

                            )}
                        </ul>
                    </MDBFormInline>
            </div>
                <div className='col-md-8 images'>
                    <strong className='images-note'>
                        {this.state.userClicked === true ?
                            this.state.output !== null ? <div>Uploaded Images<br /> </div>: 'User have not uploaded any images'
                            : ''
                        }
                    </strong><br />
                    <div className='user-images'>
                        {this.state.searchKeyword !== '' ? this.state.output : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;