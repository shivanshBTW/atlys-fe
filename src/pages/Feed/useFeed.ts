import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

// Sample post type
export interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface PostFormInput {
  content: string;
  format?: string;
}

// Function to reset the editor - will be passed from the component
export type ResetEditorFunction = () => void;

// Sample initial posts
const initialPosts: Post[] = [
  {
    id: '1',
    author: 'John Doe',
    content: 'Just joined Atlys! Excited to connect with everyone here.',
    timestamp: '2 hours ago',
    likes: 15,
  },
  {
    id: '2',
    author: 'Jane Smith',
    content: 'Working on a new project. Will share details soon!',
    timestamp: '5 hours ago',
    likes: 24,
  },
];

export const useFeed = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const { isAuthenticated, setShowAuthModal } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<PostFormInput>({
    defaultValues: {
      content: '',
    },
  });

  // Check authentication and show modal if needed
  const handleInteraction = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return false;
    }
    return true;
  };

  const [resetEditorFn, setResetEditorFn] =
    useState<ResetEditorFunction | null>(null);

  const onSubmit: SubmitHandler<PostFormInput> = (data) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    const { content } = data;

    if (content.trim() === '') return;

    const newPost: Post = {
      id: Date.now().toString(),
      author: 'You',
      content: content,
      timestamp: 'Just now',
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    reset();

    if (resetEditorFn) {
      resetEditorFn();
    }
  };

  const handleFeatureClick = () => {
    console.log('Feature not implemented yet');
    alert('Feature not implemented yet');
  };

  return {
    posts,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleInteraction,
    handleFeatureClick,
    setResetEditorFn,
    setValue,
  };
};
