// https://serene-bayou-41251.herokuapp.com/

const URL = window.location.hostname === `localhost`
            ? `http://localhost:8080`
            : `https://login-website-ta.herokuapp.com`
            
export { URL }