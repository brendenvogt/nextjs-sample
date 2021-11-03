

function Static({ item }) {
    return (
        <div>
            <h1>{item.title}</h1>
        </div>
    )
}

// tells what paths are valid to generate server side
export async function getStaticPaths() {
    // fetch data
    // construct paths array of params
    return {
        paths: [
            {params: {id : '0'}},
            {params: {id : '1'}},
            {params: {id : '2'}}
        ],
        fallback: false
    }
}

// tells what data belongs inside each path
export async function getStaticProps({ params }) {
    // in this case we are making the same call for each path and returning just the single item from the array
    const req = await fetch("http://localhost:3000/api/hello2")
    const data = await req.json()
    return {
        props : {
            item : data[params.id]
        }
    }
}

export default Static