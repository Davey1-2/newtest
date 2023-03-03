import React, { useState } from "react";

const initialTeams = [
    { name: "Real Madrid", points: 72 },
    { name: "Barcelona", points: 68 },
    { name: "Atletico Madrid", points: 65 },
    { name: "Sevilla", points: 59 },
];

interface Team {
    name: string;
    points: number;
}

const TeamForm: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>(initialTeams);
    const [name, setName] = useState<string>("");
    const [points, setPoints] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTeam: Team = { name, points };
        setTeams([...teams, newTeam]);
        setName("");
        setPoints(0);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label>Points:</label>
                <input
                    type="number"
                    id="points"
                    value={points}
                    onChange={(event) => setPoints(Number(event.target.value))}
                />

                <button type="submit">Add team</button>
            </form>

            <h2>Teams:</h2>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>
                        {team.name} - {team.points} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamForm;
