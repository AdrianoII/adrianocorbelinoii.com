import type { Metadata } from "next"


export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.adrianocorbelinoii.com/projects',
        languages: {
            'en-US': 'https://www.adrianocorbelinoii.com/en-US/projects',
            'pt-BR': 'https://www.adrianocorbelinoii.com/pt-BR/projects',
        },
    },
}

export default function Page() {
    return (
        <section className="w-full h-full mt-4 grid place-items-center">
            <article className="prose prose-2xl max-w-none text-center w-full">
                <h1>⚠️WIP⚠️</h1>
            </article>
        </section>
    )
}