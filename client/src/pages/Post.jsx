// src/pages/Post.jsx
import React, { Suspense, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { slug } = useParams();
  const post = useMemo(() => posts.find(p => p.slug === slug), [slug]);

  if (!post) return <Navigate to="/" replace />;

  if (post.type === "pdf") {
    return (
      <div className="w-full h-screen">
        <iframe
          title={post.title?.pt || post.title?.en || post.slug}
          src={post.src}
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  if (post.type === "external") {
    // redireciona para link externo
    window.location.href = post.href;
    return null;
  }

  if (post.type === "html") {
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
  }

  // type === "react": lazy import do componente
  const LazyComp = React.lazy(post.component);
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>A carregar…</div>}>
      <LazyComp />
    </Suspense>
  );
}
