import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { rightImg, watchImg } from "../utils"
import Videocarousel from "./Videocarousel"

function Hightlight() {
    useGSAP(()=>{
        gsap.to(('#title'),{
           opacity: 1,
           y:0
        }),
        gsap.to((".link"),{
            opacity: 1,
            y:0,
            duration: 1,
            stagger:.25
        })
    })


  return (
    <section id="hightlight" className="w-screen overflow-hidden h-full common-padding bg-zinc">
        <div className="screen-max-width">
            <div className="mb-12 w-full items-center justify-between md:flex">
                <h1 id="title" className="section-heading">Get the hightlight</h1>
                <div className="flex flex-wrap item-center gap-5">
                    <p className="link flex items-center justify-center gap-2">
                         watch the film
                         <img src={watchImg} alt="" />
                    </p>
                    <p className="link flex items-center justify-center gap-2">
                         watch the event
                         <img src={rightImg} alt="" />
                    </p>
                </div>
            </div>
            <Videocarousel/>
        </div>
    </section>
  )
}

export default Hightlight