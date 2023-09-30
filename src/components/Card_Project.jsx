

export default function Card_Project({ title, image, link }) {
    return (

        <div className=" w-1/2 text-xl font-semibold  rounded-md shadow flex flex-col items-center p-8 gap-3">
            <h6 className="text-purple">{title}</h6>

            <div className="pt-2 hover:opacity-50 ease-in">
                <a href={link}>

                    <img src={image} className="rounded-sm" alt="" />

                </a>
            </div>
        </div>

    )
}