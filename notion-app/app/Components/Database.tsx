import {IconType} from "react-icons";
import React from "react";
import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai";
import {CgArrowsExpandLeft} from "react-icons/cg";
import {BsThreeDots} from "react-icons/bs";

interface DatabaseProps {
    views: {
        icon: IconType,
        viewTitle: string,
        href: string,
    }[],
    databaseIcon: IconType,
    databaseTitle: string,
    databaseItems:{
        coverURL: string,
        emoji: IconType,
        title: string,
        href: string,
    }[],
}

interface ViewProps {
    icon: IconType,
    viewTitle: string,
    href: string,
}

interface DatabaseItemProps {
    coverURL: string,
    emoji: IconType,
    title: string,
    href: string,
}

const View: React.FC<ViewProps> = (
    {icon: Icon, viewTitle, href}
) => {
    return (
        <div className={"view-container"}>
            <Icon size={14} className={"emoji-container"}/>
            <div className={"text-container"}>{viewTitle}</div>
        </div>
    );
}

const DatabaseItem: React.FC<DatabaseItemProps> = (
    {coverURL, emoji: Icon, title, href}
) => {
    return (
        <Link href={href} className={"database-item"}>
            <img src={coverURL} alt={""}/>
            <div className={"page-block-container"}>
                <Icon size={35} className={"emoji-container"}/>
                <div className={"text-container"}>{title}</div>
            </div>

        </Link>
    )
}

const Database: React.FC<DatabaseProps> = (
    {views, databaseTitle, databaseIcon: Icon,databaseItems}
) => {
    return (
        <>
            <div className={"flex"}>
                <div className="all-views-container">
                    {views.map((item) => (
                        <View icon={item.icon} viewTitle={item.viewTitle} href={item.href}/>
                    ))}
                </div>

                <p className={"text-container"}>Filter</p>
                <p className={"text-container"}>Sort</p>
                <AiOutlineSearch size={25}/>
                <CgArrowsExpandLeft size={25}/>
                <BsThreeDots size={25}/>
            </div>
            <div className={"flex"}>
                <Icon size={20} className={"icon-container"}/>
                <h1 className={"text-2xl font-bold"}>{databaseTitle}</h1>
            </div>
            <div className={"database-items-container"}>
                {databaseItems.map((item) => (
                    <DatabaseItem coverURL={item.coverURL} emoji={item.emoji} title={item.title} href={item.href}/>
                ))}
            </div>
        </>


    )
}

export default Database;