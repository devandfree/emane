import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Calendar, Clock, User, Share2, Check } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const post = blogPosts.find(p => p.id === Number(id));

  const handleShare = async () => {
    const shareData = {
      title: post?.title,
      text: post?.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Erreur de partage:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Erreur de copie:", err);
      }
    }
  };

  if (!post) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-6">Article non trouvé</h1>
        <Link to="/blog" className="text-white hover:underline">Retour au blog</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 min-h-screen bg-black"
    >
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="text-silver-500 hover:text-white transition-colors flex items-center text-sm font-bold uppercase tracking-widest mb-12">
          <ChevronRight size={16} className="rotate-180 mr-2" />
          Retour au blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center space-x-4 text-xs text-silver-500 font-bold uppercase tracking-widest mb-6">
            <span className="px-3 py-1 bg-white text-black rounded-sm">{post.category}</span>
            <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
            <span className="flex items-center"><Clock size={14} className="mr-1" /> {post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-silver-400/10">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-silver-800 rounded-full overflow-hidden mr-4 silver-border">
                <img 
                  src="https://www.hebergeur-image.com/upload/143.105.152.103-69ce8997cf15a.jpg" 
                  alt={post.author} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author}</div>
                <div className="text-xs text-silver-500">IT Business Analyst & BPM Engineer</div>
              </div>
            </div>
            <div className="relative">
              <button 
                onClick={handleShare}
                className="p-2 text-silver-400 hover:text-white transition-colors flex items-center space-x-2 group"
                title="Partager l'article"
              >
                <Share2 size={20} />
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Partager</span>
              </button>
              
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-sm whitespace-nowrap flex items-center"
                  >
                    <Check size={12} className="mr-1" /> Lien copié
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <div className="aspect-video rounded-sm overflow-hidden mb-12 silver-border">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="prose prose-invert prose-silver max-w-none 
            text-silver-300 leading-relaxed 
            [&>p]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-12 [&>h3]:mb-6
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2
            [&>strong]:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-20 pt-10 border-t border-silver-400/10">
          <div className="bg-silver-900/50 p-8 rounded-sm silver-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Vous avez un projet similaire ?</h4>
              <p className="text-silver-400 text-sm">Discutons de la manière dont je peux vous aider à optimiser vos processus.</p>
            </div>
            <Link to="/#contact" className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-silver-200 transition-all whitespace-nowrap">
              Me contacter
            </Link>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default BlogPost;
