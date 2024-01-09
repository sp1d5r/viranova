import React from 'react';
import Cards from "../../assets/icons/Cards.svg";

export interface PrimaryButtonProps {
    className?: string;
    text?: string;
    icon?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className = '', text='Get Started', icon=Cards}) => (
   <button className={"flex px-[10px] py-[7px] md:px[30px] md:py-[15px]  bg-secondary border-white border rounded-[10px] justify-center items-center gap-3 inline-flex"}>
   {icon !== "" && <img src={icon} alt="icon" /> }
    <div className={"text-center text-white text-base font-normal font-['Inter']"}>{text}</div>
    </button>
);