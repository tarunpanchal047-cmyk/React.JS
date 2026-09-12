//! Defult props : 
// -------------------------

//^ -->  Defult props are the predefine value that a react component uses when a specific props is
//^      not provided by the parent prop parent component . they act like backup values to insure the component
//^      still works properly even if no value are passed.


const DefaultProps1 = ({abc = "Guest"}) =>{
    return (
        <div>
            <h1>DefaultProps1</h1>
        </div>
      )
}

export default DefaultProps1