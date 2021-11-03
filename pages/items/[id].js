import { useRouter } from 'next/router'

function Item(props) {
    
    const router = useRouter();
    const { id } = router.query

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>The value is {id}</h2>
        </div>
    )
}


export async function getServerSideProps({ params }) {
    return {
        props: {
            title: "Hello " + params.id
        },
    };
}

export default Item