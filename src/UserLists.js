import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component {
    state = { lists: null, loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token d124df7a2f1e8de87e8c36491195af4d044dffea';

        var url = 'http://localhost:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading:false});
    }

    render()
    {
        return (
            <div>
                <ListComponent listName={'Minha Lista'}/>
                <ListComponent listName={'Minha Lista 2'}/>
            </div>
        );
    }
}