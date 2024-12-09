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
import React from 'react';

export default function Header(){
    const [open, setOpen] = React.useState(false);

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        }
    };

    return(
        <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Image 
                        src={'/logoFin-Photoroom.png'} 
                        alt="logo" 
                        width={50} 
                        height={50} 
                        className="transition-transform duration-300 hover:scale-110"
                    />
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button 
                            onClick={() => handleScroll("Company")}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                            О компании
                        </button>
                        <button 
                            onClick={() => handleScroll("Ability")}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                            Преимущества
                        </button>
                        <button 
                            onClick={() => handleScroll("Equip")}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                            Оборудование
                        </button>
                        <button 
                            onClick={() => handleScroll("Contacts")}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                            Контакты
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Меню</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-6">
                                <button 
                                    onClick={() => handleScroll("Company")}
                                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                                >
                                    О компании
                                </button>
                                <button 
                                    onClick={() => handleScroll("Ability")}
                                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                                >
                                    Преимущества
                                </button>
                                <button 
                                    onClick={() => handleScroll("Equip")}
                                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                                >
                                    Оборудование
                                </button>
                                <button 
                                    onClick={() => handleScroll("Contacts")}
                                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                                >
                                    Контакты
                                </button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}