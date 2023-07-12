let myForm = document.querySelector('#myForm')
let dateInput = document.querySelector('#dateInput') 
let startTimeInput = document.querySelector('#startTime') 
let endTimeInput = document.querySelector('#endTime') 

myForm.addEventListener('submit',addToStorage)


async function addToStorage(e){
    e.preventDefault()
    try{
        console.log("INSIDE ADD TO STORAGE")
        const date = dateInput.value
        const startTime = startTimeInput.value
        const endTime = endTimeInput.value

        const obj  =  { date , startTime , endTime}
        console.log(obj)

        const response = await axios.post(`http://localhost:3000/addSlot`, obj)
        console.log(response)
        alert('Slot successfully Created')


        myForm.reset()

    }
    catch(error){
        console.log(error)
        alert('Slot Not Created !!!!!!!!')
        document.body.innerHTML = document.body.innerHTML + '<h4> Something Went Wrong </h4>'
    }
    

}

