
import React from 'react';

const header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                 <h2 className="navbar-brand" to="/">Lets Grow More</h2>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 {/* Toggler for small screen Devices */}
                 <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </>
    );
};
 export default header;
