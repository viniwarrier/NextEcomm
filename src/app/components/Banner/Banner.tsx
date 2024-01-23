'use client'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default class Banner extends Component { 
	render() { 
		return ( 
			<div> 
			<h2>Great Discounts...come let's start shopping</h2> 
			<Carousel> 
				<div> 
					<img src="/images/banner1.webp" alt="image1"/> 
					<p className="legend">Image 1</p> 
				</div> 
				<div> 
					<img src="/images/banner2.webp" alt="image2" /> 
					<p className="legend">Image 2</p> 	
				</div> 
				<div> 
					<img src="/images/banner3.webp" alt="image2" /> 
					<p className="legend">Image 2</p> 
				</div> 
			</Carousel> 
			</div> 
		); 
	} 
};
