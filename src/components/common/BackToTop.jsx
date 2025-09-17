// src/components/common/BackToTop.jsx
import React, { useState, useEffect } from 'react';

const BackToTop = ({
  showAfter = 300,
  position = 'bottom-right',
  size = 'md',
  variant = 'primary',
  shape = 'circle',
  showProgress = false,
  icon = 'chevron',
  customClass = '',
  onClick = null,
  smooth = true,
  duration = 500
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Theo dõi scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Hiển thị nút khi scroll qua showAfter pixels
      setIsVisible(scrolled > showAfter);
      
      // Tính progress percentage
      if (showProgress) {
        const progress = (scrolled / maxHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter, showProgress]);

  // Hàm scroll to top
  const scrollToTop = () => {
    if (onClick) {
      onClick();
    }

    if (smooth) {
      // Smooth scroll với easing
      const startPosition = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const ease = easeInOutQuad(timeElapsed, startPosition, -startPosition, duration);
        
        window.scrollTo(0, ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Get position styles
  const getPositionStyles = () => {
    const positions = {
      'bottom-right': { bottom: '20px', right: '20px' },
      'bottom-left': { bottom: '20px', left: '20px' },
      'bottom-center': { bottom: '20px', left: '50%', transform: 'translateX(-50%)' }
    };
    return positions[position] || positions['bottom-right'];
  };

  // Get size styles
  const getSizeStyles = () => {
    const sizes = {
      'sm': { width: '40px', height: '40px', fontSize: '14px' },
      'md': { width: '50px', height: '50px', fontSize: '16px' },
      'lg': { width: '60px', height: '60px', fontSize: '18px' }
    };
    return sizes[size] || sizes['md'];
  };

  // Get variant styles
  const getVariantStyles = () => {
    const variants = {
      'primary': {
        background: 'linear-gradient(45deg, #007bff, #0056b3)',
        color: 'white',
        border: '1px solid rgba(0, 123, 255, 0.5)',
        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)'
      },
      'secondary': {
        background: 'linear-gradient(45deg, #6c757d, #495057)',
        color: 'white',
        border: '1px solid rgba(108, 117, 125, 0.5)',
        boxShadow: '0 4px 12px rgba(108, 117, 125, 0.3)'
      },
      'dark': {
        background: 'linear-gradient(45deg, #343a40, #212529)',
        color: 'white',
        border: '1px solid rgba(52, 58, 64, 0.5)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
      },
      'gradient': {
        background: 'linear-gradient(45deg, #e83e8c, #fd7e14, #ffc107)',
        color: 'white',
        border: '1px solid rgba(232, 62, 140, 0.5)',
        boxShadow: '0 4px 12px rgba(232, 62, 140, 0.3)'
      },
      'glass': {
        background: 'rgba(255, 255, 255, 0.2)',
        color: '#333',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }
    };
    return variants[variant] || variants['primary'];
  };

  // Get shape styles
  const getShapeStyles = () => {
    const shapes = {
      'circle': { borderRadius: '50%' },
      'square': { borderRadius: '0' },
      'rounded': { borderRadius: '12px' }
    };
    return shapes[shape] || shapes['circle'];
  };

  // Get icon component
  const getIcon = () => {
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
    
    const icons = {
      'arrow': (
        <svg width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      'chevron': (
        <svg width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      'arrowUp': (
        <svg width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 11l5-5m0 0l5 5m-5-5v12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      'rocket': (
        <svg width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
        </svg>
      )
    };
    
    return icons[icon] || icons['chevron'];
  };

  // Progress circle component
  const ProgressCircle = () => {
    if (!showProgress) return null;
    
    const radius = size === 'sm' ? 18 : size === 'lg' ? 26 : 22;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;
    
    return (
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)'
        }}
        viewBox="0 0 56 56"
      >
        {/* Background circle */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        {/* Progress circle */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          opacity="0.8"
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.3s ease-out'
          }}
        />
      </svg>
    );
  };

  if (!isVisible) return null;

  const buttonStyles = {
    position: 'fixed',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)',
    outline: 'none',
    ...getPositionStyles(),
    ...getSizeStyles(),
    ...getVariantStyles(),
    ...getShapeStyles()
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyles}
      className={customClass}
      title="Back to Top"
    >
      {/* Progress Circle */}
      <ProgressCircle />
      
      {/* Icon */}
      <span 
        style={{
          position: 'relative',
          zIndex: 10,
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'translateY(-1px)' : 'translateY(0)'
        }}
      >
        {getIcon()}
      </span>
    </button>
  );
};

export default BackToTop;