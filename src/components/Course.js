
import React from 'react';
import { StarIcon } from '@heroicons/react/16/solid';
import html from "../img/html.jpg"
import python from "../img/python.jpg"
import dsa from "../img/dsa.jpg"
import webdev from "../img/webdev.jpg"
import ml from "../img/ml.jpg"
import dbms from "../img/dbms.jpg"
import cybersec from "../img/cybersec.jpg"
import gamedev from  "../img/gamedev.jpg"
import androidev from "../img/androidev.jpg"
import spring from "../img/spring.jpg"
import cloudcom from "../img/cloudcom.jpg"
import devops from "../img/devops.jpg"
import robotics from  "../img/robotics.jpg"
import blockandcrypt from  "../img/blockandcrypt.jpg"
import smedia from   "../img/smedia.jpg"



const courseImages = {
  html,
  python,
  dsa,
  webdev,
  ml,
  dbms,
  cybersec,
  gamedev,
  androidev,
  spring,
  cloudcom,
  devops,
  robotics,
  blockandcrypt,
  smedia,

};

function Course({ item }) {
  const imageUrl = courseImages[item.type]; 

  return (
    <div className="flex flex-col items-start space-y-1">
      <img src={imageUrl} alt="" className="h-32 w-full" />
      <h2 className="font-bold text-md pt-1">{item.title}</h2>
      <h3 className="text-xs text-gray-700">{item.username}</h3>
      <div className="flex space-x-1 items-center">
        <h3 className="text-yell font-bold text-sm">{item.vote}</h3>
        <div className="flex items-center">
          <StarIcon className="w-4 text-yellow-400" />
          <StarIcon className="w-4 text-yellow-400" />
          <StarIcon className="w-4 text-yellow-400" />
          <StarIcon className="w-4 text-yellow-400" />
          <StarIcon className="w-4 text-yellow-400" />
        </div>
      </div>
      <h3 className="text-xs">{item.students}</h3>
      <div className="flex space-x-4 items-center">
        <h3 className="text-black font-bold">{item.price}</h3>
        <h3 className="text-gray-800 text-sm line-through">{item.oldPrice}</h3>
      </div>
    </div>
  );
}

export default Course;