import React from "react";
import './LoginPage.scss'

export default function LoginPage() {
    return (
        <div className="loginPage__container">
            <div className="loginPage--form">
                <div>
                    <label>
                    使用者名稱：
                        <input type="text" name="username" />
                    </label>
                </div>
                <div> 
                    <label>
                    使用者密碼：
                        <input type="text" name="password" />
                    </label>
                </div>
            </div>
        </div>
    )
}