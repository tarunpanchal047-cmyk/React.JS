//! External CSS :  -----------
// -------------------
//^ 3. External CSS : in external css we have to create seprate CSS file with dot 
//^ css extention and then we have to import the css in over component.


import './Externalll.css'
const ExternalCSS = () => {
  return (
    <div>
      <h1 className='abc'>ExternalCSS</h1>
      <h1 id='xyz'>ExternalCSS 2</h1>
    </div>
  )
}

export default ExternalCSS