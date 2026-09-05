import DefaultProp2 from './DefaultProps2'


const DefaultComponent2 = ({name}) => {
    console.log
  return (
    <div>
        <h1>DefaultComponent2 : {name || "guest"}</h1>

    </div>
  )
}

export default DefaultComponent2