import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='container d-flex justify-content-around text-light'>
                <p>© Dafydd Zephyr 2019</p>
                <a href='https://github.com/helloimdavidhaha' target='_blank' className='text-light'>Github</a>
                </div>
            </div>
        )
    }
}

export default Footer;