'use client'
import Image from "next/image";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
export default function Header(){
    const scrollToCompany = () => {
        const element = document.getElementById("Company");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // "smooth" для плавного скроллинга
        }
      };
      const scrollToAbil = () => {
        const element = document.getElementById("Ability");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // "smooth" для плавного скроллинга
        }
      };
    return(
        <div className="flex items-center justify-between">
            <Image src={'/logoFin-Photoroom.png'} alt="logo" width={50} height={50} className="ml-3"/>
            <div >О компании</div>
            <div>Преимущества</div>
            <div>Оборудование</div>
            <div>Контакты</div>
        </div>
    )
}