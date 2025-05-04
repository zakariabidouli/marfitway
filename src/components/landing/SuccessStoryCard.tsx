"use client";

import React from 'react';
import { Avatar, Text } from '@/once-ui/components';

interface SuccessStoryCardProps {
  image: string;
  name: string;
  achievement: string;
  goal?: string;
  method?: string;
  quote: string;
}

export default function SuccessStoryCard({ image, name, achievement, goal, method, quote }: SuccessStoryCardProps) {
  return (
    <div style={{
      width: 'full',
      position: 'relative',
      margin: '1rem',
      padding: '1rem',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      transform: 'scale(1)',
      transition: 'all 500ms',
      backgroundColor: '#1d1d1d'
    }}
    className="success-story-card"
    >
      {/* Base Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom right, rgba(188, 237, 9, 0.1), rgba(188, 237, 9, 0.05))'
      }} />
      
      {/* Glass Effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 252, 249, 0.03)',
        backdropFilter: 'blur(24px)'
      }} />
      
      {/* Border Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '1.5rem',
        border: '2px solid rgba(188, 237, 9, 0.1)',
        transition: 'all 500ms'
      }}
      className="border-glow"
      />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '1.5rem',
        boxShadow: '0 0 30px -5px rgba(0, 0, 0, 0.3)',
        transition: 'all 500ms'
      }}
      className="shadow-glow"
      />
      
      {/* Inner Shadow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '1.5rem',
        boxShadow: 'inset 0 0 20px -5px rgba(0, 0, 0, 0.3)'
      }} />
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <Avatar src={image} size="l" />
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '9999px',
              background: 'linear-gradient(to bottom right, rgba(188, 237, 9, 0.2), transparent)',
              opacity: 0,
              transition: 'opacity 500ms'
            }}
            className="avatar-glow"
            />
          </div>
          <div style={{
            marginLeft: '1rem'
          }}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#fffcf9',
              transition: 'color 500ms'
            }}
            className="name-text"
            >{name}</h4>
            <p style={{
              color: 'rgba(255, 252, 249, 0.6)',
              transition: 'color 500ms'
            }}
            className="achievement-text"
            >{achievement}</p>
            {goal && (
              <p style={{
                color: 'rgba(255, 252, 249, 0.6)',
                fontSize: '0.875rem',
                marginTop: '0.25rem',
                transition: 'color 500ms'
              }}
              className="goal-text"
              ><span style={{ color: '#BCED09' }}>Goal:</span> {goal}</p>
            )}
            {method && (
              <p style={{
                color: 'rgba(255, 252, 249, 0.6)',
                fontSize: '0.875rem',
                marginTop: '0.25rem',
                transition: 'color 500ms'
              }}
              className="method-text"
              ><span style={{ color: '#BCED09' }}>Method:</span> {method}</p>
            )}
          </div>
        </div>
        <Text variant="body-default-m" style={{
          color: 'rgba(255, 252, 249, 0.8)',
          fontStyle: 'italic',
          transition: 'color 500ms'
        }}
        className="quote-text"
        >
          "{quote}"
        </Text>
      </div>
      
      <style jsx>{`
        .success-story-card:hover {
          transform: scale(1.02);
        }
        .success-story-card:hover .border-glow {
          border-color: rgba(188, 237, 9, 0.3);
        }
        .success-story-card:hover .shadow-glow {
          box-shadow: 0 0 50px -10px rgba(188, 237, 9, 0.3);
        }
        .success-story-card:hover .avatar-glow {
          opacity: 1;
        }
        .success-story-card:hover .name-text {
          color: #bced09;
        }
        .success-story-card:hover .achievement-text,
        .success-story-card:hover .goal-text,
        .success-story-card:hover .method-text {
          color: rgba(255, 252, 249, 0.8);
        }
        .success-story-card:hover .quote-text {
          color: #fffcf9;
        }
      `}</style>
    </div>
  );
}