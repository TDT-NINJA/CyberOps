import { useImplants } from "../hooks/useImplants.tsx";
import { ImplantCard } from "../components/implant/ImplantCard.tsx";
import "./Implants.css";

function Implants() {
    const { state } = useImplants();
    const count = state.implants.length;

    return (
        <main className="implants_page">
            <header className="implants_page__header">
                <h1 className="implants_page__title">Implants</h1>
                <span className="implants_page__count">
                    {count.toString().padStart(2, "0")} unités
                </span>
            </header>

                {count === 0 ? (
                    <p className="implants_page__empty">
                        &gt; Aucun implant installé.
                    </p>
                ) : (
                    <section className="implants_page__grid">
                        {state.implants.map((implant) => (
                            <ImplantCard key={implant.id} implant={implant} />
                        ))}
                    </section>
                )}
        </main>
    );
}

export { Implants };