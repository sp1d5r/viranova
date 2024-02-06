import React, {MouseEvent, ReactNode} from "react";
import {NavigationBar} from "../components/navigation-bar/navigation-bar";

export interface ScrollableLayoutProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollableLayout({children, className=""}: ScrollableLayoutProps){
    return (<div className={className}>
        <NavigationBar />
        {children}
    </div>)
}