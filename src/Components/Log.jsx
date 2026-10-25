import clsx from 'clsx'
import { useState } from 'react'
export default function Log() {
    const [forms, setForms] = useState({ name: '', email: '', password: '' })
    const [errors, setErrors] = useState({})
    const hand = () => {
        // i.preventDefault()
        setErrors({
            name:forms.name.trim() === '',
            email:forms.email.trim() === '',
            password:forms.password.trim() === ''
        })
    }
    return (
        <div className=" h-screen flex bg-red-500 justify-center items-center ">
            <div className="bg-blue-500 w-75 h-70 rounded-lg flex  justify-between items-center flex-col p-4 ">
                <h1 className="text-white text-xl font-bold capitalize">Login To Home</h1>
                <input className={clsx("bg-white p-2 rounded-md w-full outline-none ", errors.name && "border-2 border-red-500")}
                    type="text" placeholder="Name" value={forms.name} onChange={(e) => setForms({ ...forms, name: e.target.value })} />
                <input className={clsx("bg-white p-2 rounded-md w-full", errors.email && "border-2 border-red-500")}
                    type="email" placeholder="Email" value={forms.email} onChange={(e) => setForms({ ...forms, email: e.target.value })} />
                <input className={clsx("bg-white p-2 rounded-md w-full", errors.password && "border-2 border-red-500")}
                    type="password" placeholder="Password" value={forms.password} onChange={(e) => setForms({ ...forms, password: e.target.value })} />
                <input onClick={hand} className={clsx("bg-fuchsia-700 p-2 text-white w-full cursor-pointer")} type="submit" value={"Login"} />
            </div>
        </div>
    )
}
