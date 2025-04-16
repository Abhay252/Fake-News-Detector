import { useState } from "react";
import styles from "./Prompter.module.css"
import { IoIosSearch } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

function Prompter() {
    const [chatHistory, setChatHistory] = useState([]);
    const [input, setInput] = useState("")

    function handleSubmit(e) {
        let inputData = { "userInput": input }
        e.preventDefault()
        console.log(input)
        console.log(inputData)
        setChatHistory([...chatHistory, inputData])
        console.log(chatHistory)
        setInput("")
    }

    return <div className={styles.container}>
        {chatHistory.length == 0 ? <div className={styles.caption}>Recognise Truth, Eliminate Fake</div> : chatHistory.map((msg) => <p>{msg.userInput}</p>)}
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.icon} onClick={handleSubmit}>
                    <IoIosSearch />
                </div>
                <input type="text" placeholder="Enter your text here...." onChange={(e) => setInput(e.target.value)} />
                <div className={styles.image}>
                    <div>
                        <CiImageOn />
                    </div>
                    <span>Image</span>
                </div>
            </form>
    </div>
}

export default Prompter