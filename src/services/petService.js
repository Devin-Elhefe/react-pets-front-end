const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

// Defining our HTTP requests
//----------
//Index request
// makes a http get request to /pets on express server
async function index() {
    try {
        const response = await fetch(BASE_URL)
        return response.json()
    } catch(err) {
        console.log(err)
    }
}

// CREATE Request
//makes an HTTP POST request to /pets on express server
async function create(formData){

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            // tell the server we are sending json
            headers: {
                'Content-Type': 'application/json'
            },
            // body of the request is the data we want to send to the server!
            body: JSON.stringify(formData) // packages up our formData into JSON
        })

        const data = await response.json()

        return data

    } catch (err) {
        console.log(err)
    }
}

export { index, create }