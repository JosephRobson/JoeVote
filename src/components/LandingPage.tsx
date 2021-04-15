import React from 'react'
import Button from 'react-bootstrap/Button'
import Joe from '../resources/joe200.png'

export const LandingPage: React.FC<{}> = () => {
    return (
        <div className="Landing-page-component">
            <img src={Joe} className="App-logo" alt="logo"/>
            <form action="/">
                <input type="text" id="pollName" name="pollName" placeholder="Poll name" />
                <Button variant="primary" type="submit">Start poll</Button>
                {/* <button type="submit" className="btn btn-primary">Start poll</button> */}
            </form>
        </div>
    );
};