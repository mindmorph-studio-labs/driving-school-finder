'use client';
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useXP } from '@/components/XPProvider';

export default function LikeButton({ slug }: { slug: string }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const { addXP } = useXP();

  useEffect(() => {
    setIsStudent(localStorage.getItem('userType') === 'student');
    const liked = localStorage.getItem(`liked_${slug}`);
    if (liked) setIsLiked(true);
  }, [slug]);

  const handleLike = () => {
    if (isLiked) return;
    
    // Attempt to add XP; XPProvider handles role enforcement
    addXP(3);
    
    // For feedback, check if they are a student
    if (isStudent) {
      setIsLiked(true);
      localStorage.setItem(`liked_${slug}`, 'true');
    } else {
        alert("Only students can earn XP by liking posts!");
    }
  };

  return (
    <button 
      onClick={handleLike}
      className={`p-3 rounded-full transition-colors ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-400'}`}
    >
      <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
    </button>
  );
}
