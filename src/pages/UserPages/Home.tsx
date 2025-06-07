
import { useDispatch, useSelector } from "react-redux";
import Note from "../../components/Note"
import { RootState } from "../../state/main";
import axios from "axios";
import { putNotes } from "../../state/Slices/productState";
import { useEffect } from "react";

export default function Home(){

    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function pullNotes() {
            try {
                const response = await axios.get('http://localhost:3000/note', {
                    headers: {
                        Authorization: 'bearer ' + localStorage.getItem('token'),
                    },
                });
                if (response.status === 200 && response.data.status === 200) {
                    dispatch(putNotes(response.data.data));
                }
            } catch (err) {
                console.log(err);
            }
        }
        pullNotes();
    }, []);



    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))]  w-[100%]  justify-items-center">
                {
                    products.map((ele,index)=><Note key={index} title={ele.title} content={ele.content} date={ele.createdAt} id={ele.id} />)
                }
            </div>
        </>
    )
}