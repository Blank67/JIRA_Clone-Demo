"use client";

import "./page.scss";

export default function Dashboard() {
    return (
        <section className="">
            {Array.from(Array(100)).map((itm, i) => (
                <div key={i}>Dashboard Main Content {i + 1}</div>
            ))}
        </section>
    );
}
