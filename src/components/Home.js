import React, { Component } from 'react'
import pic1 from '../assets/p1.png';
import './Home.css';

export default class Home extends Component {
    state = {
        post:'',
        posts:[],
        show: true
    }
    handleChange = (e)=>{
        this.setState({post:e.target.value})
    }

    _handleKeyDown = (e) => {
        alert('enter key pressed');
      }
    render() {
        return (
            <div className='container'>
                  <div className="input-group mb-3 jss58">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <img src={pic1} className='img-fluid' alt='bgnd'/></span>
                    </div>
                    <input type="text" className="form-control" 
                    placeholder="Whats new with YOU?" 
                     value={this.state.post}
                    aria-label="Username" aria-describedby="basic-addon1"
                    onKeyDown={this._handleKeyDown}
                    onChange={this.handleChange}/>
                    </div>
            </div>
        )
    }
}