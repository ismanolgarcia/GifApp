import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Helvetica, Arial, sans-serif;
  background-color: rgb(234, 234, 234);
}

body {
  padding: 60px;
}

input {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(97, 32, 158);
  color: black;
  font-size: 1.2rem;
  outline: none;
  padding: 10px 15px;
  width: 100%;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 3rem;
  margin-bottom: 5px;
}

.card-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  align-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  height: 0%;  
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow: hidden;
}

.card p {
  background-color: white;
  flex: 1;
  font-size: 1.5rem;
  margin-top: 5px;
  padding: 5px 20px 0px 20px;
  text-align: center;
}

.card img {
  width: 100%;
} 

`;

export default GlobalStyle;
