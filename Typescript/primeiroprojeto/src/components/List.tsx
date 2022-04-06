import { PeopleDTO } from "../models/PeopleDTO"

function List({people}:PeopleDTO) {
    return(
        <div>
            {people.map((person , ind)=>(
                <div key={ind}>
                    <h1>{person.nome}</h1>
                    <h1>{person.idade}</h1>
                    <h1>{person.url}</h1>
                    <h1>{person.note}</h1>
                    <h1>{person.note}</h1>
                </div>
            ))}
        </div>
    )

}

export default List;