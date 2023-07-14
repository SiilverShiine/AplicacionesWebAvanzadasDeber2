import './Styles/styles.css'
import Database from "@/app/Components/Database";
import {FaTableCellsLarge} from "react-icons/fa6";
import {FaUniversity} from "react-icons/fa";
import React from "react";
import {BiCommentDetail} from "react-icons/bi";
import {HiOutlineClock} from "react-icons/hi";
import {FiStar} from "react-icons/fi";
import {BsFillTrash2Fill, BsPersonSquare, BsThreeDots} from "react-icons/bs";
import {AiFillPlusCircle, AiOutlineSearch} from "react-icons/ai";
import {RiSettings5Fill} from "react-icons/ri";
import SidebarButton from "@/app/Components/SidebarButton";
import PageBlockContainer from "@/app/Components/PageBlockContainer";
import {TbArrowBarToDown} from "react-icons/tb";

export default function Home() {

    const favoritePageBlocks = [
        {
            emojiPos: [54.2373, 62.7119],
            pageBlockTitle: "Horario",
        },
        {
            emojiPos: [49.1525, 33.8983],
            pageBlockTitle: "Actividades",
        },
    ]

    const privatePageBlocks = [
        {
            emojiPos: [49.1525, 28.8136],
            pageBlockTitle: "EPN Workspace",
        },
        {
            emojiPos: [11.8644, 57.6271],
            pageBlockTitle: "Universidad",
        },
        {
            emojiPos: [47.4576, 94.9153],
            pageBlockTitle: "Remove Due Date",
        },
        {
            emojiPos: [66.1017, 64.4068],
            pageBlockTitle: "Chatbot",
        },
    ]

    const databaseViews = [
        {
            icon: FaTableCellsLarge,
            viewTitle: "6to",
            href: "",
        },
        {
            icon: FaTableCellsLarge,
            viewTitle: "7mo",
            href: "",
        },
        {
            icon: FaTableCellsLarge,
            viewTitle: "8mo",
            href: "",
        },
        {
            icon: FaTableCellsLarge,
            viewTitle: "Todas las materias",
            href: "",
        },
    ]

    const databaseItems = [
        {
            coverURL: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Aplicaciones web avanzadas",
            href: "",
        },

    ]

    return (
        <main className="flex h-screen">
            {/*Barra lateral*/}
            <div className="sidebar">
                <div className={"switcher"}></div>

                <SidebarButton icon={AiOutlineSearch} viewTitle={"Search"}/>
                <SidebarButton icon={HiOutlineClock} viewTitle={"Updates"}/>
                <SidebarButton icon={RiSettings5Fill} viewTitle={"Settings & members"}/>
                <SidebarButton icon={AiFillPlusCircle} viewTitle={"New page"}/>


                <div className={"scroller"}>
                    <nav style={{display: "block"}}>
                        <PageBlockContainer blockTitle={"Favorites"} pageBlocks={favoritePageBlocks}/>
                        <PageBlockContainer blockTitle={"Private"} pageBlocks={privatePageBlocks}/>
                        <SidebarButton icon={BsPersonSquare} viewTitle={"Create a teamspace"}/>
                        <SidebarButton icon={AiOutlineSearch} viewTitle={"Templates"}/>
                        <SidebarButton icon={TbArrowBarToDown} viewTitle={"Import"}/>
                        <SidebarButton icon={BsFillTrash2Fill} viewTitle={"Trash"}/>
                    </nav>
                </div>
            </div>

            {/*Contenido de la página*/}
            <div className="workspace">
                {/*TODO: Cambiar la className por los adecuados*/}
                <div className={"top-bar flex-row"}>
                    <div className={"page-block-container"}>
                        <div className={"emoji-container"}>
                            <img className={"notion-emoji"}/>
                        </div>
                        <div className={"text-container"}>
                            EPN Workspace
                        </div>
                    </div>
                    <div className={"text-container"} style={{marginRight: "8px"}}>
                        Share
                    </div>
                    <div>
                        <BiCommentDetail className={"icon-container"} size={20}/>
                    </div>
                    <div>
                        <HiOutlineClock className={"icon-container"} size={20}/>
                    </div>
                    <div>
                        <FiStar className={"icon-container"} size={20}/>
                    </div>
                    <div>
                        <BsThreeDots size={18}/>
                    </div>
                </div>
                <div className={"page-content-container"}>
                    <div className={"cover-container flex-row"}>
                        <img src={"https://www.notion.so/images/page-cover/nasa_earth_grid.jpg"} alt={""}/>
                    </div>
                    <div className={"title-container z-10"}>
                        <div className={"page-icon-container"}>
                            <img alt="📚" aria-label="📚" className={"page-icon"}
                                 src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4da.svg"/>
                        </div>
                        <div role={"button"} className={"add-comment-container"}>
                            <div className={"add-comment"}>
                                Add comment
                            </div>
                        </div>

                        <div className={"text-[40px] font-bold h-12 leading-5 opacity-80"} style={{padding: "3px 2px"}}>
                            EPN Workspace
                        </div>
                        <div>
                            <Database
                                views={databaseViews}
                                databaseTitle={"Materias"}
                                databaseIcon={FaUniversity}
                                databaseItems={databaseItems}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
}
