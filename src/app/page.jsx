"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/page.module.css";
const Index = () => {
  const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, []);

  const getPixels = () => {
    const pixelSize = winWidth * 0.05;
    const pixelCal = Math.ceil(window.innerHeight / pixelSize);
    return [...Array(pixelCal).keys()].map((_, index) => {
      return (
        <div onMouseEnter={(e) => {PixelEffect(e.target)}} key={index} className={style.pixel}></div>
      );
    });
  };

  const PixelEffect = (e) => {
    e.style.backgroundColor = "black";
    setTimeout(()=>{
      e.style.backgroundColor = "white";
    },400)
  }

  return (
    <>
      <main className={style.main}>
        <div className={style.phrase}>
          The code you write makes you a programmer. The code you delete makes
          you a good one. The code you don’t have to write makes you a great
          one.
        </div>
        <div className={style.Grid}>
          {winWidth > 0 &&
            [...Array(20).keys()].map((_, index) => {
              return (
                <div key={"b_" + index} className={style.Colums}>
                  {getPixels()}
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Index;
