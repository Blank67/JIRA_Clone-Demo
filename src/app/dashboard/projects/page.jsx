"use client";

import "./page.scss";

export default function Projects() {
    return (
        <section className="">
            {Array.from(Array(100)).map((itm, i) => (
                <div key={i}>Projects Main Content {i + 1}</div>
            ))}
        </section>
    );
}
