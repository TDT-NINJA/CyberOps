import type { Implant } from "../../types/implants.ts";
import { useImplants } from "../../hooks/useImplants.tsx";
import "./ImplantCard.css";

export const ImplantCard = ({ implant }: { implant: Implant }) => {
    const { dispatch } = useImplants();

    return (
        <article className="implant_card__container">
            <header className="implant_card__header">
                <h1 className="implant_card__title">{implant.name}</h1>
                <span className="implant_card__rarity">{implant.rarity}</span>
            </header>

            <dl className="implant_card__info">
                <div className="implant_card__row">
                    <dt className="implant_card__label">Prix</dt>
                    <dd className="implant_card__value">{implant.cost}</dd>
                </div>
                <div className="implant_card__row">
                    <dt className="implant_card__label">Emplacement</dt>
                    <dd className="implant_card__value">{implant.slot}</dd>
                </div>
                <div className="implant_card__row">
                    <dt className="implant_card__label">CyberPsychose</dt>
                    <dd className="implant_card__value implant_card__value--accent">
                        {implant.energy}
                    </dd>
                </div>
                <div className="implant_card__row">
                    <dt className="implant_card__label">Constructeur</dt>
                    <dd className="implant_card__value">{implant.manufacturer}</dd>
                </div>
            </dl>

            <button
                className="implant_card__delete"
                onClick={() =>
                    dispatch({ type: "REMOVE_IMPLANT", payload: { id: implant.id } })
                }
            >
                Supprimer
            </button>
        </article>
    );
};