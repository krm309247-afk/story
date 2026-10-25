
function Sala({ cart }) {
  console.log(cart)
  return (
    <div className="bg-red-500 min-h-screen flex flex-col justify-center items-center">
        {cart.map(({ id, }) => {
          return <div>
            <ul key={id}>
              
            </ul>
          </div>
      })}
    </div>
  )
}

export default Sala
