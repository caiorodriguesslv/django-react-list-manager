import React from "react";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";

export default class UserLists extends React.Component {
    state = { lists: null, loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token c4e2d2699f214e8bf37bee201bd82ed294f513c7';

        var url = 'http://localhost:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading:false});
    }

    render()
    {
        const listsApi = this.state.lists ?? [];
        var token = '';
        if (token === '')
            return <LoginComponent/>
        else    
            return (
                <div>   
                    {listsApi.map(
                        list => <ListComponent key={list.id} listName={list.name} items= {list.item_set}/>)}
                </div>
            );
    }
}