

export default function Card_Tech({ title, icon }) {
    return (

        <div className="border-purple w-32 rounded-md shadow border-2 flex flex-col items-center px-2 py-4 gap-3">
            <h6>{title}</h6>

           <div className="">{icon}</div>
        </div>

    )
}