import styles from "./css/stickyCards.module.css";

const StickyCards = () => {
    const cards = [
        { id: 1, text: "First punch line", className: styles.one },
        { id: 2, text: "Second punch line", className: styles.two },
        { id: 3, text: "Third punch line", className: styles.three },
        { id: 4, text: "Fourth punch line", className: styles.four },
    ];

    return (
        <section className={styles.stickyCards_section}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Future is</h2>
                {cards.map((card) => (
                    <div key={card.id} className={`${styles.card} ${card.className}`}>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StickyCards;
