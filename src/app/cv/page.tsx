export default function Page() {
    return (
        <section className="w-full h-full mt-4 flex flex-col gap-8">
            <article className="prose prose-md max-w-none text-center w-full text-3xl">
                <p>📃 You can find my CV below, but also <a className="link link-success" href="/Resume_EN.pdf">here</a> and <a className="link link-info" href="/Resume_EN.pdf">there</a>.</p>
            </article>
            <object data="/Resume_EN.pdf" type="application/pdf" width="100%" height="100%">
                <embed src="/Resume_EN.pdf" type="application/pdf" />
                <p>Unable to display PDF file. Please use links above.</p>
            </object>
        </section>
    )
}