import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name :"Dummy",
                location :"Dummy"
            }
          }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/AkulaVishnuVardhanReddy');
        const json = await data.json();
        this.setState({
            userInfo:json
        })
    }
    render(){
        return(
            <div>
                <h1>Profile Vishnu Akula</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h1>{this.state.userInfo.name}</h1>
                <h2>{this.state.userInfo.bio}</h2>
            </div>
        )
    }
}

export default ProfileClass