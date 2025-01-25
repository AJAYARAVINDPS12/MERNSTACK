import { useContext } from "react"
import { ThemeProvider } from "../Hooks/Student"

const ExamResult = () => {
    const res = useContext(ThemeProvider)
    return (
        <div>
            {console.log(res)}
            <h3>Result is published your sgpa{res.sgpa} cgpa{res.cgpa}</h3>
        </div>
    )
}
export default ExamResult;