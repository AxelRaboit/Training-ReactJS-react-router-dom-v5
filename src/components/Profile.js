import React, { Component } from 'react';
import axios from 'axios';
import profileImage from '../images/profile/profile-image.png'

class Profile extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        const data = this.props.match.params.profileId;

        let payload = {
            token: "mpkLvOH5bpn9GU3VrBqKhA",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 10
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then((response) => {
          this.setState({
              data: response.data[data]
          })
        });
    }

    render() {

        const { email, name, phone } = this.state.data;

        return (
            <div className='container mt-3'>
                <h1>Profile</h1>
                <img  className='profile__image mt-5' src={profileImage} alt="profile image" />
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Nom:</strong> {name}</li>
                    <li className='list-group-item'><strong>Email:</strong> {email}</li>
                    <li className='list-group-item'><strong>Phone:</strong> {phone}</li>
                </ul>
            </div>
        )
    }
}

export default Profile;
