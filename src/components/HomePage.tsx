"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Heading, Flex, Text, RevealFx, Column, Icon, Avatar } from "@/once-ui/components";
import { Posts } from "@/components/blog/Posts";
import SuccessStoryCard from "@/components/landing/SuccessStoryCard";
import { PricingCard } from "@/components/landing/PricingCard";
import { Mailchimp } from "@/components";
import { home, newsletter } from "@/app/resources/content";

export default function HomePage() {
  // Rating state and labels
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);
  
  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
  return (
    <div className="overflow-hidden bg-black min-h-screen w-screen" style={{
      width: "110%"
      
    }}>
      {/* Hero Section with Background Image */}
      <section className="relative" style={{ 
        backgroundImage: "url('images/landing.jpeg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        boxShadow: "inset 0 150px 150px -50px #1d1d1d, inset 161px -100px 200px -400px #BCED09, inset 150px 0 150px -50px #1d1d1d, inset -150px 0 150px -50px #1d1d1d",
        height: "43em",
        width: "100%",
        display: "flex",
        alignContent: "space-around",
        justifyContent: "space-around",
        borderRadius: "8px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
      
        
        {/* Content Overlay */}
        {/* drop shadow and blur */}
        <div className="absolute inset-0 z-20 flex items-center" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          // backgroundColor: "black",
          height: "100%",
          paddingTop: "12px",
          paddingLeft: "64px"

        }}>
        <div className="flex w-1/2justify-start pt-40">
          </div>
          <div className="max-w-4xl space-y-12 p-16">
            <div className="space-y-6">
              <RevealFx>
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight leading-[1.1] text-shadow-lg drop-shadow-xl text-white">
                  ACHIEVE YOUR{" "}
                  <span className=" inline-block bg-gradient-to-r from-[#BCED09] to-[#9ED805] bg-clip-text text-transparent" style={{ color: "#BCED09" }}>
                    BEST SELF
                  </span>
                </h1>
              </RevealFx>
            </div>
            <RevealFx delay={0.2}>
              <p className="text-3xl md:text-4xl xl:text-5xl text-white/90 leading-snug pt-12">
                Transform your body and <br/> life with personalized training programs <br/> and expert guidance.
              </p>
            </RevealFx>
            <div className="pt-80 w-full" style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexBasis: "22em",
              flexShrink: 0,
              

            }} >
              <RevealFx delay={0.4}>
                <Button
                  variant="outlined"
                  size="medium"   
                  sx={{
                    background: 'linear-gradient(90deg, #1d1d1d 0%, #2a2a2a 50%, #1d1d1d 100%)',
                    color: '#CFD8E6',
                    fontFamily: 'Inter',
                    fontPalette: 'dark',
                    padding: '12px 12px',
                    borderRadius: '24px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    border: '1px solid rgba(188, 237, 9, 0.3)',
                    transition: 'all 0.5s ease',
                    '&.MuiButton-root:hover': {
                      background: '#1d1d1d',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(188, 237, 9, 0.4)',
                      borderColor: '#bced09',
                      color: '#bced09'
                    }
                  }}
                >
                  Start Your Transformation
                </Button>
              </RevealFx>
            </div>
          </div>
        </div>
      </section>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "3rem",
            flexWrap: 'wrap',
            '& > :not(style)': {
              // m: 1,
              width: '24em' ,
              height: '12em',
            },
          }}
        >
          <Paper elevation={3} style={{
            borderRadius: "1rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            background: "transparent",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            color: "#fffcf9",
            position: "relative",
          }}>
            <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#bced09", marginBottom: "0.5rem" }}>92%</div>
            <div style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center", marginBottom: "0.5rem" }}>
              Higher success rate
            </div>
            <div style={{ fontSize: "0.875rem", color: "#fffcf9/80", textAlign: "center" }}>
              (vs. self-guided programs)
            </div>
          </Paper>
          
          <Paper elevation={3} style={{
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "transparent",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            alignItems: "center",
            color: "#fffcf9",
            position: "relative",
          }}>
            <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#bced09", marginBottom: "0.5rem" }}>65%</div>
            <div style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center", marginBottom: "0.5rem" }}>
              Higher profitability
            </div>
            <div style={{ fontSize: "0.875rem", color: "#fffcf9/80", textAlign: "center" }}>
              (ICF, HCI, 2019)
            </div>
          </Paper>
          
          <Paper elevation={5} style={{
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fffcf9",
            position: "relative",
            background: "transparent",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}>
            <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#bced09", marginBottom: "0.5rem" }}>85%</div>
            <div style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center", marginBottom: "0.5rem" }}>
              Higher customer satisfaction
            </div>
            <div style={{ fontSize: "0.875rem", color: "#fffcf9/80", textAlign: "center" }}>
              (ICF, 2019)
            </div>
          </Paper>
        </Box>

      {/* Success Stories Section */}
      <section className="py-24 bg-[#1d1d1d] w-screen flex justify-center items-center" >
        <div className="container mx-auto px-4">
          <div className="mb-16 w-full" style={{textAlign: "center"}}>
            <h2 className="text-5xl font-bold mb-6 text-white text-center text-shadow-lg drop-shadow-xl">Transformation Stories</h2>
            <p className="text-xl text-white/80">Real results from real people following our programs:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {home.success_stories.map((story, index) => (
              <SuccessStoryCard
                key={index}
                name={story.name}
                image={story.image}
                quote={story.quote}
                achievement={story.achievement}
                goal={story.goal}
                method={story.method}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 w-full" style={{textAlign: "center"}}>
            <h2 className="text-5xl font-bold mb-6 text-white">Choose Your Coaching Experience</h2>
            <p className="text-xl text-white/80">Whether you're all in or just getting started, we have a coaching tier designed for your goals and budget:</p>
          </div>

          <div 
          style={{ width: "100%" , display: "flex" , justifyContent: "center", gap: "16px", flexWrap: "wrap"}}>
            <div>
              <PricingCard
                title="Mid-Tier Coaching – 4999/3 Months"
                price="4999"
                description="Guided Coaching Package"
                icon="💪"
                features={[
                  "Fully personalized workouts & pre-designed meal plan (monthly updates)",
                  "Bi-weekly check-ins (voice/message)",
                  "App-based tracking",
                  "Money-back guarantee: Bonus: 2 extra weeks FREE for early results"
                ]}
                buttonText="Choose Plan"
              />
            </div>
            <div>
              <PricingCard
                title="High-Ticket Coaching – 15000/3 Months"
                price="15000"
                description="Premium Coaching Package"
                icon="🔥"
                features={[
                  "Fully personalized training & meal plans (updated monthly)",
                  "7 dynamic meal programs + shopping lists",
                  "Weekly 1:1 Zoom/Google Meet calls + 247 VIP support",
                  "App-based progress tracking",
                  "Advanced supplement & protocoal guidance",
                  "Double Guarantee: Results or your money back + free coaching until you win"
                ]}
                isPopular={true}
                buttonText="Get Started"
              />
            </div>
            <div>
              <PricingCard
                title="Low-Tier Coaching – One-Time"
                price="97"
                description="Self-Guided Package"
                icon="🟢"
                features={[
                  "Pre-designed training & meal guide (no updates)",
                  "App access for tracking",
                  "No support, coaching, or guarantees– fully self-guided"
                ]}
                buttonText="Get Access"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 bg-black " >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-white text-center text-shadow-lg drop-shadow-xl" style={{ width: "100%" , textAlign: "center"}}>
              Join our newsletter for exclusive offers and updates
            </h2> 
            <div className="p-4 rounded-2xl">
              <Mailchimp newsletter={newsletter} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
