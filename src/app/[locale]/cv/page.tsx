import { getDictionary } from '../dictionaries'
import type { Metadata } from "next"


export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.adrianocorbelinoii.com/cv',
        languages: {
            'en-US': 'https://www.adrianocorbelinoii.com/en-US/cv',
            'pt-BR': 'https://www.adrianocorbelinoii.com/pt-BR/cv',
        },
    },
}

type Params = {
    locale: "en-US" | "pt-BR",
}

export default async function Page({ params }: {
    params: Params
}) {
    const dict = await getDictionary(params.locale);
    const d = dict.cv;
    return (
        <section className="h-[85vh] lg:w-full lg:h-full lg:mt-4 flex flex-col gap-8">
            <div className="basis-1/12">
                <article className="prose prose-md max-w-none text-center w-full text-xl lg:text-3xl">
                    <p>{dict.cv.find1}<a className="link link-success" href={d.link1}>{dict.cv.find2}</a>{dict.cv.find3}<a className="link link-info" href={d.link2}>{dict.cv.find4}</a>{dict.cv.find5}</p>
                </article>
            </div>
            <div className="basis-11/12">
                <iframe src={`https://docs.google.com/gview?url=${d.link1}&embedded=true`}
                    className="w-full h-full" />
            </div>
        </section>
    )
}