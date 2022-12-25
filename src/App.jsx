import React, { useState } from "react"
import "./index.css"
import { List } from "./List.jsx"

const Data = [
    {
        id: 1,
        name: "Bertie Yates",
        age: 29,
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
        id: 2,
        name: "Hester Hogan",
        age: 32,
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
        id: 3,
        name: "Larry Little",
        age: 36,
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
        id: 4,
        name: "Sean Walsh",
        age: 34,
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
        id: 5,
        name: "Lola Gardner",
        age: 29,
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
]

function App(props) {
    const [birthday, setBirthday] = useState(Data)

    function btnClear() {
        setBirthday([])
    }

    return (
        <>
            <main>
                <section className={"container"}>
                    <h3>{birthday.length} birthday today</h3>
                    <List people={birthday}/>
                    <button onClick={btnClear}>clear all</button>
                </section>
            </main>
        </>
    )
}

export default App