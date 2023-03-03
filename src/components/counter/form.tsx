
/* import React, {MouseEventHandler, SyntheticEvent, useState} from "react";

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        if (!agree) {
            setError("Musíš souhlasit s podmínkami");
            return;
        }

        if (password !== confirmPassword) {
            setError("Heslo a potvrzení hesla se neshodují");
            return;
        }

    };
    const handleReset = (event: MouseEventHandler<HTMLButtonElement>) => {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setGender("");
        setAgree(false);
        setError("");
        return;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Uživatelské jméno:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                Heslo:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <label>
                Potvrzení hesla:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </label>
            <br />
            <label>
                Pohlaví:
                <select value={gender} onChange={(event) => setGender(event.target.value)}>
                    <option value=""></option>
                    <option value="muž">Muž</option>
                    <option value="žena">Žena</option>
                </select>
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(event) => setAgree(event.target.checked)}
                />
                Souhlasím s podmínkami
            </label>
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Odeslat</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    );
}
export default Form;
 */
