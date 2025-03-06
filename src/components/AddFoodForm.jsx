// Your code here

import React, { useState } from 'react'



function AddFoodForm(props) {

    const [nuevaComida, setNuevaComida] = useState({
        name: "",
        img: "",
        calories: 0,
        servings: 0
    })


    const rellenarValores = ((event) => {
        let name = event.target.name;
        console.log("Esto es event" + event)
        let clone = {...nuevaComida}
        clone[name] = event.target.value
        console.log("Esto es la nueva comida " + clone)
        setNuevaComida(clone)
    })

    const pulsarCrearComida = (event) => {
        event.preventDefault();

        const clone = [...props.allFood]
        clone.unshift(nuevaComida)
        props.setAllFood(clone)

        setNuevaComida({
            name: "",
            img: "",
            calories: 0,
            servings: 0
        })
    }



  return (
    <div>
        <form onSubmit={pulsarCrearComida}  style={{display: "flex", justifyContent: "center"}}>
            <div className='add-food'>
                <h2>Añadir Comida</h2>
                <label>Name: </label>
                <input type="text" onChange={rellenarValores} />
                <label>Image: </label>
                <input type="text" onChange={rellenarValores} />
                <label>Calories: </label>
                <input type="number" onChange={rellenarValores} />
                <label>Servings: </label>
                <input type="number" onChange={rellenarValores} />

                <button className="btnCSS" type="submit">Create</button>
            </div>
        </form>



    </div>
  )
}

export default AddFoodForm
