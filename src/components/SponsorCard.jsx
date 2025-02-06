export default function SponsorCard({title, image}){
    return (
        <div className="flex flex-col justify-center items-center bg-custom">
            <h3 className="font-[Robot_Invaders] text-white text-4xl text-center mt-48">{title}</h3>
            <img src={image} className="mt-12 "/>
        </div>
    )
}