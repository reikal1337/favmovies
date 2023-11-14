import { useState } from "react"
import { onlyLettersAndNumbers, passwordCheck } from "../helpers/validation"
import { register } from "../services/auth.service"

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [passwords, setPasswords] = useState({
        password: "'",
        repPassword: "",
    })

    
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const passCheck = passwordCheck(passwords.password, passwords.repPassword, username)
        if(passCheck === ""){
            const formToSend = {
                username: username,
                password: passwords.password,
            }
            const res = await register(formToSend)

            console.log("Fomr:", res)
        }else{
            setError(passCheck)
        }

       
    }
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        if(onlyLettersAndNumbers(e.target.value)){
            setUsername(() => e.target.value)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords(prevState => ({
            ...prevState,
             [e.target.name]: e.target.value
            }))
    }

  return (
    <form 
        className="flex flex-col justify-center text-black items-center bg-main p-5 px-7 rounded-xl"
        onSubmit={handleSubmit}>
                <label htmlFor="username" className="text-white font-medium mt-5 mb-1" >Vartotojo vardas:
                </label>
                <input 
                        className="rounded-md px-2 bg-gray-200 "
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Iveskite vartotojo var.."
                        maxLength={25}
                        minLength={4}
                        required
                        /> 

                <label htmlFor="password" className="text-white font-medium mt-5 mb-">Slpatazodis:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200"
                    type="password"
                    id="password"
                    name="password"
                    value={passwords.password}
                    onChange={handleChange} 
                    placeholder="Iveskite slaptazodi..."
                    maxLength={100}
                    minLength={6} 
                    required
                    />

                <label htmlFor="repPassword" className="text-white font-medium mt-5 mb-1">Pakartokite slaptazodi:
                </label>
                <input
                    className="rounded-md px-2 bg-gray-200 mb-5"
                    type="password"
                    id="repPassword"
                    name="repPassword"
                    value={passwords.repPassword}
                    onChange={handleChange} 
                    placeholder="Pakartokite slaptazodi..."
                    maxLength={100}
                    minLength={6} 
                    required
                    />
                
                
                <p className="text-red-600 text-sm text-center">{error}</p>
                <button 
                    type="submit"
                    disabled={loading}
                    className="text-white text-xl font-bold  hover:text-gray-400 duration-300 disabled:cursor-not-allowed disabled:text-gray-700"

                > 
                Registruoti</button>
            </form>
  )
}

export default RegisterForm