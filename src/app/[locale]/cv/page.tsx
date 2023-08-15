import { getDictionary } from '../dictionaries'

type Params = {
    locale: "en-US" | "pt-BR",
}

export default async function Page({ params }: {
    params: Params
}) {
    const dict = await getDictionary(params.locale);
    const d = dict.cv;
    return (
        <section className="w-full h-full mt-4 flex flex-col gap-8">
            <article className="prose prose-md max-w-none text-center w-full text-3xl">
                <p>{dict.cv.find1}<a className="link link-success" href={d.link1}>{dict.cv.find2}</a>{dict.cv.find3}<a className="link link-info" href={d.link2}>{dict.cv.find4}</a>{dict.cv.find5}</p>
            </article>
            <object data={d.link1} type="application/pdf" width="100%" height="100%">
                <embed src={d.link1} type="application/pdf" />
                <p>{dict.cv.fallback}</p>
            </object>
        </section>
    )
}