import React,{Component} from 'react';
import Sidebar from '../Utility/Sidebar';
import Footer from '../Utility/Footer';
import Header from '../Utility/Header';
import {Link,withRouter} from 'react-router-dom';

class Home extends Component{
    constructor(){
        super();
    }

    handleClick(){
        this.props.history.push('/company-list');
    }

    render(){
        return(
            <div className="main-container-wrapper">
                <div className="main-container-cover">
                    <div className="sidebar-left-container">
                        <Sidebar/>
                    </div>
                    <div className="component-right-container">
                        <div className="content-wrapper">
                            <div className="main-header-bar">
                                <Header taskName="Home" />
                                <div className="custom-breadcrumb">
                                    <Link to="/home">Home</Link>
                                </div>
                            </div>
                            <div className="custom-component">
                                <h1>Your component Here...</h1>
                                <button onClick={this.handleClick.bind(this)}>Click</button>
                              
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Home);