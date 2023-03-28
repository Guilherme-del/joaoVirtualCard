import React, { useState } from "react";
import UserQR from "./userQRcode";
import styles from "../assets/styles/UserForm.module.css"

export default function UserForm() {
    const [isFormVisible, setIsFormVisible] = useState(true)
    const [userProfile, setUserProfile] = useState({
        name: '',
        profile: ''
    })

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            linkedin: event.target.linkedin.value,
            github: event.target.github.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://localhost:8001/api/user'
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSONdata
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        setIsFormVisible(false)
        setUserProfile({ 'name': data.name, 'profile': 'http://localhost:3000/' + result.profile })
    }

    return (
        <div id="formContent" className={styles.formContent}>
            {isFormVisible ? (
               <form className={styles.userForm} id="userForm" onSubmit={handleSubmit}>
               <div className={styles.formGroup}>
                   <label htmlFor="name">Name<input type="text" id="name" name="name" required /></label>
               </div>
               <div className={styles.formGroup}>
                   <label htmlFor="linkedin">LinkedIn URL<input type="text" id="linkedin" name="linkedin" required /></label>
               </div>
               <div className={styles.formGroup}>
                   <label htmlFor="github">GitHub URL<input type="text" id="github" name="github" required /></label>
               </div>
               <button type="submit">Generate QR Code</button>
           </form>         
            ) : (
                <>
                    <UserQR name={userProfile.name} profile={userProfile.profile} />
                </>
            )}
        </div>
    )
}