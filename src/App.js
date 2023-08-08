import './App.css';

function App() {
  return (
    <div className= 'products'>
      <form >
         <h2> Rate a Product</h2> <br></br>
         <h5 className="required1"> indicates required field.</h5> <br></br>
        <label className="required"> Product </label>
        <input type='text' id="product"></input> <br></br>
        <label className="required">  Purchase date </label>
        <input type="text" id="date" pattern="\d{2}/\d{2}/\d{4}" placeholder="mm/dd/yyyy"></input> <br></br>
        <label className="required"> Rating  </label>
        <input type='number' id="id" placeholder='4'></input> <br></br>
        <label className="comments"> Comments  </label>
        <textarea id="message" rows="4"></textarea> <br></br>
        <input type='submit' value='Submit Rating'></input> <br></br>
      </form>
    </div>
  )
}

export default App;
