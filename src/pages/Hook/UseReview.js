import { useEffect, useState } from "react";
const UseReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://stormy-dusk-68089.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return [review, setReview]
}
export default UseReview