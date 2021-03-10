import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fas fa-gamepad"></i> <span>Jeux vidéo</span></li>
                <li className="hobby"><i className="fas fa-cookie-bite"></i> <span>Cuiniser</span></li>
                <li className="hobby"><i className="fas fa-globe-americas"></i> <span>Voyager</span></li>
                <li className="hobby"><i className="fas fa-book-reader"></i> <span>Lecture & écriture</span></li>
                <li className="hobby"><i className="fas fa-fist-raised"></i> <span>Self-défense</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;