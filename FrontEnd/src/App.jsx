import Prompter from "./Prompter"
import Sidebar from "./SideBar"
import styles from "./App.module.css"

function App() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Prompter />
        </div>
    )
}

export default App
