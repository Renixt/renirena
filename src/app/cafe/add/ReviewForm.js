export default function ReviewForm() {
  return (
    <div className='mt-5'>
      <hr className='mb-2 bg-gray-400'></hr>
      <div>
        <p>Nombre</p>
        <input className='add-input'></input>
      </div>

      <div>
        <p>Bebida / Alimento</p>
        <input className='add-input'></input>
      </div>
      <div>
        <p>Precio</p>
        <input className='add-input'></input>
      </div>

      <div>
        <p>Review</p>
        <textarea className='add-input'></textarea>
      </div>
    </div>
  )
}
