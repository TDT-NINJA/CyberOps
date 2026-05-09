import {useImplants} from "../hooks/useImplants.tsx";

function Implants() {

    const { state } = useImplants();

    return (
        <>
            <div>Implants</div>
            <ul>
                {state.implants.map(implant => (
                    <li>{implant.name}</li>
                ))}
            </ul>
        </>
    )
}

export {Implants};